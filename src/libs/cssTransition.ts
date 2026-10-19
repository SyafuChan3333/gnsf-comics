import type { CSSProperties } from "react";
import { camelToKebab } from "@/libs/textUtils";

type TransitionConfig = {
    [Property in keyof CSSProperties]: string;
};
export const createTransition = (config: TransitionConfig) => Object.entries(config).map(([key, val]) => `${camelToKebab(key)} ${val}`).join(", ");
