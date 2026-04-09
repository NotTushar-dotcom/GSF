import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GSF — Global Society of Founders",
    template: "%s | GSF",
  },
  description:
    "GSF helps students validate ideas, build execution confidence, and develop founder thinking through structured cohort journeys.",
  keywords: [
    "startup",
    "founders",
    "cohort",
    "idea validation",
    "entrepreneurship",
    "student startups",
  ],
  metadataBase: new URL("https://gsf.community"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gsf.community",
    siteName: "Global Society of Founders",
    title: "GSF — Global Society of Founders",
    description:
      "From startup curiosity to founder clarity. Join the cohort-based founder development ecosystem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSF — Global Society of Founders",
    description:
      "From startup curiosity to founder clarity. Join the cohort-based founder development ecosystem.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
