import { Link } from "@tanstack/react-router";
import { OpenStatus } from "@/components/OpenStatus";
import { Clock, Heart, Instagram, MapPin, MessageCircle, Sparkles } from "lucide-react";
import {
  about,
  addressLine,
  beforeAfter,
  benefits,
  clinic,
  faq,
  instagramUrl,
  mapEmbedUrl,
  mapsUrl,
  procedures,
  testimonials,
} from "@/config/clinic";
import { GENERAL_MESSAGE, whatsappLink } from "@/lib/whatsapp";
import { ProcedureCard } from "@/components/ProcedureCard";

export function Hero() {
  return (
    <section id="topo" className="bg-soft-gradient">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs tracking-[0.15em] text-primary uppercase">
            <Sparkles className="size-3.5" /> Estética facial
          </span>
          
          <h1 className="mt-5 text-4xl leading-[1.1] md:text-6xl">
            Sua pele cuidada com <span className="text-rose-gradient">delicadeza</span> e
            precisão
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            Protocolos faciais personalizados para uma pele saudável, com viço natural e
            atendimento exclusivo.
          </p>
          <OpenStatus className="mt-4 flex text-sm" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/catalogo"
              className="rounded-full bg-rose-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Ver procedimentos
            </Link>
            <a
              href={whatsappLink(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/30 bg-card px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-blush"
            >
              Agendar pelo WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-rose/25 blur-2xl" aria-hidden />
          <img
            src={clinic.images.hero}
            alt="Procedimento de estética facial em clínica"
            width={1600}
            height={1200}
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

export function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="card-soft p-6">
            <Heart className="size-5 text-primary" />
            <h3 className="mt-3 text-xl">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Featured() {
  const featured = procedures.filter((p) => p.featured);
  if (featured.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <span className="text-xs tracking-[0.25em] text-primary uppercase">Destaques</span>
          <h2 className="mt-2 text-3xl md:text-4xl">Mais procurados</h2>
        </div>
        <Link to="/catalogo" className="hidden text-sm text-primary hover:underline md:inline">
          Ver catálogo completo
        </Link>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <ProcedureCard key={p.id} procedure={p} />
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-soft-gradient">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <img
          src={clinic.images.sobre}
          alt="Luciana em seu espaço de estética facial"
          loading="lazy"
          width={1200}
          height={1408}
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-card"
        />
        <div>
          <span className="text-xs tracking-[0.25em] text-primary uppercase">Quem atende</span>
          <h2 className="mt-3 text-3xl md:text-4xl">{about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <ul className="mt-6 flex flex-wrap gap-2">
            {about.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs text-foreground/80"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function BeforeAfter() {
  return (
    <section id="antes-e-depois" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="text-xs tracking-[0.25em] text-primary uppercase">Resultados</span>
        <h2 className="mt-3 text-3xl md:text-4xl">Antes e depois</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          {beforeAfter.notice}
        </p>
      </div>
      {beforeAfter.items.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {beforeAfter.items.map((item) => (
            <figure key={item.label} className="card-soft overflow-hidden">
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="px-3 py-2.5 text-center text-xs text-muted-foreground">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-soft-gradient">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center">
          <span className="text-xs tracking-[0.25em] text-primary uppercase">Depoimentos</span>
          <h2 className="mt-3 text-3xl md:text-4xl">O que dizem as clientes</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="card-soft p-6">
              <p className="font-display text-lg leading-relaxed">“{t.text}”</p>
              <footer className="mt-4 text-xs tracking-[0.18em] text-primary uppercase">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <div className="text-center">
        <span className="text-xs tracking-[0.25em] text-primary uppercase">Dúvidas</span>
        <h2 className="mt-3 text-3xl md:text-4xl">Perguntas frequentes</h2>
      </div>
      <div className="mt-8 space-y-3">
        {faq.map((item) => (
          <details
            key={item.q}
            className="card-soft group px-5 py-4 [&[open]]:bg-blush/40"
          >
            <summary className="cursor-pointer list-none text-sm font-medium marker:hidden">
              <span className="flex items-center justify-between gap-3">
                {item.q}
                <span className="text-primary transition-transform group-open:rotate-45">＋</span>
              </span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function InstagramArea() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-6">
      <div className="card-soft flex flex-col items-center gap-3 bg-blush/40 p-8 text-center">
        <Instagram className="size-6 text-primary" />
        <h2 className="text-2xl">Acompanhe no Instagram</h2>
        {instagramUrl ? (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-rose-gradient px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            @{clinic.instagram}
          </a>
        ) : (
          <p className="max-w-md text-sm text-muted-foreground">
            {/* Adicione o @ oficial em src/config/clinic.ts para ativar este botão */}
            Espaço reservado para o perfil oficial. Assim que o @ for informado, ele aparece
            aqui com link direto.
          </p>
        )}
      </div>
    </section>
  );
}

export function LocationContact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="text-center">
        <span className="text-xs tracking-[0.25em] text-primary uppercase">Localização</span>
        <h2 className="mt-3 text-3xl md:text-4xl">Onde nos encontrar</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="card-soft p-7">
          <h3 className="flex items-center gap-2 text-xl">
            <MapPin className="size-5 text-primary" /> Endereço
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">{addressLine}</p>

          <h3 className="mt-6 flex items-center gap-2 text-xl">
            <Clock className="size-5 text-primary" /> Horário de atendimento
          </h3>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {clinic.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-primary/30 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-blush"
            >
              Como chegar
            </a>
            <a
              href={whatsappLink(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-whatsapp-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" /> {clinic.whatsappDisplay}
            </a>
          </div>
        </div>

        {/* Mapa da localização (coordenadas em src/config/clinic.ts) */}
        <div className="card-soft overflow-hidden">
          <iframe
            src={mapEmbedUrl}
            title={`Mapa — ${addressLine}`}
            loading="lazy"
            className="h-72 w-full border-0 md:h-full md:min-h-80"
          />
          <div className="border-t border-border/70 px-5 py-3 text-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
