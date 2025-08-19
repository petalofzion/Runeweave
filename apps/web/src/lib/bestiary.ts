import type { Folio } from "@runeweave/core/src/types";

export function countFoliosByModel(
  folios: Pick<Folio, "model">[],
): Record<string, number> {
  return folios.reduce<Record<string, number>>((acc, { model }) => {
    acc[model] = (acc[model] ?? 0) + 1;
    return acc;
  }, {});
}
