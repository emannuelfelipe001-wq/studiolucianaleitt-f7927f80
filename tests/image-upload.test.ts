import { expect, test } from "bun:test";
import { validateCatalogImage, MAX_CATALOG_IMAGE_BYTES } from "../src/lib/image-upload";

test("images larger than the previous 10 MB limit are accepted through 50 MB", () => {
  expect(MAX_CATALOG_IMAGE_BYTES).toBe(50 * 1024 * 1024);
  expect(validateCatalogImage("foto.jpg", "image/jpeg", 50 * 1024 * 1024)).toBe("image/jpeg");
  expect(() => validateCatalogImage("foto.jpg", "image/jpeg", 50 * 1024 * 1024 + 1)).toThrow();
});

test("JPG and PNG uploads are accepted", () => {
  expect(validateCatalogImage("foto.JPG", "image/jpeg", 200)).toBe("image/jpeg");
  expect(validateCatalogImage("foto.png", "image/png", 200)).toBe("image/png");
});

test("other browser-compatible formats and absent device MIME metadata are accepted", () => {
  for (const [extension, type] of Object.entries({webp: "image/webp", gif: "image/gif", avif: "image/avif", bmp: "image/bmp", ico: "image/x-icon", jfif: "image/jpeg"})) {
    expect(validateCatalogImage(`foto.${extension}`, "", 200)).toBe(type);
  }
});

test("non-images and mismatched types cannot obtain upload permission", () => {
  expect(() => validateCatalogImage("arquivo.html", "image/png", 200)).toThrow();
  expect(() => validateCatalogImage("foto.png", "text/html", 200)).toThrow();
  expect(() => validateCatalogImage("foto.jpg", "image/jpeg", 0)).toThrow();
});