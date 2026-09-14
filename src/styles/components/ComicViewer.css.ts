import { style } from "@vanilla-extract/css";
import { ref } from "@/libs/cssToken";
import { palette, space, fontSize, radius, shadow } from "@/styles/tokens.css";

/* ビューアーセクション */
export const viewerSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const episodeSelector = style({
  width: "100%",
  marginBottom: ref(space.lg),
  textAlign: "center",
});

export const episodeSelectorTitle = style({
  fontSize: ref(fontSize.base),
  color: ref(palette.gray$500),
  marginBottom: ref(space.sm),
});

export const episodeSelectorButtons = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: ref(space.xs),
});

export const episodeButton = style({
  background: ref(palette.background),
  border: `1px solid ${ref(palette.purple$200)}`,
  color: ref(palette.gray$700),
  padding: `${ref(space.xs)} ${ref(space.md)}`,
  borderRadius: ref(radius.lg),
  cursor: "pointer",
  fontSize: ref(fontSize.sm),
  fontWeight: 500,
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: ref(palette.blue$500),
      color: ref(palette.blue$500),
    },
    "&.active": {
      background: ref(palette.blue$500),
      borderColor: ref(palette.blue$500),
      color: ref(palette.background),
      fontWeight: "bold",
      boxShadow: ref(shadow.lg),
    },
  },
});

export const episodeTitle = style({
  fontSize: ref(fontSize.xl),
  color: ref(palette.gray$800),
  marginBottom: ref(space.lg),
});

/* 4コマ漫画画像表示 */
export const mangaViewer = style({
  width: "100%",
  height: "fit-content",
  maxWidth: "550px",
  background: ref(palette.background),
  borderRadius: ref(radius.md),
  boxShadow: ref(shadow.md),
  overflow: "hidden",
  marginBottom: ref(space.xl),
  border: `1px solid ${ref(palette.gray$200)}`,
  position: "relative",
});

export const mangaPanel = style({
  width: "100%",
  display: "block",
  selectors: {
    "&.active": {
      position: "relative",
      zIndex: 2,
    },
    "&.hidden": {
      display: "none",
    },
    "&.prev, &.next": {
      visibility: "hidden",
      position: "absolute",
      zIndex: 1,
      top: 0,
    },
    "&.prev": {
      right: 0,
    },
    "&.next": {
      left: 0,
    },
  },
});

export const mangaImage = style({
  width: "100%",
  height: "auto",
  display: "block",
  margin: "0 auto",
});

/* 下部ナビゲーションコントロール */
export const navigationControls = style({
  display: "flex",
  alignItems: "center",
  gap: ref(space.lg),
  background: ref(palette.background),
  padding: `${ref(space.sm)} ${ref(space.lg)}`,
  borderRadius: ref(radius.pill),
  boxShadow: ref(shadow.sm),
  border: `1px solid ${ref(palette.gray$200)}`,
});

export const navigationButton = style({
  padding: `${ref(space.xs)} ${ref(space.lg)}`,
  borderRadius: ref(radius.pill),
  border: `1px solid ${ref(palette.blue$500)}`,
  background: ref(palette.background),
  color: ref(palette.blue$500),
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: ref(fontSize.sm),
  transition: "all 0.2s ease",
  selectors: {
    "&:hover:not(:disabled)": {
      background: ref(palette.blue$500),
      color: ref(palette.background),
    },
    "&:disabled": {
      borderColor: ref(palette.gray$400),
      color: ref(palette.gray$400),
      cursor: "not-allowed",
    },
  },
});

export const episodeIndicator = style({
  fontSize: ref(fontSize.base),
  color: ref(palette.gray$600),
  fontWeight: "600",
});