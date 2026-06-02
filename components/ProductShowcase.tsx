"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type ProductShowcaseProps = {
  products: Product[];
};

const initialProductCount = 6;
const bestSellerIds = ["argan", "almond", "jojoba", "mint", "aloe-vera", "sesame"];

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const [showAll, setShowAll] = useState(false);
  const orderedProducts = [...products].sort((firstProduct, secondProduct) => {
    const firstIndex = bestSellerIds.indexOf(firstProduct.id);
    const secondIndex = bestSellerIds.indexOf(secondProduct.id);

    if (firstIndex === -1 && secondIndex === -1) {
      return 0;
    }

    if (firstIndex === -1) {
      return 1;
    }

    if (secondIndex === -1) {
      return -1;
    }

    return firstIndex - secondIndex;
  });
  const visibleProducts = showAll
    ? orderedProducts
    : orderedProducts.slice(0, initialProductCount);
  const hiddenCount = Math.max(products.length - initialProductCount, 0);

  return (
    <div className="animate-in animate-delay-1">
      <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:mx-auto lg:max-w-5xl lg:grid-cols-3 lg:gap-4">
        {visibleProducts.map((product) => (
          <div key={product.id} className="snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {hiddenCount > 0 ? (
        <button
          type="button"
          onClick={() => setShowAll((current) => !current)}
          className="interactive-lift mx-auto mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-forest-green/20 bg-cream px-5 text-sm font-bold text-forest-green shadow-[0_12px_28px_rgba(23,63,50,0.08)] sm:w-fit"
        >
          {showAll ? (
            <>
              Voir moins
              <ChevronUp size={18} />
            </>
          ) : (
            <>
              Voir plus de produits ({hiddenCount})
              <ChevronDown size={18} />
            </>
          )}
        </button>
      ) : null}
    </div>
  );
}
