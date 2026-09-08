import { createFileRoute } from "@tanstack/react-router";
import { About, Benefits } from "@/components/Sections";

const title = "Sobre a Luciana — Studio Luciana Leitt";
const description =
  "Conheça o Studio Luciana Leitt: atendimento individual, foco em estética facial e ambiente acolhedor em Nova Crixás - GO.";

export const Route = createFileRoute("/sobre")({
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
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <About as="h1" />
      <Benefits />
    </>
  );
}
