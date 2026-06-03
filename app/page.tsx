import Image from "next/image";
import {
  Flower2,
  HandHeart,
  Leaf,
  Mail,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  Truck,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BottleAnimation } from "@/components/BottleAnimation";
import { CartProvider } from "@/components/CartProvider";
import { Header } from "@/components/Header";
import { OfferModal } from "@/components/OfferModal";
import { PolicyModal } from "@/components/PolicyModal";
import { ProductShowcase } from "@/components/ProductShowcase";
import { SeedGallery } from "@/components/SeedGallery";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { products } from "@/data/products";
import { seedIngredients } from "@/data/seeds";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const instagramUrl = "https://www.instagram.com/turath.nature/";

const ritualBenefits = [
  {
    title: "Texture naturelle",
    arabic: "ملمس طبيعي",
    icon: HandHeart,
  },
  {
    title: "Huiles pures",
    arabic: "زيوت نقية",
    icon: Leaf,
  },
  {
    title: "Pression douce",
    arabic: "عصر لطيف",
    icon: Sprout,
  },
  {
    title: "Routine simple",
    arabic: "روتين بسيط",
    icon: Flower2,
  },
];

const keyComponents = [
  {
    title: "Huile d'argan",
    arabic: "زيت أركان",
    text: "Aide a nourrir la peau et les cheveux avec une texture douce et naturelle.",
    icon: Leaf,
    align: "left",
  },
  {
    title: "Huile de nigelle",
    arabic: "الحبة السوداء",
    text: "Une huile botanique intense, choisie pour les rituels purifiants.",
    icon: Sprout,
    align: "right",
  },
  {
    title: "Huile d'amande douce",
    arabic: "زيت اللوز",
    text: "Apporte confort, souplesse et douceur aux soins du quotidien.",
    icon: HandHeart,
    align: "left",
  },
  {
    title: "Huile de coco",
    arabic: "زيت جوز الهند",
    text: "Aide a adoucir les cheveux secs et laisse un fini protecteur.",
    icon: Leaf,
    align: "right",
  },
];

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
    <CartProvider>
    <main className="bg-cream">
      <BottleAnimation />
      <OfferModal />
      <Header />

      <section className="px-4 pb-10 pt-6 sm:px-6 md:pb-16">
        <div className="path-pattern-green mx-auto grid max-w-7xl overflow-hidden rounded-[8px] text-cream md:min-h-[calc(100vh-112px)] md:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-in flex flex-col justify-center gap-8 p-5 sm:p-8 md:p-12 lg:p-14">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase text-white">
                <Sprout size={15} />
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
                <a
                  href="#products"
                  className="interactive-lift inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-5 text-sm font-bold text-ink"
                >
                  Voir les huiles / اختر الزيت
                </a>
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
              className="object-cover object-[50%_56%]"
            />
          </div>
        </div>
      </section>

      <section className="path-pattern-green px-4 py-12 text-cream sm:px-6 md:py-16">
        <div className="animate-in mx-auto max-w-5xl text-center">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-sage-green text-forest-green shadow-[0_14px_30px_rgba(0,0,0,0.16)]">
            <Leaf size={25} />
          </div>
          <p className="text-xs font-bold uppercase text-sage-green">
            Rituel quotidien / روتين يومي
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Nous avons repensé le soin naturel du quotidien.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-cream/72">
            Des huiles végétales pures, sans complexité, pour garder une routine
            douce, claire et inspirée du patrimoine marocain.
          </p>

          <div className="mx-auto mt-9 grid max-w-4xl grid-cols-2 gap-5 sm:grid-cols-4">
            {ritualBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article key={benefit.title} className="grid justify-items-center gap-3">
                  <div className="grid h-20 w-20 place-items-center rounded-full border border-cream/15 bg-sage-green text-forest-green shadow-[0_16px_36px_rgba(0,0,0,0.14)] sm:h-24 sm:w-24">
                    <Icon size={34} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-extrabold uppercase leading-5 text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-base font-bold leading-tight text-sage-green" dir="rtl">
                      {benefit.arabic}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <a
            href="https://form.turath.site"
            target="_blank"
            rel="noreferrer"
            className="interactive-lift mx-auto mt-9 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-5 text-sm font-bold text-ink sm:w-fit"
          >
            Découvrir la routine / اكتشف الروتين
          </a>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-16" id="products">
        <div className="mx-auto max-w-7xl">
          <div className="animate-in mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-forest-green">
                La gamme / المجموعة
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-forest-green md:text-[2.65rem]">
                Huiles botaniques essentielles
              </h2>
              <p className="mt-2 text-2xl font-bold text-forest-green" dir="rtl">
                زيوت طبيعية أساسية
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/68 md:justify-self-end">
              Chaque produit ouvre un message WhatsApp prêt à envoyer avec le
              nom de l'huile et le format choisis.
            </p>
          </div>

          <ProductShowcase products={products} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7faf2] px-4 py-12 sm:px-6 md:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-forest-green/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-forest-green/10" />
        <div className="mx-auto max-w-7xl">
          <div className="animate-in mx-auto mb-10 max-w-3xl text-center">
              <p className="text-xs font-bold uppercase text-forest-green">
                Composants botaniques / المكونات
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-forest-green sm:text-5xl">
                Les composants principaux.
              </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-ink/65">
              Une lecture simple des huiles qui composent les rituels Turath,
              inspiree des fiches botaniques traditionnelles.
            </p>
          </div>

          <div className="animate-in animate-delay-1 relative mx-auto max-w-6xl overflow-hidden rounded-[8px] bg-[#fbfcf7] px-4 py-7 sm:px-8 md:min-h-[660px] md:px-10 md:py-8">
            <svg
              className="pointer-events-none absolute left-1/2 top-24 hidden h-[430px] w-[680px] -translate-x-1/2 text-forest-green/16 md:block"
              viewBox="0 0 1000 500"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="botanicalArrow"
                  markerHeight="8"
                  markerWidth="8"
                  orient="auto"
                  refX="7"
                  refY="4"
                >
                  <path d="M0 0L8 4L0 8" fill="currentColor" />
                </marker>
              </defs>
              <path
                d="M190 92C322 88 404 132 460 188"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                markerEnd="url(#botanicalArrow)"
              />
              <path
                d="M810 92C678 88 596 132 540 188"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                markerEnd="url(#botanicalArrow)"
              />
              <path
                d="M190 392C322 382 404 338 462 282"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                markerEnd="url(#botanicalArrow)"
              />
              <path
                d="M810 392C678 382 596 338 538 282"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                markerEnd="url(#botanicalArrow)"
              />
            </svg>

            <div className="relative z-10 mx-auto mb-6 flex w-full max-w-[230px] items-end justify-center pt-2 md:absolute md:bottom-0 md:left-1/2 md:mb-0 md:h-[560px] md:max-w-none md:-translate-x-1/2 md:py-0">
              <div className="absolute bottom-0 h-[78%] w-[86%] rounded-t-full border border-forest-green/10 bg-white/65 shadow-[0_24px_60px_rgba(23,63,50,0.10)] md:w-[78%] md:shadow-[0_30px_80px_rgba(23,63,50,0.10)]" />
              <div className="absolute bottom-5 h-8 w-36 rounded-full bg-forest-green/12 blur-xl md:bottom-7 md:h-10 md:w-48" />
              <p className="pointer-events-none absolute top-9 hidden text-[5rem] font-bold leading-none text-forest-green/[0.035] md:block">
                TURATH
              </p>
              <Image
                src="/imgs/bottle%20tran.png"
                alt="Flacon d'huile Turath"
                width={380}
                height={620}
                sizes="(min-width: 768px) 24vw, 70vw"
                data-bottle-animation
                className="relative h-auto max-h-[300px] w-auto object-contain drop-shadow-[0_18px_26px_rgba(23,63,50,0.18)] md:max-h-[560px] md:drop-shadow-[0_24px_34px_rgba(23,63,50,0.22)]"
              />
            </div>

            <div className="relative z-20 grid gap-3 md:block">
              {keyComponents.map((component, index) => {
                const Icon = component.icon;
                const positionClass =
                  index === 0
                    ? "md:left-8 md:top-[185px]"
                    : index === 1
                      ? "md:right-8 md:top-[130px]"
                      : index === 2
                        ? "md:left-8 md:top-[430px]"
                        : "md:right-8 md:top-[430px]";
                const isRight = component.align === "right";

                return (
                  <article
                    key={component.title}
                    className={`${positionClass} grid grid-cols-[54px_minmax(0,1fr)] items-center gap-3 rounded-[8px] border border-forest-green/10 bg-white/78 p-4 shadow-[0_14px_34px_rgba(23,63,50,0.07)] md:absolute md:w-[355px] md:grid-cols-[62px_minmax(0,1fr)] md:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
                      isRight ? "md:grid-cols-[minmax(0,1fr)_62px]" : ""
                    }`}
                  >
                    <div
                      className={`grid h-[54px] w-[54px] place-items-center rounded-full bg-mist-green text-forest-green ring-1 ring-forest-green/10 md:h-[62px] md:w-[62px] ${
                        isRight ? "md:col-start-2" : ""
                      }`}
                    >
                      <Icon size={26} className="md:h-[30px] md:w-[30px]" />
                    </div>
                    <div
                      className={`min-w-0 ${
                        isRight ? "md:col-start-1 md:row-start-1 md:text-right" : ""
                      }`}
                    >
                      <h3 className="text-base font-bold leading-tight text-forest-green md:text-xl">
                        {component.title}
                      </h3>
                      <p className="mt-1 text-base font-bold leading-tight text-leaf-green md:text-lg" dir="rtl">
                        {component.arabic}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink/62 md:mt-3">
                        {component.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-green px-4 py-12 sm:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="animate-in mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase text-forest-green">
                Les graines / البذور
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-forest-green sm:text-5xl">
                La matière première au centre.
              </h2>
              <p className="mt-2 text-2xl font-bold text-forest-green" dir="rtl">
                البذور هي بداية كل قطرة.
              </p>
            </div>
            <p className="max-w-xl text-base leading-7 text-ink/68 md:justify-self-end">
              De vraies images de graines sont utilisées ici pour garder le site
              naturel, clair et crédible.
            </p>
          </div>

          <SeedGallery seeds={seedIngredients} />
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
                  <ShieldCheck size={18} className="text-sage-green" />
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
              <p className="text-xs font-bold uppercase text-forest-green">
                Témoignages / آراء الزبناء
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-forest-green sm:text-5xl">
                Ce que disent nos clientes.
              </h2>
              <p className="mt-2 text-2xl font-bold text-forest-green" dir="rtl">
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
              <p className="text-xs font-bold uppercase text-forest-green">
                Commande directe / طلب مباشر
              </p>
              <h2 className="max-w-xl text-4xl font-bold leading-tight text-forest-green sm:text-5xl">
                Choisissez une huile, confirmez sur WhatsApp.
              </h2>
              <p className="max-w-xl text-3xl font-bold leading-tight text-forest-green" dir="rtl">
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
              <a
                href="#products"
                className="interactive-lift mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-forest-green px-5 text-sm font-bold text-cream sm:w-fit"
              >
                Choisir les huiles / اختر الزيوت
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-green px-4 py-12 sm:px-6 md:py-20" id="contact">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="animate-in space-y-4">
            <p className="text-xs font-bold uppercase text-forest-green">
              Contact / تواصل معنا
            </p>
            <h2 className="max-w-xl text-4xl font-bold leading-tight text-forest-green sm:text-5xl">
              Une question avant votre commande ?
            </h2>
            <p className="max-w-xl text-2xl font-bold leading-tight text-forest-green" dir="rtl">
              نحن هنا لمساعدتكم قبل تأكيد الطلب.
            </p>
            <p className="max-w-xl text-base leading-7 text-ink/68">
              Contactez Turath pour confirmer la disponibilite, les prix, la
              livraison ou une recommandation selon votre routine.
            </p>
          </div>

          <div className="animate-in animate-delay-1 grid gap-3 sm:grid-cols-2">
            <a
              href="mailto:contact@turath.site"
              className="interactive-lift flex min-h-36 flex-col justify-between rounded-[8px] bg-white p-5 text-ink shadow-[0_16px_36px_rgba(23,63,50,0.07)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-green text-cream">
                <Mail size={21} />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-forest-green/65">
                  Email
                </span>
                <span className="mt-1 block text-lg font-bold text-forest-green">
                  contact@turath.site
                </span>
              </span>
            </a>

            <a
              href="#products"
              className="interactive-lift flex min-h-36 flex-col justify-between rounded-[8px] bg-white p-5 text-ink shadow-[0_16px_36px_rgba(23,63,50,0.07)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-green text-cream">
                <ShoppingBag size={21} />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-forest-green/65">
                  Commande
                </span>
                <span className="mt-1 block text-lg font-bold text-forest-green">
                  Choisir les huiles
                </span>
              </span>
            </a>

            <a
              href={createWhatsAppUrl(
                "Bonjour Turath, j'ai une question avant de passer commande.",
              )}
              target="_blank"
              rel="noreferrer"
              className="interactive-lift flex min-h-36 flex-col justify-between rounded-[8px] bg-white p-5 text-ink shadow-[0_16px_36px_rgba(23,63,50,0.07)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-green text-cream">
                <MessageCircle size={21} />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-forest-green/65">
                  WhatsApp
                </span>
                <span className="mt-1 block text-lg font-bold text-forest-green">
                  Message direct
                </span>
              </span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="interactive-lift flex min-h-36 flex-col justify-between rounded-[8px] bg-white p-5 text-ink shadow-[0_16px_36px_rgba(23,63,50,0.07)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-green text-cream">
                <FaInstagram size={20} />
              </span>
              <span>
                <span className="block text-sm font-bold uppercase text-forest-green/65">
                  Instagram
                </span>
                <span className="mt-1 block text-lg font-bold text-forest-green">
                  @turath.nature
                </span>
              </span>
            </a>

          </div>
        </div>
      </section>

      <footer className="border-t border-forest-green/10 px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-6 text-sm text-ink/70 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-2 font-bold text-ink">
            <Leaf size={17} />
            Turath
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#products">Produits</a>
            <a href="#story">Histoire</a>
            <a href="#order">WhatsApp</a>
            <a href="#contact">Contact</a>
            <a href="mailto:contact@turath.site">contact@turath.site</a>
            <PolicyModal />
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <FaInstagram size={16} />
              Instagram
            </a>
            <span className="inline-flex items-center gap-2">
              <Truck size={18} />
              Livraison bientôt / التوصيل قريبا
            </span>
          </div>
        </div>
      </footer>
      <a
        href={createWhatsAppUrl(
          "Bonjour Turath, je souhaite passer une commande.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Commander sur WhatsApp"
        className="interactive-lift soft-float fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_34px_rgba(0,0,0,0.24)] sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
      >
        <FaWhatsapp aria-hidden="true" size={32} />
      </a>
    </main>
    </CartProvider>
  );
}
