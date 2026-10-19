export type NumString = `${number}`;
const numberRegex = /[+-]?([0-9]+\.)?[0-9]+([Ee][+-]?[0-9]+)?/;
export const isNumString = ((cachedPattern: RegExp) => (str: string): str is NumString => cachedPattern.test(str))(new RegExp(`^${numberRegex.source}$`));

declare const unitBrand: unique symbol;
export type Unit<U extends string, V extends NumString> = `${V}${U}` & { [unitBrand]: { unit: U; value: V; } };
export const unit = <V extends number | NumString, U extends string>(value: V, unit: U) => `${value}${unit}` as Unit<U, V extends number ? `${V}` : V>;
const unitRegex = new RegExp(`^(?<value>${numberRegex.source})(?<unit>[^0-9\.].*)`);
export const unitToObj = <U extends string, V extends NumString>(unitStr: Unit<U, V>) => {
    const match = unitRegex.exec(unitStr);
    if (!match) throw new Error("invalid unit value");
    const { unit, value } = match.groups as Record<"unit" | "value", string>
    return { unit: unit as U, value: Number(value) };
}
export const objToUnit = <U extends string, V extends number | NumString>(unitObj: { unit: U; value: V; }) => {
    return `${unitObj.value}${unitObj.unit}` as Unit<U, V extends number ? `${V}` : V>;
}

export const calc = <R extends number, U extends string>(fn: (n: number) => R, value: Unit<U, NumString>) => {
    const obj = unitToObj(value);
    obj.value = fn(obj.value);
    return objToUnit(obj) as Unit<U, `${R}`>;
}

export const scale = <U extends string>(f: number, value: Unit<U, NumString>) => calc(n => n * f, value);