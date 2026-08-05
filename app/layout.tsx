import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyBanner from "@/components/EmergencyBanner";

const archivo = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Summit Roofing | Residential & Commercial Roofing Experts",
    template: "%s | Summit Roofing",
  },
  description:
    "Summit Roofing provides licensed, insured roof replacement, repair, inspection, and emergency roofing services for homes and businesses. Get a free quote today.",
  keywords: [
    "roofing company",
    "roof replacement",
    "roof repair",
    "roof inspection",
    "emergency roofing",
    "commercial roofing",
    "residential roofing",
  ],
  metadataBase: new URL("https://www.summitroofing-demo.com"),
  openGraph: {
    title: "Summit Roofing | Residential & Commercial Roofing Experts",
    description:
      "Protecting homes and businesses with quality roofing you can trust. Free inspections and estimates.",
    siteName: "Summit Roofing",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${inter.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <EmergencyBanner />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
