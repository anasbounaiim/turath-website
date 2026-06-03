export type SeedIngredient = {
  name: string;
  arabicName: string;
  frenchName: string;
  image: string;
  sourceUrl: string;
  description: string;
  arabicDescription: string;
  details: string[];
  arabicDetails: string[];
};

export const seedIngredients: SeedIngredient[] = [
  {
    name: "Black Seed",
    arabicName: "\u0627\u0644\u062d\u0628\u0629 \u0627\u0644\u0633\u0648\u062f\u0627\u0621",
    frenchName: "Nigelle",
    image: "/optimized/seeds/black-seed.webp",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nigella_Sativa_Seed.jpg",
    description:
      "Une graine aromatique intense, traditionnellement utilisee dans les soins botaniques et les rituels purifiants.",
    arabicDescription:
      "\u0628\u0630\u0631\u0629 \u0639\u0637\u0631\u064a\u0629 \u0642\u0648\u064a\u0629 \u062a\u0633\u062a\u062e\u062f\u0645 \u062a\u0642\u0644\u064a\u062f\u064a\u0627 \u0641\u064a \u0637\u0642\u0648\u0633 \u0627\u0644\u0639\u0646\u0627\u064a\u0629 \u0627\u0644\u0646\u0628\u0627\u062a\u064a\u0629.",
    details: [
      "Graine petite, noire et riche en caractere.",
      "Choisie pour les huiles a sensation enveloppante.",
      "Associee aux routines cuir chevelu, peau et barbe.",
    ],
    arabicDetails: [
      "\u0628\u0630\u0631\u0629 \u0635\u063a\u064a\u0631\u0629 \u0648\u0633\u0648\u062f\u0627\u0621 \u0648\u0630\u0627\u062a \u0637\u0627\u0628\u0639 \u0642\u0648\u064a.",
      "\u0645\u062e\u062a\u0627\u0631\u0629 \u0644\u0632\u064a\u0648\u062a \u062a\u0645\u0646\u062d \u0625\u062d\u0633\u0627\u0633\u0627 \u063a\u0646\u064a\u0627.",
      "\u0645\u0646\u0627\u0633\u0628\u0629 \u0644\u0631\u0648\u062a\u064a\u0646 \u0641\u0631\u0648\u0629 \u0627\u0644\u0631\u0623\u0633 \u0648\u0627\u0644\u0628\u0634\u0631\u0629 \u0648\u0627\u0644\u0644\u062d\u064a\u0629.",
    ],
  },
  {
    name: "Argan",
    arabicName: "\u0623\u0631\u0643\u0627\u0646",
    frenchName: "Argan",
    image: "/optimized/seeds/argan-seeds.webp",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Argania_spinosa_seeds,_by_Omar_Hoftun.jpg",
    description:
      "La graine d'argan porte l'une des matieres les plus emblematiques du patrimoine naturel marocain.",
    arabicDescription:
      "\u0628\u0630\u0648\u0631 \u0627\u0644\u0623\u0631\u0643\u0627\u0646 \u0645\u0646 \u0623\u0647\u0645 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629 \u0627\u0644\u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0627\u0644\u062a\u0631\u0627\u062b \u0627\u0644\u0645\u063a\u0631\u0628\u064a.",
    details: [
      "Selectionnee pour une huile douce et nourrissante.",
      "Tres presente dans les rituels cheveux, visage et corps.",
      "Une signature botanique fortement liee au Maroc.",
    ],
    arabicDetails: [
      "\u062a\u062e\u062a\u0627\u0631 \u0644\u0632\u064a\u062a \u0646\u0627\u0639\u0645 \u0648\u0645\u063a\u0630.",
      "\u062a\u0633\u062a\u062e\u062f\u0645 \u0641\u064a \u0631\u0648\u062a\u064a\u0646 \u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u0644\u0648\u062c\u0647 \u0648\u0627\u0644\u062c\u0633\u0645.",
      "\u0639\u0644\u0627\u0645\u0629 \u0646\u0628\u0627\u062a\u064a\u0629 \u0645\u0631\u062a\u0628\u0637\u0629 \u0628\u0627\u0644\u0645\u063a\u0631\u0628.",
    ],
  },
  {
    name: "Sesame",
    arabicName: "\u0627\u0644\u062c\u0644\u062c\u0644\u0627\u0646",
    frenchName: "Sesame",
    image: "/optimized/seeds/sesame-seeds.webp",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sa_white_sesame_seeds.jpg",
    description:
      "Une graine claire et delicate, appreciee pour les huiles souples qui glissent facilement sur la peau.",
    arabicDescription:
      "\u0628\u0630\u0631\u0629 \u0646\u0627\u0639\u0645\u0629 \u0648\u062e\u0641\u064a\u0641\u0629 \u062a\u0645\u0646\u062d \u0632\u064a\u0648\u062a\u0627 \u0633\u0644\u0633\u0629 \u0648\u0644\u0637\u064a\u0641\u0629 \u0639\u0644\u0649 \u0627\u0644\u0628\u0634\u0631\u0629.",
    details: [
      "Texture fine, ideale pour les soins quotidiens.",
      "Apporte une sensation de confort sans lourdeur.",
      "S'integre bien aux melanges botaniques.",
    ],
    arabicDetails: [
      "\u0642\u0648\u0627\u0645 \u062e\u0641\u064a\u0641 \u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u0639\u0646\u0627\u064a\u0629 \u0627\u0644\u064a\u0648\u0645\u064a\u0629.",
      "\u064a\u0645\u0646\u062d \u0625\u062d\u0633\u0627\u0633\u0627 \u0628\u0627\u0644\u0631\u0627\u062d\u0629 \u062f\u0648\u0646 \u062b\u0642\u0644.",
      "\u064a\u0646\u0633\u062c\u0645 \u0645\u0639 \u0627\u0644\u062e\u0644\u0637\u0627\u062a \u0627\u0644\u0646\u0628\u0627\u062a\u064a\u0629.",
    ],
  },
  {
    name: "Almond",
    arabicName: "\u0627\u0644\u0644\u0648\u0632",
    frenchName: "Amande",
    image: "/optimized/seeds/almond.webp",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Almond_with_two_kernels.jpg",
    description:
      "L'amande douce est choisie pour les routines simples qui recherchent souplesse, douceur et confort.",
    arabicDescription:
      "\u064a\u062e\u062a\u0627\u0631 \u0627\u0644\u0644\u0648\u0632 \u0644\u0644\u0631\u0648\u062a\u064a\u0646 \u0627\u0644\u0628\u0633\u064a\u0637 \u0627\u0644\u0630\u064a \u064a\u0628\u062d\u062b \u0639\u0646 \u0627\u0644\u0646\u0639\u0648\u0645\u0629 \u0648\u0627\u0644\u0631\u0627\u062d\u0629.",
    details: [
      "Particulierement douce au toucher.",
      "Adaptee aux soins corps, cheveux et massage.",
      "Une base classique des rituels naturels.",
    ],
    arabicDetails: [
      "\u0646\u0627\u0639\u0645 \u062c\u062f\u0627 \u0639\u0646\u062f \u0627\u0644\u0644\u0645\u0633.",
      "\u0645\u0646\u0627\u0633\u0628 \u0644\u0644\u062c\u0633\u0645 \u0648\u0627\u0644\u0634\u0639\u0631 \u0648\u0627\u0644\u0645\u0633\u0627\u062c.",
      "\u0642\u0627\u0639\u062f\u0629 \u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0629 \u0644\u0637\u0642\u0648\u0633 \u0627\u0644\u0639\u0646\u0627\u064a\u0629 \u0627\u0644\u0637\u0628\u064a\u0639\u064a\u0629.",
    ],
  },
  {
    name: "Coconut",
    arabicName: "\u062c\u0648\u0632 \u0627\u0644\u0647\u0646\u062f",
    frenchName: "Noix de coco",
    image: "/optimized/products/coconut.webp",
    sourceUrl: "",
    description:
      "La noix de coco apporte une matiere riche, souvent choisie pour les cheveux secs et les soins protecteurs.",
    arabicDescription:
      "\u064a\u0645\u0646\u062d \u062c\u0648\u0632 \u0627\u0644\u0647\u0646\u062f \u0645\u0627\u062f\u0629 \u063a\u0646\u064a\u0629 \u062a\u0633\u062a\u062e\u062f\u0645 \u063a\u0627\u0644\u0628\u0627 \u0644\u0644\u0634\u0639\u0631 \u0627\u0644\u062c\u0627\u0641 \u0648\u0627\u0644\u0639\u0646\u0627\u064a\u0629 \u0627\u0644\u0648\u0627\u0642\u064a\u0629.",
    details: [
      "Texture genereuse et enveloppante.",
      "Aide a donner une sensation de protection aux longueurs.",
      "Convient aux routines capillaires simples.",
    ],
    arabicDetails: [
      "\u0642\u0648\u0627\u0645 \u063a\u0646\u064a \u0648\u0645\u063a\u0644\u0641.",
      "\u064a\u0633\u0627\u0639\u062f \u0639\u0644\u0649 \u0645\u0646\u062d \u0625\u062d\u0633\u0627\u0633 \u0628\u0627\u0644\u062d\u0645\u0627\u064a\u0629 \u0644\u0623\u0637\u0631\u0627\u0641 \u0627\u0644\u0634\u0639\u0631.",
      "\u0645\u0646\u0627\u0633\u0628 \u0644\u0631\u0648\u062a\u064a\u0646 \u0627\u0644\u0634\u0639\u0631 \u0627\u0644\u0628\u0633\u064a\u0637.",
    ],
  },
  {
    name: "Turath Mix",
    arabicName: "\u0645\u0632\u064a\u062c \u062a\u0631\u0627\u062b",
    frenchName: "Melange Turath",
    image: "/optimized/products/turath-mix.webp",
    sourceUrl: "",
    description:
      "Un assemblage botanique pense pour reunir plusieurs graines et huiles dans un rituel naturel equilibre.",
    arabicDescription:
      "\u0645\u0632\u064a\u062c \u0646\u0628\u0627\u062a\u064a \u064a\u062c\u0645\u0639 \u0639\u062f\u0629 \u0628\u0630\u0648\u0631 \u0648\u0632\u064a\u0648\u062a \u0641\u064a \u0631\u0648\u062a\u064a\u0646 \u0637\u0628\u064a\u0639\u064a \u0645\u062a\u0648\u0627\u0632\u0646.",
    details: [
      "Combine differentes matieres premieres vegetales.",
      "Cree pour une routine complete et facile a adopter.",
      "Met en avant l'esprit Turath: simple, pur et marocain.",
    ],
    arabicDetails: [
      "\u064a\u062c\u0645\u0639 \u0645\u0648\u0627\u062f \u0623\u0648\u0644\u064a\u0629 \u0646\u0628\u0627\u062a\u064a\u0629 \u0645\u062a\u0646\u0648\u0639\u0629.",
      "\u0645\u0635\u0645\u0645 \u0644\u0631\u0648\u062a\u064a\u0646 \u0643\u0627\u0645\u0644 \u0648\u0633\u0647\u0644.",
      "\u064a\u0639\u0643\u0633 \u0631\u0648\u062d \u062a\u0631\u0627\u062b: \u0628\u0633\u064a\u0637\u060c \u0646\u0642\u064a \u0648\u0645\u063a\u0631\u0628\u064a.",
    ],
  },
];
