const DEFAULT_WHATSAPP_NUMBER = "212600000000";

export function createWhatsAppUrl(message: string) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
  const cleanPhone = phone.replace(/[^\d]/g, "");

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}
