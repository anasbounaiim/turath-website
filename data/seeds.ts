export type SeedIngredient = {
  name: string;
  arabicName: string;
  frenchName: string;
  image: string;
  sourceUrl: string;
};

export const seedIngredients: SeedIngredient[] = [
  {
    name: "Black Seed",
    arabicName: "الحبة السوداء",
    frenchName: "Nigelle",
    image: "/optimized/seeds/black-seed.webp",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Nigella_Sativa_Seed.jpg",
  },
  {
    name: "Argan",
    arabicName: "أركان",
    frenchName: "Argan",
    image: "/optimized/seeds/argan-seeds.webp",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Argania_spinosa_seeds,_by_Omar_Hoftun.jpg",
  },
  {
    name: "Sesame",
    arabicName: "الجلجلان",
    frenchName: "Sésame",
    image: "/optimized/seeds/sesame-seeds.webp",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Sa_white_sesame_seeds.jpg",
  },
  {
    name: "Almond",
    arabicName: "اللوز",
    frenchName: "Amande",
    image: "/optimized/seeds/almond.webp",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Almond_with_two_kernels.jpg",
  },
];
