import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import type { Product } from "@/data/products";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const colorStyles: Record<Product["color"], string> = {
  forest: "bg-forest-green",
  deep: "bg-[#527567]",
  leaf: "bg-[#6f957f]",
  sage: "bg-sage-green",
  mist: "bg-mist-green",
};

export function ProductCard({ product }: { product: Product }) {
  const message = `Bonjour Turath, je veux commander ${product.name} ${product.size}. Merci de confirmer la disponibilité et la livraison.\nمرحبا تراث، أريد طلب ${product.arabicName} ${product.size}.`;

  return (
    <article className="interactive-lift group min-w-[74vw] overflow-hidden rounded-[8px] border border-forest-green/10 bg-cream shadow-[0_18px_45px_rgba(23,63,50,0.08)] sm:min-w-0">
      <div className={`relative aspect-square overflow-hidden ${colorStyles[product.color]}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 74vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 rounded-full bg-cream/92 px-3 py-1 text-xs font-bold text-forest-green shadow-sm">
          {product.size}
        </div>
      </div>
      <div className="grid gap-4 p-4 sm:p-5">
        <div className="grid gap-2">
          <p className="text-right text-sm font-bold leading-6 text-forest-green" dir="rtl">
            {product.arabicName}
          </p>
          <h3 className="text-xl font-bold leading-tight text-forest-green">
            {product.name}
          </h3>
          <div className="flex items-center justify-between gap-3 border-t border-forest-green/10 pt-3 text-sm">
            <span className="font-bold text-ink/70">Format</span>
            <span className="font-bold text-forest-green">{product.price}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.benefits.slice(0, 2).map((benefit) => (
            <span
              key={benefit}
              className="rounded-full bg-mist-green px-3 py-1 text-xs font-bold text-forest-green"
            >
              {benefit}
            </span>
          ))}
        </div>

        <a
          href={createWhatsAppUrl(message)}
          target="_blank"
          rel="noreferrer"
          className="interactive-lift inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest-green px-4 text-sm font-bold text-cream shadow-[0_12px_28px_rgba(23,63,50,0.2)]"
        >
          <FaWhatsapp size={16} />
          Commander / اطلب الآن
        </a>
      </div>
    </article>
  );
}
