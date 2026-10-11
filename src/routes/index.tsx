import { createFileRoute } from "@tanstack/react-router";
import { Benefits, BookingInvitation, Featured, Hero, InstagramArea } from "@/components/Sections";
import { Reveal } from "@/components/Reveal";

const title = "Studio Luciana Leitte — Estética Facial";
const description =
  "Estética facial, cílios, sobrancelhas, micropigmentação, dermaplaning e perfurações em Nova Crixás - GO. Agende pelo WhatsApp.";

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
      <Reveal>
        <Benefits />
      </Reveal>
      <Reveal>
        <Featured />
      </Reveal>
      <Reveal>
        <BookingInvitation />
      </Reveal>
      <Reveal>
        <InstagramArea />
      </Reveal>
    </>
  );
}
