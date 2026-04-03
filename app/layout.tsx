import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenFin Medical Aid Fund | Quality Healthcare for Every Zimbabwean",
  description:
    "GenFin Medical Aid Fund provides affordable, accessible, and comprehensive medical aid coverage for individuals, families, and corporates across Zimbabwe. Branches in Harare, Bulawayo, and Kadoma.",
  keywords: [
    "medical aid Zimbabwe",
    "health insurance Zimbabwe",
    "GenFin medical aid",
    "affordable healthcare Zimbabwe",
    "Harare medical aid",
    "Bulawayo medical aid",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
