import { Link } from "@tanstack/react-router";
import { addressLine, clinic, instagramUrl } from "@/config/clinic";
import { GENERAL_MESSAGE, whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-soft-gradient">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{clinic.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{clinic.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="mb-2 font-medium">Atendimento</p>
          {clinic.hours.map((h) => (
            <p key={h.days} className="text-muted-foreground">
              {h.days}: {h.time}
            </p>
          ))}
        </div>
        <div className="text-sm">
          <p className="mb-2 font-medium">Contato</p>
          <p className="text-muted-foreground">{addressLine}</p>
          <a
            href={whatsappLink(GENERAL_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-primary hover:underline"
          >
            {clinic.whatsappDisplay}
          </a>
          {instagramUrl ? (
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-primary hover:underline"
            >
              Instagram
            </a>
          ) : null}
          <Link to="/carrinho" className="mt-3 block text-muted-foreground hover:text-primary">
            Meu carrinho
          </Link>
        </div>
      </div>
      <div className="border-t border-border/70 px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {clinic.name}. Imagens e valores demonstrativos.
      </div>
    </footer>
  );
}
