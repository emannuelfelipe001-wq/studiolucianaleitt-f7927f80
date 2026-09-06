import { MessageCircle } from "lucide-react";
import { GENERAL_MESSAGE, whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(GENERAL_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-whatsapp-foreground shadow-card transition-transform hover:scale-105"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
