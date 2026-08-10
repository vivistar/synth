---
name: anchorflight-8gate
description: Use when building in defined stages (discovery, design, build, QA) with handoffs and reviews, to run a product decision through the Anchorflight 8-gate pipeline before trusting synthetic (AI-generated) users. At each gate it tells you whether to proceed or route the work to real humans. Trigger on questions like "is this ready for synthetic testing?", "which gate are we failing?", or "can synthetic users answer this staged decision?"
---

# Anchorflight — the 8-gate pipeline

For teams that work in phases with handoffs, the 8-gate framework is a **sequential
checklist**: run each decision through the gates in order before you trust a synthetic-user
result. At each gate ask the question — a **"no" routes you out to real people** instead of
letting an ungrounded synthetic run drive the decision. Answer all eight "yes" and you've
earned a synthetic pass, still confirmed by humans at the ship point. See `references.md`
for the sources.

## The gates (ask in order; a "no" is where you stop)

| # | Ask | On "no" → route to |
| --- | --- | --- |
| 1 | Do you have a clear, documented decision target? | **Define the decision first** — scope it to one answerable question. |
| 2 | Is it low-to-medium risk and reversible? | **Reframe** into smaller, reversible releases. |
| 3 | Is it a structured interaction / pricing-logic check (not open discovery)? | **Human discovery first** — synthetics can't find net-new needs. |
| 4 | Do you have live customer data to ground it? | **Real customers only** — ungrounded synthetics hallucinate. |
| 5 | Is the persona specific (role, rights, budget, expertise)? | **Recalibrate** — there is no testable scope until the persona is concrete and bounded. |
| 6 | Does the agent replicate a known past result (drift ≤ 15%)? | **Recalibrate** — tighten prompts and re-test. |
| 7 | Is a human + synthetic check-loop in place? | **Real customers only** — a closed loop never disagrees with you. |
| 8 | Are compliance tags and drift reviews defined? | **Brainstorm only** — untagged output isn't decision-grade. |

## Two gates are hard stops for humans

**Gate 4 (no real data)** and **Gate 7 (no human loop)** both route to *real customers only*.
Grounding and human validation are the anchor; without either, a synthetic pass is just
confident fiction.

## Gate 5 — persona is canonical; scope follows from it

Gate 5 defines the persona: role, permissions, seat/budget limits, and expertise. **Scope is
downstream** — there is no testable scope until a concrete persona exists. Generic template
prompts produce generic, untestable output; define the persona first and let a bounded,
single-session interaction fall out of it. (Use the `anchorflight-persona` skill for this.)

## How a "no" routes you (colour taxonomy)

- **Amber — reframe / scope down** (gates 1–2)
- **Rose — stop, go to real people** (gates 3, 4, 7)
- **Blue — recalibrate & re-test** (gates 5–6)
- **Violet — governance** (gate 8)

## Why the gates exist

Synthetic users are fast but systematically **over-agreeable, emotionally flat, and
confidently wrong** on decision-grade work. The gates force grounding (gate 4), calibration
(gate 6), and a human loop (gate 7) so a synthetic pass is *earned, not assumed*. Consensus
across the research: **augment, never replace.**

## How to respond

When invoked, identify which gate the decision is at, ask that gate's question, and give a
proceed/stop verdict. On a stop, name the route (from the table) and what to do to clear it.
Cite the relevant source in `references.md` for any human-required call.

_Companion skills: `anchorflight-triage` (continuous-AI teams), `anchorflight-persona` (Gate 5)._
