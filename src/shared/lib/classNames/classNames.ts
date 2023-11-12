type Mods = Record<string, boolean | string>

export function classNames (
  cls: string,
  mods?: Mods,
  additional?: string[]
): string {
  return [
    cls,
    ...(additional ? additional.filter((item) => Boolean(item)) : []),
    ...(mods
      ? Object.entries(mods)
        .filter(([_, entry]) => Boolean(entry))
        .map(([className]) => className)
      : [])
  ].join(' ')
}
