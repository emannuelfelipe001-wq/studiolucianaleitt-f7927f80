import { createFileRoute } from "@tanstack/react-router";
import { LocationContact } from "@/components/Sections";

const title = "Contato e Localização — Studio Luciana Leitte";
const description =
  "Endereço, horários de atendimento e WhatsApp do Studio Luciana Leitte em Nova Crixás - GO.";

export const Route = createFileRoute("/contato")({
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
  component: ContatoPage,
});

function ContatoPage() {
  return <LocationContact as="h1" />;
}
