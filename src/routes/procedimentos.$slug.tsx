import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, Clock, Plus, ShoppingBag } from "lucide-react";
import { categoryName, findProcedure, formatPrice, procedures } from "@/config/clinic";
import { useCart } from "@/lib/cart";
import { ProcedureCard } from "@/components/ProcedureCard";

export const Route = createFileRoute("/procedimentos/$slug")({
  loader: ({ params }) => {
    const procedure = findProcedure(params.slug);
    if (!procedure) throw notFound();
    return { procedure };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Procedimento não encontrado" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.procedure.name} — Luciana Leitt Estética`;
    const description = loaderData.procedure.shortDescription;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProcedureDetail,
});

function ProcedureDetail() {
  const { procedure } = Route.useLoaderData();
  const { add } = useCart();
  const related = procedures
    .filter((p) => p.category === procedure.category && p.id !== procedure.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <Link
        to="/"
        hash="procedimentos"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" /> Voltar aos procedimentos
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <img
          src={procedure.image}
          alt={procedure.name}
          width={1024}
          height={768}
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
        />
        <div>
          <span className="text-xs tracking-[0.25em] text-primary uppercase">
            {categoryName(procedure.category)}
          </span>
          <h1 className="mt-2 text-3xl md:text-5xl">{procedure.name}</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {procedure.description}
          </p>

          <ul className="mt-6 space-y-2">
            {procedure.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm">
                <Check className="size-4 text-primary" /> {b}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex items-center gap-6 border-y border-border py-5">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4" /> {procedure.duration}
            </span>
            <span className="font-display text-3xl text-rose-deep">
              {formatPrice(procedure.price)}
            </span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => add(procedure.id)}
              className="inline-flex items-center gap-2 rounded-full bg-rose-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              <Plus className="size-4" /> Adicionar ao carrinho
            </button>
            <Link
              to="/carrinho"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-blush"
            >
              <ShoppingBag className="size-4" /> Ir para o carrinho
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl">Você também pode gostar</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProcedureCard key={p.id} procedure={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
