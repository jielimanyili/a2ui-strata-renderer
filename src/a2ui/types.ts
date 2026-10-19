// A2UI-inspired declarative surface model: "UI as data, not executable code."
//
// An agent emits JSON describing WHAT to render (components + props + a tree),
// never HOW (no executable code). The host renderer maps that JSON to a
// curated component catalog. This is the safety property that makes
// agent-composed UI viable: the agent is bounded by the catalog's allow-list.

export interface A2UIEventBinding {
  on: "click" | "change" | "submit";
  action: string; // semantic intent, not code — e.g. "view_role", "dismiss"
  payload?: Record<string, unknown>;
}

export interface A2UINode {
  id: string;
  component: string; // catalog key, resolved at render time
  props?: Record<string, unknown>;
  children?: string[]; // child node ids, in order
  events?: A2UIEventBinding[];
}

export interface A2UISurface {
  version: "0.1";
  root: string; // id of the root node
  nodes: Record<string, A2UINode>;
}

// A stream event mutates a surface over time (agentic incremental UI):
// the agent opens a surface, then patches nodes in as it works.
export interface A2UIStreamEvent {
  type: "surface_open" | "surface_update" | "surface_close";
  surfaceId: string;
  root?: string;
  nodes?: A2UINode[]; // upsert-by-id
  timestamp: string;
}
