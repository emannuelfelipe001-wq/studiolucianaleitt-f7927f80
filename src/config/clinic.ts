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
import heroAsset from "@/assets/hero.jpg.asset.json";
import sobreAsset from "@/assets/sobre.jpg.asset.json";
const heroImg = heroAsset.url;
const sobreImg = sobreAsset.url;
import microOlhosImg from "@/assets/micropigmentacao-olhos.jpg.asset.json";
import perfuracaoLobuloImg from "@/assets/perfuracao-lobulo.jpg.asset.json";
import browLaminationImg from "@/assets/brow-lamination.jpg.asset.json";
import baCiliosVolumeBrasileiro from "@/assets/ba-cilios-volume-brasileiro.jpg.asset.json";
import perfuracaoHelixImg from "@/assets/perfuracao-helix.jpg.asset.json";
import extensaoCiliosImg from "@/assets/extensao-cilios-brasileiro.jpg.asset.json";
import microLabialImg from "@/assets/micropigmentacao-labial.jpg.asset.json";
import extensaoCiliosHibridoImg from "@/assets/extensao-cilios-hibrido.jpg.asset.json";
import dermaplaningImg from "@/assets/dermaplaning.jpg.asset.json";
import foxEyesImg from "@/assets/fox-eyes.jpg.asset.json";
import fioAFioImg from "@/assets/fio-a-fio.jpg.asset.json";
import delineadoLapisImg from "@/assets/delineado-a-lapis.jpg.asset.json";
import ciliosVolumeRussoImg from "@/assets/cilios-volume-russo.jpg.asset.json";
import aplicacaoHennaImg from "@/assets/aplicacao-henna.jpg.asset.json";
import designSobrancelhasImg from "@/assets/design-sobrancelhas.jpg.asset.json";
// Bijuterias (fotos enviadas pela cliente)
import biju10811 from "@/assets/bijuteria-10811.jpg.asset.json";
import biju10817 from "@/assets/bijuteria-10817.jpg.asset.json";
import biju10821 from "@/assets/bijuteria-10821.jpg.asset.json";
import biju10823 from "@/assets/bijuteria-10823.jpg.asset.json";
import biju10825 from "@/assets/bijuteria-10825.jpg.asset.json";
import biju10828 from "@/assets/bijuteria-10828.jpg.asset.json";
import biju10830 from "@/assets/bijuteria-10830.jpg.asset.json";
import biju10835 from "@/assets/bijuteria-10835.jpg.asset.json";
import biju10838 from "@/assets/bijuteria-10838.jpg.asset.json";
import biju10840 from "@/assets/bijuteria-10840.jpg.asset.json";
import biju10843 from "@/assets/bijuteria-10843.jpg.asset.json";
import biju10845 from "@/assets/bijuteria-10845.jpg.asset.json";
import biju10848 from "@/assets/bijuteria-10848.jpg.asset.json";

/* ---------------- DADOS DA CLÍNICA ---------------- */
export const clinic = {
  name: "Studio Luciana Leitte",
  shortName: "Studio Luciana Leitte",
  tagline: "Estética Facial",
  // WhatsApp: apenas números, com código do país
  whatsapp: "5562982008960",
  whatsappDisplay: "+55 62 98200-8960",
  // Instagram: preencha quando tiver o @ oficial
  instagram: "studiolucianaleitte",
  instagramDisplay: "Studiolucianaleitte",
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
  ? "https://www.instagram.com/studiolucianaleitte/?utm_source=ig_web_button_share_sheet"
  : "";

/* ---------------- SOBRE ---------------- */
export const about = {
  title: "Sobre a Luciana",
  // Texto editável. Não inclui formação nem certificados.
  paragraphs: [
    "Sou Luciana Leitte, esteticista, esposa, mãe e uma mulher guiada pela fé, pelo propósito e pelo desejo de cuidar de outras mulheres. Sou fundadora do Studio Luciana Leitte, um espaço criado para unir beleza, acolhimento, segurança e autoestima.",
    "Acredito que cuidar da beleza vai muito além da aparência. Para mim, cada atendimento é uma oportunidade de ouvir, acolher e valorizar a beleza única de cada mulher. Por isso, trabalho com dedicação, responsabilidade e carinho, respeitando as características, desejos e necessidades de cada cliente.",
    "No Studio Luciana Leitte, ofereço procedimentos de estética facial, micropigmentação, extensão de cílios, design de sobrancelhas, cuidados labiais, perfuração corporal e outros serviços voltados ao bem-estar e à valorização da beleza.",
    "Minha missão é proporcionar uma experiência na qual cada cliente se sinta especial, segura e ainda mais confiante. Sou grata a Deus por cada pessoa que confia em meu trabalho e passa pelo Studio, e desejo que minhas mãos sejam sempre instrumentos de cuidado, transformação e bênção.",
  ],
  highlights: ["Atendimento personalizado", "Foco em estética facial", "Ambiente acolhedor"],
};

/* ---------------- BENEFÍCIOS (HOME) ---------------- */
export const benefits = [
  {
    title: "Atendimento personalizado",
    text: "Cada pele é única. Por isso, avaliamos suas necessidades antes de definir o melhor protocolo.",
  },
  {
    title: "Foco em estética facial",
    text: "Cuidado especializado para valorizar a pele, o contorno, os lábios e a beleza natural de cada rosto.",
  },
  {
    title: "Cuidado em cada detalhe",
    text: "Produtos selecionados, protocolos cuidadosos e atenção em cada etapa para proporcionar uma experiência segura, confortável e resultados naturais.",
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
  /* ---------------- CÍLIOS ---------------- */
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
    id: "cilios-volume-russo",
    name: "Extensão de Cílios Russo",
    category: "cilios",
    shortDescription:
      "Técnica de extensão com leques de fios ultrafinos para um olhar volumoso, marcante e glamouroso.",
    description:
      "A Extensão de Cílios Russo é uma técnica avançada de extensão de cílios que aplica leques de fios ultrafinos e leves sobre cada cílio natural, criando um olhar volumoso, denso e glamouroso. Área do corpo: cílios (pálpebra superior). O resultado é mais marcante e dramático que as técnicas clássica e híbrida, ideal para quem deseja olhos de destaque sem precisar de máscara de cílios no dia a dia. O procedimento é realizado com cola hipoalergênica e fios selecionados de acordo com a saúde e curvatura dos seus cílios naturais, garantindo conforto e durabilidade.",
    benefits: [
      "Olhar volumoso, denso e marcante",
      "Efeito glamouroso e duradouro",
      "Dispensa o uso de máscara de cílios",
      "Fios leves que respeitam os cílios naturais",
    ],
    duration: "1h 30min",
    price: 180,
    image: ciliosVolumeRussoImg.url,
    featured: true,
  },
  {
    id: "fio-a-fio",
    name: "Fio a Fio",
    category: "cilios",
    shortDescription:
      "Aplicação clássica de fios um a um para um olhar delicado, natural e elegante.",
    description:
      "A técnica Fio a Fio é a extensão de cílios clássica que aplica um fio sintético fino sobre cada cílio natural, criando um olhar alongado, delicado e natural. Área do corpo: cílios (pálpebra superior). O resultado valoriza o formato dos olhos sem pesar ou parecer artificial, ideal para quem quer acordar com o olhar pronto todos os dias. O procedimento é feito com cola hipoalergênica e fios selecionados de acordo com a saúde e curvatura dos cílios naturais, garantindo conforto e durabilidade.",
    benefits: [
      "Olhar alongado e natural",
      "Fios leves que não pesam nos cílios naturais",
      "Efeito delicado e elegante",
      "Dispensa o uso de máscara de cílios",
    ],
    duration: "2h",
    price: 600,
    image: fioAFioImg.url,
    featured: true,
  },
  /* ---------------- PIERCING / ORELHA ---------------- */
  {
    id: "perfuracao-lobulo",
    name: "Perfuração de Lóbulo",
    category: "piercing",
    shortDescription:
      "Perfuração segura do lóbulo da orelha com material descartável e joia hipoalergênica.",
    description:
      "A perfuração de lóbulo é realizada com técnica segura e cuidadosa, utilizando materiais descartáveis e joias adequadas para o procedimento.",
    benefits: ["Procedimento cuidadoso", "Material adequado", "Joia hipoalergênica"],
    duration: "30min",
    price: 80,
    image: perfuracaoLobuloImg.url,
    featured: true,
  },
  {
    id: "perfuracao-helix",
    name: "Perfuração Helix",
    category: "piercing",
    shortDescription:
      "Perfuração da cartilagem superior da orelha com técnica cuidadosa e joia adequada.",
    description:
      "A perfuração Helix é realizada na cartilagem superior da orelha, com técnica cuidadosa e materiais apropriados para oferecer uma experiência segura e confortável.",
    benefits: ["Técnica cuidadosa", "Joia adequada", "Orientações de cuidados"],
    duration: "30min",
    price: 100,
    image: perfuracaoHelixImg.url,
    featured: true,
  },
  /* ---------------- SOBRANCELHAS ---------------- */
  {
    id: "design-sobrancelhas",
    name: "Design de Sobrancelhas",
    category: "sobrancelha",
    shortDescription:
      "Design personalizado para harmonizar as sobrancelhas com o formato do rosto.",
    description:
      "O design de sobrancelhas é feito de forma personalizada, considerando o formato do rosto, os fios naturais e o resultado desejado.",
    benefits: ["Design personalizado", "Harmonia facial", "Acabamento delicado"],
    duration: "45min",
    price: 50,
    image: designSobrancelhasImg.url,
    featured: true,
  },
  {
    id: "aplicacao-henna",
    name: "Aplicação de Henna",
    category: "sobrancelha",
    shortDescription:
      "Realce das sobrancelhas com henna para um acabamento definido e harmonioso.",
    description:
      "A aplicação de henna realça e define visualmente as sobrancelhas, proporcionando um acabamento mais marcado e harmonioso.",
    benefits: ["Mais definição", "Realce dos fios", "Acabamento harmonioso"],
    duration: "45min",
    price: 60,
    image: aplicacaoHennaImg.url,
    featured: false,
  },
  {
    id: "brow-lamination",
    name: "Brow Lamination",
    category: "sobrancelha",
    shortDescription:
      "Técnica que organiza e direciona os fios para sobrancelhas mais alinhadas e volumosas.",
    description:
      "O Brow Lamination organiza e direciona os fios das sobrancelhas, criando um efeito alinhado e visualmente mais volumoso.",
    benefits: ["Fios mais alinhados", "Aparência mais volumosa", "Efeito moderno"],
    duration: "1h",
    price: 100,
    image: browLaminationImg.url,
    featured: false,
  },
  /* ---------------- MICROPIGMENTAÇÃO ---------------- */
  {
    id: "micropigmentacao-labial",
    name: "Micropigmentação Labial",
    category: "labios",
    shortDescription:
      "Procedimento para realçar o contorno e a aparência dos lábios de forma delicada e personalizada.",
    description:
      "A micropigmentação labial é realizada para realçar visualmente o contorno e a tonalidade dos lábios, respeitando suas características e o resultado desejado.",
    benefits: ["Realce do contorno", "Aparência mais uniforme", "Resultado personalizado"],
    duration: "2h",
    price: 450,
    image: microLabialImg.url,
    featured: true,
  },
  {
    id: "micropigmentacao-olhos",
    name: "Micropigmentação de Olhos",
    category: "olhos",
    shortDescription:
      "Realce delicado da região dos olhos com efeito personalizado.",
    description:
      "Procedimento de micropigmentação voltado ao realce visual da região dos olhos, com acabamento personalizado de acordo com o formato e o resultado desejado.",
    benefits: ["Realce do olhar", "Acabamento personalizado", "Efeito delicado"],
    duration: "2h",
    price: 350,
    image: microOlhosImg.url,
    featured: false,
  },
  /* ---------------- TRATAMENTOS FACIAIS ---------------- */
  {
    id: "dermaplaning",
    name: "Dermaplaning",
    category: "tratamentos",
    shortDescription:
      "Esfoliação superficial que ajuda a deixar a pele mais lisa, uniforme e luminosa.",
    description:
      "O dermaplaning é uma técnica de esfoliação superficial que remove células acumuladas e pelos finos da superfície da pele, ajudando a melhorar a textura e a luminosidade.",
    benefits: ["Pele mais lisa", "Melhora da textura", "Aparência mais luminosa"],
    duration: "1h",
    price: 150,
    image: dermaplaningImg.url,
    featured: true,
  },
];

/* ---------------- DESTAQUES / RESULTADOS ---------------- */
export const featuredProcedures = procedures.filter((p) => p.featured);

export const beforeAfter = [
  {
    id: "resultado-1",
    title: "Resultado de procedimento facial",
    before: "https://placehold.co/600x800?text=Antes",
    after: "https://placehold.co/600x800?text=Depois",
  },
  {
    id: "resultado-2",
    title: "Resultado de procedimento facial",
    before: "https://placehold.co/600x800?text=Antes",
    after: "https://placehold.co/600x800?text=Depois",
  },
];

/* ---------------- BIJUTERIAS ---------------- */
export const jewelry = [
  { id: "10811", name: "Brinco 10811", price: 35, image: biju10811.url },
  { id: "10817", name: "Brinco 10817", price: 35, image: biju10817.url },
  { id: "10821", name: "Brinco 10821", price: 35, image: biju10821.url },
  { id: "10823", name: "Brinco 10823", price: 35, image: biju10823.url },
  { id: "10825", name: "Brinco 10825", price: 35, image: biju10825.url },
  { id: "10828", name: "Brinco 10828", price: 35, image: biju10828.url },
  { id: "10830", name: "Brinco 10830", price: 35, image: biju10830.url },
  { id: "10835", name: "Brinco 10835", price: 35, image: biju10835.url },
  { id: "10838", name: "Brinco 10838", price: 35, image: biju10838.url },
  { id: "10840", name: "Brinco 10840", price: 35, image: biju10840.url },
  { id: "10843", name: "Brinco 10843", price: 35, image: biju10843.url },
  { id: "10845", name: "Brinco 10845", price: 35, image: biju10845.url },
  { id: "10848", name: "Brinco 10848", price: 35, image: biju10848.url },
];

/* ---------------- DEPOIMENTOS ---------------- */
export const testimonials = [
  {
    name: "Cliente 1",
    text: "Atendimento maravilhoso, ambiente acolhedor e muito cuidado em cada detalhe.",
    rating: 5,
  },
  {
    name: "Cliente 2",
    text: "Amei o resultado e me senti muito bem atendida. Recomendo!",
    rating: 5,
  },
  {
    name: "Cliente 3",
    text: "Profissional cuidadosa e atenciosa. O resultado ficou lindo e natural.",
    rating: 5,
  },
];

/* ---------------- FAQ ---------------- */
export const faq = [
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Sim. O ideal é entrar em contato pelo WhatsApp para consultar horários disponíveis e garantir seu atendimento.",
  },
  {
    question: "Como escolher o procedimento ideal?",
    answer:
      "Durante o atendimento, suas necessidades e objetivos são avaliados para definir a opção mais adequada.",
  },
  {
    question: "O Studio atende quais procedimentos?",
    answer:
      "O Studio oferece serviços de estética facial, cílios, sobrancelhas, micropigmentação, perfuração corporal e outros cuidados de beleza.",
  },
];

/* ---------------- FUNÇÕES UTILITÁRIAS ---------------- */
export function getProcedureBySlug(slug: string) {
  return procedures.find((p) => p.id === slug);
}

export function getProceduresByCategory(category: CategoryId) {
  return procedures.filter((p) => p.category === category);
}
