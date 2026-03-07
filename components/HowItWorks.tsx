"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ─── Steps data ─────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "Partner",
    detail: "A request is submitted digitally by the company.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Customer",
    detail:
      "Customer receives an alert on their phone and proceeds to confirm required details either themselves or through our call centre.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Vet",
    detail: "Roaming Vet attends to the customer.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Report",
    detail:
      "Report is submitted and made available to the company and customer.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
  },
];





/* ─── useInView hook ─────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Stats grid (reused on mobile + desktop) ────────────── */
function StatsRow() {
  return (
    <div className="grid grid-cols-3 divide-x divide-secondary/10 overflow-hidden rounded-2xl border border-secondary/10 bg-white shadow-sm">
      {stats.map((s) => (
        <div key={s.label} className="py-4 text-center">
          <p className="text-xl font-bold text-primary sm:text-2xl">{s.value}</p>
          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-secondary/40">
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────── */
export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);
  const [headerRef, headerInView] = useInView(0.2);
  const [stepsRef, stepsInView] = useInView(0.1);
  const [imageRef, imageInView] = useInView(0.15);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7FAF8] py-16 lg:py-24"
    >
      {/* Radial bg blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-[480px] w-[480px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ─────────────────────────────────────────── */}
        <div ref={headerRef} className="mb-12 text-center lg:mb-20">
          <span
            className={`
              inline-flex items-center gap-2 rounded-full border border-primary/20
              bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase
              tracking-widest text-primary duration-700
              ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              transition-all
            `}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Our Process
          </span>

          <h2
            className={`
              mt-4 text-3xl font-bold text-secondary sm:text-4xl lg:text-5xl
              transition-all duration-700 delay-100
              ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            How it Works
          </h2>

          <p
            className={`
              mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary/60
              sm:text-base transition-all duration-700 delay-200
              ${headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Once we receive the request, we notify the customer and our roaming vets
            reach the location as soon as possible — then submit a transparent report
            on our platform.
          </p>
        </div>

        {/* ── Two-column layout ──────────────────────────────── */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT — Image ─────────────────────────────────── */}
          <div
            ref={imageRef}
            className={`
              transition-all duration-700
              ${imageInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            {/* Mobile image strip (hidden on lg+) */}
            <div className="relative -mx-4 h-56 overflow-hidden sm:mx-0 sm:h-72 sm:rounded-2xl lg:hidden">
              <Image
                src="/home/vet.png"
                alt="RapidVets veterinarian in the field"
                fill
                className="object-cover object-[center_20%]"
                sizes="100vw"
              />
              {/* bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent" />
              {/* mobile trust chip */}
              <div className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
                <div className="flex items-center gap-3 rounded-xl border border-white/50 bg-white/90 px-4 py-2.5 shadow-lg backdrop-blur-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-secondary">Trusted Process</p>
                    <p className="text-[10px] text-secondary/50">End-to-end transparency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop image (hidden below lg) */}
            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-secondary/20">
                <Image
                  src="/home/vet.png"
                  alt="RapidVets veterinarian in the field"
                  width={600}
                  height={560}
                  className="h-[560px] w-full object-cover object-[center_20%]"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/35" />
              </div>

              {/* Floating trust badge */}
              <div className="absolute -bottom-4 -right-5 z-10 flex items-center gap-3 rounded-2xl border border-secondary/10 bg-white px-5 py-3.5 shadow-xl shadow-secondary/10 animate-[bounce_3s_ease-in-out_infinite]" style={{ animationTimingFunction: "ease-in-out" }}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Trusted Process</p>
                  <p className="text-xs text-secondary/50">End-to-end transparency</p>
                </div>
              </div>

              {/* Desktop stats row */}
              <div className="mt-6">
                <StatsRow />
              </div>
            </div>
          </div>

          {/* RIGHT — Steps ──────────────────────────────────── */}
          <div ref={stepsRef} className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.num}>
                {/* Step row */}
                <div
                  className={`
                    group flex cursor-default items-start
                    transition-all duration-500 ${stepDelays[i]}
                    ${stepsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
                  `}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  onTouchStart={() => setActiveStep(i)}
                  onTouchEnd={() => setTimeout(() => setActiveStep(null), 600)}
                >
                  {/* Number badge */}
                  <div
                    className={`
                      relative z-10 flex h-12 w-12 shrink-0 items-center justify-center
                      rounded-xl bg-primary text-base font-bold text-white
                      shadow-lg shadow-primary/25 transition-transform duration-300
                      ${activeStep === i ? "scale-110" : "group-hover:scale-110"}
                    `}
                  >
                    {step.num}
                  </div>

                  {/* Card */}
                  <div
                    className={`
                      ml-4 flex-1 rounded-2xl border bg-white px-5 py-4
                      sm:px-6 sm:py-5 transition-all duration-300
                      ${activeStep === i
                        ? "translate-x-1 border-primary/25 shadow-lg shadow-primary/10"
                        : "border-secondary/10 group-hover:translate-x-1 group-hover:border-primary/20 group-hover:shadow-md group-hover:shadow-primary/8"
                      }
                    `}
                  >
                    <h3
                      className={`
                        text-base font-bold sm:text-lg transition-colors duration-300
                        ${activeStep === i ? "text-primary" : "text-secondary group-hover:text-primary"}
                      `}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-secondary/55 sm:text-sm">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Vertical connector line between steps */}
                {i < steps.length - 1 && (
                  <div className="ml-6 h-5 w-px bg-gradient-to-b from-primary/25 to-primary/5" />
                )}
              </div>
            ))}

            {/* Mobile stats row (hidden on lg+) */}
            <div className="mt-6 lg:hidden">
              <StatsRow />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}