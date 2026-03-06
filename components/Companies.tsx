"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

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

const COUNT = partners.length;

export default function Companies() {
  const sectionRef = useRef<HTMLElement>(null);
  const angleRef = useRef(0);
  const rafRef = useRef<number>(0);

  const [currentAngle, setCurrentAngle] = useState(0);

  const [layout, setLayout] = useState({
    cardW: 200,
    cardH: 112,
    radius: 380,
    perspective: 1100,
  });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;

      if (w < 480) {
        setLayout({
          cardW: 160,
          cardH: 96,
          radius: 245,
          perspective: 760,
        });
        return;
      }

      if (w < 768) {
        setLayout({
          cardW: 175,
          cardH: 100,
          radius: 285,
          perspective: 840,
        });
        return;
      }

      if (w < 1024) {
        setLayout({
          cardW: 190,
          cardH: 108,
          radius: 330,
          perspective: 950,
        });
        return;
      }

      setLayout({
        cardW: 200,
        cardH: 112,
        radius: 380,
        perspective: 1100,
      });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  useEffect(() => {
    const speed = 0.22;

    const animate = () => {
      angleRef.current = (angleRef.current + speed) % 360;
      setCurrentAngle(angleRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const carouselHeight = useMemo(() => {
    return layout.cardH + layout.radius * 2 * 0.5;
  }, [layout.cardH, layout.radius]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16 lg:mb-20">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Trusted Partners
          </span>

          <h2 className="mt-4 text-2xl font-semibold text-secondary sm:text-3xl lg:text-4xl">
            Companies that work with us
          </h2>

          <p className="mt-4 text-base leading-7 text-secondary/60 sm:text-lg">
            Here are some of our notable partners powering veterinary excellence
            across the region.
          </p>
        </div>

        <div
          className="relative mx-auto flex items-center justify-center"
          style={{
            height: `${carouselHeight}px`,
            perspective: `${layout.perspective}px`,
          }}
        >
          <div
            style={{
              position: "relative",
              width: `${layout.cardW}px`,
              height: `${layout.cardH}px`,
              transformStyle: "preserve-3d",
              transform: `rotateY(${currentAngle}deg)`,
              transition: "none",
            }}
          >
            {partners.map((partner, index) => {
              const theta = (360 / COUNT) * index;

              const cardStyle: React.CSSProperties = {
                position: "absolute",
                top: 0,
                left: 0,
                width: `${layout.cardW}px`,
                height: `${layout.cardH}px`,
                transform: `rotateY(${theta}deg) translateZ(${layout.radius}px)`,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              };

              const normalizedAngle =
                ((theta - currentAngle) % 360 + 360) % 360;

              const facingFactor = Math.cos(
                (normalizedAngle * Math.PI) / 180
              );

              const opacity = Math.max(0.28, (facingFactor + 1) / 2);
              const scale = 0.84 + 0.18 * Math.max(0, facingFactor);
              const blur = facingFactor < 0 ? 0.8 : 0;

              return (
                <div key={partner.name} style={cardStyle}>
                  <div
                    className="flex h-full w-full items-center justify-center rounded-2xl border border-tertiary/30 bg-white px-6 py-5 shadow-md transition-shadow duration-300 hover:shadow-xl sm:px-7 sm:py-5"
                    style={{
                      opacity,
                      transform: `scale(${scale})`,
                      filter: `blur(${blur}px)`,
                      transition:
                        "opacity 0.12s ease, transform 0.12s ease, filter 0.12s ease",
                    }}
                  >
                    <Image
                      src={partner.src}
                      alt={`${partner.name} logo`}
                      width={150}
                      height={64}
                      className="h-10 w-auto max-w-[120px] object-contain sm:h-11 sm:max-w-[130px] lg:h-12 lg:max-w-[140px]"
                      priority={index < 4}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}