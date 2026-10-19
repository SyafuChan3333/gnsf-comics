export const camelToKebab = (s: string) => s.replace(/([A-Z])/g, "-$1").toLowerCase();
