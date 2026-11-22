// ============================================================
// CENTRALIZED BUSINESS CONFIGURATION
// Update this file with actual business information before launch.
// ============================================================

export const SITE_CONFIG = {
  name: "Rajawali Poultry & Pet Store",
  tagline: "Your trusted partner in animal care.",
  description:
    "Rajawali Poultry & Pet Store — Supplying quality nutrition, trusted supplies, and everyday essentials for pets and poultry in Padang, West Sumatra.",
  url: "https://rajawalipoultrypet.com", // Update when domain is confirmed
  instagram: "https://www.instagram.com/rajawali.poultrypet/",
  googleMaps: "https://maps.google.com/?q=Dunia+Unggas+Lubuk+Begalung+Padang", // Update with actual pin URL from store owner
  address: "Dunia Unggas & Dunia Pet Care Shop, Lubuk Begalung, Padang, West Sumatra, Indonesia",
  email: "test123@gmail.com", // Placeholder — update if confirmed
};

// ============================================================
// WHATSAPP CONFIGURATION
// ============================================================
export const WHATSAPP_CONFIG = {
  number: "6281364292479",
  defaultMessage: "Halo Rajawali Poultry & Pet Store, saya ingin bertanya mengenai produk yang tersedia.",
};

// Default WhatsApp link including the encoded default message
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(
  WHATSAPP_CONFIG.defaultMessage
)}`;

// Builder for custom order messages (e.g. from Shopping Cart / Product Detail)
export function buildWhatsAppOrderUrl(message?: string): string {
  const text = message && message.trim() ? message : WHATSAPP_CONFIG.defaultMessage;
  return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(text)}`;
}
