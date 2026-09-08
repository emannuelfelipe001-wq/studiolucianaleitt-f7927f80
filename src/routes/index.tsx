import { createFileRoute } from "@tanstack/react-router";
import { Benefits, Featured, Hero, InstagramArea } from "@/components/Sections";

const title = "Studio Luciana Leitte — Estética Facial em Goiânia";
const description =
  "Clínica de estética facial com protocolos personalizados: limpeza de pele, rejuvenescimento, hidratação, lábios e contorno. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Benefits />
      <Featured />
      <InstagramArea />
    </>
  );
}
