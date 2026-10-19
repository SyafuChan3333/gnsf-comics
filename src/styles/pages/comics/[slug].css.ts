import { ref } from "@/libs/cssToken";
import { style } from "@vanilla-extract/css";
import { fontSize, palette, radius, space, transition } from "@/styles/tokens.css";
import { unit } from "@/libs/unit";
import { createTransition } from "@/libs/cssTransition";

export const comicContainer = style({
  maxWidth: unit(800, "px"),
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: unit(1, "rem"),
  paddingBottom: unit(1, "rem"),
});

export const breadcrumb = style({
  marginBottom: ref(space.lg), // 1.5rem
});

export const breadcrumbLink = style({
  color: ref(palette.blue$500),
  textDecoration: "none",
  fontSize: ref(fontSize.sm), // 0.875rem vs 0.9rem – close
  fontWeight: 500,
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const comicHeader = style({
  textAlign: "center",
  borderBottomWidth: unit(1, "px"),
  borderBottomStyle: "solid",
  borderBottomColor: ref(palette.gray$200), // closest to #eee
  paddingBottom: ref(space.lg),
  marginBottom: ref(space.xl), // 2rem
});

export const headerBadge = style({
  display: "inline-block",
  backgroundColor: ref(palette.blue$500),
  color: ref(palette.background),
  fontSize: unit(0.8, "rem"),
  padding: `${unit(0.2, "rem")} ${unit(0.75, "rem")}`,
  borderRadius: ref(radius.md),
  marginBottom: unit(0.5, "rem"),
});

export const comicHeaderHeading = style({
  fontSize: unit(2, "rem"),
  marginTop: unit(0.25, "rem"),
  marginRight: unit(0, "px"),
  marginBottom: unit(0.5, "rem"),
  marginLeft: unit(0, "px"),
  color: ref(palette.gray$900),
});

export const comicHeaderDescription = style({
  color: ref(palette.gray$600),
  fontSize: unit(1, "rem"),
  lineHeight: 1.6,
  margin: unit(0, "px"),
});

/* クレジット＆ソーシャルリンクスタイル */
export const creditsSection = style({
  backgroundColor: ref(palette.gray$50),
  borderWidth: unit(1, "px"),
  borderStyle: "solid",
  borderColor: ref(palette.gray$200),
  borderRadius: ref(radius.md),
  padding: ref(space.lg),
  marginBottom: ref(space.x2l),
});

export const sectionTitle = style({
  fontSize: ref(fontSize.lg), // 1.125rem vs 1.1 – close
  color: ref(palette.gray$700),
  marginTop: unit(0, "px"),
  marginRight: unit(0, "px"),
  marginBottom: ref(space.md), // 1rem
  marginLeft: unit(0, "px"),
});

export const creatorsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: ref(space.md),
});

export const creatorCard = style({
  backgroundColor: ref(palette.background),
  borderRadius: ref(radius.sm),
  paddingTop: unit(1, "rem"),
  paddingBottom: unit(1, "rem"),
  paddingLeft: unit(1.25, "rem"),
  paddingRight: unit(1.25, "rem"),
  borderWidth: unit(1, "px"),
  borderStyle: "solid",
  borderColor: ref(palette.gray$300),
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.02)",
});

export const authorCard = style({
  borderLeftWidth: unit(4, "px"),
  borderLeftStyle: "solid",
  borderLeftColor: ref(palette.blue$500),
});

export const featuredCard = style({
  borderLeftWidth: unit(4, "px"),
  borderLeftStyle: "solid",
  borderLeftColor: "#38bdf8",
  backgroundColor: "#f0f9ff",
});

export const creatorRole = style({
  fontSize: ref(fontSize.xs),
  fontWeight: 600,
  color: ref(palette.gray$500),
  textTransform: "uppercase",
  marginBottom: ref(space.x2s),
});

export const creatorName = style({
  fontSize: unit(1.2, "rem"),
  marginTop: unit(0, "px"),
  marginRight: unit(0, "px"),
  marginBottom: ref(space.sm), // 0.75rem
  marginLeft: unit(0, "px"),
  color: ref(palette.gray$900),
});

export const socialLinks = style({
  display: "flex",
  flexWrap: "wrap",
  gap: ref(space.xs),
});

export const socialButton = style({
  display: "inline-flex",
  alignItems: "center",
  gap: unit(0.4, "rem"),
  backgroundColor: ref(palette.gray$900),
  color: ref(palette.background),
  textDecoration: "none",
  fontSize: unit(0.8, "rem"),
  padding: `${unit(0.4, "rem")} ${unit(0.8, "rem")}`,
  borderRadius: unit(6, "px"),
  transition: createTransition({
    backgroundColor: ref(transition.ease),
    transform: ref(transition.easeFast),
  }),
  selectors: {
    "&:hover": {
      backgroundColor: ref(palette.gray$700),
      transform: "translateY(-1px)",
    },
  },
});


export const featuredLink = style({
  backgroundColor: ref(palette.blue$500),
  selectors: {
    "&:hover": {
      backgroundColor: "#0369a1",
    },
  },
});


export const platformIcon = style({
  fontSize: unit(0.85, "rem"),
});