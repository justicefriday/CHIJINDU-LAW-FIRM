import { contact } from "./navigation";

export const serviceOptions = [
  { value: "due-diligence", icon: "🔍", label: "Property Due Diligence", sub: "Root of title · Physical investigation" },
  { value: "conveyancing", icon: "📝", label: "Conveyancing & Title Perfection", sub: "Deeds · C of O · Governor's Consent" },
  { value: "litigation", icon: "⚖️", label: "Property Dispute / Litigation", sub: "Land disputes · Court proceedings" },
  { value: "corporate", icon: "🏢", label: "Corporate & Commercial", sub: "Company registration · Contracts" },
  { value: "banking", icon: "🏦", label: "Banking & Finance Law", sub: "Loans · Mortgages · Security docs" },
  { value: "estate", icon: "📜", label: "Estate Planning", sub: "Wills · Probate · Succession" },
];

export const contactMethods = ["Email", "WhatsApp", "Phone Call", "Zoom / Video Call"];

export const urgencyOptions = [
  "Standard (1–2 weeks)",
  "Moderate (within 1 week)",
  "Urgent (within 48 hours)",
];

export const sourceOptions = [
  "Referral",
  "Google Search",
  "Social Media",
  "LinkedIn",
  "NBA Referral",
  "Other",
];

// Builds a WhatsApp deep link pre-filled with whatever the visitor has
// picked so far — used as the "skip the form" shortcut.
export function buildWhatsAppLink(selectedService) {
  const service = serviceOptions.find((s) => s.value === selectedService);
  const message = service
    ? `Hello, I'd like to book a consultation regarding: ${service.label}.`
    : "Hello, I'd like to book a consultation with The Chijindu Law Firm.";
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}