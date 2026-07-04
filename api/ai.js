// SPDX-License-Identifier: Apache-2.0
//
// Copyright 2026 Terry M. Patterson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const https = require('https');

module.exports = async function handler(req, res) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const adminUnlock = process.env.ADMIN_UNLOCK;              // optional admin gate
    const provided = req.headers['x-admin-unlock'];

    // Health check (no secrets): lets the client show key status without making a call.
    if (req.method === 'GET') {
        return res.status(200).json({
            keyConfigured: !!apiKey,
            adminGated: !!adminUnlock,
            adminValid: !!adminUnlock && provided === adminUnlock,
        });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    if (!apiKey) {
        console.error('[ai] OPENROUTER_API_KEY is not set');
        return res.status(500).json({ error: 'no_key', message: 'No shared API key is configured on this deployment.' });
    }

    // When an admin gate is configured, the wired key is usable ONLY with a valid unlock code.
    // If ADMIN_UNLOCK is unset, the shared key stays open to all (prior behavior).
    if (adminUnlock && provided !== adminUnlock) {
        return res.status(401).json({ error: 'admin_unlock_required', message: 'This deployment requires your own OpenRouter key.' });
    }

    const { messages, model = 'openai/gpt-4o-mini', response_format } = req.body;
    if (!messages) {
        return res.status(400).json({ error: 'Missing messages' });
    }

    const body = JSON.stringify(
        response_format ? { model, messages, response_format } : { model, messages }
    );

    console.log('[ai] Sending to OpenRouter, model:', model, 'messages:', messages.length);

    return new Promise((resolve) => {
        const options = {
            hostname: 'openrouter.ai',
            path: '/api/v1/chat/completions',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(body),
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'https://github.com/vivistar/synth',
                'X-Title': 'Preflight',
            },
        };

        const request = https.request(options, (upstream) => {
            let data = '';
            upstream.on('data', (chunk) => { data += chunk; });
            upstream.on('end', () => {
                console.log('[ai] OpenRouter status:', upstream.statusCode, 'body:', data.slice(0, 300));
                try {
                    res.status(upstream.statusCode).json(JSON.parse(data));
                } catch (e) {
                    console.error('[ai] JSON parse error:', e.message, 'raw:', data.slice(0, 300));
                    res.status(502).json({ error: 'Invalid JSON from upstream', detail: data.slice(0, 500) });
                }
                resolve();
            });
        });

        request.on('error', (err) => {
            console.error('[ai] HTTPS request error:', err.message);
            res.status(502).json({ error: 'Upstream request failed', detail: err.message });
            resolve();
        });

        request.write(body);
        request.end();
    });
};
