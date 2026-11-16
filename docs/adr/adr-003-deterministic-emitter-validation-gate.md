# ADR-003: Emit agent UI deterministically and validate before render

**Date:** 2026-11-16
**Status:** Accepted

## Context

The demo implemented the renderer + catalog + transport half of A2UI, but the "agent" was
simulated — `simulate.ts` and `server.mjs` replay a hand-authored `events.json` fixture. There was
no code that *produced* the A2UI payload, and nothing enforced the payload's validity before the
renderer touched it. That left two gaps: (1) the emission half of the loop was unproven, and (2)
the trust boundary was implicit (the renderer shows a placeholder for unknown components, but
nothing *rejects* invalid output up front).

## Decision

Add two modules and wire them into the demo:

1. **`emitter.ts`** — a *deterministic* agent that composes a valid A2UI stream from a small intent
   payload (`{ title, tags, summary, actions }`), using only the catalog vocabulary. Same input →
   same output; no LLM, no randomness.
2. **`validate.ts`** — a validation gate that checks every emitted node against the catalog
   allow-list and a documented prop schema (`catalog-schema.ts`), plus cross-node references
   (root + children), and returns a structured `{ ok, errors }` result.

The app gains an "Emit (deterministic agent)" path (emit → validate → render) and an
"Emit invalid" path that injects an unknown component to demonstrate the gate rejecting it.

## Rationale

- **Deterministic emission first** proves the *architecture* of the loop (intent → A2UI JSON →
  validation → render) with zero operational risk: no API keys, no cost, no nondeterminism, and a
  demo that is reproducible for any reviewer.
- **The validation gate makes the trust boundary explicit.** Where the renderer's placeholder is a
  last line of defense, the gate is the first: an invalid payload is rejected with a clear error
  list before anything renders.
- **`catalog-schema.ts` is the "catalog is the prompt" vocabulary.** It documents the prop contract
  each component exposes, so both the emitter (which composes from it) and the validator (which
  enforces it) share one source of truth.

## Alternatives considered

- **Real LLM emission now** — closes the gap fully, but introduces secrets, cost, and run-to-run
  nondeterminism into a demo that is meant to be runnable and reviewable anywhere; rejected for
  now, kept as a drop-in next step (the emitter's stream shape is the contract an LLM would target).
- **Leave the fixture-only demo** — no new risk, but leaves the emission half unproven and the
  boundary implicit; rejected.

## Consequences

**Positive**
- The full loop — emit, validate, render, stream, round-trip — is now demonstrated.
- The trust boundary is explicit and testable.
- Deterministic output makes the demo reproducible for interviewers and CI.

**Negative / trade-offs**
- `catalog-schema.ts` must be kept in sync with `catalog.tsx` and the vendored Strata prop types
  (e.g., `variant` enums).
- The deterministic emitter is a stand-in: a real LLM would add the actual "composing" intelligence.
