# Cheat sheet generator

Generates the shareable Anchorflight one-pagers as **PDF + PNG** into [`docs/`](../../docs):

| Source | Output | What it is |
| --- | --- | --- |
| `loop-cheatsheet.html` | `docs/anchorflight-method-guides-loop.{pdf,png}` | The continuous-AI loop + a short intro to the framework. |
| `method-cheatsheet.html` | `docs/anchorflight-method-guides-reasoning.{pdf,png}` | How to run the framework by hand — why each stop exists, cited to the research. |

The cheat sheets are hand-authored HTML that mirror the app's palette (the `--pf-*`
tokens) and pull their content from `index.html` (the loop) and `references.html`
(the sources). If you change that copy in the app, update the matching sheet here
and re-render so the downloads stay in sync.

## Regenerate

```bash
cd tools/cheatsheet
npm install playwright
npx playwright install chromium   # first time only
node render.js
```

If Chromium is already installed at a known path (e.g. a CI image), skip the
download and point at it instead:

```bash
CHROME_PATH=/path/to/chrome node render.js
```

Rendered assets are committed under `docs/` so the site can serve them directly;
`node_modules/` is not committed.
