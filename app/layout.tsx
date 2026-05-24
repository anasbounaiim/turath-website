import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Turath | Huiles marocaines pressées à froid",
  description:
    "Huiles végétales marocaines pressées à froid, pures et inspirées du patrimoine naturel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cairo.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
