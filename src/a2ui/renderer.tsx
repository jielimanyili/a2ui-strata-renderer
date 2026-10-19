import type { A2UINode, A2UISurface } from "./types";
import { catalog } from "./catalog";

export interface A2UIRendererProps {
  surface: A2UISurface;
  onEvent?: (action: string, payload?: Record<string, unknown>) => void;
}

/**
 * Recursively renders a declarative A2UI surface through the component
 * catalog. Leaf nodes carry their text in `props.text`; container nodes
 * reference children by id. Event bindings become React handlers that
 * bubble a semantic `action` (round-trip back to the agent).
 */
export function A2UIRenderer({ surface, onEvent }: A2UIRendererProps) {
  return <NodeView id={surface.root} nodes={surface.nodes} onEvent={onEvent} />;
}

function NodeView({
  id,
  nodes,
  onEvent,
}: {
  id: string;
  nodes: Record<string, A2UINode>;
  onEvent?: (action: string, payload?: Record<string, unknown>) => void;
}) {
  const node = nodes[id];
  if (!node) return null;

  const Comp = catalog[node.component];
  if (!Comp) {
    return (
      <div className="a2ui-unknown">
        ⚠ Unknown component "{node.component}" — not in the catalog
      </div>
    );
  }

  const { text, ...rest } = (node.props ?? {}) as Record<string, unknown>;
  const textContent = typeof text === "string" ? text : undefined;
  const props: Record<string, unknown> = { ...rest };

  for (const binding of node.events ?? []) {
    const key =
      binding.on === "click" ? "onClick" : binding.on === "change" ? "onChange" : "onSubmit";
    props[key] = () => onEvent?.(binding.action, binding.payload);
  }

  const children = (node.children ?? []).map((cid) => (
    <NodeView key={cid} id={cid} nodes={nodes} onEvent={onEvent} />
  ));

  const content = children.length > 0 ? children : textContent;
  return <Comp {...props}>{content}</Comp>;
}
