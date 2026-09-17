import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const nikkeiMaru = localFont({
  src: "../../public/fonts/PPNikkeiMaru-Semibold.woff2",
  weight: "600",
  variable: "--font-nikkei-maru",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blog | Nucleo",
  description: "Icon design and Nucleo product updates.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nikkeiMaru.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
