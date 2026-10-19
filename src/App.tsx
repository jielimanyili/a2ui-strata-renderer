import { useState } from "react";
import { A2UIRenderer } from "./a2ui/renderer";
import { useA2UISurface } from "./a2ui/useA2UISurface";
import { simulateJobMatch } from "./a2ui/simulate";
import { useA2UILive } from "./sse/useA2UILive";
import type { A2UISurface } from "./a2ui/types";

export default function App() {
  const { root, nodes, events, busy, handleEvent, reset, setBusy } = useA2UISurface();
  const [intents, setIntents] = useState<string[]>([]);
  const live = useA2UILive(handleEvent);

  const surface: A2UISurface | null = root ? { version: "0.1", root, nodes } : null;

  const play = async () => {
    reset();
    setIntents([]);
    setBusy(true);
    await simulateJobMatch(handleEvent);
    setBusy(false);
  };

  const connectLive = () => {
    reset();
    setIntents([]);
    live.connect();
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
            {busy ? "Streaming…" : "▶ Play agent stream (simulate)"}
          </button>
          <button onClick={connectLive} disabled={live.connected}>
            {live.connected ? "● Live (connected)" : "🔌 Connect live stream"}
          </button>
          <button
            onClick={() => {
              reset();
              setIntents([]);
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

