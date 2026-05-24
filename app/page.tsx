import Image from "next/image";
import { FaInstagram, FaLeaf, FaSeedling } from "react-icons/fa";
import { MdVerified, MdLocalShipping } from "react-icons/md";
import { Header } from "@/components/Header";
import { OfferModal } from "@/components/OfferModal";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import { seedIngredients } from "@/data/seeds";

const instagramUrl = "https://www.instagram.com/turath.nature/";

const testimonials = [
  {
    name: "Salma",
    city: "Casablanca",
    quote:
      "Texture légère, odeur naturelle et très belle présentation. La commande sur WhatsApp était simple.",
    arabic: "الزيت خفيف وطبيعي، والطلب عبر واتساب كان سهل.",
  },
  {
    name: "Yasmine",
    city: "Rabat",
    quote:
      "J'aime le côté authentique de Turath. Le packaging donne confiance et le produit s'intègre bien à ma routine.",
    arabic: "أحببت الطابع الأصيل للعلامة والتغليف الأنيق.",
  },
  {
    name: "Noura",
    city: "Marrakech",
    quote:
      "Une marque douce, propre et très marocaine. J'ai reçu toutes les informations rapidement.",
    arabic: "علامة مغربية راقية وواضحة، والتواصل كان سريع.",
  },
  {
    name: "Imane",
    city: "Fes",
    quote:
      "Le flacon est joli, l'huile est agreable et le service etait tres professionnel.",
    arabic: "Service simple et professionnel.",
  },
  {
    name: "Lina",
    city: "Tangier",
    quote:
      "J'ai aime la sensation naturelle. La reponse sur WhatsApp etait rapide et claire.",
    arabic: "Reponse rapide et claire.",
  },
  {
    name: "Kenza",
    city: "Agadir",
    quote:
      "Une belle decouverte. Le produit donne envie de garder une routine simple et reguliere.",
    arabic: "Routine simple et naturelle.",
  },
];

export default function Home() {
  return (
    <main className="bg-cream">
      <OfferModal />
      <Header />

      <section className="px-4 pb-10 pt-6 sm:px-6 md:pb-16">
        <div className="path-pattern-green mx-auto grid max-w-7xl overflow-hidden rounded-[8px] text-cream md:min-h-[calc(100vh-112px)] md:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-in flex flex-col justify-center gap-8 p-5 sm:p-8 md:p-12 lg:p-14">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white">
                <FaSeedling size={15} />
                Huiles végétales pressées à froid / زيوت نباتية معصورة على البارد
              </p>
              <div className="space-y-5">
                <h1 className="max-w-xl text-6xl font-bold leading-[0.9] sm:text-7xl md:text-8xl">
                  Turath
                </h1>
                <div className="max-w-xl space-y-3">
                  <p className="text-2xl font-bold leading-9" dir="rtl">
                    عناية طبيعية مستوحاة من التراث المغربي.
                  </p>
                  <p className="text-lg leading-8 text-cream/78">
                    Des huiles botaniques pures pour des rituels quotidiens
                    simples, chaleureux et authentiques.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-3 sm:max-w-md sm:grid-cols-2">
              <WhatsAppButton
                message="Bonjour Turath, je veux recevoir le catalogue des huiles disponibles.\nمرحبا تراث، أريد الاطلاع على المنتجات المتوفرة."
                variant="light"
                className="w-full"
              >
                Commander / اطلب الآن
              </WhatsAppButton>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive-lift inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-cream/25 px-5 text-sm font-bold text-cream"
                >
                  <FaInstagram size={18} />
                  Instagram
                </a>
              </div>

              <div className="grid gap-3 text-sm font-bold text-cream/82 sm:grid-cols-3">
                {[
                  ["Naturel", "زيوت نباتية نقية"],
                  ["Pression douce", "معصور بعناية"],
                  ["Marocain", "مستوحى من التراث"],
                ].map(([title, detail]) => (
                  <div
                    key={title}
                    className="rounded-[8px] border border-cream/15 bg-cream/8 p-4"
                  >
                    <p className="text-lg text-white">{title}</p>
                    <p className="mt-1 text-sm font-bold text-cream/70" dir="rtl">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-in animate-delay-1 relative min-h-[430px] bg-sage-green sm:min-h-[560px] md:min-h-full">
            <Image
              src="/optimized/hero-ps9.webp"
              alt="Femme tenant une bouteille d'huile Turath"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="soft-float object-cover object-[50%_56%]"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-16" id="products">
        <div className="mx-auto max-w-7xl">
          <div className="animate-in mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-ink">
                La gamme / المجموعة
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-ink md:text-[2.65rem]">
                Huiles botaniques essentielles
              </h2>
              <p className="mt-2 text-2xl font-bold text-ink" dir="rtl">
                زيوت طبيعية أساسية
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/68 md:justify-self-end">
              Chaque produit ouvre un message WhatsApp prêt à envoyer avec le
              nom de l'huile et le format choisis.
            </p>
          </div>

          <div className="animate-in animate-delay-1 -mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:mx-auto lg:max-w-5xl lg:grid-cols-3 lg:gap-4">
            {products.map((product) => (
              <div key={product.id} className="snap-start">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-green px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="animate-in mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-ink">
                Les graines / البذور
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-ink sm:text-5xl">
                La matière première au centre.
              </h2>
              <p className="mt-2 text-2xl font-bold text-ink" dir="rtl">
                البذور هي بداية كل قطرة.
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/68 md:justify-self-end">
              De vraies images de graines sont utilisées ici pour garder le site
              naturel, clair et crédible.
            </p>
          </div>

          <div className="animate-in animate-delay-1 grid grid-cols-2 gap-3 md:grid-cols-4">
            {seedIngredients.map((seed) => (
              <article key={seed.name} className="overflow-hidden rounded-[8px] bg-cream">
                <div className="relative aspect-square bg-forest-green">
                  <Image
                    src={seed.image}
                    alt={`${seed.frenchName} - ${seed.name}`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1 p-4">
                  <h3 className="text-lg font-bold text-ink">
                    {seed.frenchName}
                  </h3>
                  <p className="text-right text-lg font-bold text-ink" dir="rtl">
                    {seed.arabicName}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="path-pattern-green px-4 py-12 text-cream sm:px-6 md:py-20" id="story">
        <div className="animate-in mx-auto grid max-w-7xl gap-9 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-[#214f40]">
            <Image
              src="/optimized/story.webp"
              alt=""
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-7">
              <p className="text-xs font-bold uppercase text-white">
              L'histoire / الحكاية
            </p>
            <div className="space-y-4">
              <h2 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
                Un retour calme aux rituels botaniques marocains.
              </h2>
              <p className="max-w-2xl text-3xl font-bold leading-tight" dir="rtl">
                عودة هادئة إلى طقوس العناية المغربية.
              </p>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-cream/76">
              Turath met en avant l'authenticité, la pureté, le savoir-faire
              artisanal et la fierté du patrimoine marocain.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Authentique", "أصيل"],
                ["Pur", "نقي"],
                ["Savoir-faire", "خبرة تقليدية"],
              ].map(([fr, ar]) => (
                <div
                  key={fr}
                  className="flex items-center gap-2 rounded-[8px] bg-cream/10 p-4 text-sm font-bold"
                >
                  <MdVerified size={18} className="text-sage-green" />
                  <span>
                    {fr} / <span dir="rtl">{ar}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="animate-in mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-ink">
                Témoignages / آراء الزبناء
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Ce que disent nos clientes.
              </h2>
              <p className="mt-2 text-2xl font-bold text-ink" dir="rtl">
                تجارب بسيطة وطبيعية.
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/68 md:justify-self-end">
              Des avis courts pour rassurer les clientes avant de passer commande
              directement sur WhatsApp.
            </p>
          </div>

          <div className="animate-in animate-delay-1">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 md:py-20" id="order">
        <div className="mx-auto max-w-7xl">
          <div className="animate-in grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase text-ink">
                Commande directe / طلب مباشر
              </p>
              <h2 className="max-w-xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Choisissez une huile, confirmez sur WhatsApp.
              </h2>
              <p className="max-w-xl text-3xl font-bold leading-tight text-ink" dir="rtl">
                اختاروا الزيت، ونؤكد الطلب عبر واتساب.
              </p>
            </div>

            <div className="grid gap-3">
              {[
                ["1", "Le client choisit un produit / الزبون يختار المنتج"],
                ["2", "WhatsApp s'ouvre avec les détails / تفتح رسالة جاهزة"],
                ["3", "Vous confirmez livraison et paiement / نؤكد التوصيل والدفع"],
              ].map(([number, text]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 border-b border-forest-green/15 py-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest-green text-sm font-bold text-cream">
                    {number}
                  </span>
                  <span className="font-bold text-ink">{text}</span>
                </div>
              ))}
              <WhatsAppButton
                message="Bonjour Turath, je voudrais passer une commande. Merci de m'envoyer les produits disponibles.\nمرحبا تراث، أريد طلب منتج. المرجو إرسال المنتجات المتوفرة."
                className="mt-3 w-full sm:w-fit"
              >
                Commencer / ابدأ الطلب
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-forest-green/10 px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 text-sm text-ink/70 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-2 font-bold text-ink">
            <FaLeaf size={17} />
            Turath
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#products">Produits</a>
            <a href="#story">Histoire</a>
            <a href="#order">WhatsApp</a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FaInstagram size={16} />
              Instagram
            </a>
            <span className="inline-flex items-center gap-2">
              <MdLocalShipping size={18} />
              Livraison bientôt / التوصيل قريبا
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
