// Single source of truth for brand values that aren't pure Tailwind classes
// (icon `color` props, box-shadow colors, etc). Everything else should use
// the Tailwind classes defined in tailwind.config.js (bg-brand-navy, etc).

export const colors = {
  navy: "#0D1F3C",
  navyMid: "#162B52",
  navyDark: "#091629",
  topbar: "#2d5080",
  green: "#1A3D2B",
  greenAcc: "#2E6B4A",
  ivory: "#F5F0E8",
  ivoryMid: "#EDE7D9",
  ivoryWarm: "#E8DFC8",
  gold: "#C4A95C",
  goldLt: "#D4BC7A",
  white: "#FDFAF5",
  text: "#1A1A1A",
  textMid: "#4A4A4A",
  textLt: "#7A7A7A",
  whatsapp: "#25D366",
};

export const fonts = {
  display: "'Playfair Display', serif",
  body: "'Cormorant Garamond', serif",
  sans: "Inter, system-ui, sans-serif",
};

export const googleFontsHref =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@700;900&display=swap";