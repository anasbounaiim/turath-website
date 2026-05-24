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
    <article className="interactive-lift group min-w-[74vw] overflow-hidden rounded-[8px] bg-cream sm:min-w-0">
      <div className={`relative aspect-[4/5] overflow-hidden ${colorStyles[product.color]}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 74vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <p className="text-right text-sm font-bold text-forest-green" dir="rtl">
            {product.arabicName}
          </p>
          <h3 className="mt-1 text-lg font-bold text-forest-green sm:text-xl">
            {product.name}
          </h3>
          <p className="text-sm text-ink/65">
            {product.size} / {product.price}
          </p>
        </div>
        <a
          href={createWhatsAppUrl(message)}
          target="_blank"
          rel="noreferrer"
          className="interactive-lift inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-forest-green px-4 text-sm font-bold text-cream"
        >
          <FaWhatsapp size={16} />
          Commander / اطلب الآن
        </a>
      </div>
    </article>
  );
}
