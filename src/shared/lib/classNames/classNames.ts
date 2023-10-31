type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods?: Mods,
  additional?: string[],
): string {
  return [
    cls,
    ...additional.filter((item) => Boolean(item)),
    ...Object.entries(mods)
      .filter(([entry]) => Boolean(entry[1]))
      .map(([className]) => className),
  ].join(" ");
}
