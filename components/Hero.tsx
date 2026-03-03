"use client";

import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { useEffect, useRef } from "react";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const grandview = localFont({
  src: [
    { path: "../public/fonts/GrandviewLight.ttf",       weight: "300", style: "normal" },
    { path: "../public/fonts/GrandviewLightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/Grandview.ttf",            weight: "400", style: "normal" },
    { path: "../public/fonts/GrandviewItalic.ttf",      weight: "400", style: "italic" },
    { path: "../public/fonts/GrandviewBold.ttf",        weight: "700", style: "normal" },
    { path: "../public/fonts/GrandviewBoldItalic.ttf",  weight: "700", style: "italic" },
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
const IMAGE_SRC = "/home/torn anterior cruciate ligament in dogs_ Causes & Treatment.jpg"; // → /public/vet-hero.jpg

const PROOF_CHIPS = [
  { value: "~1hr", label: "Vet Dispatch",   accent: true  },
  { value: "20K+", label: "Farmers Served", accent: false },
  { value: "200+", label: "Vetted Vets",    accent: false },
  { value: "50K+", label: "Cows Covered",   accent: false },
];

const PARTNERS = ["APA Insurance", "Heritage Insurance", "VisionFund Kenya", "Amica SACCO"];

const HOW_STEPS = [
  { step: "01", label: "Subscribe",  desc: "Sign up for KSh 450/month",        href: "/get-started"           },
  { step: "02", label: "Request",    desc: "Call or USSD to request a vet",     href: "/how-it-works#request"  },
  { step: "03", label: "Dispatched", desc: "Nearest vet sent within ~1 hour",   href: "/how-it-works#dispatch" },
  { step: "04", label: "Farm visit", desc: "Diagnosis, drugs & records logged",  href: "/how-it-works#visit"    },
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
        // ── Entrance timeline ──────────────────────────────────────────────
        gsap
          .timeline({ delay: 0.2 })
          .from(".hero-eyebrow-line", { scaleX: 0, duration: 0.6, ease: "power3.out", transformOrigin: "left center" })
          .from(".hero-eyebrow-text", { opacity: 0, x: -10, duration: 0.5, ease: "power2.out" }, "-=0.2")
          .from(".hero-word",         { opacity: 0, y: 60, rotationX: 10, duration: 0.9, stagger: 0.1, ease: "power4.out" }, "-=0.3")
          .from(".hero-sub",          { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.45")
          .from(".hero-chip",         { opacity: 0, y: 14, scale: 0.95, stagger: 0.07, duration: 0.55, ease: "back.out(1.4)" }, "-=0.5")
          .from(".hero-cta",          { opacity: 0, y: 16, scale: 0.96, stagger: 0.1, duration: 0.65, ease: "back.out(1.5)" }, "-=0.35")
          .from(".hero-partners",     { opacity: 0, y: 10, duration: 0.5, ease: "power2.out" }, "-=0.3");

        // ── Ken Burns ─────────────────────────────────────────────────────
        gsap.to(".hero-bg-img", { scale: 1.08, duration: 14, ease: "sine.inOut", repeat: -1, yoyo: true });

        // ── Scroll parallax ───────────────────────────────────────────────
        gsap.to(".hero-bg-img", {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1.8 },
        });
      }, sectionRef);

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }, []);

  return (
    <>
      {/* ── Styles ────────────────────────────────────────────────────────── */}
      <style>{`
        /* GSAP word-slide clip */
        .hero-word-clip {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
          margin-right: 0.22em;
        }

        /* Primary button */
        .rv-btn-primary {
          background: #E8500A;
          color: #fff;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
          box-shadow: 0 8px 20px rgba(232,80,10,0.3);
        }
        .rv-btn-primary:hover  { background: #FF6B2B; transform: translateY(-2px); box-shadow: 0 16px 32px rgba(232,80,10,0.45); }
        .rv-btn-primary:active { transform: translateY(1px); }

        /* "How it works" ghost button */
        .rv-btn-ghost {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #e5e7eb;
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .rv-btn-ghost:hover        { color: #FF6B2B; }
        .rv-btn-ghost:hover .rv-arrow { transform: translateX(4px); }
        .rv-arrow { display: inline-block; transition: transform 0.22s ease; }

        /* Proof chips */
        .hero-chip { transition: border-color 0.2s ease, transform 0.2s ease; cursor: default; }
        .hero-chip:hover { border-color: rgba(232,80,10,0.55) !important; transform: translateY(-1px); }

        /* ── Tooltip ──────────────────────────────────────────────────── */
        .rv-tooltip {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 260px;
          background: rgba(8,13,6,0.97);
          border: 1px solid rgba(232,80,10,0.28);
          border-radius: 16px;
          padding: 8px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 28px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1);
          z-index: 100;
        }
        .rv-tooltip-trigger:hover .rv-tooltip {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }

        /* Step rows */
        .rv-step {
          display: flex;
          gap: 12px;
          padding: 10px;
          border-radius: 10px;
          text-decoration: none;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.32s ease, transform 0.32s ease, background 0.16s ease;
        }
        /* Stagger: steps fade in after tooltip finishes opening (~0.4 s) */
        .rv-tooltip-trigger:hover .rv-step:nth-child(1) { opacity:1; transform:translateY(0); transition-delay:0.28s; }
        .rv-tooltip-trigger:hover .rv-step:nth-child(2) { opacity:1; transform:translateY(0); transition-delay:0.46s; }
        .rv-tooltip-trigger:hover .rv-step:nth-child(3) { opacity:1; transform:translateY(0); transition-delay:0.64s; }
        .rv-tooltip-trigger:hover .rv-step:nth-child(4) { opacity:1; transform:translateY(0); transition-delay:0.82s; }

        .rv-step:hover                { background: rgba(232,80,10,0.09); }
        .rv-step:hover .rv-step-label { color: #FF6B2B; }
        .rv-step:hover .rv-step-circle{ background: rgba(232,80,10,0.28); border-color: rgba(232,80,10,0.75); }
        .rv-step:active               { transform: scale(0.97) !important; background: rgba(232,80,10,0.15); }

        .rv-step-label  { transition: color 0.16s ease; }
        .rv-step-circle { transition: background 0.16s ease, border-color 0.16s ease; }

        /* Tooltip caret */
        .rv-caret {
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 9px;
          height: 9px;
          background: rgba(8,13,6,0.97);
          border-right: 1px solid rgba(232,80,10,0.28);
          border-bottom: 1px solid rgba(232,80,10,0.28);
        }
      `}</style>

      {/* ── Section ───────────────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background image */}
        <div
          className="hero-bg-img"
          style={{ position: "absolute", inset: 0, zIndex: 0, transformOrigin: "center center" }}
        >
          <Image
            src={IMAGE_SRC}
            alt="Veterinarian examining livestock"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 15%" }}
          />
        </div>

        {/* Dark left-weighted overlay */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(105deg, rgba(10,20,5,0.94) 0%, rgba(10,20,5,0.72) 32%, rgba(10,20,5,0.28) 62%, transparent 82%)",
          }}
        />

        {/* Bottom vignette */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to top, rgba(0,0,0,0.38) 0%, transparent 40%)",
          }}
        />

        {/* ── Copy panel ──────────────────────────────────────────────────── */}
        <div
          style={{
            position: "relative", zIndex: 3,
            display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "0 40px 0 64px",
            maxWidth: 620, width: "100%",
            color: "#f9fafb",
          }}
        >

          {/* Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
            <span
              className="hero-eyebrow-line"
              style={{ width: 28, height: 2, background: "#E8500A", display: "inline-block", borderRadius: 1 }}
            />
            <span
              className={`${dmSans.className} hero-eyebrow-text`}
              style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8500A" }}
            >
              KVB Regulated · 200+ Vets Nationwide
            </span>
          </div>

          {/* Headline */}
          <h1
            className={grandview.className}
            style={{
              fontWeight: 900,
              fontSize: "clamp(36px, 4.8vw, 62px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: "0 0 18px",
              perspective: 600,
              textShadow: "0 4px 12px rgba(0,0,0,0.3)",
            }}
          >
            {[
              { words: ["A vet to"],    italic: false },
              { words: ["your farm"],   italic: false },
              { words: ["in ~1 hour."], italic: true  },
            ].map(({ words, italic }, li) => (
              <span key={li} style={{ display: "block" }}>
                {words.map((w) => (
                  <span key={w} className="hero-word-clip">
                    <span
                      className="hero-word"
                      style={{
                        display: "inline-block",
                        fontWeight: 700,
                        ...(italic
                          ? { fontStyle: "italic", color: "#FF6B2B", textShadow: "0 2px 8px rgba(232,80,10,0.3)" }
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

          {/* Subtext */}
          <p
            className={`${dmSans.className} hero-sub`}
            style={{ fontSize: "1rem", lineHeight: 1.72, color: "#d1d5db", fontWeight: 300, maxWidth: 430, margin: "0 0 26px" }}
          >
            Quality dairy veterinary care dispatched to your nearest vet.{" "}
            <strong style={{ fontWeight: 600, color: "#f9fafb" }}>KSh 450/month</strong>
            —saving Kenyan farmers thousands on every private visit.
          </p>

          {/* Proof chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 30 }}>
            {PROOF_CHIPS.map((chip) => (
              <div
                key={chip.label}
                className="hero-chip"
                style={{
                  display: "flex", flexDirection: "column",
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.07)",
                  border: `1px solid ${chip.accent ? "rgba(232,80,10,0.45)" : "rgba(255,255,255,0.12)"}`,
                  borderRadius: 12,
                }}
              >
                <span
                  className={grandview.className}
                  style={{ fontSize: "1rem", fontWeight: 700, lineHeight: 1, marginBottom: 3, color: chip.accent ? "#FF6B2B" : "#fff" }}
                >
                  {chip.value}
                </span>
                <span
                  className={dmSans.className}
                  style={{ fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#9ca3af" }}
                >
                  {chip.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 34 }}>

            {/* Primary CTA */}
            <Link
              href="/get-started"
              className={`${dmSans.className} rv-btn-primary hero-cta`}
              style={{
                display: "inline-block",
                padding: "13px 36px",
                borderRadius: 8,
                fontSize: "0.95rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.01em",
              }}
            >
              Get Started
            </Link>

            {/* How it works — button + hover tooltip */}
            <div
              className="rv-tooltip-trigger hero-cta"
              style={{ position: "relative", display: "inline-block" }}
            >
              <button
                className={`${dmSans.className} rv-btn-ghost`}
                style={{ fontSize: "0.92rem", fontWeight: 500 }}
              >
                How it works
                <svg className="rv-arrow" width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Tooltip panel */}
              <div className="rv-tooltip">
                {HOW_STEPS.map(({ step, label, desc, href }, i) => (
                  <Link key={step} href={href} className="rv-step">

                    {/* Number circle + connector line */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <span
                        className="rv-step-circle"
                        style={{
                          width: 28, height: 28,
                          borderRadius: "50%",
                          flexShrink: 0,
                          background: "rgba(232,80,10,0.14)",
                          border: "1px solid rgba(232,80,10,0.38)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: "0.6rem", fontWeight: 700, color: "#FF6B2B", letterSpacing: "0.05em",
                        }}
                      >
                        {step}
                      </span>
                      {i < HOW_STEPS.length - 1 && (
                        <span style={{ width: 1, flex: 1, minHeight: 12, background: "rgba(232,80,10,0.2)", marginTop: 4 }} />
                      )}
                    </div>

                    {/* Label + description */}
                    <div style={{ paddingBottom: i < HOW_STEPS.length - 1 ? 10 : 0 }}>
                      <p
                        className={`${grandview.className} rv-step-label`}
                        style={{ fontSize: "0.82rem", fontWeight: 700, color: "#f9fafb", margin: "3px 0 3px" }}
                      >
                        {label}
                      </p>
                      <p
                        className={dmSans.className}
                        style={{ fontSize: "0.72rem", color: "#9ca3af", margin: 0, lineHeight: 1.5 }}
                      >
                        {desc}
                      </p>
                    </div>

                  </Link>
                ))}

                {/* Arrow caret */}
                <div className="rv-caret" />
              </div>
            </div>

          </div>

          {/* Partner strip */}
          <div
            className="hero-partners"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 18 }}
          >
            <p
              className={dmSans.className}
              style={{ fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6b7280", marginBottom: 10 }}
            >
              Partners &amp; Clients
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0 20px" }}>
              {PARTNERS.map((name, i) => (
                <span key={name} style={{ display: "inline-flex", alignItems: "center", gap: 20 }}>
                  <span
                    className={dmSans.className}
                    style={{ fontSize: "0.72rem", fontWeight: 500, color: "rgba(255,255,255,0.25)", letterSpacing: "0.03em", whiteSpace: "nowrap" }}
                  >
                    {name}
                  </span>
                  {i < PARTNERS.length - 1 && <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
