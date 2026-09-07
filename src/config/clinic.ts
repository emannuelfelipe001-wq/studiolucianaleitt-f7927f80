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
import imgLimpeza from "@/assets/proc-limpeza.jpg";
import imgRejuvenescimento from "@/assets/proc-rejuvenescimento.jpg";
import imgHidratacao from "@/assets/proc-hidratacao.jpg";
import imgAcne from "@/assets/proc-acne.jpg";
import imgLabios from "@/assets/proc-labios.jpg";
import imgContorno from "@/assets/proc-contorno.jpg";
import imgTratamentos from "@/assets/proc-tratamentos.jpg";
import ba1 from "@/assets/ba-1.jpg";
import ba2 from "@/assets/ba-2.jpg";
import ba3 from "@/assets/ba-3.jpg";
import ba4 from "@/assets/ba-4.jpg";

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

/* ---------------- PROCEDIMENTOS (preços EXEMPLO) ---------------- */
export const procedures: Procedure[] = [
  {
    id: "limpeza-de-pele-profunda",
    name: "Limpeza de Pele Profunda",
    category: "limpeza",
    shortDescription: "Remove cravos e impurezas, deixando a pele leve e uniforme.",
    description:
      "Protocolo completo de higienização, esfoliação, extração cuidadosa e finalização calmante. Indicado para pele com cravos, textura irregular e aspecto cansado.",
    benefits: ["Poros mais limpos", "Textura uniforme", "Pele leve e renovada"],
    duration: "1h20",
    price: 180,
    image: imgLimpeza,
    featured: true,
  },
  {
    id: "limpeza-de-pele-express",
    name: "Limpeza Express",
    category: "limpeza",
    shortDescription: "Versão rápida para manter a pele limpa entre as sessões.",
    description:
      "Higienização, esfoliação suave e máscara final. Ideal para manutenção mensal ou para quem tem pouco tempo.",
    benefits: ["Rápida", "Ótima para manutenção", "Sem tempo de recuperação"],
    duration: "45min",
    price: 120,
    image: imgLimpeza,
  },
  {
    id: "microagulhamento-facial",
    name: "Microagulhamento Facial",
    category: "rejuvenescimento",
    shortDescription: "Estimula colágeno e melhora firmeza e marcas finas.",
    description:
      "Estímulo controlado da pele para renovação e produção de colágeno, com ativos aplicados durante a sessão. Resultados progressivos ao longo do protocolo.",
    benefits: ["Mais firmeza", "Suaviza linhas finas", "Pele mais lisa"],
    duration: "1h",
    price: 320,
    image: imgRejuvenescimento,
    featured: true,
  },
  {
    id: "peeling-de-renovacao",
    name: "Peeling de Renovação",
    category: "rejuvenescimento",
    shortDescription: "Renova a superfície da pele e ilumina o rosto.",
    description:
      "Aplicação de ativos renovadores para melhorar manchas superficiais, textura e brilho. A intensidade é ajustada ao seu tipo de pele.",
    benefits: ["Mais luminosidade", "Textura refinada", "Aspecto uniforme"],
    duration: "50min",
    price: 260,
    image: imgRejuvenescimento,
  },
  {
    id: "hidratacao-facial-profunda",
    name: "Hidratação Facial Profunda",
    category: "hidratacao",
    shortDescription: "Repõe água e conforto imediato para a pele.",
    description:
      "Máscara e ativos hidratantes em camadas para devolver maciez, viço e conforto. Excelente antes de eventos.",
    benefits: ["Efeito viço imediato", "Pele macia", "Conforto e frescor"],
    duration: "50min",
    price: 160,
    image: imgHidratacao,
    featured: true,
  },
  {
    id: "hidratacao-com-vitamina-c",
    name: "Hidratação com Vitamina C",
    category: "hidratacao",
    shortDescription: "Hidrata e ilumina, com efeito antioxidante.",
    description:
      "Combina hidratação intensa com ativos antioxidantes para uma pele mais luminosa e protegida da rotina do dia a dia.",
    benefits: ["Brilho saudável", "Antioxidante", "Uniformiza o tom"],
    duration: "1h",
    price: 190,
    image: imgHidratacao,
  },
  {
    id: "protocolo-anti-acne",
    name: "Protocolo Anti-Acne",
    category: "acne",
    shortDescription: "Controla oleosidade e acalma a pele com acne ativa.",
    description:
      "Sessão pensada para pele acneica: higienização profunda, ativos secativos e finalização calmante, sem agredir a barreira da pele.",
    benefits: ["Menos oleosidade", "Reduz vermelhidão", "Pele mais calma"],
    duration: "1h10",
    price: 200,
    image: imgAcne,
  },
  {
    id: "led-terapia-facial",
    name: "LED Terapia Facial",
    category: "acne",
    shortDescription: "Luz terapêutica para acalmar e equilibrar a pele.",
    description:
      "Aplicação de luz em comprimentos específicos para auxiliar no controle da acne e na recuperação da pele. Indolor e confortável.",
    benefits: ["Indolor", "Auxilia no controle da acne", "Recuperação da pele"],
    duration: "30min",
    price: 130,
    image: imgAcne,
  },
  {
    id: "hidratacao-labial",
    name: "Hidratação Labial",
    category: "labios",
    shortDescription: "Lábios macios, com brilho natural e saudável.",
    description:
      "Esfoliação delicada e máscara nutritiva para lábios ressecados. Finalização com efeito de brilho natural.",
    benefits: ["Lábios macios", "Brilho natural", "Sensação de conforto"],
    duration: "30min",
    price: 90,
    image: imgLabios,
    featured: true,
  },
  {
    id: "realce-labial-natural",
    name: "Realce Labial Natural",
    category: "labios",
    shortDescription: "Valoriza o contorno com aspecto discreto e elegante.",
    description:
      "Protocolo estético para valorizar o desenho dos lábios com resultado leve e natural, respeitando as suas proporções.",
    benefits: ["Contorno valorizado", "Resultado discreto", "Aspecto elegante"],
    duration: "45min",
    price: 240,
    image: imgLabios,
  },
  {
    id: "drenagem-facial",
    name: "Drenagem Facial",
    category: "contorno",
    shortDescription: "Reduz inchaço e deixa o rosto mais definido.",
    description:
      "Manobras manuais suaves que estimulam a circulação, ajudam a reduzir o inchaço e trazem sensação de leveza ao rosto.",
    benefits: ["Menos inchaço", "Rosto mais definido", "Relaxamento profundo"],
    duration: "50min",
    price: 150,
    image: imgContorno,
  },
  {
    id: "lifting-facial-manual",
    name: "Lifting Facial Manual",
    category: "contorno",
    shortDescription: "Massagem modeladora com efeito de sustentação.",
    description:
      "Técnica manual que trabalha a musculatura e o contorno do rosto, com efeito de sustentação e ativação imediata.",
    benefits: ["Contorno mais firme", "Efeito lifting", "Sem agulhas"],
    duration: "1h",
    price: 220,
    image: imgContorno,
    featured: true,
  },
  {
    id: "revitalizacao-facial",
    name: "Revitalização Facial",
    category: "tratamentos",
    shortDescription: "Sessão completa de viço para pele cansada.",
    description:
      "Combinação de higienização, ativos revitalizantes e massagem relaxante para devolver energia e brilho ao rosto.",
    benefits: ["Viço imediato", "Relaxamento", "Pele descansada"],
    duration: "1h15",
    price: 230,
    image: imgTratamentos,
  },
  {
    id: "clareamento-de-manchas",
    name: "Clareamento de Manchas",
    category: "tratamentos",
    shortDescription: "Protocolo progressivo para tom mais uniforme.",
    description:
      "Ativos clareadores aplicados em sessões para suavizar manchas superficiais e uniformizar o tom da pele.",
    benefits: ["Tom uniforme", "Suaviza manchas", "Resultado progressivo"],
    duration: "1h",
    price: 250,
    image: imgTratamentos,
  },
  {
    id: "tratamento-para-olheiras",
    name: "Tratamento para Olheiras",
    category: "tratamentos",
    shortDescription: "Cuidado específico para a área dos olhos.",
    description:
      "Protocolo delicado para a região dos olhos, com ativos que ajudam a suavizar olheiras e o aspecto de cansaço.",
    benefits: ["Olhar descansado", "Área mais iluminada", "Cuidado delicado"],
    duration: "40min",
    price: 170,
    image: imgTratamentos,
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
