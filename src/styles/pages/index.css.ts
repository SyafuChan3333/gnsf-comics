import { ref } from "@/libs/cssToken";
import { createVar, style } from "@vanilla-extract/css";
import { border, fontSize, palette, radius, shadow, space, transition } from "@/styles/tokens.css";
import { calc, scale, unit } from "@/libs/unit";
import { createTransition } from "@/libs/cssTransition";

const full = unit(100, "%");
const base = unit(4, "px");

const cardMinW = createVar();

const pageVariables = {
    [cardMinW]: unit(280, "px"),
};

export const indexPage = style({
    vars: pageVariables
})

export const hero = style({
    textAlign: "center",
    marginBottom: ref(space.x2l),
    padding: `${ref(space.lg)} 0`,
});

export const heroHeading = style({
    color: ref(palette.gray$900),
    fontSize: ref(fontSize.x4l),
    marginBottom: ref(space.xs),
});

export const heroParagraph = style({
    color: ref(palette.gray$600),
    fontSize: ref(fontSize.lg),
    margin: "0 auto",
});

export const comicGrid = style({
    display: "grid",
    gridTemplateColumns: `repeat(auto-fill, minmax(${cardMinW}, 1fr))`,
    gap: ref(space.lg),
});

export const comicCard = style({
    background: ref(palette.background),
    borderRadius: ref(radius.md),
    overflow: "hidden",
    boxShadow: ref(shadow.sm),
    transition: createTransition({
        transform: ref(transition.ease),
        boxShadow: ref(transition.ease),
    }),
    border: `${ref(border.xs)} ${ref(palette.gray$200)}`,

    selectors: {
        "&:hover": {
            transform: `translateY(${scale(-1, base)})`,
            boxShadow: ref(shadow.md),
        }
    }
});

export const cardLink = style({
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    height: full,
});

export const cardImageWrapper = style({
    position: "relative",
    width: full,
    paddingTop: calc(n => n*3/5, full),
    background: ref(palette.gray$100),
});

export const cardImage = style({
    position: "absolute",
    top: 0,
    left: 0,
    width: full,
    height: full,
    objectFit: "contain",
    boxSizing: "border-box",
    padding: ref(space.xs),
    background: ref(palette.gray$100),
});

export const cardBadge = style({
    position: "absolute",
    top: ref(space.sm),
    right: ref(space.sm),
    background: ref(palette.overlay),
    color: ref(palette.background),
    fontSize: ref(fontSize.xs),
    padding: `${ref(space.x2s)} ${ref(space.xs)}`,
    borderRadius: ref(radius.lg),
    backdropFilter: `blur(${base})`,
});

export const cardContent = style({
    padding: ref(space.lg),
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
});

export const comicTitle = style({
    fontSize: ref(fontSize.lg),
    margin: 0,
    marginBottom: ref(space.xs),
    color: ref(palette.gray$900),
});

export const comicDescription = style({
    fontSize: ref(fontSize.sm),
    color: ref(palette.gray$600),
    lineHeight: 1.5,
    margin: 0,
    marginBottom: ref(space.md),
    flexGrow: 1,
});

export const featuringBadgeList = style({
    display: "flex",
    flexWrap: "wrap",
    gap: ref(space.x2s),
    marginBottom: ref(space.sm),
});

export const featuringTag = style({
    fontSize: ref(fontSize.xs),
    background: ref(palette.gray$200),
    color: ref(palette.blue$500),
    padding: `${ref(space.x2s)} ${ref(space.xs)}`,
    borderRadius: ref(radius.xs),
    fontWeight: "bold",
});

export const cardMeta = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: ref(fontSize.sm),
    color: ref(palette.gray$500),
    paddingTop: ref(space.sm),
    borderTop: `${ref(border.xs)} ${ref(palette.gray$200)}`,
});

export const readButton = style({
    color: ref(palette.blue$500),
    fontWeight: "bold",
})