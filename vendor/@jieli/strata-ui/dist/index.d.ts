import * as react from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as _base_ui_react from '@base-ui/react';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import { Select as Select$1 } from '@base-ui/react/select';

declare const button: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
declare function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>): react.JSX.Element;
declare function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>): react.JSX.Element;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

declare const Dialog: {
    Root: <Payload>(props: Dialog$1.Root.Props<Payload>) => React.JSX.Element;
    Trigger: Dialog$1.Trigger;
    Portal: react.ForwardRefExoticComponent<Omit<_base_ui_react.AlertDialogPortalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Backdrop: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogBackdropProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Popup: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogPopupProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Title: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogTitleProps, "ref"> & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
    Description: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogDescriptionProps, "ref"> & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;
    Close: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogCloseProps, "ref"> & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
};

declare const Tabs: {
    Root: react.ForwardRefExoticComponent<Omit<_base_ui_react.TabsRootProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    List: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.TabsListProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Tab: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.TabsTabProps, "ref"> & react.RefAttributes<HTMLElement>, "ref"> & react.RefAttributes<HTMLElement>>;
    Panel: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.TabsPanelProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Indicator: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.TabsIndicatorProps, "ref"> & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
};

declare const Tooltip: {
    Provider: react.FC<_base_ui_react.TooltipProviderProps>;
    Root: <Payload>(props: Tooltip$1.Root.Props<Payload>) => React.JSX.Element;
    Trigger: Tooltip$1.Trigger;
    Portal: react.ForwardRefExoticComponent<Omit<_base_ui_react.TooltipPortalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Positioner: react.ForwardRefExoticComponent<Omit<_base_ui_react.TooltipPositionerProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Popup: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.TooltipPopupProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Arrow: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.TooltipArrowProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const badge: (props?: ({
    variant?: "primary" | "default" | "outline" | "destructive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badge> {
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

declare const Select: {
    Root: typeof Select$1.Root;
    Label: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectLabelProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Trigger: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SelectTriggerProps, "ref"> & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
    Value: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SelectValueProps, "ref"> & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
    Icon: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectIconProps, "ref"> & react.RefAttributes<HTMLSpanElement>>;
    Portal: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectPortalProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Positioner: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectPositionerProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Popup: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SelectPopupProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    List: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectListProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Item: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SelectItemProps, "ref"> & react.RefAttributes<HTMLElement>, "ref"> & react.RefAttributes<HTMLElement>>;
    ItemText: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SelectItemTextProps, "ref"> & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
    ItemIndicator: react.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SelectItemIndicatorProps, "ref"> & react.RefAttributes<HTMLSpanElement>, "ref"> & react.RefAttributes<HTMLSpanElement>>;
    Group: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectGroupProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    GroupLabel: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectGroupLabelProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    ScrollUpArrow: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectScrollUpArrowProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    ScrollDownArrow: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectScrollDownArrowProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Arrow: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectArrowProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
    Separator: react.ForwardRefExoticComponent<_base_ui_react.SelectSeparatorProps & react.RefAttributes<HTMLDivElement>>;
    Backdrop: react.ForwardRefExoticComponent<Omit<_base_ui_react.SelectBackdropProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
};

declare const strata_color_primary_50 = "#eef4ff";
declare const strata_color_primary_100 = "#d9e6ff";
declare const strata_color_primary_500 = "#2563eb";
declare const strata_color_primary_600 = "#1d4ed8";
declare const strata_color_primary_700 = "#1e40af";
declare const strata_color_gray_50 = "#f8fafc";
declare const strata_color_gray_100 = "#f1f5f9";
declare const strata_color_gray_200 = "#e2e8f0";
declare const strata_color_gray_300 = "#cbd5e1";
declare const strata_color_gray_500 = "#64748b";
declare const strata_color_gray_700 = "#334155";
declare const strata_color_gray_900 = "#0f172a";
declare const strata_color_background = "#ffffff";
declare const strata_color_foreground = "#0f172a";
declare const strata_color_muted = "#f1f5f9";
declare const strata_color_muted_foreground = "#64748b";
declare const strata_color_border = "#e2e8f0";
declare const strata_color_accent = "#2563eb";
declare const strata_color_accent_foreground = "#ffffff";
declare const strata_color_destructive = "#dc2626";
declare const strata_space_1 = "4px";
declare const strata_space_2 = "8px";
declare const strata_space_3 = "12px";
declare const strata_space_4 = "16px";
declare const strata_space_5 = "20px";
declare const strata_space_6 = "24px";
declare const strata_space_8 = "32px";
declare const strata_radius_sm = "6px";
declare const strata_radius_md = "10px";
declare const strata_radius_lg = "14px";
declare const strata_radius_full = "9999px";
declare const strata_font_sans = "ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif";
declare const strata_font_size_sm = "0.875rem";
declare const strata_font_size_base = "1rem";
declare const strata_font_size_lg = "1.125rem";
declare const strata_font_size_xl = "1.5rem";
declare const strata_font_weight_medium = "500";
declare const strata_font_weight_semibold = "600";
declare const strata_shadow_sm = "0 1px 2px rgb(0 0 0 / 0.05)";
declare const strata_shadow_md = "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";

declare const tokens_strata_color_accent: typeof strata_color_accent;
declare const tokens_strata_color_accent_foreground: typeof strata_color_accent_foreground;
declare const tokens_strata_color_background: typeof strata_color_background;
declare const tokens_strata_color_border: typeof strata_color_border;
declare const tokens_strata_color_destructive: typeof strata_color_destructive;
declare const tokens_strata_color_foreground: typeof strata_color_foreground;
declare const tokens_strata_color_gray_100: typeof strata_color_gray_100;
declare const tokens_strata_color_gray_200: typeof strata_color_gray_200;
declare const tokens_strata_color_gray_300: typeof strata_color_gray_300;
declare const tokens_strata_color_gray_50: typeof strata_color_gray_50;
declare const tokens_strata_color_gray_500: typeof strata_color_gray_500;
declare const tokens_strata_color_gray_700: typeof strata_color_gray_700;
declare const tokens_strata_color_gray_900: typeof strata_color_gray_900;
declare const tokens_strata_color_muted: typeof strata_color_muted;
declare const tokens_strata_color_muted_foreground: typeof strata_color_muted_foreground;
declare const tokens_strata_color_primary_100: typeof strata_color_primary_100;
declare const tokens_strata_color_primary_50: typeof strata_color_primary_50;
declare const tokens_strata_color_primary_500: typeof strata_color_primary_500;
declare const tokens_strata_color_primary_600: typeof strata_color_primary_600;
declare const tokens_strata_color_primary_700: typeof strata_color_primary_700;
declare const tokens_strata_font_sans: typeof strata_font_sans;
declare const tokens_strata_font_size_base: typeof strata_font_size_base;
declare const tokens_strata_font_size_lg: typeof strata_font_size_lg;
declare const tokens_strata_font_size_sm: typeof strata_font_size_sm;
declare const tokens_strata_font_size_xl: typeof strata_font_size_xl;
declare const tokens_strata_font_weight_medium: typeof strata_font_weight_medium;
declare const tokens_strata_font_weight_semibold: typeof strata_font_weight_semibold;
declare const tokens_strata_radius_full: typeof strata_radius_full;
declare const tokens_strata_radius_lg: typeof strata_radius_lg;
declare const tokens_strata_radius_md: typeof strata_radius_md;
declare const tokens_strata_radius_sm: typeof strata_radius_sm;
declare const tokens_strata_shadow_md: typeof strata_shadow_md;
declare const tokens_strata_shadow_sm: typeof strata_shadow_sm;
declare const tokens_strata_space_1: typeof strata_space_1;
declare const tokens_strata_space_2: typeof strata_space_2;
declare const tokens_strata_space_3: typeof strata_space_3;
declare const tokens_strata_space_4: typeof strata_space_4;
declare const tokens_strata_space_5: typeof strata_space_5;
declare const tokens_strata_space_6: typeof strata_space_6;
declare const tokens_strata_space_8: typeof strata_space_8;
declare namespace tokens {
  export { tokens_strata_color_accent as strata_color_accent, tokens_strata_color_accent_foreground as strata_color_accent_foreground, tokens_strata_color_background as strata_color_background, tokens_strata_color_border as strata_color_border, tokens_strata_color_destructive as strata_color_destructive, tokens_strata_color_foreground as strata_color_foreground, tokens_strata_color_gray_100 as strata_color_gray_100, tokens_strata_color_gray_200 as strata_color_gray_200, tokens_strata_color_gray_300 as strata_color_gray_300, tokens_strata_color_gray_50 as strata_color_gray_50, tokens_strata_color_gray_500 as strata_color_gray_500, tokens_strata_color_gray_700 as strata_color_gray_700, tokens_strata_color_gray_900 as strata_color_gray_900, tokens_strata_color_muted as strata_color_muted, tokens_strata_color_muted_foreground as strata_color_muted_foreground, tokens_strata_color_primary_100 as strata_color_primary_100, tokens_strata_color_primary_50 as strata_color_primary_50, tokens_strata_color_primary_500 as strata_color_primary_500, tokens_strata_color_primary_600 as strata_color_primary_600, tokens_strata_color_primary_700 as strata_color_primary_700, tokens_strata_font_sans as strata_font_sans, tokens_strata_font_size_base as strata_font_size_base, tokens_strata_font_size_lg as strata_font_size_lg, tokens_strata_font_size_sm as strata_font_size_sm, tokens_strata_font_size_xl as strata_font_size_xl, tokens_strata_font_weight_medium as strata_font_weight_medium, tokens_strata_font_weight_semibold as strata_font_weight_semibold, tokens_strata_radius_full as strata_radius_full, tokens_strata_radius_lg as strata_radius_lg, tokens_strata_radius_md as strata_radius_md, tokens_strata_radius_sm as strata_radius_sm, tokens_strata_shadow_md as strata_shadow_md, tokens_strata_shadow_sm as strata_shadow_sm, tokens_strata_space_1 as strata_space_1, tokens_strata_space_2 as strata_space_2, tokens_strata_space_3 as strata_space_3, tokens_strata_space_4 as strata_space_4, tokens_strata_space_5 as strata_space_5, tokens_strata_space_6 as strata_space_6, tokens_strata_space_8 as strata_space_8 };
}

export { Badge, type BadgeProps, Button, type ButtonProps, Card, CardDescription, type CardProps, CardTitle, Dialog, Input, type InputProps, Select, Tabs, Tooltip, tokens };
