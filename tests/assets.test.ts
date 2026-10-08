import { describe, expect, test } from "bun:test";
import { resolveAssetUrl, parseDuration, formatDuration } from "../src/lib/utils";
import { projectAssetUrls } from "../src/lib/asset-urls";

describe("catalog image resolution", () => {
  test("old hostname and deleted asset ID use the current project image", () => {
    expect(resolveAssetUrl("https://studiolucianaleitt.lovable.app/__l5e/assets-v1/deleted/fox-eyes.jpg"))
      .toBe(projectAssetUrls["fox-eyes.jpg"]);
  });
  test("old relative asset ID uses the current image", () => {
    expect(resolveAssetUrl("/__l5e/assets-v1/deleted/bijuteria-10811.jpg"))
      .toBe(projectAssetUrls["bijuteria-10811.jpg"]);
  });
  test("admin photo uploads remain unchanged", () => {
    const upload = "/api/public/catalog-image?path=catalog-123.jpeg";
    expect(resolveAssetUrl(upload)).toBe(upload);
  });
  test("third-party images are not replaced", () => {
    const external = "https://example.com/__l5e/assets-v1/123/fox-eyes.jpg";
    expect(resolveAssetUrl(external)).toBe(external);
  });
});

test("two 1h 30min procedures total 3 hours", () => {
  expect(formatDuration(parseDuration("1h 30min") * 2)).toBe("3h");
});