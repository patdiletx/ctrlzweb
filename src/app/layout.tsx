import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CtrlZ - Take Control of Your Productivity",
  description: "Revolutionary productivity tool launching Q2 2025. Get early access with 50% discount on lifetime license. 100% local processing, privacy-first design.",
  keywords: [
    "productivity tool",
    "privacy-first software", 
    "local processing",
    "productivity app",
    "early access",
    "lifetime license",
    "Q2 2025 launch",
    "productivity solution",
    "data privacy",
    "offline productivity"
  ],
  authors: [{ name: "CtrlZ Team" }],
  creator: "CtrlZ",
  publisher: "CtrlZ",
  category: "productivity",
  classification: "productivity software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ctrlz.app",
    siteName: "CtrlZ",
    title: "CtrlZ - Take Control of Your Productivity",
    description: "Revolutionary productivity tool launching Q2 2025. Get early access with 50% discount on lifetime license. 100% local processing, privacy-first design.",
    images: [
      {
        url: "https://ctrlz.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "CtrlZ - Privacy-First Productivity Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CtrlZ - Take Control of Your Productivity",
    description: "Revolutionary productivity tool launching Q2 2025. Get early access with 50% discount. Privacy-first, 100% local processing.",
    images: ["https://ctrlz.app/og-image.png"],
    creator: "@ctrlzapp",
    site: "@ctrlzapp",
  },
  metadataBase: new URL("https://ctrlz.app"),
  alternates: {
    canonical: "https://ctrlz.app",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "CtrlZ",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics gtag={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
