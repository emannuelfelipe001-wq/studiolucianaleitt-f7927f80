import { clinic } from "@/config/clinic";

/** Abre o WhatsApp com a mensagem já preenchida */
export function whatsappLink(message: string) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Mensagem padrão do botão flutuante e dos CTAs do site */
export const GENERAL_MESSAGE =
  "Olá Luciana, gostaria de saber mais sobre os procedimentos.";

/** Formata a data (yyyy-mm-dd) para dd/mm/aaaa */
export function formatDate(value: string) {
  const [y, m, d] = value.split("-");
  return y && m && d ? `${d}/${m}/${y}` : value;
}

/** Monta a mensagem de agendamento conforme os procedimentos escolhidos */
export function bookingMessage(names: string[], date: string, time: string) {
  const dateText = formatDate(date);
  if (names.length === 1) {
    return `Olá Luciana, gostaria de fazer ${names[0]}, no dia ${dateText} às ${time}. Estará disponível?`;
  }
  const list =
    names.length > 1
      ? `${names.slice(0, -1).join(", ")} e ${names[names.length - 1]}`
      : names.join("");
  return `Olá Luciana, gostaria de fazer os seguintes procedimentos: ${list}, no dia ${dateText} às ${time}. Estará disponível?`;
}
