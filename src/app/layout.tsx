import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfProText = localFont({
  variable: "--font-sf-pro-text",
  src: [
    { path: "./fonts/SF-Pro-Text-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/SF-Pro-Text-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/SF-Pro-Text-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/SF-Pro-Text-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/SF-Pro-Text-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/SF-Pro-Text-SemiboldItalic.otf", weight: "600", style: "italic" },
  ],
});

const sfProDisplay = localFont({
  variable: "--font-sf-pro-display",
  src: [
    { path: "./fonts/SF-Pro-Display-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/SF-Pro-Display-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/SF-Pro-Display-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/SF-Pro-Display-MediumItalic.otf", weight: "500", style: "italic" },
    { path: "./fonts/SF-Pro-Display-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/SF-Pro-Display-SemiboldItalic.otf", weight: "600", style: "italic" },
  ],
});

export const metadata: Metadata = {
  title: "Our Journal - orchid",
  description: "Get fresh thoughts on design and engineering straight to your inbox.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sfProText.variable} ${sfProDisplay.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
