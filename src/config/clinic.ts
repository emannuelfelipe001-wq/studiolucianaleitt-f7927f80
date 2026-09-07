/**
 * ============================================================
 *  ÁREA DE EDIÇÃO CENTRAL — LUCIANA LEITT ESTÉTICA
 * ------------------------------------------------------------
 *  Tudo que aparece no site (nome, WhatsApp, Instagram,
 *  endereço, horários, procedimentos, categorias, preços,
 *  descrições, imagens, depoimentos e FAQ) pode ser alterado
 *  neste único arquivo.
 *
 *  Os valores marcados com "EXEMPLO" são fictícios e devem ser
 *  substituídos pelas informações reais.
 * ============================================================
 */

// Imagens demonstrativas (troque os arquivos em src/assets/ ou os imports abaixo)
import heroImg from "@/assets/hero.jpg";
import sobreImg from "@/assets/sobre.jpg";
import ba1 from "@/assets/ba-1.jpg";
import ba2 from "@/assets/ba-2.jpg";
import ba3 from "@/assets/ba-3.jpg";
import ba4 from "@/assets/ba-4.jpg";
import microOlhosImg from "@/assets/micropigmentacao-olhos.jpg.asset.json";

/* ---------------- DADOS DA CLÍNICA ---------------- */
export const clinic = {
  name: "Studio Luciana Leitt",
  shortName: "Studio Luciana Leitt",
  tagline: "Estética Facial",
  // WhatsApp: apenas números, com código do país
  whatsapp: "5562982008960",
  whatsappDisplay: "+55 62 98200-8960",
  // Instagram: preencha quando tiver o @ oficial
  instagram: "", // EXEMPLO: "lucianaleitt.estetica"
  address: {
    street: "Alameda Vereador Gerson Sebastião dos Anjos",
    district: "Centro", // EXEMPLO — confirme o bairro
    city: "Nova Crixás",
    state: "GO",
  },
  // Link exato compartilhado do Google Maps + coordenadas usadas no mapa
  mapsShareUrl: "https://maps.app.goo.gl/79PooLaS1A2mMM4u9",
  coords: { lat: -14.0955963, lng: -50.3411102 },
  hours: [
    { days: "Segunda a sexta", time: "09h às 19h" }, // EXEMPLO
    { days: "Sábado", time: "09h às 14h" }, // EXEMPLO
    { days: "Domingo", time: "Fechado" }, // EXEMPLO
  ],
  images: { hero: heroImg, sobre: sobreImg },
};

export const addressLine = `${clinic.address.street} — ${clinic.address.district}, ${clinic.address.city} - ${clinic.address.state}`;
export const mapsUrl = clinic.mapsShareUrl;
export const mapEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${
  clinic.coords.lng - 0.004
}%2C${clinic.coords.lat - 0.003}%2C${clinic.coords.lng + 0.004}%2C${
  clinic.coords.lat + 0.003
}&layer=mapnik&marker=${clinic.coords.lat}%2C${clinic.coords.lng}`;
export const instagramUrl = clinic.instagram
  ? `https://instagram.com/${clinic.instagram}`
  : "";

/* ---------------- SOBRE ---------------- */
export const about = {
  title: "Sobre a Luciana",
  // Texto editável. Não inclui formação nem certificados.
  paragraphs: [
    "Atendimento individual, sem pressa e com foco total em estética facial. Cada pele é avaliada antes do procedimento para que o cuidado faça sentido para você.",
    "O espaço foi pensado para ser tranquilo e acolhedor, com protocolos delicados e resultados naturais.",
  ],
  highlights: ["Atendimento personalizado", "Foco em estética facial", "Ambiente acolhedor"],
};

/* ---------------- BENEFÍCIOS (HOME) ---------------- */
export const benefits = [
  {
    title: "Atendimento personalizado",
    text: "Avaliação da sua pele antes de indicar qualquer protocolo.",
  },
  {
    title: "Foco em estética facial",
    text: "Especialização em rosto: pele, contorno, lábios e viço.",
  },
  {
    title: "Cuidado em cada detalhe",
    text: "Produtos selecionados, higiene rigorosa e resultado natural.",
  },
];

/* ---------------- CATEGORIAS ---------------- */
export const categories = [
  { id: "limpeza", name: "Limpeza de Pele" },
  { id: "rejuvenescimento", name: "Rejuvenescimento" },
  { id: "hidratacao", name: "Hidratação" },
  { id: "acne", name: "Acne" },
  { id: "labios", name: "Lábios" },
  { id: "olhos", name: "Olhos" },
  { id: "contorno", name: "Contorno Facial" },
  { id: "tratamentos", name: "Tratamentos Faciais" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export type Procedure = {
  id: string;
  name: string;
  category: CategoryId;
  shortDescription: string;
  description: string;
  benefits: string[];
  duration: string;
  /** Preço em reais — EXEMPLO, substituir pelos valores reais */
  price: number;
  image: string;
  featured?: boolean;
};


/* ---------------- PROCEDIMENTOS ----------------
 *  Lista vazia: adicione aqui os procedimentos reais.
 *  Exemplo de item:
 *  {
 *    id: "limpeza-de-pele",
 *    name: "Limpeza de Pele",
 *    category: "limpeza",
 *    shortDescription: "Descrição curta.",
 *    description: "Descrição completa.",
 *    benefits: ["Benefício 1", "Benefício 2"],
 *    duration: "1h",
 *    price: 180,
 *    image: "/caminho-da-foto.jpg",
 *    featured: true,
 *  },
 */
export const procedures: Procedure[] = [
  {
    id: "micropigmentacao-olhos-delineado-inferior",
    name: "Micropigmentação de Olhos — Delineado Inferior",
    category: "olhos",
    shortDescription:
      "Delineado inferior definitivo que realça o olhar com traço preciso e efeito natural.",
    description:
      "A micropigmentação de olhos na linha do delineado inferior é um procedimento que deposita pigmento na região da linha d'água inferior, criando um efeito de delineado duradouro e discreto. Área do corpo: região dos olhos (pálpebra inferior). O resultado realça o contorno dos olhos, dá profundidade ao olhar e dispensa o delineador no dia a dia. O procedimento é feito com dermógrafo, anestesia tópica e pigmentos específicos para a área dos olhos, com traço fino e acabamento natural.",
    benefits: [
      "Olhar mais marcante e definido todos os dias",
      "Dispensa o uso diário de delineador",
      "Traço fino, preciso e com efeito natural",
      "Resultado duradouro, com retoque conforme necessário",
    ],
    duration: "1h",
    price: 300,
    image: microOlhosImg.url,
    featured: true,
  },
];

/* ---------------- ANTES E DEPOIS (imagens de exemplo) ---------------- */
export const beforeAfter = {
  notice:
    "As imagens abaixo são apenas demonstrativas e serão substituídas por fotos reais de clientes, com autorização.",
  items: [
    { image: ba1, label: "Pele com textura irregular" },
    { image: ba2, label: "Pele hidratada e com viço" },
    { image: ba3, label: "Área dos olhos" },
    { image: ba4, label: "Lábios e contorno" },
  ],
};

/* ---------------- DEPOIMENTOS (EXEMPLO — fácil substituir) ---------------- */
export const testimonials = [
  {
    name: "Ana C.",
    text: "Saí com a pele leve e o atendimento foi muito cuidadoso do início ao fim.",
  },
  {
    name: "Marina S.",
    text: "Explicou cada etapa antes de começar. Minha pele nunca esteve tão uniforme.",
  },
  {
    name: "Beatriz L.",
    text: "Ambiente tranquilo, sem pressa. Já virou meu cuidado mensal.",
  },
];

/* ---------------- FAQ ---------------- */
export const faq = [
  {
    q: "Preciso agendar com antecedência?",
    a: "Sim. O atendimento é individual, então cada horário é reservado só para você.",
  },
  {
    q: "Como funciona a avaliação?",
    a: "Antes do procedimento a sua pele é avaliada para confirmar o protocolo mais indicado.",
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Depende do objetivo. Alguns protocolos têm efeito imediato, outros são progressivos.",
  },
  {
    q: "Posso remarcar meu horário?",
    a: "Pode, basta avisar pelo WhatsApp com antecedência para reorganizarmos a agenda.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Combinamos pelo WhatsApp no momento do agendamento.",
  },
];

/* ---------------- UTILIDADES ---------------- */
export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const categoryName = (id: CategoryId) =>
  categories.find((c) => c.id === id)?.name ?? "";

export const findProcedure = (id: string) => procedures.find((p) => p.id === id);
