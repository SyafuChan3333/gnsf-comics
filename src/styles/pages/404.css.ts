import { ref } from "@/libs/cssToken";
import { style } from "@vanilla-extract/css";
import { palette, space, transition } from "../tokens.css";
import { unit } from "@/libs/unit";
import { createTransition } from "@/libs/cssTransition";

export const errorContainer = style({
  textAlign: "center",
  padding: `${unit(4, "rem")} ${unit(2, "rem")}`,
  maxWidth: unit(600, "px"),
  marginLeft: "auto",
  marginRight: "auto",
});

export const errorHeading = style({
  fontSize: unit(6, "rem"),
  marginBottom: ref(space.md),
  color: ref(palette.blue$500),
  lineHeight: 1,
});

export const errorParagraph = style({
  marginBottom: ref(space.xl),
  color: ref(palette.gray$600),
  fontSize: unit(1.25, "rem"),
});

export const errorLinks = style({
  display: "flex",
  gap: ref(space.md),
  justifyContent: "center",
  flexWrap: "wrap",
});

export const btn = style({
  display: "inline-block",
  padding: `${unit(0.75, "rem")} ${unit(1.5, "rem")}`,
  backgroundColor: ref(palette.blue$500),
  color: ref(palette.background),
  textDecoration: "none",
  borderRadius: unit(6, "px"),
  fontWeight: "bold",
  transition: createTransition({
    background: ref(transition.ease),
  }),
  selectors: {
    "&:hover": {
      backgroundColor: "#0369a1",
    },
  },
});
