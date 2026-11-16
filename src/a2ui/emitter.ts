import type { A2UINode, A2UIStreamEvent } from "./types";

// A deterministic "agent": given a small intent payload, it composes a valid
// A2UI stream using ONLY the catalog vocabulary. No LLM, no randomness — same
// input, same output. This is the emission half of the loop; a real LLM is a
// drop-in replacement that targets the same stream shape (see ADR-003).

export interface MatchIntent {
  surfaceId: string;
  title: string;
  tags: string[];
  summary: string;
  primaryAction: string;
  secondaryAction: string;
}

const now = () => new Date().toISOString();

function update(surfaceId: string, nodes: A2UINode[]): A2UIStreamEvent {
  return { type: "surface_update", surfaceId, nodes, timestamp: now() };
}

/**
 * Emits a "match card" surface as an incremental stream — composed from the
 * intent, node by node, the way an agent would build a surface over time.
 */
export function emitMatchCard(intent: MatchIntent): A2UIStreamEvent[] {
  const { surfaceId } = intent;

  const open: A2UIStreamEvent = {
    type: "surface_open",
    surfaceId,
    root: "card",
    nodes: [{ id: "card", component: "Card", children: [] }],
    timestamp: now(),
  };

  const title = update(surfaceId, [
    { id: "card", component: "Card", children: ["title"] },
    { id: "title", component: "CardTitle", props: { text: intent.title } },
  ]);

  const badgeIds = intent.tags.map((_, i) => `badge${i}`);
  const badges = update(surfaceId, [
    { id: "card", component: "Card", children: ["title", "badgeRow"] },
    { id: "badgeRow", component: "Row", children: badgeIds },
    ...intent.tags.map(
      (tag, i): A2UINode => ({
        id: badgeIds[i],
        component: "Badge",
        props: { variant: i === 0 ? "primary" : "outline", text: tag },
      }),
    ),
  ]);

  const summary = update(surfaceId, [
    { id: "card", component: "Card", children: ["title", "badgeRow", "desc"] },
    { id: "desc", component: "CardDescription", props: { text: intent.summary } },
  ]);

  const actions = update(surfaceId, [
    { id: "card", component: "Card", children: ["title", "badgeRow", "desc", "actions"] },
    { id: "actions", component: "Row", children: ["viewBtn", "dismissBtn"] },
    {
      id: "viewBtn",
      component: "Button",
      props: { variant: "primary", text: intent.primaryAction },
      events: [{ on: "click", action: "view_role" }],
    },
    {
      id: "dismissBtn",
      component: "Button",
      props: { variant: "ghost", text: intent.secondaryAction },
      events: [{ on: "click", action: "dismiss" }],
    },
  ]);

  return [open, title, badges, summary, actions];
}
