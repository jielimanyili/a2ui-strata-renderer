// The "catalog is the prompt" vocabulary: prop contracts for every component
// the A2UI catalog can render. This is the single source of truth shared by
// the deterministic emitter (which composes from it) and the validation gate
// (which enforces it). Keep in sync with `catalog.tsx`.

export type PropType = "string" | "number" | "boolean";

export interface PropRule {
  type: PropType;
  /** Allowed values. If present, the prop must be one of these. */
  enum?: readonly string[];
  required?: boolean;
}

export interface CatalogEntry {
  /** leaf nodes render `props.text`; container nodes render `children`. */
  kind: "leaf" | "container";
  props?: Record<string, PropRule>;
}

// `variant` enums mirror the vendored Strata components:
//   Button: primary | secondary | ghost
//   Badge:  primary | default | outline | destructive
export const catalogSchema: Record<string, CatalogEntry> = {
  Card: { kind: "container" },
  CardTitle: { kind: "leaf", props: { text: { type: "string", required: true } } },
  CardDescription: { kind: "leaf", props: { text: { type: "string", required: true } } },
  Button: {
    kind: "leaf",
    props: {
      text: { type: "string", required: true },
      variant: { type: "string", enum: ["primary", "secondary", "ghost"] },
    },
  },
  Badge: {
    kind: "leaf",
    props: {
      text: { type: "string", required: true },
      variant: { type: "string", enum: ["primary", "default", "outline", "destructive"] },
    },
  },
  Column: { kind: "container" },
  Row: { kind: "container" },
  Heading: { kind: "leaf", props: { text: { type: "string", required: true } } },
  Text: { kind: "leaf", props: { text: { type: "string", required: true } } },
};
