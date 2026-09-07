import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { clinic } from "@/config/clinic";
import { useCart } from "@/lib/cart";
import { GENERAL_MESSAGE, whatsappLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Início", to: "/" },
  { label: "Procedimentos", to: "/catalogo" },
  { label: "Sobre", to: "/sobre" },
  { label: "Antes e Depois", to: "/antes-e-depois" },
  { label: "Depoimentos", to: "/depoimentos" },
  { label: "FAQ", to: "/faq" },
  { label: "Contato", to: "/contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:h-20">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-lg font-semibold tracking-tight md:text-2xl">
            {clinic.shortName}
          </span>
          <span className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase md:text-[0.65rem]">
            Estética Facial
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary font-medium" }}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink(GENERAL_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-rose-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Agendar pelo WhatsApp
          </a>

          <Link
            to="/carrinho"
            aria-label="Carrinho"
            className="relative rounded-full border border-border bg-card p-2.5 text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border bg-card p-2.5 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary font-medium" }}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="my-3 rounded-full bg-rose-gradient px-5 py-3 text-center text-sm font-medium text-primary-foreground"
            >
              Agendar pelo WhatsApp — {clinic.whatsappDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
