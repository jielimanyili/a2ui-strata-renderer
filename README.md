# A2UI → Strata Renderer

A minimal **agent-driven UI** demo: an agent emits a declarative **A2UI** payload
(Google's "UI as data, not executable code" spec) and a host **renderer** maps it onto the
**Strata** React component catalog — the same catalog human-authored screens use.

Built to close the "agent-driven UI (A2UI / A2A)" gap for the Pebl **Senior Staff UI Architect**
role, where "interfaces are increasingly composed by AI agents in real time."

**Live:** https://a2ui-strata-renderer.vercel.app · **Repo:** https://github.com/jielimanyili/a2ui-strata-renderer

## What it shows

- **UI as data** — the left panel shows the raw JSON the agent sent; the right panel shows the
  UI it renders into. No executable code crosses the boundary.
- **A catalog allow-list** — the renderer resolves component *names* against a curated registry
  (`catalog.tsx`). An agent can only compose from that list; an unknown name renders a safe
  "not in catalog" placeholder instead of arbitrary markup.
- **Incremental composition** — Simulate and Live modes stream the surface into existence
  node-by-node (`surface_open` → `surface_update` × N), the same shape a real A2A / AG-UI / SSE
  transport would deliver.
- **Round-trip events** — clicking a rendered button bubbles a semantic `action` back (e.g.
  `view_role`), demonstrating the event/round-trip model A2UI requires.

## Run

```bash
npm install
npm run dev        # Vite dev server → http://localhost:5175 (Simulate + Live via proxy)
```

**Live SSE mode** (streams over a real `EventSource`, no Kafka/Docker):

```bash
npm run build      # typecheck + production build
npm start          # Node server → http://localhost:3001 (serves dist/ + /a2ui/stream)
```

Then click **"🔌 Connect live stream"** in the app. With no server running, **Simulate** mode
replays the identical event shapes locally.

## Deploy

Self-contained (Strata vendored in `vendor/`), so it deploys anywhere that runs `npm run build`:

```bash
npx vercel          # one-time login, then follow the prompts (auto-detects Vite)
```

`vercel.json` sets the build command + SPA rewrite. The static build (Simulate mode) works on any
static host; the `server.mjs` SSE endpoint needs a Node host (Render/Railway/Fly) for Live mode.

## Stack

- Vite 5 + React 19 + TypeScript
- `@jieli/strata-ui` (Strata design system) — the component catalog
- No other runtime dependencies

## How this maps to the Pebl role

| Pebl requirement | Where it shows up here |
|---|---|
| Lead adoption of Google's A2UI | `src/a2ui/types.ts` (declarative surface model) + `renderer.tsx` (host renderer) |
| Renderer strategy / component catalog | `src/a2ui/catalog.tsx` — name → component registry (allow-list) |
| Event / round-trip model | `events` bindings → `onEvent` actions |
| "UI as data, not executable code" | JSON payload is pure data; the renderer is the only code path |
| AI-native SDLC | built with Claude Code; ADRs + review gates in `docs/` |
| Design system as single catalog | renders through `@jieli/strata-ui` (Strata) |

See `docs/ARCHITECTURE.md` for structure/tradeoffs and `docs/adr/` for the decisions.
