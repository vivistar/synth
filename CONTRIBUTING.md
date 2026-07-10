# Contributing to Preflight

Thanks for your interest in Preflight, **The Preflight Check for Synthetic Users**. Contributions, forks, and adaptations are welcome under the [Apache-2.0](LICENSE) license.

## Ways to contribute

- **Report a bug or request a feature** by opening an issue.
- **Improve the app or docs** with a pull request.
- **Fork and adapt it** to your own stack. If you are building your own synthetic users, fork Preflight, change the gates and prompts, and self-host. Please retain the copyright notice, the `NOTICE` file, and a link back to this repository per Apache-2.0.

## Project layout

Preflight is a static, dependency-light app. There is **no build step**.

| Path | What it is |
|---|---|
| `index.html` | The entire app: all views, styles, and logic in one self-contained file |
| `api/ai.js` | A stateless serverless function that proxies AI calls to OpenRouter (keeps the API key server-side) |
| `landing.html` | Marketing landing page |
| `terms.html`, `privacy.html`, `trust.html`, `references.html` | Legal, trust, and reference pages |
| `docs/` | User guide and screenshots |

The app loads Tailwind (via CDN), lucide icons, and the Geist font at runtime, so an internet connection is needed the first time you open it.

## Running locally

```bash
git clone https://github.com/vivistar/synth.git
cd synth
open index.html    # or just double-click it
```

The interface loads with no server. AI features need a key: either paste your own OpenRouter key into the in-app key popover, or run behind the serverless proxy (set `OPENROUTER_API_KEY` on a Vercel deployment). See the [User Guide](docs/USER_GUIDE.md) for a full walkthrough.

## Making changes

Because it is a single file, most changes are direct edits to `index.html`. Before opening a PR, please:

1. **Keep the scripts valid.** The inline `<script>` blocks must parse. A quick check:
   ```bash
   node -e 'const h=require("fs").readFileSync("index.html","utf8");[...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m,i)=>{try{new Function(m[1])}catch(e){console.log("block",i,e.message)}});console.log("checked")'
   ```
2. **Keep the markup balanced.** `<div>` open/close counts should match:
   ```bash
   node -e 'const h=require("fs").readFileSync("index.html","utf8");console.log("delta",(h.match(/<div\b/g)||[]).length-(h.match(/<\/div>/g)||[]).length)'
   ```
3. **Preserve wired-up IDs.** Views switch by element `id`; keep existing IDs and handlers intact when restyling.

## Style conventions

- **Design system.** Use the existing `--pf-*` CSS variables and `pf-*` component classes (`pf-card`, `pf-btn`, `pf-pill`, `pf-mono`, `pf-display`). Semantic status colors (emerald / amber / rose) carry meaning, so leave them intact.
- **No em dashes** in copy. Use commas, colons, or parentheses.
- **Product name.** The name is "The Preflight Check for Synthetic Users." Do not put "SaaS" in the product name (domain-descriptive uses are fine).
- **No secrets.** Never commit real API keys. `.env` is git-ignored; keys belong in deployment environment variables.

## Pull requests

- Branch from `main`, make focused commits, and describe what changed and why.
- For UI changes, a before/after screenshot helps.
- By contributing, you agree your contributions are licensed under Apache-2.0.

## Security

Please do not open public issues for security vulnerabilities. See the [Trust Center](trust.html) for responsible disclosure guidance.
