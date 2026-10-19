"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  Button: () => Button,
  Card: () => Card,
  CardDescription: () => CardDescription,
  CardTitle: () => CardTitle,
  Dialog: () => Dialog,
  Input: () => Input,
  Select: () => Select,
  Tabs: () => Tabs,
  Tooltip: () => Tooltip,
  tokens: () => tokens_exports
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var button = (0, import_class_variance_authority.cva)("strata-button", {
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
var Button = (0, import_react.forwardRef)(
  ({ className, variant, size, type = "button", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { ref, type, className: (0, import_class_variance_authority.cx)(button({ variant, size }), className), ...props })
);
Button.displayName = "Button";

// src/components/Card.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = (0, import_react2.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, className: (0, import_class_variance_authority2.cx)("strata-card", className), ...props })
);
Card.displayName = "Card";
function CardTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: (0, import_class_variance_authority2.cx)("strata-card--title", className), ...props });
}
function CardDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: (0, import_class_variance_authority2.cx)("strata-card--description", className), ...props });
}

// src/components/Input.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Input = (0, import_react3.forwardRef)(
  ({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { ref, className: (0, import_class_variance_authority3.cx)("strata-input", className), ...props })
);
Input.displayName = "Input";

// src/components/Dialog.tsx
var import_dialog = require("@base-ui/react/dialog");
var import_class_variance_authority4 = require("class-variance-authority");
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Backdrop = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Backdrop, { ref, className: (0, import_class_variance_authority4.cx)("strata-dialog-backdrop", className), ...props }));
Backdrop.displayName = "DialogBackdrop";
var Popup = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Popup, { ref, className: (0, import_class_variance_authority4.cx)("strata-dialog-popup", className), ...props }));
Popup.displayName = "DialogPopup";
var Title = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Title, { ref, className: (0, import_class_variance_authority4.cx)("strata-dialog-title", className), ...props }));
Title.displayName = "DialogTitle";
var Description = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Description, { ref, className: (0, import_class_variance_authority4.cx)("strata-dialog-description", className), ...props }));
Description.displayName = "DialogDescription";
var Close = (0, import_react4.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dialog.Dialog.Close, { ref, className: (0, import_class_variance_authority4.cx)("strata-dialog-close", className), ...props }));
Close.displayName = "DialogClose";
var Dialog = {
  Root: import_dialog.Dialog.Root,
  Trigger: import_dialog.Dialog.Trigger,
  Portal: import_dialog.Dialog.Portal,
  Backdrop,
  Popup,
  Title,
  Description,
  Close
};

// src/components/Tabs.tsx
var import_tabs = require("@base-ui/react/tabs");
var import_class_variance_authority5 = require("class-variance-authority");
var import_react5 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var List = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tabs.Tabs.List, { ref, className: (0, import_class_variance_authority5.cx)("strata-tabs-list", className), ...props }));
List.displayName = "TabsList";
var Tab = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tabs.Tabs.Tab, { ref, className: (0, import_class_variance_authority5.cx)("strata-tabs-tab", className), ...props }));
Tab.displayName = "TabsTab";
var Panel = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tabs.Tabs.Panel, { ref, className: (0, import_class_variance_authority5.cx)("strata-tabs-panel", className), ...props }));
Panel.displayName = "TabsPanel";
var Indicator = (0, import_react5.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_tabs.Tabs.Indicator, { ref, className: (0, import_class_variance_authority5.cx)("strata-tabs-indicator", className), ...props }));
Indicator.displayName = "TabsIndicator";
var Tabs = {
  Root: import_tabs.Tabs.Root,
  List,
  Tab,
  Panel,
  Indicator
};

// src/components/Tooltip.tsx
var import_tooltip = require("@base-ui/react/tooltip");
var import_class_variance_authority6 = require("class-variance-authority");
var import_react6 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Popup2 = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_tooltip.Tooltip.Popup, { ref, className: (0, import_class_variance_authority6.cx)("strata-tooltip-popup", className), ...props }));
Popup2.displayName = "TooltipPopup";
var Arrow = (0, import_react6.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_tooltip.Tooltip.Arrow, { ref, className: (0, import_class_variance_authority6.cx)("strata-tooltip-arrow", className), ...props }));
Arrow.displayName = "TooltipArrow";
var Tooltip = {
  Provider: import_tooltip.Tooltip.Provider,
  Root: import_tooltip.Tooltip.Root,
  Trigger: import_tooltip.Tooltip.Trigger,
  Portal: import_tooltip.Tooltip.Portal,
  Positioner: import_tooltip.Tooltip.Positioner,
  Popup: Popup2,
  Arrow
};

// src/components/Badge.tsx
var import_class_variance_authority7 = require("class-variance-authority");
var import_react7 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var badge = (0, import_class_variance_authority7.cva)("strata-badge", {
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
var Badge = (0, import_react7.forwardRef)(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { ref, className: (0, import_class_variance_authority7.cx)(badge({ variant }), className), ...props })
);
Badge.displayName = "Badge";

// src/components/Select.tsx
var import_select = require("@base-ui/react/select");
var import_class_variance_authority8 = require("class-variance-authority");
var import_react8 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Trigger = (0, import_react8.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_select.Select.Trigger, { ref, className: (0, import_class_variance_authority8.cx)("strata-select-trigger", className), ...props }));
Trigger.displayName = "SelectTrigger";
var Value = (0, import_react8.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_select.Select.Value, { ref, className: (0, import_class_variance_authority8.cx)("strata-select-value", className), ...props }));
Value.displayName = "SelectValue";
var Popup3 = (0, import_react8.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_select.Select.Popup, { ref, className: (0, import_class_variance_authority8.cx)("strata-select-popup", className), ...props }));
Popup3.displayName = "SelectPopup";
var Item = (0, import_react8.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_select.Select.Item, { ref, className: (0, import_class_variance_authority8.cx)("strata-select-item", className), ...props }));
Item.displayName = "SelectItem";
var ItemText = (0, import_react8.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_select.Select.ItemText, { ref, className: (0, import_class_variance_authority8.cx)("strata-select-item-text", className), ...props }));
ItemText.displayName = "SelectItemText";
var ItemIndicator = (0, import_react8.forwardRef)(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
  import_select.Select.ItemIndicator,
  {
    ref,
    className: (0, import_class_variance_authority8.cx)("strata-select-item-indicator", className),
    ...props
  }
));
ItemIndicator.displayName = "SelectItemIndicator";
var Select = {
  Root: import_select.Select.Root,
  Label: import_select.Select.Label,
  Trigger,
  Value,
  Icon: import_select.Select.Icon,
  Portal: import_select.Select.Portal,
  Positioner: import_select.Select.Positioner,
  Popup: Popup3,
  List: import_select.Select.List,
  Item,
  ItemText,
  ItemIndicator,
  Group: import_select.Select.Group,
  GroupLabel: import_select.Select.GroupLabel,
  ScrollUpArrow: import_select.Select.ScrollUpArrow,
  ScrollDownArrow: import_select.Select.ScrollDownArrow,
  Arrow: import_select.Select.Arrow,
  Separator: import_select.Select.Separator,
  Backdrop: import_select.Select.Backdrop
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
  tokens
});
//# sourceMappingURL=index.cjs.map