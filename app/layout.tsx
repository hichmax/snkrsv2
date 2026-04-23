import "./globals.css";
import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { CartProvider } from "@/components/site/cart-provider";
import { CartOverlay } from "@/components/site/cart-overlay";
import { siteContent } from "@/content/site-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne"
});

export const metadata: Metadata = {
  title: siteContent.brand.metadataTitle,
  description: siteContent.brand.metadataDescription
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${syne.variable}`} data-scroll-behavior="smooth">
      <body>
        <CartProvider>
          <div className="page-noise" />
          {children}
          <CartOverlay />
        </CartProvider>
      </body>
    </html>
  );
}
