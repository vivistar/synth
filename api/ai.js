export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'OPENROUTER_API_KEY not configured' });
    }

    const { messages, model = 'google/gemini-2.0-flash-001', response_format } = req.body;
    if (!messages) {
        return res.status(400).json({ error: 'Missing messages' });
    }

    const body = { model, messages };
    if (response_format) body.response_format = response_format;

    try {
        const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
                'HTTP-Referer': 'https://github.com/vivistar/synth',
                'X-Title': 'Synth — Synthetic Users Governance Simulator',
            },
            body: JSON.stringify(body),
        });
        const data = await upstream.json();
        return res.status(upstream.status).json(data);
    } catch (err) {
        return res.status(502).json({ error: 'Upstream request failed', detail: err.message });
    }
}
