import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Clock, Plus } from "lucide-react";
import { categoryName, formatPrice, type Procedure } from "@/config/clinic";
import { useCart } from "@/lib/cart";

export function ProcedureCard({ procedure }: { procedure: Procedure }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  const addToCart = () => {
    add(procedure.id);
    setAdded(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="card-soft group flex flex-col overflow-hidden">
      <Link
        to="/procedimentos/$slug"
        params={{ slug: procedure.id }}
        className="block overflow-hidden"
      >
        <img
          src={procedure.image}
          alt={procedure.name}
          loading="lazy"
          width={1024}
          height={768}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[0.65rem] tracking-[0.2em] text-primary uppercase">
          {categoryName(procedure.category)}
        </span>
        <h3 className="mt-1.5 text-xl leading-snug">{procedure.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{procedure.shortDescription}</p>
        <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="size-3.5" /> {procedure.duration}
          </span>
          <span className="font-display text-xl text-rose-deep">
            {formatPrice(procedure.price)}
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={addToCart}
            aria-label={`Adicionar ${procedure.name} ao carrinho`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-rose-gradient px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            {added ? <Check className="size-4" /> : <Plus className="size-4" />}
            {added ? "Adicionado" : "Adicionar"}
          </button>
          <Link
            to="/procedimentos/$slug"
            params={{ slug: procedure.id }}
            className="rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
          >
            Detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
