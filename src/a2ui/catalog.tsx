import type { ComponentType, HTMLAttributes } from "react";
import { Badge, Button, Card, CardDescription, CardTitle } from "@jieli/strata-ui";

// The "component catalog": a name → component registry. A2UI payloads
// reference these keys; the renderer resolves them here. An agent can only
// compose from this allow-list — it can never emit arbitrary code or markup.

function Column(props: HTMLAttributes<HTMLDivElement>) {
  const { style, children, ...rest } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, ...style }} {...rest}>
      {children}
    </div>
  );
}

function Row(props: HTMLAttributes<HTMLDivElement>) {
  const { style, children, ...rest } = props;
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center", ...style }} {...rest}>
      {children}
    </div>
  );
}

function Text(props: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} />;
}

function Heading(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} />;
}

// `forwardRef` components aren't assignable to `ComponentType` without a cast
// (a known React typing quirk) — cast through `unknown` to sidestep it.
const asComponent = (c: unknown) => c as ComponentType<any>;

// Strata components (the "real" catalog) + a few local layout primitives.
export const catalog: Record<string, ComponentType<any>> = {
  Card: asComponent(Card),
  CardTitle,
  CardDescription,
  Button: asComponent(Button),
  Badge: asComponent(Badge),
  Column,
  Row,
  Heading,
  Text,
};

