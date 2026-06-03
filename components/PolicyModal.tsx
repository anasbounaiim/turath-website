"use client";

import { useState } from "react";
import { FileText, X } from "lucide-react";

const policySections = [
  {
    title: "Confidentialite",
    arabicTitle: "\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629",
    text: "Les informations envoyees a Turath, comme le nom, le telephone, l'adresse de livraison ou l'email, sont utilisees uniquement pour repondre aux demandes, confirmer les commandes et assurer le suivi client.",
    arabicText:
      "\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0631\u0633\u0644\u0629 \u0625\u0644\u0649 \u062a\u0631\u0627\u062b\u060c \u0645\u062b\u0644 \u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0647\u0627\u062a\u0641 \u0648\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0623\u0648 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u060c \u062a\u0633\u062a\u062e\u062f\u0645 \u0641\u0642\u0637 \u0644\u0644\u0631\u062f \u0639\u0644\u0649 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0637\u0644\u0628\u064a\u0627\u062a \u0648\u0645\u062a\u0627\u0628\u0639\u0629 \u0627\u0644\u0632\u0628\u0646\u0627\u0621.",
  },
  {
    title: "Commandes",
    arabicTitle: "\u0627\u0644\u0637\u0644\u0628\u0627\u062a",
    text: "Les commandes sont confirmees directement avec le client avant preparation. Les prix, formats disponibles, frais de livraison et delais sont communiques avant validation.",
    arabicText:
      "\u064a\u062a\u0645 \u062a\u0623\u0643\u064a\u062f \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0645\u0628\u0627\u0634\u0631\u0629 \u0645\u0639 \u0627\u0644\u0632\u0628\u0648\u0646 \u0642\u0628\u0644 \u0627\u0644\u062a\u062d\u0636\u064a\u0631. \u064a\u062a\u0645 \u062a\u0648\u0636\u064a\u062d \u0627\u0644\u0623\u0633\u0639\u0627\u0631 \u0648\u0627\u0644\u0623\u062d\u062c\u0627\u0645 \u0627\u0644\u0645\u062a\u0648\u0641\u0631\u0629 \u0648\u0645\u0635\u0627\u0631\u064a\u0641 \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0648\u0627\u0644\u0622\u062c\u0627\u0644 \u0642\u0628\u0644 \u0627\u0644\u062a\u0623\u0643\u064a\u062f.",
  },
  {
    title: "Livraison",
    arabicTitle: "\u0627\u0644\u062a\u0648\u0635\u064a\u0644",
    text: "La livraison depend de la ville et de la disponibilite du service. Turath partage les informations utiles avec le client avant l'envoi de la commande.",
    arabicText:
      "\u064a\u0639\u062a\u0645\u062f \u0627\u0644\u062a\u0648\u0635\u064a\u0644 \u0639\u0644\u0649 \u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0648\u062a\u0648\u0641\u0631 \u0627\u0644\u062e\u062f\u0645\u0629. \u062a\u0634\u0627\u0631\u0643 \u062a\u0631\u0627\u062b \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0647\u0645\u0629 \u0645\u0639 \u0627\u0644\u0632\u0628\u0648\u0646 \u0642\u0628\u0644 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628.",
  },
  {
    title: "Produits",
    arabicTitle: "\u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a",
    text: "Les huiles et melanges sont presentes comme des soins botaniques naturels. Les informations du site ne remplacent pas un avis medical ou dermatologique.",
    arabicText:
      "\u062a\u0642\u062f\u0645 \u0627\u0644\u0632\u064a\u0648\u062a \u0648\u0627\u0644\u062e\u0644\u0637\u0627\u062a \u0643\u0639\u0646\u0627\u064a\u0629 \u0646\u0628\u0627\u062a\u064a\u0629 \u0637\u0628\u064a\u0639\u064a\u0629. \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0627 \u062a\u0639\u0648\u0636 \u0627\u0633\u062a\u0634\u0627\u0631\u0629 \u0637\u0628\u064a\u0629 \u0623\u0648 \u062c\u0644\u062f\u064a\u0629.",
  },
  {
    title: "Contact",
    arabicTitle: "\u0627\u0644\u062a\u0648\u0627\u0635\u0644",
    text: "Pour toute question liee au site, aux produits ou aux donnees personnelles, vous pouvez ecrire a contact@turath.site.",
    arabicText:
      "\u0644\u0623\u064a \u0633\u0624\u0627\u0644 \u0645\u062a\u0639\u0644\u0642 \u0628\u0627\u0644\u0645\u0648\u0642\u0639 \u0623\u0648 \u0627\u0644\u0645\u0646\u062a\u062c\u0627\u062a \u0623\u0648 \u0627\u0644\u0645\u0639\u0637\u064a\u0627\u062a \u0627\u0644\u0634\u062e\u0635\u064a\u0629\u060c \u064a\u0645\u0643\u0646\u0643\u0645 \u0645\u0631\u0627\u0633\u0644\u062a\u0646\u0627 \u0639\u0644\u0649 contact@turath.site.",
  },
];

export function PolicyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 text-left hover:text-forest-green"
      >
        <FileText size={16} />
        Politique du site
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/55 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-title"
        >
          <div className="animate-in relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[8px] bg-white p-6 text-ink shadow-2xl sm:p-8">
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => setIsOpen(false)}
              className="interactive-lift absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-mist-green"
            >
              <X size={25} />
            </button>

            <p className="pr-12 text-xs font-bold uppercase text-forest-green/65">
              Turath
            </p>
            <h2
              id="policy-modal-title"
              className="mt-2 pr-12 text-3xl font-bold leading-tight text-forest-green sm:text-4xl"
            >
              Politique du site
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/72">
              Cette politique explique simplement comment Turath gere les
              demandes, les commandes et les informations partagees par les
              visiteurs du site.
            </p>
            <p className="mt-3 max-w-2xl text-base font-semibold leading-7 text-ink/72" dir="rtl">
              \u062a\u0648\u0636\u062d \u0647\u0630\u0647 \u0627\u0644\u0633\u064a\u0627\u0633\u0629 \u0628\u0628\u0633\u0627\u0637\u0629 \u0643\u064a\u0641 \u062a\u062a\u0639\u0627\u0645\u0644 \u062a\u0631\u0627\u062b \u0645\u0639 \u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0648\u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u064a \u064a\u0634\u0627\u0631\u0643\u0647\u0627 \u0632\u0648\u0627\u0631 \u0627\u0644\u0645\u0648\u0642\u0639.
            </p>

            <div className="mt-7 grid gap-3">
              {policySections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[8px] border border-forest-green/10 bg-mist-green p-4"
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <h3 className="text-base font-bold text-forest-green">
                        {section.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-ink/72">
                        {section.text}
                      </p>
                    </div>
                    <div className="text-right" dir="rtl">
                      <h3 className="text-base font-bold text-forest-green">
                        {section.arabicTitle}
                      </h3>
                      <p className="mt-2 text-sm font-semibold leading-6 text-ink/72">
                        {section.arabicText}
                      </p>
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <a
              href="mailto:contact@turath.site"
              className="interactive-lift mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-forest-green px-5 text-sm font-bold text-cream hover:bg-deep-green"
            >
              contact@turath.site
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
