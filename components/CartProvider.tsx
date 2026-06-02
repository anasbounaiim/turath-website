"use client";

import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/data/products";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  addItem: (product: Product) => void;
  decrementItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  openCart: () => void;
};

type CustomerInfo = {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  note: string;
};

const CartContext = createContext<CartContextValue | null>(null);

const emptyCustomerInfo: CustomerInfo = {
  fullName: "",
  phone: "",
  city: "",
  address: "",
  note: "",
};

const getPriceValue = (price: string) => Number(price.replace(/[^\d]/g, "")) || 0;

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>(emptyCustomerInfo);

  useEffect(() => {
    const savedCart = window.localStorage.getItem("turath-cart");

    if (savedCart) {
      setItems(JSON.parse(savedCart) as CartItem[]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("turath-cart", JSON.stringify(items));
  }, [items]);

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = items.reduce(
    (total, item) => total + getPriceValue(item.product.price) * item.quantity,
    0,
  );

  const addItem = (product: Product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentItems, { product, quantity: 1 }];
    });
  };

  const decrementItem = (productId: string) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (productId: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => item.product.id !== productId),
    );
  };

  const updateCustomerInfo = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((currentInfo) => ({ ...currentInfo, [field]: value }));
  };

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (items.length === 0) {
      return;
    }

    const productLines = items
      .map(
        (item) =>
          `- ${item.product.name} / ${item.product.arabicName} (${item.product.price}) x${item.quantity}`,
      )
      .join("\n");

    const message = [
      "Bonjour Turath, je souhaite confirmer cette commande:",
      productLines,
      `Total: ${cartTotal} MAD`,
      "",
      "Informations client:",
      `Nom: ${customerInfo.fullName}`,
      `Telephone: ${customerInfo.phone}`,
      `Ville: ${customerInfo.city}`,
      `Adresse: ${customerInfo.address}`,
      customerInfo.note ? `Note: ${customerInfo.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(createWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const value = useMemo(
    () => ({
      items,
      itemCount,
      addItem,
      decrementItem,
      removeItem,
      openCart: () => setIsOpen(true),
    }),
    [items, itemCount],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/45"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cart-title"
        >
          <div className="ml-auto flex h-full w-full max-w-lg flex-col bg-white text-ink shadow-2xl">
            <div className="flex items-center justify-between border-b border-forest-green/10 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase text-forest-green/65">
                  Commande
                </p>
                <h2 id="cart-title" className="text-2xl font-bold text-forest-green">
                  Panier Turath
                </h2>
              </div>
              <button
                type="button"
                aria-label="Fermer le panier"
                onClick={() => setIsOpen(false)}
                className="interactive-lift grid h-10 w-10 place-items-center rounded-full hover:bg-mist-green"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5">
              {items.length > 0 ? (
                <div className="grid gap-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="grid gap-3 rounded-[8px] border border-forest-green/10 bg-mist-green p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-bold text-forest-green">
                            {item.product.name}
                          </h3>
                          <p className="mt-1 text-sm font-bold text-ink/65" dir="rtl">
                            {item.product.arabicName}
                          </p>
                          <p className="mt-1 text-xs font-bold uppercase text-ink/50">
                            {item.product.size}
                          </p>
                          <p className="mt-2 text-sm font-bold text-forest-green">
                            {item.product.price}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Supprimer ${item.product.name}`}
                          onClick={() => removeItem(item.product.id)}
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-forest-green hover:bg-white"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Reduire ${item.product.name}`}
                          onClick={() => decrementItem(item.product.id)}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white text-forest-green"
                        >
                          <Minus size={17} />
                        </button>
                        <span className="grid h-9 min-w-10 place-items-center rounded-full bg-white px-3 text-sm font-bold">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Ajouter ${item.product.name}`}
                          onClick={() => addItem(item.product)}
                          className="grid h-9 w-9 place-items-center rounded-full bg-white text-forest-green"
                        >
                          <Plus size={17} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid min-h-52 place-items-center rounded-[8px] border border-dashed border-forest-green/25 bg-mist-green p-6 text-center">
                  <div>
                    <ShoppingBag className="mx-auto text-forest-green" size={34} />
                    <p className="mt-3 font-bold text-forest-green">
                      Votre panier est vide.
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink/62">
                      Ajoutez une huile depuis la section produits pour preparer
                      votre commande.
                    </p>
                  </div>
                </div>
              )}

              {items.length > 0 ? (
                <div className="mt-4 flex items-center justify-between rounded-[8px] bg-forest-green px-4 py-3 text-cream">
                  <span className="text-sm font-bold uppercase">Total</span>
                  <span className="text-lg font-bold">{cartTotal} MAD</span>
                </div>
              ) : null}

              <form onSubmit={submitOrder} className="mt-6 grid gap-3">
                <h3 className="text-lg font-bold text-forest-green">
                  Informations client
                </h3>
                <input
                  required
                  value={customerInfo.fullName}
                  onChange={(event) => updateCustomerInfo("fullName", event.target.value)}
                  placeholder="Nom complet"
                  className="h-12 rounded-[8px] border border-forest-green/20 px-4 outline-none focus:border-forest-green"
                />
                <input
                  required
                  type="tel"
                  value={customerInfo.phone}
                  onChange={(event) => updateCustomerInfo("phone", event.target.value)}
                  placeholder="Telephone"
                  className="h-12 rounded-[8px] border border-forest-green/20 px-4 outline-none focus:border-forest-green"
                />
                <input
                  required
                  value={customerInfo.city}
                  onChange={(event) => updateCustomerInfo("city", event.target.value)}
                  placeholder="Ville"
                  className="h-12 rounded-[8px] border border-forest-green/20 px-4 outline-none focus:border-forest-green"
                />
                <input
                  required
                  value={customerInfo.address}
                  onChange={(event) => updateCustomerInfo("address", event.target.value)}
                  placeholder="Adresse de livraison"
                  className="h-12 rounded-[8px] border border-forest-green/20 px-4 outline-none focus:border-forest-green"
                />
                <textarea
                  value={customerInfo.note}
                  onChange={(event) => updateCustomerInfo("note", event.target.value)}
                  placeholder="Note optionnelle"
                  rows={3}
                  className="resize-none rounded-[8px] border border-forest-green/20 px-4 py-3 outline-none focus:border-forest-green"
                />
                <button
                  type="submit"
                  disabled={items.length === 0}
                  className="interactive-lift mt-2 inline-flex min-h-12 items-center justify-center rounded-full bg-forest-green px-5 text-sm font-bold text-cream disabled:cursor-not-allowed disabled:bg-forest-green/35"
                >
                  Envoyer la commande sur WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
