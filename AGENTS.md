# AGENTS.md

Instructions for AI agents (Claude Code / Codex / Copilot) working in this repo.

## Rules
- The A2UI payload (`src/a2ui/types.ts`) is a **contract** — changing it is an architecture
  decision, so write/update an ADR under `docs/adr/` rather than changing it silently.
- New renderable components go through `src/a2ui/catalog.tsx` — never render arbitrary markup
  from a payload.
- Keep the demo dependency-light: `@jieli/strata-ui` + React are the only runtime deps.
- Every change must pass `npm run build` (tsc --noEmit + vite build).
- Follow `docs/ai-assisted-development.md` for review gates and accountability.

## Conventions
- Docs live in `docs/`; ADRs are immutable (supersede, never edit).
- Prose conventions: `docs/style-guide.md` (if present).
