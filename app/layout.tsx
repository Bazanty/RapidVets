// app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Local Font: Grandview
const grandview = localFont({
  src: [
    { path: "../public/fonts/GrandviewLight.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/GrandviewLightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Grandview.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/GrandviewItalic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/GrandviewBold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/GrandviewBoldItalic.ttf", weight: "700", style: "italic" },
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
        className={`${grandview.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}