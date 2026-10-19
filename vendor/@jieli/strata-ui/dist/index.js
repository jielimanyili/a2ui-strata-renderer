var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/components/Button.tsx
import { cva, cx } from "class-variance-authority";
import { forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
var button = cva("strata-button", {
  variants: {
    variant: {
      primary: "strata-button--primary",
      secondary: "strata-button--secondary",
      ghost: "strata-button--ghost"
    },
    size: {
      sm: "strata-button--sm",
      md: "strata-button--md",
      lg: "strata-button--lg"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
var Button = forwardRef(
  ({ className, variant, size, type = "button", ...props }, ref) => /* @__PURE__ */ jsx("button", { ref, type, className: cx(button({ variant, size }), className), ...props })
);
Button.displayName = "Button";

// src/components/Card.tsx
import { cx as cx2 } from "class-variance-authority";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Card = forwardRef2(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx2("div", { ref, className: cx2("strata-card", className), ...props })
);
Card.displayName = "Card";
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2("h3", { className: cx2("strata-card--title", className), ...props });
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2("p", { className: cx2("strata-card--description", className), ...props });
}

// src/components/Input.tsx
import { cx as cx3 } from "class-variance-authority";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = forwardRef3(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx3("input", { ref, className: cx3("strata-input", className), ...props })
);
Input.displayName = "Input";

// src/components/Dialog.tsx
import { Dialog as Primitive } from "@base-ui/react/dialog";
import { cx as cx4 } from "class-variance-authority";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Backdrop = forwardRef4(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(Primitive.Backdrop, { ref, className: cx4("strata-dialog-backdrop", className), ...props }));
Backdrop.displayName = "DialogBackdrop";
var Popup = forwardRef4(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(Primitive.Popup, { ref, className: cx4("strata-dialog-popup", className), ...props }));
Popup.displayName = "DialogPopup";
var Title = forwardRef4(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(Primitive.Title, { ref, className: cx4("strata-dialog-title", className), ...props }));
Title.displayName = "DialogTitle";
var Description = forwardRef4(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(Primitive.Description, { ref, className: cx4("strata-dialog-description", className), ...props }));
Description.displayName = "DialogDescription";
var Close = forwardRef4(({ className, ...props }, ref) => /* @__PURE__ */ jsx4(Primitive.Close, { ref, className: cx4("strata-dialog-close", className), ...props }));
Close.displayName = "DialogClose";
var Dialog = {
  Root: Primitive.Root,
  Trigger: Primitive.Trigger,
  Portal: Primitive.Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close
};

// src/components/Tabs.tsx
import { Tabs as Primitive2 } from "@base-ui/react/tabs";
import { cx as cx5 } from "class-variance-authority";
import { forwardRef as forwardRef5 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var List = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(Primitive2.List, { ref, className: cx5("strata-tabs-list", className), ...props }));
List.displayName = "TabsList";
var Tab = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(Primitive2.Tab, { ref, className: cx5("strata-tabs-tab", className), ...props }));
Tab.displayName = "TabsTab";
var Panel = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(Primitive2.Panel, { ref, className: cx5("strata-tabs-panel", className), ...props }));
Panel.displayName = "TabsPanel";
var Indicator = forwardRef5(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(Primitive2.Indicator, { ref, className: cx5("strata-tabs-indicator", className), ...props }));
Indicator.displayName = "TabsIndicator";
var Tabs = {
  Root: Primitive2.Root,
  List,
  Tab,
  Panel,
  Indicator
};

// src/components/Tooltip.tsx
import { Tooltip as Primitive3 } from "@base-ui/react/tooltip";
import { cx as cx6 } from "class-variance-authority";
import { forwardRef as forwardRef6 } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Popup2 = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(Primitive3.Popup, { ref, className: cx6("strata-tooltip-popup", className), ...props }));
Popup2.displayName = "TooltipPopup";
var Arrow = forwardRef6(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(Primitive3.Arrow, { ref, className: cx6("strata-tooltip-arrow", className), ...props }));
Arrow.displayName = "TooltipArrow";
var Tooltip = {
  Provider: Primitive3.Provider,
  Root: Primitive3.Root,
  Trigger: Primitive3.Trigger,
  Portal: Primitive3.Portal,
  Positioner: Primitive3.Positioner,
  Popup: Popup2,
  Arrow
};

// src/components/Badge.tsx
import { cva as cva2, cx as cx7 } from "class-variance-authority";
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var badge = cva2("strata-badge", {
  variants: {
    variant: {
      default: "strata-badge--default",
      primary: "strata-badge--primary",
      outline: "strata-badge--outline",
      destructive: "strata-badge--destructive"
    }
  },
  defaultVariants: { variant: "default" }
});
var Badge = forwardRef7(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx7("span", { ref, className: cx7(badge({ variant }), className), ...props })
);
Badge.displayName = "Badge";

// src/components/Select.tsx
import { Select as Primitive4 } from "@base-ui/react/select";
import { cx as cx8 } from "class-variance-authority";
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var Trigger = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(Primitive4.Trigger, { ref, className: cx8("strata-select-trigger", className), ...props }));
Trigger.displayName = "SelectTrigger";
var Value = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(Primitive4.Value, { ref, className: cx8("strata-select-value", className), ...props }));
Value.displayName = "SelectValue";
var Popup3 = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(Primitive4.Popup, { ref, className: cx8("strata-select-popup", className), ...props }));
Popup3.displayName = "SelectPopup";
var Item = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(Primitive4.Item, { ref, className: cx8("strata-select-item", className), ...props }));
Item.displayName = "SelectItem";
var ItemText = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(Primitive4.ItemText, { ref, className: cx8("strata-select-item-text", className), ...props }));
ItemText.displayName = "SelectItemText";
var ItemIndicator = forwardRef8(({ className, ...props }, ref) => /* @__PURE__ */ jsx8(
  Primitive4.ItemIndicator,
  {
    ref,
    className: cx8("strata-select-item-indicator", className),
    ...props
  }
));
ItemIndicator.displayName = "SelectItemIndicator";
var Select = {
  Root: Primitive4.Root,
  Label: Primitive4.Label,
  Trigger,
  Value,
  Icon: Primitive4.Icon,
  Portal: Primitive4.Portal,
  Positioner: Primitive4.Positioner,
  Popup: Popup3,
  List: Primitive4.List,
  Item,
  ItemText,
  ItemIndicator,
  Group: Primitive4.Group,
  GroupLabel: Primitive4.GroupLabel,
  ScrollUpArrow: Primitive4.ScrollUpArrow,
  ScrollDownArrow: Primitive4.ScrollDownArrow,
  Arrow: Primitive4.Arrow,
  Separator: Primitive4.Separator,
  Backdrop: Primitive4.Backdrop
};

// src/generated/tokens.ts
var tokens_exports = {};
__export(tokens_exports, {
  strata_color_accent: () => strata_color_accent,
  strata_color_accent_foreground: () => strata_color_accent_foreground,
  strata_color_background: () => strata_color_background,
  strata_color_border: () => strata_color_border,
  strata_color_destructive: () => strata_color_destructive,
  strata_color_foreground: () => strata_color_foreground,
  strata_color_gray_100: () => strata_color_gray_100,
  strata_color_gray_200: () => strata_color_gray_200,
  strata_color_gray_300: () => strata_color_gray_300,
  strata_color_gray_50: () => strata_color_gray_50,
  strata_color_gray_500: () => strata_color_gray_500,
  strata_color_gray_700: () => strata_color_gray_700,
  strata_color_gray_900: () => strata_color_gray_900,
  strata_color_muted: () => strata_color_muted,
  strata_color_muted_foreground: () => strata_color_muted_foreground,
  strata_color_primary_100: () => strata_color_primary_100,
  strata_color_primary_50: () => strata_color_primary_50,
  strata_color_primary_500: () => strata_color_primary_500,
  strata_color_primary_600: () => strata_color_primary_600,
  strata_color_primary_700: () => strata_color_primary_700,
  strata_font_sans: () => strata_font_sans,
  strata_font_size_base: () => strata_font_size_base,
  strata_font_size_lg: () => strata_font_size_lg,
  strata_font_size_sm: () => strata_font_size_sm,
  strata_font_size_xl: () => strata_font_size_xl,
  strata_font_weight_medium: () => strata_font_weight_medium,
  strata_font_weight_semibold: () => strata_font_weight_semibold,
  strata_radius_full: () => strata_radius_full,
  strata_radius_lg: () => strata_radius_lg,
  strata_radius_md: () => strata_radius_md,
  strata_radius_sm: () => strata_radius_sm,
  strata_shadow_md: () => strata_shadow_md,
  strata_shadow_sm: () => strata_shadow_sm,
  strata_space_1: () => strata_space_1,
  strata_space_2: () => strata_space_2,
  strata_space_3: () => strata_space_3,
  strata_space_4: () => strata_space_4,
  strata_space_5: () => strata_space_5,
  strata_space_6: () => strata_space_6,
  strata_space_8: () => strata_space_8
});
var strata_color_primary_50 = "#eef4ff";
var strata_color_primary_100 = "#d9e6ff";
var strata_color_primary_500 = "#2563eb";
var strata_color_primary_600 = "#1d4ed8";
var strata_color_primary_700 = "#1e40af";
var strata_color_gray_50 = "#f8fafc";
var strata_color_gray_100 = "#f1f5f9";
var strata_color_gray_200 = "#e2e8f0";
var strata_color_gray_300 = "#cbd5e1";
var strata_color_gray_500 = "#64748b";
var strata_color_gray_700 = "#334155";
var strata_color_gray_900 = "#0f172a";
var strata_color_background = "#ffffff";
var strata_color_foreground = "#0f172a";
var strata_color_muted = "#f1f5f9";
var strata_color_muted_foreground = "#64748b";
var strata_color_border = "#e2e8f0";
var strata_color_accent = "#2563eb";
var strata_color_accent_foreground = "#ffffff";
var strata_color_destructive = "#dc2626";
var strata_space_1 = "4px";
var strata_space_2 = "8px";
var strata_space_3 = "12px";
var strata_space_4 = "16px";
var strata_space_5 = "20px";
var strata_space_6 = "24px";
var strata_space_8 = "32px";
var strata_radius_sm = "6px";
var strata_radius_md = "10px";
var strata_radius_lg = "14px";
var strata_radius_full = "9999px";
var strata_font_sans = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';
var strata_font_size_sm = "0.875rem";
var strata_font_size_base = "1rem";
var strata_font_size_lg = "1.125rem";
var strata_font_size_xl = "1.5rem";
var strata_font_weight_medium = "500";
var strata_font_weight_semibold = "600";
var strata_shadow_sm = "0 1px 2px rgb(0 0 0 / 0.05)";
var strata_shadow_md = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
export {
  Badge,
  Button,
  Card,
  CardDescription,
  CardTitle,
  Dialog,
  Input,
  Select,
  Tabs,
  Tooltip,
  tokens_exports as tokens
};
//# sourceMappingURL=index.js.map