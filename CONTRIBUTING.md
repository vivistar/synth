# Contributing to Anchorflight

Thanks for your interest in Anchorflight, **The Anchorflight Check for Synthetic Users**. It is open source under the [Apache-2.0](LICENSE) license, and you are encouraged to **fork it and make it your own**.

## How this project accepts contributions

Anchorflight is maintained solo, and **direct code contributions are not open right now.** Pull requests from outside collaborators are generally not merged. This keeps the project focused and lets the maintainer steward its direction.

That does not mean you can't build on it. Here is what you *can* do:

- **Fork and adapt it (encouraged).** This is the intended path. Fork the repo, change the gates, prompts, and copy to fit your own stack, and self-host your own version. Under Apache-2.0 you are free to use, modify, and redistribute it; please retain the copyright notice, the `NOTICE` file, and a link back to this repository.
- **Report bugs and share ideas.** Open an issue, or start a thread in [Discussions](https://github.com/vivistar/synth/discussions). Feedback is very welcome even though code PRs are not open.
- **Want to partner?** If you would like to collaborate or contribute directly, reach out through [Discussions](https://github.com/vivistar/synth/discussions) first. Direct contributions happen by invitation.

## Project layout

Anchorflight is a static, dependency-light app. There is **no build step**.

| Path | What it is |
|---|---|
| `index.html` | The entire app: all views, styles, and logic in one self-contained file |
| `api/ai.js` | A stateless serverless function that proxies AI calls to OpenRouter (keeps the API key server-side) |
| `landing.html` | Marketing landing page |
| `terms.html`, `privacy.html`, `trust.html`, `references.html` | Legal, trust, and reference pages |
| `docs/` | User guide and screenshots |

The app loads Tailwind (via CDN), lucide icons, and the Geist font at runtime, so an internet connection is needed the first time you open it.

## Running your fork locally

```bash
git clone https://github.com/<your-username>/synth.git
cd synth
open index.html    # or just double-click it
```

The interface loads with no server. AI features need a key: either paste your own OpenRouter key into the in-app key popover, or run behind the serverless proxy (set `OPENROUTER_API_KEY` on a Vercel deployment). See the [User Guide](docs/USER_GUIDE.md) for a full walkthrough.

## If you are adapting your fork

Because it is a single file, most changes are direct edits to `index.html`. A couple of quick self-checks keep it healthy:

1. **Keep the scripts valid** (inline `<script>` blocks must parse):
   ```bash
   node -e 'const h=require("fs").readFileSync("index.html","utf8");[...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((m,i)=>{try{new Function(m[1])}catch(e){console.log("block",i,e.message)}});console.log("checked")'
   ```
2. **Keep the markup balanced** (`<div>` open/close counts should match):
   ```bash
   node -e 'const h=require("fs").readFileSync("index.html","utf8");console.log("delta",(h.match(/<div\b/g)||[]).length-(h.match(/<\/div>/g)||[]).length)'
   ```
3. **Preserve wired-up IDs.** Views switch by element `id`; keep existing IDs and handlers intact when restyling.
4. **No secrets.** Never commit real API keys. `.env` is git-ignored; keys belong in deployment environment variables.

## Security

Please do not open public issues for security vulnerabilities. See the [Trust Center](trust.html) for responsible disclosure guidance.
