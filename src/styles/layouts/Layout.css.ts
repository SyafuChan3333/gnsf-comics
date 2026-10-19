import { ref } from "@/libs/cssToken";
import { unit } from "@/libs/unit";
import { style } from "@vanilla-extract/css";
import { border, fontSize, palette, space, width } from "@/styles/tokens.css";

const full = unit(100, "%");

export const base = style({
    margin: 0,
    padding: 0,
    width: full,
    minHeight: unit(100, "vh"),
    display: "flex",
    flexDirection: "column",
    backgroundColor: ref(palette.background$50),
    color: ref(palette.foreground),
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
    ],
});

export const header = style({
    background: ref(palette.background),
    borderBottom: `${ref(border.default)} ${ref(palette.background$100)}`,
    zIndex: 100,
});

export const headerContainer = style({
    maxWidth: ref(width.mainContent),
    margin: `0 auto`,
    padding: `${ref(space.sm)} ${ref(space.md)}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export const siteTitle = style({
    fontSize: ref(fontSize.xl),
    fontWeight: "bold",
    color: ref(palette.gray$900),
    textDecoration: "none",
});

export const navigationLink = style({
    marginLeft: ref(space.md),
    color: ref(palette.gray$600),
    textDecoration: "none",
    fontSize: ref(fontSize.base),
    selectors: {
        "&:hover": {
            color: ref(palette.foreground),
        },
    },
});

export const mainContent = style({
    flex: 1,
    maxWidth: ref(width.mainContent),
    width: full,
    margin: `0 auto`,
    padding: `${ref(space.lg)} ${ref(space.md)}`,
    boxSizing: "border-box",
});