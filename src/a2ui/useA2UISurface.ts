import { useReducer } from "react";
import type { A2UINode, A2UIStreamEvent } from "./types";

interface SurfaceState {
  root: string | null;
  nodes: Record<string, A2UINode>;
  events: A2UIStreamEvent[];
  busy: boolean;
}

type SurfaceAction =
  | { type: "event"; event: A2UIStreamEvent }
  | { type: "reset" }
  | { type: "setBusy"; value: boolean };

const initialState: SurfaceState = { root: null, nodes: {}, events: [], busy: false };

function reducer(state: SurfaceState, action: SurfaceAction): SurfaceState {
  switch (action.type) {
    case "event": {
      const { event } = action;
      const events = [...state.events, event];
      if (event.type === "surface_close") {
        return { root: null, nodes: {}, events, busy: false };
      }
      const nodes = { ...state.nodes };
      for (const n of event.nodes ?? []) nodes[n.id] = n;
      return { root: event.root ?? state.root, nodes, events, busy: state.busy };
    }
    case "reset":
      return initialState;
    case "setBusy":
      return { ...state, busy: action.value };
  }
}

export function useA2UISurface() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    root: state.root,
    nodes: state.nodes,
    events: state.events,
    busy: state.busy,
    handleEvent: (event: A2UIStreamEvent) => dispatch({ type: "event", event }),
    reset: () => dispatch({ type: "reset" }),
    setBusy: (value: boolean) => dispatch({ type: "setBusy", value }),
  };
}
