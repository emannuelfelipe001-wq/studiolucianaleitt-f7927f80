export type SavedCartItem = { id: string; qty: number };

export function syncCartItems(
  items: SavedCartItem[],
  validIds: Set<string>,
  isFallback: boolean,
): SavedCartItem[] {
  return isFallback ? items : items.filter((item) => validIds.has(item.id));
}
