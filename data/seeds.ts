export type SeedIngredient = {
  name: string;
  arabicName: string;
  frenchName: string;
  image: string;
  sourceUrl: string;
  description: string;
  details: string[];
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
    details: [
      "Graine petite, noire et riche en caractere.",
      "Choisie pour les huiles a sensation enveloppante.",
      "Associee aux routines cuir chevelu, peau et barbe.",
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
    details: [
      "Selectionnee pour une huile douce et nourrissante.",
      "Tres presente dans les rituels cheveux, visage et corps.",
      "Une signature botanique fortement liee au Maroc.",
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
    details: [
      "Texture fine, ideale pour les soins quotidiens.",
      "Apporte une sensation de confort sans lourdeur.",
      "S'integre bien aux melanges botaniques.",
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
    details: [
      "Particulierement douce au toucher.",
      "Adaptee aux soins corps, cheveux et massage.",
      "Une base classique des rituels naturels.",
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
    details: [
      "Texture genereuse et enveloppante.",
      "Aide a donner une sensation de protection aux longueurs.",
      "Convient aux routines capillaires simples.",
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
    details: [
      "Combine differentes matieres premieres vegetales.",
      "Cree pour une routine complete et facile a adopter.",
      "Met en avant l'esprit Turath: simple, pur et marocain.",
    ],
  },
];
