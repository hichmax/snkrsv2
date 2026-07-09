import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import { CartProvider } from "@/components/site/cart-provider";
import { CartOverlay } from "@/components/site/cart-overlay";
import { siteContent } from "@/content/site-content";
import { AnimatedBackground } from "@/components/site/animated-background";
import { CardPageTransition } from "@/components/site/card-page-transition";

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
  description: siteContent.brand.metadataDescription,
  applicationName: "Sneakers Addict",
  category: "shopping",
  openGraph: {
    title: siteContent.brand.metadataTitle,
    description: siteContent.brand.metadataDescription,
    type: "website",
    locale: "fr_FR"
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
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
          <AnimatedBackground />
          <div className="page-noise" />
          {children}
          <CartOverlay />
          <CardPageTransition />
        </CartProvider>
      </body>
    </html>
  );
}
