import type { Property } from "csstype";

export const color = <C extends Property.Color>(v: C) => v;