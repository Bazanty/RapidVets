"use client";

import Image from "next/image";
import { useState } from "react";

const partners = [
  { name: "Amica", src: "/logo/amica.png" },
  { name: "APA Insurance", src: "/logo/apa.webp" },
  { name: "CIC Group", src: "/logo/cic.webp" },
  { name: "Digicow", src: "/logo/digicow.png" },
  { name: "GDC", src: "/logo/gdc.png" },
  { name: "Inuka", src: "/logo/inuka.png" },
  { name: "K-Unity", src: "/logo/k-unity.png" },
  { name: "Liberty", src: "/logo/liberty.webp" },
  { name: "Majani", src: "/logo/majani.png" },
  { name: "UAP Insurance", src: "/logo/uap.png" },
  { name: "Vision", src: "/logo/vision.png" },
];

const partnerCategories = [
  "Insurance",
  "AgriTech",
  "Livestock Services",
  "Financial Institutions",
];

function LogoCard({
  partner,
  compact = false,
}: {
  partner: { name: string; src: string };
  compact?: boolean;
}) {
  const [error, setError] = useState(false);

  const initials = partner.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`group flex items-center justify-center rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,34,77,0.10)] ${
        compact ? "h-[92px] w-[156px] px-4 py-4" : "h-[118px] px-6 py-5"
      }`}
      style={{
        borderColor: "rgba(11,34,77,0.08)",
        boxShadow: "0 8px 24px rgba(11,34,77,0.05)",
      }}
    >
      {error ? (
        <div className="flex flex-col items-center justify-center text-center">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{
              fontFamily: "var(--font-grandview)",
              backgroundColor: "#F55C15",
            }}
          >
            {initials}
          </div>

          <span
            className="mt-2 text-[11px] leading-tight"
            style={{
              fontFamily: "var(--font-grandview)",
              color: "#0B224D",
            }}
          >
            {partner.name}
          </span>
        </div>
      ) : (
        <Image
          src={partner.src}
          alt={`${partner.name} logo`}
          width={150}
          height={70}
          onError={() => setError(true)}
          className={`w-auto object-contain opacity-85 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${
            compact ? "h-9 max-w-[108px]" : "h-10 max-w-[130px] sm:h-11 sm:max-w-[140px]"
          }`}
        />
      )}
    </div>
  );
}

function MobileMarquee() {
  const firstRow = partners.slice(0, 6);
  const secondRow = partners.slice(6);

  return (
    <div className="md:hidden">
      {[firstRow, secondRow].map((row, index) => (
        <div key={index} className="mb-4 overflow-hidden last:mb-0">
          <div
            className="flex w-max gap-4"
            style={{
              animation: `${index % 2 === 0 ? "marquee-left" : "marquee-right"} 24s linear infinite`,
            }}
          >
            {[...row, ...row].map((partner, i) => (
              <LogoCard
                key={`${partner.name}-${i}`}
                partner={partner}
                compact
              />
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

function DesktopGrid() {
  return (
    <div className="hidden md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {partners.map((partner) => (
        <LogoCard key={partner.name} partner={partner} />
      ))}
    </div>
  );
}

export default function Companies() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F0] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F55C15]/30 to-transparent" />
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(11,34,77,0.35) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#0B224D]/5 blur-3xl" />
        <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-[#F55C15]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em]"
            style={{
              fontFamily: "var(--font-grandview)",
              background: "rgba(245,92,21,0.10)",
              border: "1px solid rgba(245,92,21,0.22)",
              color: "#F55C15",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F55C15]" />
            Trusted Partners
          </span>

          <h2
            className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: "var(--font-grandview)",
              color: "#0B224D",
            }}
          >
            Organizations supporting
            <span className="text-[#F55C15]"> Rapid Vets</span>
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg"
            style={{
              fontFamily: "var(--font-grandview)",
              color: "#475569",
            }}
          >
            We collaborate with insurance providers, agricultural platforms,
            livestock partners, and financial institutions to expand access to
            veterinary care, valuation services, and farmer support across Kenya.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3 sm:mb-12">
          {partnerCategories.map((category) => (
            <span
              key={category}
              className="rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] sm:text-xs"
              style={{
                fontFamily: "var(--font-grandview)",
                background: "rgba(11,34,77,0.05)",
                border: "1px solid rgba(11,34,77,0.10)",
                color: "#0B224D",
              }}
            >
              {category}
            </span>
          ))}
        </div>

        <MobileMarquee />
        <DesktopGrid />

        <div className="mt-10 text-center sm:mt-12">
          <p
            className="text-xs uppercase tracking-[0.18em]"
            style={{
              fontFamily: "var(--font-grandview)",
              color: "#64748B",
            }}
          >
            Supporting veterinary access across Kenya
          </p>
        </div>
      </div>
    </section>
  );
}