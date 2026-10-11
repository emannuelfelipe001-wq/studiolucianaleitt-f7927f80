/** Shared browser/server upload policy. Originals are stored without retouching. */
export const MAX_CATALOG_IMAGE_BYTES = 50 * 1024 * 1024;
export const IMAGE_UPLOAD_ACCEPT = "image/*,.jpg,.jpeg,.jfif,.png,.webp,.gif,.avif,.bmp,.ico";

const imageTypes: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  jfif: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
  bmp: "image/bmp",
  ico: "image/x-icon",
};

export function catalogImageType(name: string, suppliedType: string): string {
  const extension = name.split(".").pop()?.toLowerCase() ?? "";
  const expected = imageTypes[extension];
  if (!expected) {
    throw new Error(
      "Use JPG, JPEG, PNG, WebP, GIF, AVIF, BMP ou ICO. Para HEIC ou TIFF, exporte como JPG ou PNG.",
    );
  }
  const type = suppliedType.toLowerCase();
  if (
    type &&
    type !== "application/octet-stream" &&
    type !== expected &&
    !(extension === "bmp" && type === "image/x-ms-bmp") &&
    !(extension === "ico" && type === "image/vnd.microsoft.icon")
  ) {
    throw new Error(
      "O formato da imagem não corresponde ao arquivo. Exporte como JPG ou PNG e tente novamente.",
    );
  }
  return expected;
}

export function validateCatalogImage(name: string, type: string, size: number): string {
  if (!Number.isSafeInteger(size) || size <= 0)
    throw new Error("Escolha uma imagem válida, não vazia.");
  if (size > MAX_CATALOG_IMAGE_BYTES) throw new Error("A foto deve ter no máximo 50 MB.");
  return catalogImageType(name, type);
}
