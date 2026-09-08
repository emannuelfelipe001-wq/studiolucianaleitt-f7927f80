import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import { Featured } from "@/components/Sections";

const title = "Procedimentos Faciais — Studio Luciana Leitte";
const description =
  "Catálogo completo: extensão de cílios, design e brow lamination, micropigmentação, dermaplaning e perfurações. Busque, filtre e agende pelo WhatsApp.";

export const Route = createFileRoute("/catalogo")({
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
  component: CatalogoPage,
});

function CatalogoPage() {
  return (
    <>
      <Catalog as="h1" />
      <Featured />
    </>
  );
}
