---
name: anchorflight-triage
description: Use when building continuously with AI and you need to decide whether synthetic (AI-generated) users can be trusted for a product decision, or when you must halt the loop and validate with real humans. Runs the Anchorflight continuous-AI loop — triage a decision by stakes, then move through Frame → Generate → Inspect → Iterate → Ship, calling synthetic-vs-human at each stage. Trigger on questions like "can we test this with synthetic users?", "is a synthetic gut-check enough here?", or "do we need real users before shipping this?"
---

# Anchorflight — continuous-AI loop (triage)

Anchorflight is a decision discipline for teams building continuously with AI, where
intent-to-working-screen happens in one loop with no natural pause to validate. Your job
with this skill: at each turn of the build loop, decide **whether a synthetic-user check
is trustworthy here, or whether the decision needs real humans first.**

Synthetic users are fast and cheap, but the research is consistent: they are
systematically **over-agreeable, emotionally flat, and confidently wrong** on
decision-grade work. So let them run where mistakes are cheap and reversible, and stop
for real people where being wrong costs money, trust, or safety. See `references.md` for
the sources behind every claim below.

## Step 1 — Triage first (this sets the strictness)

Before any synthetic run, classify the decision:

- **Reversible and low-stakes** → loose exit. A synthetic gut-check is enough; keep moving.
- **Irreversible or high-stakes** (pricing, billing, contracts, security, enterprise plans, MRR) → hard exit. Real humans are required before you ship.

The triage verdict governs how hard the later gates bite. State it explicitly at the start.

## Step 2 — Walk the loop, stage by stage

| Stage | Trust | What to do |
| --- | --- | --- |
| **Frame** (entry) | ✅ synthetic reliable | Use synthetic users to generate hypotheses, learn a domain's vocabulary, and rehearse research guides. **Never let them validate the idea.** |
| **Generate** (build) | — build step | Just build. No user claim is being made yet. |
| **Inspect** (decision) | ⚠️ stakes decide | The pivot. Reversible + low-stakes → synthetic gut-check is enough. Irreversible/high-stakes → **stop, bring humans**. Synthetic data is plausible but wrong on complex tasks. |
| **Iterate** | ✅ synthetic reliable | Fast synthetic cycles for early, task-based usability and A/B exploration — not discovery or emotion-heavy work. |
| **Ship** (gate) | ⛔ humans required | Validate with real people before shipping anything touching pricing, onboarding, feature gates, personas, prioritization, or emotion. |

Loop-backs: **Inspect → Iterate** (refine), **Inspect → Frame** (reframe), **Ship → Frame** (next cycle).

## Step 3 — The 5-question check (run at Inspect / before Ship)

1. Is this decision **reversible**?
2. Is it genuinely **low-stakes**?
3. Is it discovery, emotion, personas, or prioritization? (If yes, synthetics are weak.)
4. Would being **wrong** cost real money or trust?
5. Can real users **falsify** this before ship?

**Any high-risk answer → stop the loop and bring in real people.**

## Why we stop — the four failure modes

- **Over-agreeableness / sycophancy** — AI participants agree with your framing and rarely surface the objection that kills a feature.
- **Plausible but wrong** — clean, confident output that doesn't match real behavior on complex tasks.
- **Emotional flatness & no context** — no real empathy or lived situation, so discovery and emotion-heavy work fall apart.
- **Structural bias** — Western defaults and assumption-echoing, so personas confirm instead of surprising you.

Consensus across the literature: **augment, never replace.** Real human data is the anchor
that keeps every synthetic pass grounded.

## How to respond

When invoked, state (1) the triage verdict, (2) which loop stage the decision is at,
(3) the synthetic-vs-human call with the reason, and (4) if human validation is needed,
exactly what to put in front of real users before shipping. Cite the relevant source from
`references.md` when you make a trust call.

_Companion skills: `anchorflight-8gate` (for staged teams), `anchorflight-persona` (to build a testable persona)._
