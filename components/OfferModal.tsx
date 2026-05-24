"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { HiX } from "react-icons/hi";

export function OfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const hasSeenModal = window.sessionStorage.getItem("turath-offer-modal");

    if (!hasSeenModal) {
      const timer = window.setTimeout(() => setIsOpen(true), 700);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    window.sessionStorage.setItem("turath-offer-modal", "closed");
    setIsOpen(false);
  };

  const submitEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    window.sessionStorage.setItem("turath-offer-modal", "submitted");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="offer-modal-title"
    >
      <div className="animate-in relative grid w-full max-w-5xl overflow-hidden rounded-[8px] bg-white text-ink shadow-2xl md:grid-cols-[0.95fr_1.05fr]">
        <button
          type="button"
          aria-label="Close offer"
          onClick={closeModal}
          className="interactive-lift absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-mist-green"
        >
          <HiX size={26} />
        </button>

        <div className="relative min-h-[260px] bg-sage-green md:min-h-[490px]">
          <Image
            src="/imgs/ps_10.png"
            alt="Turath botanical oil"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-12 text-center sm:px-10 md:px-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-forest-green/70">
            Offre de bienvenue
          </p>
          <h2
            id="offer-modal-title"
            className="text-4xl font-bold leading-tight text-forest-green sm:text-5xl"
          >
            10% sur votre premiere commande
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-ink/75">
            Recevez nos offres exclusives, nos nouveautes et votre code de
            reduction Turath.
          </p>

          <form onSubmit={submitEmail} className="mx-auto mt-9 grid w-full max-w-md gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="h-12 rounded-full border border-forest-green/45 px-5 text-base text-ink outline-none transition placeholder:text-ink/50 focus:border-forest-green"
            />
            <button
              type="submit"
              className="interactive-lift h-12 rounded-full bg-forest-green px-5 text-sm font-bold uppercase text-cream hover:bg-deep-green"
            >
              Recevoir mon code
            </button>
            {isSubmitted ? (
              <p className="text-sm font-bold text-leaf-green">
                Merci. Votre code sera envoye bientot.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
