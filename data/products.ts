export type Product = {
  id: string;
  name: string;
  arabicName: string;
  shortName: string;
  size: string;
  price: string;
  image: string;
  color: "forest" | "deep" | "leaf" | "sage" | "mist";
  benefits: string[];
};

export const products: Product[] = [
  {
    id: "argan",
    name: "Argan Oil",
    arabicName: "زيت أركان",
    shortName: "Argan",
    size: "30ml",
    price: "Price soon",
    image: "/optimized/products/argan.webp",
    color: "deep",
    benefits: ["Daily glow", "Hair and skin care", "Cold-pressed"],
  },
  {
    id: "black-seed",
    name: "Black Seed Oil",
    arabicName: "زيت الحبة السوداء",
    shortName: "Black Seed",
    size: "30ml",
    price: "Price soon",
    image: "/optimized/products/black-seed.webp",
    color: "forest",
    benefits: ["Botanical ritual", "Pure plant oil", "Single-origin"],
  },
  {
    id: "turath-mix",
    name: "Mélange Turath",
    arabicName: "خلطة تراث",
    shortName: "Mélange",
    size: "30ml",
    price: "Price soon",
    image: "/optimized/products/turath-mix.webp",
    color: "leaf",
    benefits: ["Botanical blend", "Daily ritual", "Natural finish"],
  },
  {
    id: "almond",
    name: "Almond Oil",
    arabicName: "زيت اللوز",
    shortName: "Almond",
    size: "30ml",
    price: "Price soon",
    image: "/optimized/products/almond.webp",
    color: "sage",
    benefits: ["Gentle care", "Smooth texture", "Everyday ritual"],
  },
  {
    id: "coconut",
    name: "Coconut Oil",
    arabicName: "زيت جوز الهند",
    shortName: "Coconut",
    size: "30ml",
    price: "Price soon",
    image: "/optimized/products/coconut.webp",
    color: "mist",
    benefits: ["Soft care", "Hair ritual", "Natural texture"],
  },
];
