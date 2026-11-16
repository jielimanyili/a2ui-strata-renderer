# Architecture — A2UI → Strata Renderer

## Shape

```
                    ┌────────────────────────────────────────────┐
 agent (LLM)        │  declarative A2UI payload (JSON)           │
   │                │  { root, nodes: [{id, component, props,    │
   │  streams       │    children, events}] }                    │
   ▼                └────────────────────────────────────────────┘
 A2UIStreamEvent ──► useA2UISurface (reducer: upsert nodes by id)
                           │  builds A2UISurface {root, nodes}
                           ▼
                     A2UIRenderer  ──►  catalog[name]  ──►  Strata
                           │          (allow-list)          components
                           ▼
                     React DOM (Button, Card, Badge, …)
                           │  user clicks
                           ▼
                     onEvent(action)  ── round-trip back to agent
```

> **Note (honest scope):** the "agent" has two forms. `simulate.ts` (Simulate mode) and
> `server.mjs` (Live SSE) replay a hand-authored `src/a2ui/events.json` fixture; `emitter.ts`
> deterministically *generates* a valid A2UI stream from an intent payload — no LLM. A real LLM is
> a drop-in replacement for the emitter. The trust boundary is explicit: `validate.ts` rejects
> anything outside the catalog allow-list before render.

## Components

| File | Job |
|---|---|
| `src/a2ui/types.ts` | The declarative contract: `A2UINode`, `A2UISurface`, `A2UIStreamEvent` |
| `src/a2ui/catalog-schema.ts` | Prop contracts per component — the "catalog is the prompt" vocabulary |
| `src/a2ui/emitter.ts` | Deterministic agent — intent → valid A2UI stream (catalog vocabulary only) |
| `src/a2ui/validate.ts` | Validation gate — allow-list + prop-schema + cross-node reference checks |
| `src/a2ui/catalog.tsx` | The **component catalog** — name → component registry (Strata + local layout primitives) |
| `src/a2ui/renderer.tsx` | The host renderer — recursive, catalog-driven, event-binding |
| `src/a2ui/useA2UISurface.ts` | State reducer — applies stream events, upserts nodes by id |
| `src/a2ui/simulate.ts` | Replays an incremental agent stream locally (no backend) |

## Data model

- **Surface** = `{ root: nodeId, nodes: { [id]: node } }` — a flat node table + a tree of ids.
  (Mirrors A2UI's component-list + tree split: components are data, the tree is references.)
- **Node** = `{ id, component, props?, children?, events? }`. `component` is a *catalog key*,
  never code. Leaf text travels in `props.text`.
- **Stream event** = `{ type: open|update|close, surfaceId, root?, nodes? }`; updates
  **upsert-by-id**, so an agent can extend a surface incrementally.

## Tradeoffs

- **Catalog allow-list over arbitrary JSX.** The agent is bounded to the catalog, so
  agent-composed UI can't execute arbitrary code. Cost: the catalog must be rich enough
  for real product surfaces — a curation problem, not a rendering problem.
- **`props.text` convention.** Keeps leaf nodes JSON-pure (no JSX children in the payload);
  the renderer lifts `text` into React children. Cost: slightly non-standard vs. a nested
  "children" array of text nodes.
- **Local Simulate mode.** Demonstrates the stream contract without a backend. Cost: the
  real transport (A2A / AG-UI / SSE) is stubbed — see ADR-002.

## Rationale links

- Why declarative (vs. code): `docs/adr/adr-001-declarative-ui-safety.md`
- How the catalog is resolved: `docs/adr/adr-002-catalog-resolution.md`
