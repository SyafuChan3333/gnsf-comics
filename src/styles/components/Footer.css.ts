import { ref } from "@/libs/cssToken";
import { style } from "@vanilla-extract/css";
import { fontSize, palette, space } from "../tokens.css";
import { unit } from "@/libs/unit";

export const footer = style({
  backgroundColor: ref(palette.background),
  borderTopWidth: unit(1, "px"),
  borderTopStyle: "solid",
  borderTopColor: ref(palette.gray$200), // closest to #e5e5e8
  padding: `${ref(space.xl)} ${ref(space.md)} ${ref(space.md)}`,
  marginTop: "auto",
  color: ref(palette.gray$900),
  fontFamily: "sans-serif",
});

export const footerContainer = style({
  maxWidth: unit(900, "px"),
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: ref(space.lg),
});

export const profileSection = style({
  maxWidth: unit(400, "px"),
});

export const profileHeading = style({
  margin: `${unit(0, "px")} ${unit(0, "px")} ${ref(space.xs)} ${unit(0, "px")}`,
  fontSize: ref(fontSize.lg), // 1.125rem vs 1.1rem – close enough
});

export const profileBio = style({
  margin: unit(0, "px"),
  fontSize: ref(fontSize.sm), // 0.875rem vs 0.9rem – close
  color: ref(palette.gray$600), // closest to #666
  lineHeight: 1.5,
});

export const linksSection = style({
  display: "flex",
  gap: ref(space.md),
  alignItems: "center",
});

export const link = style({
  color: ref(palette.blue$500),
  textDecoration: "none",
  fontSize: ref(fontSize.sm),
});

export const linkHover = style({
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const copyright = style({
  textAlign: "center",
  fontSize: ref(fontSize.xs), // 0.75rem vs 0.8rem – close
  color: ref(palette.gray$600), // using gray$600 as secondary; could adjust if needed
  marginTop: ref(space.xl),
  paddingTop: ref(space.md),
  borderTopWidth: unit(1, "px"),
  borderTopStyle: "solid",
  borderTopColor: ref(palette.gray$200),
});