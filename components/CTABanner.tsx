"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface CTABannerProps {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

const backgrounds = [
  "rgb(11,34,77)",
  "rgb(245,92,21)",
  "rgb(248,245,240)",
  "rgb(30,41,59)",
];

function parseRgb(rgb: string) {
  const values = rgb.match(/\d+/g);
  if (!values) return { r: 255, g: 255, b: 255 };

  return {
    r: Number(values[0]),
    g: Number(values[1]),
    b: Number(values[2]),
  };
}

function brightness(rgb: string) {
  const { r, g, b } = parseRgb(rgb);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export default function CTABanner({
  title,
  description,
  buttonLabel,
  buttonHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentBg = backgrounds[bgIndex];

  const isLight = useMemo(() => {
    return brightness(currentBg) > 150;
  }, [currentBg]);

  const textColor = isLight ? "#0B224D" : "#FFFFFF";
  const paragraphColor = isLight
    ? "rgba(11,34,77,0.7)"
    : "rgba(255,255,255,0.75)";

  const primaryBg = isLight ? "#0B224D" : "#FFFFFF";
  const primaryText = isLight ? "#FFFFFF" : "#0B224D";

  return (
    <section className="bg-white px-4 py-12 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div
          className="relative overflow-hidden rounded-2xl px-10 py-14 transition-colors duration-700 md:px-14"
          style={{ backgroundColor: currentBg }}
        >

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/5" />
          <div className="absolute top-4 right-64 h-6 w-6 rounded-full bg-white/5" />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <h2
                className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl"
                style={{
                  fontFamily: "var(--font-grandview)",
                  color: textColor,
                }}
              >
                {title}
              </h2>

              {description && (
                <p
                  className="mt-4 text-sm md:text-base leading-relaxed"
                  style={{
                    fontFamily: "var(--font-grandview)",
                    color: paragraphColor,
                  }}
                >
                  {description}
                </p>
              )}

              <div
                className="mt-5 text-sm font-medium"
                style={{
                  fontFamily: "var(--font-grandview)",
                  color: paragraphColor,
                }}
              >
                Serving Mt. Kenya • Nakuru • Nyandarua • Rift Valley
              </div>

            </div>

            <div className="flex flex-wrap items-center gap-4">

              <Link
                href={buttonHref}
                className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold shadow transition hover:scale-[1.03]"
                style={{
                  fontFamily: "var(--font-grandview)",
                  backgroundColor: primaryBg,
                  color: primaryText,
                }}
              >
                {buttonLabel}

                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="rounded-lg border px-7 py-3 text-sm font-semibold transition hover:bg-white/10"
                  style={{
                    fontFamily: "var(--font-grandview)",
                    borderColor: textColor,
                    color: textColor,
                  }}
                >
                  {secondaryLabel}
                </Link>
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}