import { ref } from "@/libs/cssToken";
import { style } from "@vanilla-extract/css";
import { fontSize, palette, radius, space } from "../tokens.css";
import { unit } from "@/libs/unit";

export const aboutContainer = style({
  maxWidth: unit(680, "px"),
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
});

export const breadcrumbLinkHover = style({
  selectors: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
});

export const aboutHeaderHeading = style({
  fontSize: unit(1.8, "rem"),
  marginBottom: ref(space.lg),
});

export const profileCard = style({
  display: "flex",
  gap: ref(space.lg),
  backgroundColor: ref(palette.background),
  padding: ref(space.lg),
  borderRadius: ref(radius.md),
  borderWidth: unit(1, "px"),
  borderStyle: "solid",
  borderColor: ref(palette.gray$200),
  alignItems: "center",
  marginBottom: ref(space.xl),
  "@media": {
    "(max-width: 500px)": {
      flexDirection: "column",
      textAlign: "center",
    },
  },
});

export const avatar = style({
  width: unit(100, "px"),
  height: unit(100, "px"),
  borderRadius: "50%",
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
  borderWidth: unit(1, "px"),
  borderStyle: "solid",
  borderColor: ref(palette.gray$200),
  marginBottom: ref(space.lg),
});

export const aboutSectionHeading = style({
  fontSize: ref(fontSize.lg),
  margin: 0,
  marginBottom: ref(space.md),
  paddingBottom: ref(space.xs),
  borderBottomWidth: unit(2, "px"),
  borderBottomStyle: "solid",
  borderBottomColor: ref(palette.gray$100),
});

export const aboutSectionList = style({
  margin: unit(0, "px"),
  paddingLeft: unit(1.2, "rem"),
  color: ref(palette.gray$600),
  fontSize: ref(fontSize.sm),
  lineHeight: 1.8,
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
  backgroundColor: "#000",
});

export const pixivButton = style({
  backgroundColor: ref(palette.blue$500),
});