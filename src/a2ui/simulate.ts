import type { A2UIStreamEvent } from "./types";
import rawEvents from "./events.json";

// The A2UI stream is just data — the single source shared by the local
// Simulate mode and the live Node SSE server (`server.mjs`).
const events = rawEvents as A2UIStreamEvent[];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const now = () => new Date().toISOString();

/**
 * Replays the stream locally, node-by-node, so the renderer updates live even
 * without a backend running. `server.mjs` serves the same events over SSE.
 */
export async function simulateJobMatch(
  onEvent: (event: A2UIStreamEvent) => void
): Promise<void> {
  for (let i = 0; i < events.length; i++) {
    if (i > 0) await wait(500);
    onEvent({ ...events[i], timestamp: now() });
  }
}

