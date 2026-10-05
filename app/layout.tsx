import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DW Tech | AI, Software & Digital Transformation",
    template: "%s | DW Tech",
  },
  description:
    "DW Tech designs and builds custom software, AI automation, ERP and CRM systems, cloud platforms, mobile apps, and digital transformation programs for growing businesses.",
  keywords: [
    "digital transformation company",
    "custom software development",
    "AI automation solutions",
    "ERP CRM implementation",
    "cloud solutions",
    "mobile app development",
    "Dubai technology company",
    "Kerala software company",
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
    title: "DW Tech | Technology that moves business forward",
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
};
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
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
