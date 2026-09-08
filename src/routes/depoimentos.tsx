import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/Sections";

const title = "Depoimentos — Studio Luciana Leitte";
const description =
  "O que as clientes dizem sobre os atendimentos de estética facial do Studio Luciana Leitte.";

export const Route = createFileRoute("/depoimentos")({
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
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return <Testimonials as="h1" />;
}
