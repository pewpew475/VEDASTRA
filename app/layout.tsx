import type { Metadata } from "next";
import { Playfair_Display, Inter, Roboto, Petrona, Arvo } from "next/font/google";
import "./tailwind.css";
import "./globals.css";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import SmoothScroll from "./components/SmoothScroll";

const arvo = Arvo({
  subsets: ["latin"],
  variable: "--font-arvo",
  weight: ["400", "700"],
});

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-petrona",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "VedAstraa | Astrology Readings",
  description: "Astrology readings and spiritual healing by VedAstraa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} ${roboto.variable} ${petrona.variable} ${arvo.variable}`}>
        <SmoothScroll>
          <div className="page-shell">
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
