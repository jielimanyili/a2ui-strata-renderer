# ADR-001: Render agent UI as declarative data through an allow-list catalog

**Date:** 2026-10-19
**Status:** Accepted

## Context

The renderer must turn an agent's output into product UI. Two forces pull in opposite
directions: (1) we want the agent to produce rich, interactive interfaces; (2) we must not let
an LLM inject arbitrary code (XSS, broken layout, unvetted behavior) into a customer-facing
surface.

## Decision

Agents emit **declarative JSON** — `{ root, nodes }` where each node names a catalog key
(`Card`, `Button`, …), carries JSON-serializable `props`, and references children by id.
The host resolves each name against a **curated component catalog** (`catalog.tsx`) and renders
it. Event bindings express semantic `action` strings (`view_role`), not handlers/code.

## Rationale

- **UI as data, not executable code** (A2UI's core idea) removes the code-injection class of
  risk entirely — the payload is data; the renderer is the only code path.
- The catalog is an **allow-list**: an unknown name renders a safe placeholder, never markup.
- The catalog is the *same* component set human-authored screens use (Strata), so agent-composed
  UI inherits its tokens, theming, and accessibility for free.

## Alternatives considered

- **Agent emits JSX / render functions** — most expressive, but re-opens arbitrary-code
  execution; rejected on safety grounds.
- **Agent emits HTML/HTML-string** — same injection risk plus loss of component behavior;
  rejected.

## Consequences

**Positive**
- Safe by default; bounded agent behavior.
- Reuses the existing design system (Strata) as the composition surface.

**Negative / trade-offs**
- Expressiveness is capped by the catalog's richness — must curate the catalog to cover real
  product needs.
