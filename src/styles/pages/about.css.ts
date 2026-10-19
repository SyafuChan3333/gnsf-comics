import { ref } from "@/libs/cssToken";
import { createVar, style } from "@vanilla-extract/css";
import { border, fontSize, palette, radius, space } from "@/styles/tokens.css";
import { unit } from "@/libs/unit";
import { color } from "@/libs/colorStr";

const aboutContainerW = createVar();
const avatarRadius = createVar();
const xComColor = createVar();
const pixivColor = createVar();
const profileBreakpoint = unit(500, "px");

const pageVariables = {
  [aboutContainerW]: unit(680, "px"),
  [avatarRadius]: unit(50, "px"),
  [xComColor]: color("#000"),
  [pixivColor]: color("#0080ff"),
}

export const aboutPage = style({
  vars: pageVariables,
})

export const aboutContainer = style({
  maxWidth: aboutContainerW,
  marginLeft: "auto",
  marginRight: "auto",
});

export const breadcrumb = style({
  marginBottom: ref(space.lg),
});

export const breadcrumbLink = style({
  color: ref(palette.blue$500),
  textDecoration: "none",
  fontSize: ref(fontSize.sm),
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const aboutHeaderHeading = style({
  fontSize: ref(fontSize.x3l),
  marginBottom: ref(space.lg),
});

export const profileCard = style({
  display: "flex",
  gap: ref(space.lg),
  backgroundColor: ref(palette.background),
  padding: ref(space.lg),
  borderRadius: ref(radius.md),
  border: `${ref(border.xs)} ${ref(palette.gray$200)}`,
  alignItems: "center",
  marginBottom: ref(space.xl),
  "@media": {
    [`(max-width: ${profileBreakpoint})`]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },
});

export const avatar = style({
  width: `calc(${avatarRadius} * 2)`,
  height: `calc(${avatarRadius} * 2)`,
  borderRadius: avatarRadius,
  objectFit: "cover",
});

export const profileHeading = style({
  margin: `${unit(0, "px")} ${unit(0, "px")} ${unit(0.25, "rem")} ${unit(0, "px")}`,
  fontSize: ref(fontSize.xl),
});

export const tagline = style({
  color: ref(palette.gray$600),
  fontSize: ref(fontSize.sm),
  marginBottom: ref(space.sm),
});

export const bio = style({
  fontSize: ref(fontSize.sm),
  color: ref(palette.gray$600),
  lineHeight: 1.6,
  margin: unit(0, "px"),
});

export const aboutSection = style({
  backgroundColor: ref(palette.background),
  padding: ref(space.lg),
  borderRadius: ref(radius.md),
  border: `${ref(border.xs)} ${ref(palette.gray$200)}`,
  marginBottom: ref(space.lg),
});

export const aboutSectionHeading = style({
  fontSize: ref(fontSize.lg),
  margin: 0,
  marginBottom: ref(space.md),
  paddingBottom: ref(space.xs),
  borderBottom: `${ref(border.sm)} ${ref(palette.gray$100)}`,
});

export const snsLinks = style({
  display: "flex",
  gap: ref(space.md),
});

export const snsButton = style({
  display: "inline-block",
  padding: `${unit(0.6, "rem")} ${unit(1.2, "rem")}`,
  borderRadius: unit(6, "px"),
  textDecoration: "none",
  fontSize: ref(fontSize.sm),
  fontWeight: "bold",
  color: ref(palette.background),
  backgroundColor: ref(palette.gray$700),
});

export const xButton = style({
  backgroundColor: xComColor,
});

export const pixivButton = style({
  backgroundColor: pixivColor,
});