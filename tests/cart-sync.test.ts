import { expect, test } from "bun:test";
import { syncCartItems } from "../src/lib/cart-sync";

test("temporary catalog failure preserves saved selections", () => {
  const items = [{ id: "custom-procedure", qty: 2 }];
  expect(syncCartItems(items, new Set(["local-procedure"]), true)).toEqual(items);
});

test("confirmed catalog removes deleted procedures only", () => {
  expect(
    syncCartItems(
      [
        { id: "existing", qty: 2 },
        { id: "deleted", qty: 1 },
      ],
      new Set(["existing"]),
      false,
    ),
  ).toEqual([{ id: "existing", qty: 2 }]);
});
