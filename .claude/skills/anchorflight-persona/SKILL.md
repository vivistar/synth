---
name: anchorflight-persona
description: Use when creating or reviewing a synthetic (AI-generated) user persona for testing. Builds a concrete, grounded, testable persona — role, permissions, seat/budget limits, expertise — and audits its output for sycophancy, calibration drift, and bias before its results are trusted. This is Anchorflight Gate 5 plus the calibration and guardrail checks (gates 6 and 8). Trigger on "write a synthetic persona", "is this persona grounded/testable?", or "audit this synthetic user for bias/sycophancy".
---

# Anchorflight — build a grounded, testable persona

A synthetic run is only as good as its persona. This skill makes a persona **concrete,
grounded, and testable**, then audits its output so you don't trust a plausible-but-wrong
result. See `references.md` for the sources.

## First: is a persona even appropriate? (prerequisites)

Do not build a persona to answer a decision that should go to humans. Confirm:

- There is **real usage data** to ground it (telemetry, logs, interviews). No data → real customers only.
- The question is a **structured / bounded** interaction, not open discovery.
- The decision is **reversible / low-to-medium stakes** (else validate with humans regardless).

(If those fail, use `anchorflight-8gate` or `anchorflight-triage` to route the decision.)

## Step 1 — Define the persona (Gate 5)

There is **no testable scope until the persona is concrete.** Specify, at minimum:

- **Role & permissions** — Admin, Editor, Developer, external Guest?
- **Corporate constraints** — seat allowance, budget limits, plan tier.
- **Expertise level** — technical fluency, domain familiarity.
- **Bounded task** — a single-session interaction the persona can actually complete (no multi-session memory or external-state dependencies).

Generic templates yield generic, useless insights. Ground each attribute in the real usage
data above rather than model defaults.

## Step 2 — Calibrate before trusting (Gate 6)

Run the persona against a **known past outcome** first. Verify simulated drop-offs / choices
match real logged behaviour. **If calibration drift exceeds 15%, halt** — tighten the prompt
constraints and re-test. Do not use an uncalibrated persona for a live decision.

## Step 3 — Audit the output (guardrails, Gate 8)

Before trusting results, check for the known failure modes:

- **Sycophancy / over-agreeableness** — did the persona ever disagree, object, or push back? A persona that never dissents is broken.
- **Emotional flatness / missing context** — is it reasoning from a lived situation, or producing clean generic prose?
- **Structural bias** — Western defaults, assumption-echoing, over-idealized responses.
- **Calibration drift** — has behaviour diverged from the baseline over the session?

Then **tag all output as AI-simulated** and log the prompt/version so stakeholders never
confuse synthetic and real data.

## Step 4 — Plan the human cross-check (Gate 7)

Never rely 100% on the persona. Define which findings a real cohort will validate (e.g.,
validate 80% synthetically, 20% with real design partners) before any go/no-go.

## How to respond

When invoked to build a persona, output a concrete, bounded persona spec (the Step 1
fields) grounded in the provided data. When invoked to review one, run Steps 2–4 as a
checklist and flag every failure mode found, citing the relevant source in `references.md`.

_Companion skills: `anchorflight-triage`, `anchorflight-8gate`._
