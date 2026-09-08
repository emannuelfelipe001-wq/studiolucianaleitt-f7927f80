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
import microOlhosImg from "@/assets/micropigmentacao-olhos.jpg.asset.json";
import perfuracaoLobuloImg from "@/assets/perfuracao-lobulo.jpg.asset.json";
import browLaminationImg from "@/assets/brow-lamination.jpg.asset.json";
import baCiliosVolumeBrasileiro from "@/assets/ba-cilios-volume-brasileiro.jpg.asset.json";
import perfuracaoHelixImg from "@/assets/perfuracao-helix.jpg.asset.json";
import extensaoCiliosImg from "@/assets/extensao-cilios-brasileiro.jpg.asset.json";
import microLabialImg from "@/assets/micropigmentacao-labial.jpg.asset.json";
import extensaoCiliosHibridoImg from "@/assets/extensao-cilios-hibrido.jpg.asset.json";

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
    { days: "Segunda a sábado", time: "9:00 às 18:00" },
    { days: "Domingo", time: "Fechado" },
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
  { id: "cilios", name: "Cílios" },
  { id: "contorno", name: "Contorno Facial" },
  { id: "tratamentos", name: "Tratamentos Faciais" },
  { id: "piercing", name: "Piercing" },
  { id: "sobrancelha", name: "Sobrancelha" },
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
  {
    id: "perfuracao-lobulo",
    name: "Perfuração de Lóbulo",
    category: "piercing",
    shortDescription:
      "Perfuração segura do lóbulo da orelha com material descartável e joia hipoalergênica.",
    description:
      "A perfuração de lóbulo é um procedimento realizado no lóbulo da orelha com técnica segura, material descartável e esterilizado. A joia utilizada é hipoalergênica, ideal para quem está perfurando pela primeira vez ou trocando acessório. Área do corpo: lóbulo da orelha. O procedimento é rápido, com cuidados de assepsia e orientações pós-procedimento para uma cicatrização tranquila.",
    benefits: [
      "Procedimento rápido e seguro",
      "Material descartável e esterilizado",
      "Joia hipoalergênica de primeira colocação",
      "Orientações completas de cuidados pós-procedimento",
    ],
    duration: "10min",
    price: 100,
    image: perfuracaoLobuloImg.url,
    featured: true,
  },
  {
    id: "brow-lamination",
    name: "Brow Lamination",
    category: "sobrancelha",
    shortDescription:
      "Alinhamento dos fios das sobrancelhas para um visual mais disciplinado, volumoso e natural.",
    description:
      "O Brow Lamination é um procedimento estético para as sobrancelhas que modela e alinha os fios, deixando-as mais disciplinadas, volumosas e com efeito natural de sobrancelha 'penteada'. A técnica utiliza produtos específicos que relaxam os fios e os fixam na direção desejada. Área do corpo: sobrancelhas. O resultado dura em média algumas semanas e facilita a rotina de maquiagem, dispensando o uso de gel ou máscara para sobrancelhas no dia a dia.",
    benefits: [
      "Fios alinhados e disciplinados",
      "Visual mais volumoso e natural",
      "Efeito duradouro por várias semanas",
      "Facilita a rotina de maquiagem",
    ],
    duration: "1h 20min",
    price: 120,
    image: browLaminationImg.url,
    featured: true,
  },
  {
    id: "perfuracao-helix",
    name: "Perfuração de Hélix",
    category: "piercing",
    shortDescription:
      "Perfuração na cartilagem superior da orelha com material descartável e joia hipoalergênica.",
    description:
      "A perfuração de hélix é realizada na cartilagem superior da orelha, criando um ponto de destaque delicado e moderno. O procedimento segue rigorosos cuidados de assepsia, com material descartável e esterilizado, além de joia hipoalergênica para uma cicatrização mais tranquila. Área do corpo: cartilagem da orelha (hélix). Ao final, são passadas orientações completas de cuidados pós-procedimento para garantir a saúde da perfuração.",
    benefits: [
      "Perfuração precisa na cartilagem",
      "Material descartável e esterilizado",
      "Joia hipoalergênica de qualidade",
      "Orientações completas de cuidados pós-procedimento",
    ],
    duration: "20min",
    price: 90,
    image: perfuracaoHelixImg.url,
    featured: true,
  },
  {
    id: "extensao-de-cilios-brasileiro",
    name: "Extensão de Cílios Brasileiro",
    category: "cilios",
    shortDescription:
      "Aplicação de fios leves e naturais para um olhar mais aberto, iluminado e com efeito delicado.",
    description:
      "A Extensão de Cílios Brasileiro é uma técnica que aplica fios finos e levemente curvados sobre os cílios naturais, criando um olhar mais aberto, iluminado e com volume natural. Área do corpo: cílios (pálpebra superior). O resultado é delicado, sem pesar ou parecer artificial, ideal para quem quer acordar com os cílios prontos todos os dias. O procedimento é feito com cola hipoalergênica e fios selecionados de acordo com o formato dos seus olhos.",
    benefits: [
      "Olhar mais aberto e iluminado",
      "Volume natural e delicado",
      "Dispensa o uso de máscara de cílios",
      "Fios leves que não pesam nos cílios naturais",
    ],
    duration: "1h 30min",
    price: 170,
    image: extensaoCiliosImg.url,
    featured: true,
  },
  {
    id: "extensao-de-cilios-hibrido",
    name: "Extensão de Cílios Híbrido",
    category: "cilios",
    shortDescription:
      "Técnica mista que une fios clássicos e volume para um olhar mais preenchido, leve e natural.",
    description:
      "A Extensão de Cílios Híbrido é uma técnica que combina fios clássicos (um a um) com leques de volume, criando um olhar mais preenchido, definido e com leve densidade sem perder o aspecto natural. Área do corpo: cílios (pálpebra superior). O resultado fica entre o efeito clássico e o volume russo, ideal para quem deseja mais volume do que a extensão tradicional, mas sem o visual muito marcante do volume completo. Os fios são aplicados de acordo com o formato dos seus olhos e com a saúde dos cílios naturais, usando cola hipoalergênica e fios leves.",
    benefits: [
      "Olhar mais preenchido e definido",
      "Efeito intermediário entre clássico e volume",
      "Resultado leve e natural",
      "Dispensa o uso de máscara de cílios",
    ],
    duration: "1h 30min",
    price: 170,
    image: extensaoCiliosHibridoImg.url,
    featured: true,
  },
  {
    id: "micropigmentacao-labial",
    name: "Micropigmentação Labial",
    category: "labios",
    shortDescription:
      "Pigmentação delicada nos lábios para cor uniforme, efeito natural e lábios mais definidos.",
    description:
      "A Micropigmentação Labial é um procedimento que deposita pigmento na camada superficial dos lábios, corrigindo a tonalidade, definindo o contorno e criando um efeito de cor saudável e natural. Área do corpo: lábios. A técnica é ideal para quem deseja lábios mais uniformes, com contorno discreto e aparência de leve hidratação, sem o efeito de batom pesado. O procedimento é realizado com dermógrafo, anestesia tópica e pigmentos específicos para a região labial, e pode incluir retoque após a cicatrização.",
    benefits: [
      "Cor uniforme e natural nos lábios",
      "Contorno labial mais definido",
      "Efeito de lábios saudáveis e hidratados",
      "Dispensa o uso constante de batom",
    ],
    duration: "2h",
    price: 650,
    image: microLabialImg.url,
    featured: true,
  },
];

/* ---------------- ANTES E DEPOIS ----------------
   Adicione aqui as fotos reais: { image: minhaFoto, label: "Nome" } */
export const beforeAfter = {
  notice: "Resultados reais de clientes, publicados com autorização.",
  items: [
    {
      image: baCiliosVolumeBrasileiro.url,
      label: "Cílios Volume Brasileiro — antes (acima) e depois (abaixo)",
    },
  ] as { image: string; label: string }[],
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
