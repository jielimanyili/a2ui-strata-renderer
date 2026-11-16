import { useState } from "react";
import { A2UIRenderer } from "./a2ui/renderer";
import { useA2UISurface } from "./a2ui/useA2UISurface";
import { simulateJobMatch } from "./a2ui/simulate";
import { useA2UILive } from "./sse/useA2UILive";
import { emitMatchCard, type MatchIntent } from "./a2ui/emitter";
import { validateEvents, type ValidationResult } from "./a2ui/validate";
import type { A2UISurface, A2UIStreamEvent } from "./a2ui/types";

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

// A deterministic sample intent — the "task" the agent is asked to render.
const SAMPLE_INTENT: MatchIntent = {
  surfaceId: "emitted-match-1",
  title: "Senior Staff UI Architect — strong fit",
  tags: ["Agent-driven UI", "A2UI", "Design system"],
  summary:
    "Emitted by the deterministic agent from a small intent payload, composed only from the Strata catalog, then validated against the allow-list before render.",
  primaryAction: "View role",
  secondaryAction: "Dismiss",
};

export default function App() {
  const { root, nodes, events, busy, handleEvent, reset, setBusy } = useA2UISurface();
  const [intents, setIntents] = useState<string[]>([]);
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const live = useA2UILive(handleEvent);

  const surface: A2UISurface | null = root ? { version: "0.1", root, nodes } : null;

  const play = async () => {
    reset();
    setIntents([]);
    setValidation(null);
    setBusy(true);
    await simulateJobMatch(handleEvent);
    setBusy(false);
  };

  const connectLive = () => {
    reset();
    setIntents([]);
    setValidation(null);
    live.connect();
  };

  const streamThrough = async (stream: A2UIStreamEvent[]) => {
    setBusy(true);
    for (const event of stream) {
      await wait(500);
      handleEvent(event);
    }
    setBusy(false);
  };

  const emit = async () => {
    reset();
    setIntents([]);
    const stream = emitMatchCard(SAMPLE_INTENT);
    setValidation(validateEvents(stream));
    await streamThrough(stream);
  };

  const emitInvalid = async () => {
    reset();
    setIntents([]);
    const stream = emitMatchCard(SAMPLE_INTENT);
    // Inject an unknown component to demonstrate the gate rejecting it.
    stream.push({
      type: "surface_update",
      surfaceId: SAMPLE_INTENT.surfaceId,
      nodes: [
        { id: "card", component: "Card", children: ["title", "badgeRow", "desc", "actions", "evil"] },
        { id: "evil", component: "ArbitraryWidget", props: { text: "should be rejected" } },
      ],
      timestamp: new Date().toISOString(),
    });
    setValidation(validateEvents(stream));
    await streamThrough(stream);
  };

  const onIntent = (action: string) => setIntents((prev) => [...prev, action]);

  return (
    <div className="app">
      <header className="header">
        <h1>Agent-Driven UI — A2UI → Strata renderer</h1>
        <p className="subtitle">
          A declarative A2UI payload (<em>UI as data</em>) rendered through the Strata React
          component catalog. The agent only composes from the catalog allow-list — it never
          emits executable code.
        </p>
        <div className="actions">
          <button onClick={play} disabled={busy}>
            {busy ? "Streaming…" : "▶ Replay fixture (events.json)"}
          </button>
          <button onClick={emit} disabled={busy}>
            {busy ? "Emitting…" : "⚙ Emit (deterministic agent)"}
          </button>
          <button onClick={emitInvalid} disabled={busy}>
            {busy ? "Emitting…" : "✗ Emit invalid (demo gate)"}
          </button>
          <button onClick={connectLive} disabled={live.connected}>
            {live.connected ? "● Live (connected)" : "🔌 Connect live stream"}
          </button>
          <button
            onClick={() => {
              reset();
              setIntents([]);
              setValidation(null);
              live.disconnect();
            }}
            disabled={busy}
          >
            Reset
          </button>
        </div>
        <div className="status">
          {live.connected
            ? "Live SSE connected — streaming from /a2ui/stream"
            : "Simulate mode (no backend) · connect Live to stream over SSE"}
        </div>
        {validation && (
          <div className="status">
            {validation.ok
              ? `✓ validation gate passed — ${validation.errors.length} errors`
              : `✗ validation gate rejected — ${validation.errors.map((e) => e.message).join(" · ")}`}
          </div>
        )}
      </header>

      <main className="grid">
        <section className="panel">
          <h2>1 · A2UI payload (JSON)</h2>
          <pre className="json">
            {surface ? JSON.stringify(surface, null, 2) : "// empty — press ▶ Play"}
          </pre>
        </section>

        <section className="panel">
          <h2>2 · Rendered surface (Strata catalog)</h2>
          <div className="surface">
            {surface ? (
              <A2UIRenderer surface={surface} onEvent={onIntent} />
            ) : (
              <p className="muted">No surface yet.</p>
            )}
          </div>
          <h2>Event / round-trip log</h2>
          <ul className="intents">
            {intents.length === 0 && <li className="muted">No user events yet.</li>}
            {intents.map((a, i) => (
              <li key={i}>
                ↩ agent intent: <code>{a}</code>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="footer">stream events received: {events.length}</footer>
    </div>
  );
}

