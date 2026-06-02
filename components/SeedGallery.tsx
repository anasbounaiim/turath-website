"use client";

import { useState } from "react";
import Image from "next/image";
import { Info, X } from "lucide-react";
import type { SeedIngredient } from "@/data/seeds";

type SeedGalleryProps = {
  seeds: SeedIngredient[];
};

export function SeedGallery({ seeds }: SeedGalleryProps) {
  const [selectedSeed, setSelectedSeed] = useState<SeedIngredient | null>(null);

  return (
    <>
      <div className="animate-in animate-delay-1 grid grid-cols-2 gap-3 md:grid-cols-4">
        {seeds.map((seed) => (
          <button
            key={seed.name}
            type="button"
            onClick={() => setSelectedSeed(seed)}
            className="interactive-lift overflow-hidden rounded-[8px] bg-cream text-left shadow-[0_12px_30px_rgba(23,63,50,0.06)] ring-1 ring-forest-green/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-green"
            aria-label={`Voir les informations sur ${seed.frenchName}`}
          >
            <div className="relative aspect-square bg-forest-green">
              <Image
                src={seed.image}
                alt={`${seed.frenchName} - ${seed.name}`}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
              <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/88 text-forest-green shadow-sm">
                <Info size={17} />
              </span>
            </div>
            <div className="space-y-1 p-4">
              <h3 className="text-lg font-bold text-forest-green">
                {seed.frenchName}
              </h3>
              <p className="text-right text-lg font-bold text-forest-green" dir="rtl">
                {seed.arabicName}
              </p>
            </div>
          </button>
        ))}
      </div>

      {selectedSeed ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="seed-modal-title"
        >
          <div className="animate-in relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[8px] bg-white text-ink shadow-2xl md:grid-cols-[0.9fr_1.1fr]">
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setSelectedSeed(null)}
              className="interactive-lift absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/86 text-ink hover:bg-mist-green"
            >
              <X size={25} />
            </button>

            <div className="relative min-h-[280px] bg-forest-green md:min-h-[480px]">
              <Image
                src={selectedSeed.image}
                alt={`${selectedSeed.frenchName} seed detail`}
                fill
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-9">
              <p className="text-xs font-bold uppercase text-forest-green/65">
                Matiere premiere / graines
              </p>
              <h2
                id="seed-modal-title"
                className="mt-2 text-4xl font-bold leading-tight text-forest-green"
              >
                {selectedSeed.frenchName}
              </h2>
              <p className="mt-2 text-2xl font-bold text-leaf-green" dir="rtl">
                {selectedSeed.arabicName}
              </p>
              <p className="mt-5 text-base leading-7 text-ink/72">
                {selectedSeed.description}
              </p>
              <div className="mt-7 grid gap-3">
                {selectedSeed.details.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-[8px] border border-forest-green/10 bg-mist-green px-4 py-3 text-sm font-semibold leading-6 text-ink/78"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
