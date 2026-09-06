import { createFileRoute } from "@tanstack/react-router";
import { Catalog } from "@/components/Catalog";
import {
  About,
  BeforeAfter,
  Benefits,
  Faq,
  Featured,
  Hero,
  InstagramArea,
  LocationContact,
  Testimonials,
} from "@/components/Sections";

const title = "Luciana Leitt Estética — Estética facial em Goiânia";
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
      <Catalog />
      <About />
      <BeforeAfter />
      <Testimonials />
      <Faq />
      <InstagramArea />
      <LocationContact />
    </>
  );
}
