# The Preflight Check for Synthetic Users

**Know when synthetic users help — and when they'll fool you.**

Built for product teams — PMs, designers, and researchers.

An interactive, AI-assisted 8-gate framework that helps SaaS product managers evaluate whether synthetic user research is appropriate for a given product decision — and how to run it safely.

© 2026 Terry M. Patterson — Licensed under [Apache-2.0](LICENSE)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Powered by OpenRouter](https://img.shields.io/badge/Powered%20by-OpenRouter-0f172a)](https://openrouter.ai/)

---

## What It Does

Synthetic AI users can accelerate product research — but misused, they create feedback loops that distort product metrics, inflate conversion assumptions, and mislead stakeholders. This tool exists to prevent that.

It guides product managers through an **8-gate governance framework** that determines:

- Whether a given SaaS decision is safe to evaluate with synthetic users at all
- What baseline data is required to ground the simulation
- How to architect a realistic, bias-resistant synthetic persona prompt
- How to detect calibration drift and sycophancy in AI-generated interviews
- How to set compliance guardrails so synthetic data is never mistaken for real user research

### Five Modules

| Module | What it does |
|---|---|
| **Interactive Map** | Visual 8-step pipeline with a step inspector — click any gate to see its operational guide and lifecycle rationale |
| **Run Simulator** | Step-by-step wizard that walks your team through each governance checkpoint and produces a pass/warn/fail verdict |
| **AI Sandbox & Prompt Architect** | Generates a SaaS-specific synthetic persona system prompt, then lets you interview that persona live |
| **Usability Tester** | AI-assisted interface evaluation using synthetic user perspectives, with support for screenshot/image analysis |
| **Lifecycle Rationale** | Strategic matrix showing where synthetic users are and aren't appropriate across standard and agentic product lifecycles |

---

## Usage

**No installation required.** This is a fully static, single-file HTML application.

### Option 1 — Open locally

```bash
git clone https://github.com/vivistar/synth.git
cd synth
open index.html
```

No build step. No `npm install`. No server required.

### Option 2 — Host statically

Deploy `index.html` and the supporting HTML files (`terms.html`, `privacy.html`, `trust.html`, `references.html`) to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

Set the `OPENROUTER_API_KEY` environment variable in your Vercel project settings to enable the server-side AI proxy. Users may also supply their own OpenRouter API key via the in-app settings field.

---

## API Key

For Vercel-hosted deployments, set `OPENROUTER_API_KEY` in your project environment variables. For standalone/local use:

1. Get an API key at [openrouter.ai](https://openrouter.ai/)
2. Paste it into the **Optional Custom Key** field in the app
3. The key is held only in browser memory and is never transmitted to any third party

See the [Trust Center](trust.html) for full key security guidance.

---

## License & Attribution

Copyright 2026 Terry M. Patterson

Licensed under the **Apache License, Version 2.0**. See the [LICENSE](LICENSE) file for the full license text, or visit https://www.apache.org/licenses/LICENSE-2.0.

Maintained by Terry M. Patterson ([@vivistar](https://github.com/vivistar))

---

## Legal & Trust

| Document | Purpose |
|---|---|
| [Terms of Service](terms.html) | Permitted/prohibited use, AI disclaimer, liability |
| [Privacy Policy](privacy.html) | No-collection posture, OpenRouter data flow, GDPR/CCPA |
| [Trust Center](trust.html) | Architecture, AI transparency, compliance posture, vulnerability disclosure |
| [References](references.html) | Literature basis for the governance framework |
