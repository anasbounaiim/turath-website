import { FaWhatsapp } from "react-icons/fa";
import { createWhatsAppUrl } from "@/lib/whatsapp";

type WhatsAppButtonProps = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "light";
  className?: string;
};

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-forest-green text-cream shadow-[0_12px_30px_rgba(62,92,80,0.24)]"
      : "bg-cream text-ink";

  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noreferrer"
      className={`interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold ${styles} ${className}`}
    >
      <FaWhatsapp aria-hidden="true" size={18} />
      {children}
    </a>
  );
}
