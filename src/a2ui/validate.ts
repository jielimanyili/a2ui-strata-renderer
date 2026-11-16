import type { A2UINode, A2UIStreamEvent } from "./types";
import { catalog } from "./catalog";
import { catalogSchema } from "./catalog-schema";

export interface ValidationError {
  nodeId?: string;
  message: string;
}

export interface ValidationResult {
  ok: boolean;
  errors: ValidationError[];
}

const catalogKeys = new Set(Object.keys(catalog));

/** Validates one node against the catalog allow-list and the prop schema. */
export function validateNode(node: A2UINode): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!node.id) {
    errors.push({ message: "node is missing an id" });
  }

  if (!catalogKeys.has(node.component)) {
    errors.push({
      nodeId: node.id,
      message: `component "${node.component}" is not in the catalog allow-list`,
    });
    return errors; // can't validate props for an unknown component
  }

  const entry = catalogSchema[node.component];
  if (!entry) return errors; // no prop contract documented for this component

  const props = node.props ?? {};

  if (entry.kind === "leaf") {
    const text = props.text;
    if (typeof text !== "string" || text.length === 0) {
      errors.push({
        nodeId: node.id,
        message: `leaf component "${node.component}" requires a string props.text`,
      });
    }
  }

  for (const [prop, rule] of Object.entries(entry.props ?? {})) {
    const value = props[prop];
    if (value === undefined) {
      if (rule.required) {
        errors.push({
          nodeId: node.id,
          message: `"${node.component}" is missing required prop "${prop}"`,
        });
      }
      continue;
    }

    let typeOk = true;
    if (rule.type === "string" && typeof value !== "string") typeOk = false;
    if (rule.type === "number" && typeof value !== "number") typeOk = false;
    if (rule.type === "boolean" && typeof value !== "boolean") typeOk = false;

    if (!typeOk) {
      errors.push({
        nodeId: node.id,
        message: `"${node.component}.${prop}" must be a ${rule.type}`,
      });
      continue;
    }

    if (rule.enum && typeof value === "string" && !rule.enum.includes(value)) {
      errors.push({
        nodeId: node.id,
        message: `"${node.component}.${prop}" must be one of: ${rule.enum.join(", ")}`,
      });
    }
  }

  return errors;
}

/** Validates the nodes carried by a single stream event. */
export function validateEvent(event: A2UIStreamEvent): ValidationError[] {
  return (event.nodes ?? []).flatMap(validateNode);
}

/** Validates a whole stream and checks cross-node references (root + children). */
export function validateEvents(events: A2UIStreamEvent[]): ValidationResult {
  const errors: ValidationError[] = events.flatMap(validateEvent);

  // Fold the stream into a surface (upsert-by-id) to check tree references.
  let root: string | undefined;
  const nodes: Record<string, A2UINode> = {};
  for (const event of events) {
    if (event.root) root = event.root;
    for (const node of event.nodes ?? []) nodes[node.id] = node;
  }

  if (root !== undefined) {
    if (!nodes[root]) {
      errors.push({ message: `root "${root}" is not defined by any event` });
    }
    for (const node of Object.values(nodes)) {
      for (const childId of node.children ?? []) {
        if (!nodes[childId]) {
          errors.push({ nodeId: node.id, message: `references unknown child "${childId}"` });
        }
      }
    }
  }

  return { ok: errors.length === 0, errors };
}
