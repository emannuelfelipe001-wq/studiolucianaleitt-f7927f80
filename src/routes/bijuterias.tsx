import { createFileRoute } from "@tanstack/react-router";
import { Gem } from "lucide-react";
import { jewelry } from "@/config/clinic";

const title = "Bijuterias — Studio Luciana Leitte";
const description =
  "Catálogo de bijuterias do Studio Luciana Leitte: brincos, colares, pulseiras e mais. Veja as peças disponíveis e reserve pelo WhatsApp.";

export const Route = createFileRoute("/bijuterias")({
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
  component: BijuteriasPage,
});

function BijuteriasPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-primary uppercase">
          <Gem className="size-3.5" /> Brilho para o seu dia
        </span>
        <h1 className="mt-3 text-3xl md:text-4xl">Bijuterias</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Peças selecionadas com carinho. Gostou de alguma? Chame no WhatsApp e reserve a sua.
        </p>
      </div>

      {jewelry.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Catálogo em preparação — em breve as peças disponíveis aparecem aqui.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jewelry.map((item) => (
            <figure key={item.name} className="card-soft overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <figcaption className="p-5">
                <h2 className="text-xl leading-snug">{item.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
