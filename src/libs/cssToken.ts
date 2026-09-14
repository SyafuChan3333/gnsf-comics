import { globalStyle } from "@vanilla-extract/css";

export type CssToken<I extends string, V extends string> = { ident: I; value: V }
export const token = <I extends string, V extends string>(ident: I, value: V) => ({ ident, value });
export const cssVarName = <I extends string>(tok: CssToken<I, string>) => `--${tok.ident}` as const;
export const ref = <I extends string>(tok: CssToken<I, string>) => `var(${cssVarName(tok)})` as const;
export const declareTokens = (selector: string, tokens: CssToken<string, string>[]) => {
    return globalStyle(selector, { vars: Object.fromEntries(tokens.map((tok => [cssVarName(tok), tok.value]))) });
}