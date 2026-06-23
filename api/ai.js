const https = require('https');

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        console.error('[ai] OPENROUTER_API_KEY is not set');
        return res.status(500).json({ error: 'OPENROUTER_API_KEY not configured' });
    }

    const { messages, model = 'google/gemini-2.0-flash-exp:free', response_format } = req.body;
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
                'X-Title': 'Synth — Synthetic Users Governance Simulator',
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
