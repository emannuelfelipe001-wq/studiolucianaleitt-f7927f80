import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { categories, procedures } from "@/config/clinic";
import { ProcedureCard } from "@/components/ProcedureCard";

export function Catalog() {
  const [category, setCategory] = useState<string>("todos");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return procedures.filter(
      (p) =>
        (category === "todos" || p.category === category) &&
        (q === "" || p.name.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <section id="procedimentos" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="text-xs tracking-[0.25em] text-primary uppercase">Catálogo</span>
        <h2 className="mt-3 text-3xl md:text-4xl">Procedimentos faciais</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          Escolha o cuidado ideal, adicione ao carrinho e finalize o agendamento pelo WhatsApp.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="relative mx-auto w-full max-w-md">
          <Search className="absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar procedimento..."
            aria-label="Buscar procedimento"
            className="w-full rounded-full border border-border bg-card py-3 pr-4 pl-11 text-sm outline-none transition-colors focus:border-primary/50"
          />
        </div>

        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:justify-center md:px-0">
          {[{ id: "todos", name: "Todos" }, ...categories].map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCategory(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                category === c.id
                  ? "border-transparent bg-rose-gradient text-primary-foreground"
                  : "border-border bg-card text-foreground/80 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-12 text-center text-sm text-muted-foreground">
          Nenhum procedimento encontrado. Tente outra busca.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProcedureCard key={p.id} procedure={p} />
          ))}
        </div>
      )}
    </section>
  );
}
