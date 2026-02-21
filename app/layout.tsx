// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Local Font: Grandview
const grandview = localFont({
  src: [
    { path: "./fonts/GrandviewLight.ttf", weight: "300", style: "normal" },
    { path: "./fonts/GrandviewLightItalic.ttf", weight: "300", style: "italic" },
    { path: "./fonts/Grandview.ttf", weight: "400", style: "normal" },
    { path: "./fonts/GrandviewItalic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/GrandviewBold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/GrandviewBoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-grandview",
});

// Metadata + Favicons
export const metadata: Metadata = {
  title: "Rapid Vets | Veterinary Care",
  description: "Rapid Vets – fast, modern veterinary services.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grandview.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}