import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — no Google CDN hit at runtime.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Founder Vibe Code Primer — 2026-05-04",
  description:
    "A one-page primer for non-technical founders. Built for the 2026-05-04 lunch with Dr. Monet Stanford, PharmD at Ayeer Cuba, Burtonsville, MD.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <div className="top-accent" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
