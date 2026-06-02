"use client";

import { useState } from "react";
import { FileText, X } from "lucide-react";

const policySections = [
  {
    title: "Confidentialite",
    text: "Les informations envoyees a Turath, comme le nom, le telephone, l'adresse de livraison ou l'email, sont utilisees uniquement pour repondre aux demandes, confirmer les commandes et assurer le suivi client.",
  },
  {
    title: "Commandes",
    text: "Les commandes sont confirmees directement avec le client avant preparation. Les prix, formats disponibles, frais de livraison et delais sont communiques avant validation.",
  },
  {
    title: "Livraison",
    text: "La livraison depend de la ville et de la disponibilite du service. Turath partage les informations utiles avec le client avant l'envoi de la commande.",
  },
  {
    title: "Produits",
    text: "Les huiles et melanges sont presentes comme des soins botaniques naturels. Les informations du site ne remplacent pas un avis medical ou dermatologique.",
  },
  {
    title: "Contact",
    text: "Pour toute question liee au site, aux produits ou aux donnees personnelles, vous pouvez ecrire a contact@turath.site.",
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

            <div className="mt-7 grid gap-3">
              {policySections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[8px] border border-forest-green/10 bg-mist-green p-4"
                >
                  <h3 className="text-base font-bold text-forest-green">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink/72">
                    {section.text}
                  </p>
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
