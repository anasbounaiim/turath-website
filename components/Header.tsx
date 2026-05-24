"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const instagramUrl = "https://www.instagram.com/turath.nature/";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-forest-green/10 bg-cream/94 backdrop-blur">
      <div className="bg-forest-green px-4 py-2 text-center text-xs font-bold uppercase text-white">
        Commandez sur WhatsApp / اطلبوا مباشرة عبر واتساب
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center" aria-label="Turath home">
          <Image src="/imgs/turath-logo.svg" alt="Turath" width={94} height={54} priority className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-xs font-bold uppercase text-ink/75 md:flex">
          <a href="#products">Produits</a>
          <a href="#story">Histoire</a>
          <a href="#order">Commander</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Turath on Instagram"
            className="grid h-10 w-10 place-items-center rounded-full text-ink"
          >
            <FaInstagram size={18} />
          </a>
          <a
            href={createWhatsAppUrl("Hello Turath, I would like to place an order.")}
            target="_blank"
            rel="noreferrer"
            aria-label="Order on WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full bg-forest-green text-cream"
          >
            <FaWhatsapp size={18} />
          </a>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full border border-forest-green/15 text-ink md:hidden"
          >
            {isMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className={`border-t border-forest-green/10 px-4 py-3 text-sm font-bold uppercase text-ink md:hidden ${
          isMenuOpen ? "grid gap-1" : "hidden"
        }`}
      >
        <a href="#products" onClick={closeMenu} className="rounded-[8px] px-3 py-3">
          Produits
        </a>
        <a href="#story" onClick={closeMenu} className="rounded-[8px] px-3 py-3">
          Histoire
        </a>
        <a href="#order" onClick={closeMenu} className="rounded-[8px] px-3 py-3">
          Commander
        </a>
      </nav>
    </header>
  );
}
