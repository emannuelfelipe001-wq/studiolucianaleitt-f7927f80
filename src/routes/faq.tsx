import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/Sections";

const title = "Perguntas Frequentes — Studio Luciana Leitt";
const description =
  "Dúvidas sobre agendamento, avaliação da pele, número de sessões e formas de pagamento no Studio Luciana Leitt.";

export const Route = createFileRoute("/faq")({
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
  component: FaqPage,
});

function FaqPage() {
  return <Faq as="h1" />;
}
