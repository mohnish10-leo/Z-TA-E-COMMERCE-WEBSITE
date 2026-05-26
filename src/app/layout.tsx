import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZÉTA | The Art of the Unseen",
  description: "Luxury fragrance built on minimalism and raw potency.",
};

import { Navbar } from '@/components/Navbar'
import { CartDrawer } from '@/components/CartDrawer'
import { SearchOverlay } from '@/components/SearchOverlay'
import AiSommelier from '@/components/AiSommelier'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        <Navbar />
        <CartDrawer />
        <SearchOverlay />
        <AiSommelier />
        {children}
      </body>
    </html>
  );
}
