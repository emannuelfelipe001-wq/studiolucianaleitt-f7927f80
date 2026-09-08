import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { findProcedure, formatPrice } from "@/config/clinic";
import { useCart } from "@/lib/cart";
import { bookingMessage, whatsappLink } from "@/lib/whatsapp";
import { formatDuration, parseDuration } from "@/lib/utils";

const title = "Carrinho e agendamento — Studio Luciana Leitt";
const description =
  "Revise os procedimentos escolhidos, informe data e horário e confirme seu agendamento pelo WhatsApp.";

export const Route = createFileRoute("/carrinho")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, count, add, setQty, remove, clear } = useCart();
  const [step, setStep] = useState<"cart" | "schedule">("cart");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const detailed = items
    .map((i) => ({ ...i, procedure: findProcedure(i.id)! }))
    .filter((i) => i.procedure);

  const ready = name.trim() !== "" && date !== "" && time !== "";

  const confirm = () => {
    const names = detailed.flatMap((i) =>
      i.qty > 1 ? [`${i.procedure.name} (${i.qty}x)`] : [i.procedure.name],
    );
    const message = bookingMessage(names, date, time);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    clear();
    setStep("cart");
    setName("");
    setDate("");
    setTime("");
  };

  if (detailed.length === 0) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center">
        <ShoppingBag className="size-8 text-primary" />
        <h1 className="mt-4 text-3xl">Seu carrinho está vazio</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Escolha os procedimentos que deseja realizar e volte aqui para agendar.
        </p>
        <Link
          to="/catalogo"
          className="mt-7 rounded-full bg-rose-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground"
        >
          Ver procedimentos
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl">
        {step === "cart" ? "Meu carrinho" : "Escolher data e horário"}
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {step === "cart"
          ? `${count} ${count === 1 ? "procedimento" : "procedimentos"} selecionados`
          : "Sem login e sem cadastro — só os dados do agendamento."}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          {detailed.map(({ id, qty, procedure }) => (
            <div key={id} className="card-soft flex gap-4 p-4">
              <img
                src={procedure.image}
                alt={procedure.name}
                loading="lazy"
                width={1024}
                height={768}
                className="size-20 shrink-0 rounded-xl object-cover md:size-24"
              />
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-lg leading-tight">{procedure.name}</h2>
                    <p className="text-xs text-muted-foreground">{procedure.duration}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remover ${procedure.name}`}
                    onClick={() => remove(id)}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:text-destructive"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-1 rounded-full border border-border">
                    <button
                      type="button"
                      aria-label="Diminuir quantidade"
                      onClick={() => setQty(id, qty - 1)}
                      className="rounded-full p-2 hover:text-primary"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm">{qty}</span>
                    <button
                      type="button"
                      aria-label="Aumentar quantidade"
                      onClick={() => add(id)}
                      className="rounded-full p-2 hover:text-primary"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <span className="font-display text-lg text-rose-deep">
                    {formatPrice(procedure.price * qty)}
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={clear}
              className="rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
            >
              Limpar carrinho
            </button>
            <Link
              to="/catalogo"
              className="rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary/40 hover:text-primary"
            >
              Continuar escolhendo
            </Link>
          </div>
        </div>

        <aside className="card-soft h-fit p-6 lg:sticky lg:top-24">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="font-display text-2xl text-rose-deep">
              {formatPrice(subtotal)}
            </span>
          </div>

          {step === "cart" ? (
            <button
              type="button"
              onClick={() => setStep("schedule")}
              className="mt-5 w-full rounded-full bg-rose-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Finalizar agendamento
            </button>
          ) : (
            <div className="mt-5 space-y-4">
              <label className="block text-sm">
                Seu nome
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nome completo"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50"
                />
              </label>
              <label className="block text-sm">
                Data desejada
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50"
                />
              </label>
              <label className="block text-sm">
                Horário desejado
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary/50"
                />
              </label>

              <button
                type="button"
                disabled={!ready}
                onClick={confirm}
                className="w-full rounded-full bg-whatsapp px-6 py-3.5 text-sm font-medium text-whatsapp-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Confirmar e abrir WhatsApp
              </button>
              <button
                type="button"
                onClick={() => setStep("cart")}
                className="w-full text-center text-xs text-muted-foreground hover:text-primary"
              >
                Voltar ao carrinho
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
