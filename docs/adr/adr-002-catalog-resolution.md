# ADR-002: Resolve the component catalog from the Strata package

**Date:** 2026-10-19
**Status:** Accepted

## Context

The demo's catalog must render **Strata** components (`@jieli/strata-ui`) so the claim "agents
compose against my design system" is literally true — not a re-implementation. But Strata is a
separate repo (`projects/strata/`), and the demo must be runnable and deployable standalone.

## Decision

Consume `@jieli/strata-ui` from a **vendored copy committed in-repo** at
`vendor/@jieli/strata-ui` (the built `dist/` + `strata.css` + `package.json`), via a `file:`
dependency. Import components from the barrel and styles from `@jieli/strata-ui/styles.css`.

## Rationale

- Vendoring makes the repo self-contained: `npm install` + `npm run build` work on Vercel (or any
  host) without reaching outside the repo.
- Uses the package's published `exports` map (`"."` and `"./styles.css"`), exactly how a real
  consumer would use it — validating the package boundary.
- The renderer stays **catalog-agnostic**: it only reads `catalog.tsx`, so swapping the catalog
  implementation (or the package source) never touches the renderer.

## Alternatives considered

- **Publishing `@jieli/strata-ui` to npm** — the long-term answer, but blocked on npm auth; revisit
  once logged in.
- **Vendoring a local re-implementation of the components** — self-contained, but duplicates
  Strata and weakens the "renders through my actual catalog" claim; rejected.
- **Importing Strata source via a Vite alias** — works locally but couples the build to a
  `../strata` path and re-transpiles source; rejected in favor of the built package.
- **Folding this app into the Strata monorepo (`apps/`)** — clean `workspace:*` dependency, but
  sacrifices a standalone repo for the demo; rejected for now.

## Consequences

**Positive**
- Honest integration with the real design system.
- Renderer is decoupled from any specific catalog implementation.
- Single self-contained repo that deploys anywhere.

**Negative / trade-offs**
- The vendored copy drifts from Strata source — re-copy `dist/`, `strata.css`, and `package.json`
  when Strata changes.

