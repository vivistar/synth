# Anchorflight skills for Claude Code

Three Agent Skills that let Claude apply the Anchorflight framework while you build:

| Skill | Use it when |
| --- | --- |
| [`anchorflight-triage`](anchorflight-triage/SKILL.md) | Building **continuously with AI** — decide synthetic-vs-human at each turn of the loop. |
| [`anchorflight-8gate`](anchorflight-8gate/SKILL.md) | Building in **defined stages** — run a decision through the 8-gate pipeline. |
| [`anchorflight-persona`](anchorflight-persona/SKILL.md) | Building or auditing a **synthetic persona** (Gate 5 + calibration/guardrails). |

Each skill folder contains a `SKILL.md` (the instructions Claude reads) and a bundled
`references.md` (the research basis).

## Install / share

A skill is just a folder. To use or share one:

- **Personal (all your projects):** copy the folder into `~/.claude/skills/`
- **A team/repo:** commit the folder under `<repo>/.claude/skills/` (as it is here)

Then Claude Code auto-discovers it — invoke by name (`/anchorflight-triage`) or let the
`description` trigger it automatically. To hand the whole framework to someone, share these
three folders; to share one workflow, send just that folder.

## Keeping references current

`references.md` in each skill is **generated** from the app's `references.html` (the single
source of truth). After changing `references.html`, regenerate the bundled copies:

```bash
node tools/skills/sync-references.js
```

Do not edit `references.md` by hand — it will be overwritten.
