import { MessageCircle } from "lucide-react";
import { contact } from "../data/navigation";

export default function WhatsAppButton() {
  const url = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-7 right-7 z-[500] w-[58px] h-[58px] rounded-full bg-whatsapp flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_32px_rgba(37,211,102,0.55)]"
    >
      <MessageCircle size={28} color="#fff" fill="#fff" />
    </a>
  );
}