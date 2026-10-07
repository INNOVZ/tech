import type { Metadata, Viewport } from "next";
import { Lato, Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DW Tech | AI, Software & Digital Transformation",
    template: "%s | DW Tech",
  },
  description:
    "DW Tech designs and builds custom software, AI automation, ERP and CRM systems, cloud platforms, mobile apps, AI Automations and digital transformation programs for growing businesses.",
  keywords: [
    "digital transformation company in Dubai",
    "custom software development company in Dubai",
    "AI automation solutions providing company in Dubai",
    "ERP, CRM development and implementation providing company in Dubai",
    "cloud solutions providing company in Dubai",
    "mobile app development company in Dubai",
    "Dubai technology company",
    "digital transformation in Dubai",
    "custom software development in UAE",
    "AI automation solutions in UAE",
    "ERP, CRM development and implementation in UAE",
    "cloud solutions in UAE",
    "mobile app development in UAE",
    "Dubai technology company in UAE",
  ],
  authors: [{ name: "DW Tech" }],
  creator: "DW Tech",
  publisher: "Desert Whales Marketing Services LLC",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DW Tech",
    title: "DW tech | Technology that moves business forward",
    description:
      "Intelligent digital ecosystems, custom software, AI automation, and cloud solutions built around real business goals.",
    images: [
      {
        url: "/hero-whale.png",
        width: 1536,
        height: 1024,
        alt: "Glass whale form representing intelligent, scalable technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DW Tech | Technology that moves business forward",
    description:
      "Custom software, AI automation, digital transformation, and cloud solutions.",
    images: ["/hero-whale.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg",
  },
};
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-space-grotesk",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-manrope",
});

export const viewport: Viewport = {
  themeColor: "#05040E",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
