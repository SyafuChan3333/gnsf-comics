import { declareTokens, token } from "@/libs/cssToken";
import { color } from "@/libs/colorStr";
import { unit } from "@/libs/unit";

/* カラートークン */
export const palette = {
  blue$500: token("blue-500", color("#0284c7")),
  gray$50: token("gray-50", color("#f8fafc")),
  gray$100: token("gray-100", color("#f1f5f9")),
  gray$200: token("gray-200", color("#e2e8f0")),
  gray$300: token("gray-300", color("#cbd5e1")),
  gray$400: token("gray-400", color("#94a3b8")),
  gray$500: token("gray-500", color("#64748b")),
  gray$600: token("gray-600", color("#475569")),
  gray$700: token("gray-700", color("#334155")),
  gray$800: token("gray-800", color("#1e293b")),
  gray$900: token("gray-900", color("#0f172a")),
  overlay: token("overlay", color("rgba(0 0 0 / 0.75)")),
  background: token("background", color("#ffffff")),
  background$50: token("background-50", color("#fafafa")),
  background$100: token("background-100", color("#eaeaea")),
  foreground: token("foreground", color("#222")),
};

/* スペーストークン */
export const space = {
  x2s: token("space-2xs", unit(0.25, "rem")),
  xs: token("space-xs", unit(0.5, "rem")),
  sm: token("space-sm", unit(0.75, "rem")),
  md: token("space-md", unit(1, "rem")),
  lg: token("space-lg", unit(1.5, "rem")),
  xl: token("space-xl", unit(2, "rem")),
  x2l: token("space-2xl", unit(2.5, "rem")),
};

/* フォントサイズトークン */
export const fontSize = {
  xs: token("font-size-xs", unit(0.75, "rem")),
  sm: token("font-size-sm", unit(0.875, "rem")),
  base: token("font-size-base", unit(0.95, "rem")),
  lg: token("font-size-lg", unit(1.125, "rem")),
  xl: token("font-size-xl", unit(1.3, "rem")),
  x2l: token("font-size-2xl", unit(1.5, "rem")),
  x3l: token("font-size-3xl", unit(2, "rem")),
};

/* ボーダーラディアス */
export const radius = {
  xs: token("radius-xs", unit(4, "px")),
  sm: token("radius-sm", unit(8, "px")),
  md: token("radius-md", unit(12, "px")),
  lg: token("radius-lg", unit(20, "px")),
  pill: token("radius-pill", unit(30, "px")),
};

/* シャドウ */
export const shadow = {
  sm: token("shadow-sm", "0 2px 10px rgba(0,0,0,0.06)"),
  md: token("shadow-md", "0 4px 20px rgba(0,0,0,0.08)"),
  lg: token("shadow-lg", "0 2px 6px rgba(2,132,199,0.3)"),
};

export const transition = {
  easeFast: token("transition-ease-fast", `${unit(0.1, "s")} ease`),
  ease: token("transition-ease", `${unit(0.2, "s")} ease`),
}

export const border = {
  default: token("border-default", `${unit(1, "px")} solid`),
}

export const width = {
  mainContent: token("width-main-content", unit(960, "px")),
}

declareTokens(":root", [
  ...Object.values(palette),
  ...Object.values(space),
  ...Object.values(fontSize),
  ...Object.values(radius),
  ...Object.values(shadow),
  ...Object.values(transition),
  ...Object.values(border),
]);
