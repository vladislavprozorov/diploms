type Mods = Record<string, boolean | string>;
const obj: Mods = {
  vladiksl: true,
};
export function classNames(cls: string, mods: Mods, additional: string[]) {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
} // mods - объект с модами. как ключ название флага как значие булево. если флаг - тру клас добавляем иначе удаляем

classNames('remove-btn', { hovered: true, selectable: true, red: false }, [
  'pdg',
]);
