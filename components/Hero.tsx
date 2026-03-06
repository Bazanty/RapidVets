"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { useEffect, useRef } from "react";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const grandview = localFont({
  src: [
    { path: "../public/fonts/GrandviewLight.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/GrandviewLightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Grandview.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/GrandviewItalic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/GrandviewBold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/GrandviewBoldItalic.ttf", weight: "700", style: "italic" },
  ],
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const IMAGE_SRC = "/Pixabay.jpg";

const PROOF_CHIPS = [
  { value: "~1hr", label: "Vet Dispatch", accent: true },
  { value: "20K+", label: "Farmers Served", accent: false },
  { value: "4000+", label: "Vetted Vets", accent: false },
  { value: "50K+", label: "Animals", accent: false },
];

const PARTNERS = [
  "APA Insurance",
  "Heritage Insurance",
  "VisionFund Kenya",
  "Amica SACCO",
];

const HOW_STEPS = [
  { step: "01", label: "Subscribe", desc: "Sign up for KSh 450/month", href: "/get-started" },
  { step: "02", label: "Request", desc: "Call or USSD to request a vet", href: "/how-it-works#request" },
  { step: "03", label: "Dispatched", desc: "Nearest vet sent within ~1 hour", href: "/how-it-works#dispatch" },
  { step: "04", label: "Farm visit", desc: "Diagnosis, drugs & records logged", href: "/how-it-works#visit" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup = () => {};

    void (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap
          .timeline({ delay: 0.15 })
          .from(".hero-eyebrow-line", {
            scaleX: 0,
            duration: 0.6,
            ease: "power3.out",
            transformOrigin: "left center",
          })
          .from(
            ".hero-eyebrow-text",
            { opacity: 0, x: -10, duration: 0.5, ease: "power2.out" },
            "-=0.2"
          )
          .from(
            ".hero-word",
            {
              opacity: 0,
              y: 60,
              rotationX: 10,
              duration: 0.9,
              stagger: 0.1,
              ease: "power4.out",
            },
            "-=0.3"
          )
          .from(
            ".hero-sub",
            { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" },
            "-=0.45"
          )
          .from(
            ".hero-chip",
            {
              opacity: 0,
              y: 14,
              scale: 0.95,
              stagger: 0.07,
              duration: 0.55,
              ease: "back.out(1.4)",
            },
            "-=0.5"
          )
          .from(
            ".hero-cta",
            {
              opacity: 0,
              y: 16,
              scale: 0.96,
              stagger: 0.1,
              duration: 0.65,
              ease: "back.out(1.5)",
            },
            "-=0.35"
          )
          .from(
            ".hero-partners",
            { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          )
          .from(
            ".hero-rule",
            {
              scaleX: 0,
              duration: 0.8,
              ease: "power3.out",
              transformOrigin: "left center",
            },
            "-=0.8"
          );

        gsap.to(".hero-bg-img", {
          scale: 1.04,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(".hero-bg-img", {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.8,
          },
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, []);

  return (
    <>
      <style>{`
        .hero-word-clip {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          margin-right: 0.18em;
        }

        .rv-btn-primary {
          position: relative;
          overflow: hidden;
          background: #E8500A;
          color: #fff;
          transition: box-shadow 0.25s ease, transform 0.2s ease;
          box-shadow: 0 0 0 0 rgba(232,80,10,0);
        }

        .rv-btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .rv-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(232,80,10,0.5), 0 0 0 1px rgba(232,80,10,0.6);
        }

        .rv-btn-primary:hover::before {
          opacity: 1;
        }

        .rv-btn-primary:active {
          transform: translateY(1px);
        }

        .rv-btn-ghost {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          letter-spacing: 0.04em;
        }

        .rv-btn-ghost:hover {
          color: #FF6B2B;
        }

        .rv-btn-ghost:hover .rv-arrow {
          transform: translateX(5px);
        }

        .rv-arrow {
          display: inline-block;
          transition: transform 0.22s ease;
        }

        .hero-chip {
          cursor: default;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .hero-chip:hover {
          background: rgba(232,80,10,0.12) !important;
          border-color: rgba(232,80,10,0.5) !important;
          transform: translateY(-2px);
        }

        .hero-v-rule {
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(255,255,255,0.15) 30%,
            rgba(255,255,255,0.15) 70%,
            transparent 100%
          );
          align-self: stretch;
          flex-shrink: 0;
        }

        .rv-tooltip {
          position: absolute;
          bottom: calc(100% + 16px);
          left: 50%;
          transform: translateX(-50%) translateY(12px);
          width: 268px;
          background: rgba(6, 10, 4, 0.96);
          border: 1px solid rgba(232,80,10,0.22);
          border-radius: 14px;
          padding: 6px;
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow:
            0 32px 64px rgba(0,0,0,0.75),
            0 0 0 1px rgba(255,255,255,0.03),
            inset 0 1px 0 rgba(255,255,255,0.05);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.35s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1);
          z-index: 100;
        }

        .rv-tooltip-trigger:hover .rv-tooltip {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        .rv-step {
          display: flex;
          gap: 11px;
          padding: 9px 10px;
          border-radius: 9px;
          text-decoration: none;
          opacity: 0;
          transform: translateY(7px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.15s ease;
        }

        .rv-tooltip-trigger:hover .rv-step:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.26s;
        }

        .rv-tooltip-trigger:hover .rv-step:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.42s;
        }

        .rv-tooltip-trigger:hover .rv-step:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.58s;
        }

        .rv-tooltip-trigger:hover .rv-step:nth-child(4) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.74s;
        }

        .rv-step:hover {
          background: rgba(232,80,10,0.08);
        }

        .rv-step:hover .rv-step-label {
          color: #FF6B2B;
        }

        .rv-step:hover .rv-step-circle {
          background: rgba(232,80,10,0.22);
          border-color: rgba(232,80,10,0.7);
        }

        .rv-step:active {
          transform: scale(0.97) !important;
        }

        .rv-step-label {
          transition: color 0.15s ease;
        }

        .rv-step-circle {
          transition: background 0.15s ease, border-color 0.15s ease;
        }

        .rv-caret {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background: rgba(6,10,4,0.96);
          border-right: 1px solid rgba(232,80,10,0.22);
          border-bottom: 1px solid rgba(232,80,10,0.22);
        }

        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .ticker-track {
          display: flex;
          white-space: nowrap;
          animation: ticker 22s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .hero-rule {
          display: block;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(232,80,10,0.7) 0%,
            rgba(255,255,255,0.08) 100%
          );
          margin-bottom: 22px;
          transform-origin: left center;
        }

        @media (max-width: 1024px) {
          .hero-main-wrap {
            padding: 0 28px 0 28px !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 768px) {
          .hero-main-wrap {
            padding: 0 20px 0 20px !important;
          }

          .hero-proof-wrap {
            width: 100% !important;
            overflow-x: auto;
            flex-wrap: nowrap !important;
          }

          .hero-cta-row {
            flex-wrap: wrap;
            gap: 18px !important;
          }

          .hero-partners-wrap {
            padding-top: 14px !important;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          position: "relative",
          width: "100%",
          height: "82vh",
          minHeight: 560,
          maxHeight: 760,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          cursor: "default",
        }}
      >
        <div
          className="hero-bg-img"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={IMAGE_SRC}
            alt="Veterinarian examining livestock on a Kenyan farm"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 18%" }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(108deg, rgba(5,12,3,0.96) 0%, rgba(5,12,3,0.80) 35%, rgba(5,12,3,0.32) 62%, rgba(5,12,3,0.05) 80%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 45%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            opacity: 0.035,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
          }}
        />

        <div
          className="hero-main-wrap"
          style={{
            position: "relative",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 40px 0 72px",
            maxWidth: 640,
            width: "100%",
            color: "#f9fafb",
            cursor: "default",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <span
              className="hero-eyebrow-line"
              style={{
                display: "inline-block",
                width: 32,
                height: 2,
                background: "#E8500A",
                borderRadius: 1,
                flexShrink: 0,
              }}
            />
            <span
              className={`${dmSans.className} hero-eyebrow-text`}
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#E8500A",
              }}
            >
              KVB Regulated · 200+ Vets Nationwide
            </span>
          </div>

          <h1
            className={grandview.className}
            style={{
              fontWeight: 700,
              fontSize: "clamp(34px, 4.8vw, 62px)",
              lineHeight: 1.0,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: "0 0 18px",
              perspective: 600,
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            {[
              { words: ["A vet to"], italic: false },
              { words: ["your farm"], italic: false },
              { words: ["in ~1 hour."], italic: true },
            ].map(({ words, italic }, li) => (
              <span key={li} style={{ display: "block" }}>
                {words.map((w) => (
                  <span key={w} className="hero-word-clip">
                    <span
                      className="hero-word"
                      style={{
                        display: "inline-block",
                        ...(italic
                          ? {
                              fontStyle: "italic",
                              color: "#FF6B2B",
                              textShadow: "0 2px 24px rgba(232,80,10,0.45)",
                            }
                          : {}),
                      }}
                    >
                      {w}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <span className="hero-rule" />

          <p
            className={`${dmSans.className} hero-sub`}
            style={{
              fontSize: "0.98rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.52)",
              fontWeight: 300,
              maxWidth: 420,
              margin: "0 0 24px",
            }}
          >
            Quality dairy veterinary care dispatched to your farm.{" "}
            <strong style={{ fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
              KSh 450/month
            </strong>{" "}
            — saving Kenyan farmers thousands on every private visit.
          </p>

          <div
            className="hero-proof-wrap"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "stretch",
              gap: 0,
              marginBottom: 26,
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 10,
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              width: "fit-content",
            }}
          >
            {PROOF_CHIPS.map((chip, i) => (
              <div key={chip.label} style={{ display: "flex", alignItems: "stretch" }}>
                {i > 0 && <div className="hero-v-rule" />}
                <div
                  className="hero-chip"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "11px 16px",
                    background: chip.accent ? "rgba(232,80,10,0.1)" : "transparent",
                    borderLeft: chip.accent ? "2px solid rgba(232,80,10,0.6)" : "none",
                  }}
                >
                  <span
                    className={grandview.className}
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1,
                      marginBottom: 4,
                      color: chip.accent ? "#FF6B2B" : "#fff",
                    }}
                  >
                    {chip.value}
                  </span>
                  <span
                    className={dmSans.className}
                    style={{
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    {chip.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="hero-cta-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              marginBottom: 28,
            }}
          >
            <Link
              href="/get-started"
              className={`${dmSans.className} rv-btn-primary hero-cta`}
              style={{
                display: "inline-block",
                padding: "12px 30px",
                borderRadius: 6,
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.02em",
                cursor: "pointer",
              }}
            >
              Get Started
            </Link>

            <div
              className="rv-tooltip-trigger hero-cta"
              style={{ position: "relative", display: "inline-block" }}
            >
              <button
                className={`${dmSans.className} rv-btn-ghost`}
                style={{ fontSize: "0.88rem", fontWeight: 500 }}
              >
                How it works
                <svg
                  className="rv-arrow"
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="rv-tooltip">
                {HOW_STEPS.map(({ step, label, desc, href }, i) => (
                  <Link key={step} href={href} className="rv-step">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        className="rv-step-circle"
                        style={{
                          width: 27,
                          height: 27,
                          borderRadius: "50%",
                          background: "rgba(232,80,10,0.12)",
                          border: "1px solid rgba(232,80,10,0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.58rem",
                          fontWeight: 700,
                          color: "#FF6B2B",
                          letterSpacing: "0.05em",
                          flexShrink: 0,
                        }}
                      >
                        {step}
                      </span>

                      {i < HOW_STEPS.length - 1 && (
                        <span
                          style={{
                            width: 1,
                            flex: 1,
                            minHeight: 10,
                            background: "rgba(232,80,10,0.18)",
                            marginTop: 4,
                          }}
                        />
                      )}
                    </div>

                    <div style={{ paddingBottom: i < HOW_STEPS.length - 1 ? 10 : 0 }}>
                      <p
                        className={`${grandview.className} rv-step-label`}
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "#f9fafb",
                          margin: "3px 0 3px",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        className={dmSans.className}
                        style={{
                          fontSize: "0.7rem",
                          color: "#9ca3af",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </Link>
                ))}
                <div className="rv-caret" />
              </div>
            </div>
          </div>

          <div
            className="hero-partners hero-partners-wrap"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: 16,
              overflow: "hidden",
            }}
          >
            <p
              className={dmSans.className}
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: 10,
              }}
            >
              Trusted by
            </p>

            <div
              style={{
                overflow: "hidden",
                maskImage:
                  "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
              }}
            >
              <div className="ticker-track">
                {[...PARTNERS, ...PARTNERS].map((name, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                    <span
                      className={dmSans.className}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.22)",
                        letterSpacing: "0.04em",
                        whiteSpace: "nowrap",
                        padding: "0 22px",
                      }}
                    >
                      {name}
                    </span>
                    <span style={{ color: "rgba(232,80,10,0.3)", fontSize: "0.5rem" }}>◆</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}