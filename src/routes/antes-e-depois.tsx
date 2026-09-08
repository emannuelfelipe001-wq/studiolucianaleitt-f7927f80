import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/components/Sections";

const title = "Antes e Depois — Studio Luciana Leitte";
const description =
  "Galeria de resultados de estética facial do Studio Luciana Leitte. Imagens demonstrativas, substituídas por fotos reais com autorização.";

export const Route = createFileRoute("/antes-e-depois")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BeforeAfterPage,
});

function BeforeAfterPage() {
  return <BeforeAfter as="h1" />;
}
