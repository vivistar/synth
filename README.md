# SaaS Synthetic Users Readiness Check

**Governance & Calibration Simulator for SaaS Product Managers**

> An interactive, AI-assisted governance tool that helps SaaS teams evaluate whether synthetic user research is appropriate for a given product decision — and how to run it safely.

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-blue.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Made by PRIME ISO Services](https://img.shields.io/badge/Made%20by-PRIME%20ISO%20Services%2C%20LLC-0f172a)](https://github.com/vivistar/synth)
[![Powered by Gemini](https://img.shields.io/badge/Powered%20by-Google%20Gemini%202.0-4285F4)](https://ai.google.dev/)

---

## What It Does

Synthetic AI users can accelerate SaaS research — but misused, they create feedback loops that distort product metrics, inflate conversion assumptions, and mislead stakeholders. This tool exists to prevent that.

It guides product managers through an **8-gate governance framework** that determines:

- Whether a given SaaS decision is safe to evaluate with synthetic users at all
- What baseline data is required to ground the simulation
- How to architect a realistic, bias-resistant synthetic persona prompt
- How to detect calibration drift and sycophancy in AI-generated interviews
- How to set compliance guardrails so synthetic data is never mistaken for real user research

### Four Modules

| Module | What it does |
|---|---|
| **Interactive Map** | Visual 8-step pipeline with a step inspector — click any gate to see its operational guide and lifecycle rationale |
| **Run Simulator** | Step-by-step wizard that walks your team through each governance checkpoint and produces a pass/warn/fail verdict |
| **AI Sandbox & Prompt Architect** | Generates a SaaS-specific synthetic persona system prompt, then lets you interview that persona live via Gemini |
| **Lifecycle Rationale** | Strategic matrix showing where synthetic users are and aren't appropriate across standard and agentic product lifecycles |

---

## Usage

**No installation required.** This is a fully static, single-file HTML application.

### Option 1 — Run directly in Google AI Studio (recommended)

Open `index.html` inside [Google AI Studio Canvas](https://aistudio.google.com/). The Gemini credential is supplied automatically — no API key setup needed.

### Option 2 — Open locally

```bash
git clone https://github.com/vivistar/synth.git
cd synth
# Then open index.html in any modern browser
open index.html
```

No build step. No `npm install`. No server required.

### Option 3 — Host statically

Drop `index.html`, `terms.html`, `privacy.html`, and `trust.html` onto any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Add your Gemini API key via the in-app settings field.

> **Important:** The Gemini canvas credential only works inside Google AI Studio. On a self-hosted domain, users must supply their own API key, or you must inject one at build time. See [Trust Center](trust.html) for key security guidance.

---

## API Key

The app works without any configuration inside AI Studio. For standalone use:

1. Get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Paste it into the **Optional Custom Key** field in the top banner
3. Click the 🛡 icon next to the field for security hardening instructions

The key is held only in browser memory and is never transmitted to PRIME ISO or any third party. See [Trust Center](trust.html) for full details.

---

## Attribution & License

This project is released under the **Creative Commons Attribution 4.0 International (CC BY 4.0)** license.

**You are free to:**
- Use, share, and adapt this tool for any purpose, including commercially

**You must:**
- Credit **PRIME ISO Services, LLC** as the original creator
- Keep the "A PRIME ISO Services, LLC product" notice visible in the footer
- Include a link back to this repository: `https://github.com/vivistar/synth`
- State clearly if you have modified the tool

See the full [LICENSE](LICENSE) file for details and the [Creative Commons deed](https://creativecommons.org/licenses/by/4.0/) for a human-readable summary.

---

## Legal & Trust

| Document | Purpose |
|---|---|
| [Terms of Service](terms.html) | Permitted/prohibited use, AI disclaimer, liability |
| [Privacy Policy](privacy.html) | No-collection posture, Gemini data flow, GDPR/CCPA |
| [Trust Center](trust.html) | Architecture, AI transparency, compliance posture, vulnerability disclosure |

---

## Contributing

Found a bug or want to improve the governance framework? Open an issue or pull request. All contributions must retain the CC BY 4.0 license and the PRIME ISO attribution.

---

*A **PRIME ISO Services, LLC** product — governance tooling for AI-assisted SaaS research.*
