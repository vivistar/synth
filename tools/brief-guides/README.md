# Brief guides generator

Generates the shareable Anchorflight one-pagers as **PDF + PNG** into [`docs/`](../../docs):

| Source | Output | What it is |
| --- | --- | --- |
| `loop-brief-guide.html` | `docs/anchorflight-method-guides-loop.{pdf,png}` | The continuous-AI loop + a short intro to the framework. |
| `method-brief-guide.html` | `docs/anchorflight-method-guides-reasoning.{pdf,png}` | How to run the loop by hand — why each stop exists, cited to the research. |
| `gate-overview-brief-guide.html` | `docs/anchorflight-8gate-overview.{pdf,png}` | The 8-gate framework at a glance, for teams building in defined stages. |
| `gate-pipeline-brief-guide.html` | `docs/anchorflight-8gate-pipeline.{pdf,png}` | How to run the 8-gate pipeline by hand — proceed/stop rule per gate, cited to the research. |

The brief guides are hand-authored HTML that mirror the app's palette (the `--pf-*`
tokens) and pull their content from `index.html` (the loop = `stepsData`; the 8 gates
= `stepsData` + the wizard's `wizardSteps`/`resultOutcomes`) and `references.html`
(the sources). If you change that copy in the app, update the matching guide here
and re-render so the downloads stay in sync.

## Regenerate

```bash
cd tools/brief-guides
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
