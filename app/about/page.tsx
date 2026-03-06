// app/about/page.tsx
"use client";

import Link from "next/link";
import { Cormorant_Garamond, DM_Mono, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  preload: false,
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  preload: false,
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  preload: false,
});

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 sm:mb-5">
      <span className="h-px w-7 shrink-0 bg-[#F55C15] sm:w-8" />
      <span
        className="text-[0.62rem] uppercase tracking-[0.2em] text-[#F55C15] sm:text-[0.68rem]"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {children}
      </span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
    </svg>
  );
}

function PulseDot() {
  return (
    <span className="h-2 w-2 shrink-0 rounded-full bg-[#F55C15] shadow-[0_0_20px_rgba(245,92,21,0.8)]" />
  );
}

function MobileHorizontalScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:hidden">
      <div className="scrollbar-none -mx-4 overflow-x-auto px-4 pb-2">
        <div className="flex gap-4 snap-x snap-mandatory">{children}</div>
      </div>
    </div>
  );
}

function Hero() {
  const stats = [
    { num: "20K", sup: "+", label: "Farmers Served" },
    { num: "50K", sup: "+", label: "Cows Under Care" },
    { num: "200", sup: "+", label: "Veterinarians" },
    { num: "450", sup: "", label: "KSH / Month" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071630]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="absolute -left-24 top-20 h-[220px] w-[220px] rounded-full bg-[#F55C15]/10 blur-3xl sm:h-[320px] sm:w-[320px]" />
      <div className="absolute right-[-80px] top-[-60px] h-[260px] w-[260px] rounded-full bg-[#F55C15]/15 blur-3xl sm:right-[-100px] sm:top-[-80px] sm:h-[420px] sm:w-[420px]" />
      <div className="absolute bottom-[-80px] left-1/3 h-[180px] w-[180px] rounded-full bg-white/5 blur-3xl sm:bottom-[-120px] sm:h-[260px] sm:w-[260px]" />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-16 xl:px-20">
        <div className="max-w-2xl">
          <SectionTag>About Rapid Vet</SectionTag>

          <h1
            className="mb-6 text-[clamp(2.5rem,11vw,6.2rem)] font-bold leading-[0.98] text-white sm:mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Veterinary care
            <br />
            <span className="text-white/80">that is</span>{" "}
            <em className="not-italic text-[#F55C15]" style={{ fontStyle: "italic" }}>
              faster,
            </em>
            <br />
            smarter, and closer.
          </h1>

          <p className="mb-7 max-w-xl text-[15px] leading-7 text-white/65 sm:mb-8 sm:text-base sm:leading-8 lg:text-lg">
            Rapid Veterinary Services Limited is a Kenyan company approved and regulated by the
            Kenya Veterinary Board. Since 2016, we have been helping farmers access qualified
            veterinary support quickly, affordably, and at scale.
          </p>

          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/book"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#F55C15] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto sm:px-7"
            >
              Book a Vet Visit
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition duration-200 hover:border-white/35 hover:bg-white/5 hover:text-white sm:w-auto sm:px-7"
            >
              Contact Us
            </Link>
          </div>

          <div
            className="inline-flex max-w-full flex-wrap items-center gap-3 rounded-2xl border border-[#F55C15]/25 bg-[#F55C15]/10 px-4 py-3 sm:rounded-full sm:px-5"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            <PulseDot />
            <span className="text-[0.68rem] uppercase tracking-[0.12em] text-[#F9A27B] sm:text-[0.72rem] sm:tracking-[0.14em]">
              Approved by Kenya Veterinary Board · Est. 2016
            </span>
          </div>
        </div>

        <div className="w-full lg:justify-self-end">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-md sm:rounded-[2rem] sm:p-4">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[1.1rem] border border-white/8 bg-[#0C2148]/90 p-4 sm:rounded-[1.5rem] sm:p-6"
                >
                  <div
                    className="mb-2 text-[1.8rem] font-bold leading-none text-white sm:text-4xl lg:text-5xl"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.num}
                    <span className="text-[#F55C15]">{s.sup}</span>
                  </div>
                  <div
                    className="text-[0.58rem] uppercase tracking-[0.14em] text-white/45 sm:text-[0.66rem] sm:tracking-[0.16em]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-[1.1rem] border border-white/8 bg-white/[0.03] p-4 sm:mt-4 sm:rounded-[1.5rem] sm:p-5">
              <p className="text-sm leading-7 text-white/55">
                Built to make quality animal healthcare more reachable for dairy farmers across
                Kenya through dispatch technology, vetted professionals, and structured support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const facts = [
    { icon: <ShieldIcon />, text: "Approved and regulated by the Kenya Veterinary Board" },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
        </svg>
      ),
      text: "Operating since 2016 as a pioneer in mobile vet dispatch in Kenya",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      text: "Serving Mt. Kenya, Nakuru, Rift Valley, Nyandarua, and beyond",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      text: "Built by professionals across veterinary care, animal production, tech, and finance",
    },
  ];

  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14 lg:px-16 xl:px-20">
        <div>
          <SectionTag>Who We Are</SectionTag>
          <h2
            className="mb-6 text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] text-[#0B224D] sm:mb-8"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Kenya’s first mobile vet platform for modern herd care.
          </h2>

          <p className="mb-8 max-w-2xl text-[15px] leading-7 text-[#667085] sm:mb-10 sm:text-base sm:leading-8">
            Rapid Vet was created to solve a real problem: farmers needed quicker access to
            dependable veterinary support without the cost, delays, and uncertainty of the
            traditional model.
          </p>

          <div className="grid gap-3 sm:gap-4">
            {facts.map((f, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:px-5 sm:py-5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F55C15]">
                  {f.icon}
                </div>
                <p className="text-sm leading-7 text-[#0B224D]">{f.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:rounded-[2rem] sm:p-8 lg:p-10">
          <div
            className="mb-4 text-[0.62rem] uppercase tracking-[0.2em] text-[#F55C15] sm:text-[0.68rem] sm:tracking-[0.22em]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Our Story
          </div>

          <div className="space-y-4 text-[15px] leading-7 text-[#667085] sm:space-y-5 sm:leading-8">
            <p>
              Kenyan dairy farmers were dealing with expensive private visits, long wait times, and
              limited access to reliable follow-up care when an animal became sick.
            </p>
            <p>
              We designed a smarter dispatch model inspired by the efficiency of on-demand services,
              then piloted and refined it into a complete veterinary platform that supports
              onboarding, payments, vet assignment, performance tracking, and digital records.
            </p>
            <p>
              Today, more than <strong className="text-[#0B224D]">20,000 farmers</strong> and{" "}
              <strong className="text-[#0B224D]">50,000 cows</strong> across Kenya benefit from our
              clinical services, herd-health support, and insurance valuation workflows.
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-[#0B224D] p-5 sm:mt-8 sm:p-6">
            <div
              className="mb-2 text-[0.62rem] uppercase tracking-[0.16em] text-white/35 sm:text-[0.65rem] sm:tracking-[0.18em]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Mission
            </div>
            <p className="text-sm leading-7 text-white/70">
              To make quality veterinary care more affordable, more accessible, and more dependable
              for every farmer we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function KpiStrip() {
  const kpis = [
    { val: "~4.5$", label: "Per vet visit" },
    { val: "<1hr", label: "Vet arrival time" },
    { val: "+4L", label: "More milk / cow / day" },
    { val: "30.6K", label: "KSH saved yearly" },
  ];

  return (
    <section className="bg-[#0B224D]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-8 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
          <div className="mb-6 lg:mb-0">
            <div
              className="mb-3 text-[0.62rem] uppercase tracking-[0.2em] text-[#F55C15] sm:text-[0.68rem] sm:tracking-[0.22em]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Key Impact
            </div>
            <h3
              className="text-[clamp(1.8rem,7vw,3rem)] font-bold leading-tight text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Numbers that show
              <br />
              the difference.
            </h3>
          </div>

          <MobileHorizontalScroll>
            {kpis.map((k) => (
              <div
                key={k.label}
                className="w-[220px] shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
              >
                <div
                  className="mb-2 text-[1.8rem] font-bold leading-none text-[#F55C15]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {k.val}
                </div>
                <div
                  className="text-[0.62rem] uppercase tracking-[0.12em] text-white/45"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {k.label}
                </div>
              </div>
            ))}
          </MobileHorizontalScroll>

          <div className="hidden grid-cols-2 gap-3 sm:gap-4 md:grid lg:grid-cols-4">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm sm:p-6"
              >
                <div
                  className="mb-2 text-[1.6rem] font-bold leading-none text-[#F55C15] sm:text-[2rem]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {k.val}
                </div>
                <div
                  className="text-[0.58rem] uppercase tracking-[0.12em] text-white/45 sm:text-[0.66rem] sm:tracking-[0.14em]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {k.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueProposition() {
  const props = [
    {
      num: "01",
      title: "Affordable Services",
      val: "KSH 450 / month",
      desc: "Farmers pay far less than the cost of repeated private visits while still receiving structured, ongoing support.",
    },
    {
      num: "02",
      title: "Quality Care",
      val: "KVB Approved",
      desc: "Every vet on the platform is vetted and approved, helping ensure professionalism, consistency, and trust.",
    },
    {
      num: "03",
      title: "Speed of Response",
      val: "Within 1 Hour",
      desc: "Our dispatch system helps connect farmers with the nearest available vet fast when care is needed most.",
    },
    {
      num: "04",
      title: "Farmer Training",
      val: "Ongoing Education",
      desc: "We support farmers with practical guidance on disease prevention, herd health, and productivity improvement.",
    },
    {
      num: "05",
      title: "Insurance Valuations",
      val: "KSH 800 / cow",
      desc: "We provide certified livestock valuations that support financing, insurance processing, and formal documentation.",
    },
    {
      num: "06",
      title: "Nationwide Reach",
      val: "200+ Veterinarians",
      desc: "Our distributed network enables regional coverage and supports expansion to more farmers across Kenya.",
    },
  ];

  return (
    <section className="bg-[#FCFBF8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-8">
          <div>
            <SectionTag>Our Value Proposition</SectionTag>
            <h2
              className="text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] text-[#0B224D]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              What makes Rapid Vet different.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8">
            We combine veterinary quality, operational speed, affordability, and practical farmer
            support into a model designed for real farm conditions.
          </p>
        </div>

        <MobileHorizontalScroll>
          {props.map((p) => (
            <article
              key={p.num}
              className="group relative w-[290px] shrink-0 snap-start overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-[#F55C15]" />

              <div
                className="mb-5 text-[0.62rem] uppercase tracking-[0.16em] text-black/25"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {p.num}
              </div>

              <h3
                className="mb-2 text-[1.45rem] font-bold leading-tight text-[#0B224D]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {p.title}
              </h3>

              <div
                className="mb-4 text-[0.68rem] uppercase tracking-[0.12em] text-[#F55C15]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {p.val}
              </div>

              <p className="text-sm leading-7 text-[#667085]">{p.desc}</p>
            </article>
          ))}
        </MobileHorizontalScroll>

        <div className="hidden gap-4 sm:gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {props.map((p) => (
            <article
              key={p.num}
              className="group relative overflow-hidden rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(15,23,42,0.08)] sm:rounded-[1.75rem] sm:p-8"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-[#F55C15] transition-all duration-300 group-hover:w-full" />

              <div
                className="mb-5 text-[0.62rem] uppercase tracking-[0.16em] text-black/25 sm:mb-6 sm:text-[0.68rem] sm:tracking-[0.18em]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {p.num}
              </div>

              <h3
                className="mb-2 text-[1.45rem] font-bold leading-tight text-[#0B224D] sm:text-[1.7rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {p.title}
              </h3>

              <div
                className="mb-4 text-[0.68rem] uppercase tracking-[0.12em] text-[#F55C15] sm:text-[0.72rem]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {p.val}
              </div>

              <p className="text-sm leading-7 text-[#667085]">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const cards = [
    { val: "~4.5$", sub: "Per vet visit", note: "Lower than typical private cost" },
    { val: "<1hr", sub: "Vet on your farm", note: "Faster response for urgent cases" },
    { val: "+4L", sub: "Milk increase", note: "Per cow per day" },
    { val: "30.6K", sub: "KSH saved annually", note: "Per farmer" },
  ];

  return (
    <section className="bg-[#F55C15]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-16 xl:px-20">
        <div>
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <span className="h-px w-7 bg-white/60 sm:w-8" />
            <span
              className="text-[0.62rem] uppercase tracking-[0.2em] text-white/75 sm:text-[0.68rem] sm:tracking-[0.22em]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Our Impact
            </span>
          </div>

          <h2
            className="mb-5 text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] text-white sm:mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Better outcomes for
            <br />
            farmers and herds.
          </h2>

          <p className="max-w-xl text-[15px] leading-7 text-white/75 sm:text-base sm:leading-8">
            Faster access to veterinary support improves animal health, reduces avoidable losses,
            and gives farmers more confidence in managing their livestock.
          </p>
        </div>

        <MobileHorizontalScroll>
          {cards.map((c) => (
            <div
              key={c.val}
              className="w-[260px] shrink-0 snap-start rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
            >
              <div
                className="mb-2 text-[2.2rem] font-bold leading-none text-white"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {c.val}
              </div>
              <div className="text-sm font-semibold text-white">{c.sub}</div>
              <div className="mt-1 text-xs leading-6 text-white/60">{c.note}</div>
            </div>
          ))}
        </MobileHorizontalScroll>

        <div className="hidden gap-3 sm:grid-cols-2 sm:gap-4 md:grid">
          {cards.map((c) => (
            <div
              key={c.val}
              className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm transition duration-200 hover:bg-white/15 sm:rounded-[1.75rem] sm:p-7"
            >
              <div
                className="mb-2 text-[2.2rem] font-bold leading-none text-white sm:text-[2.8rem]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {c.val}
              </div>
              <div className="text-sm font-semibold text-white">{c.sub}</div>
              <div className="mt-1 text-xs leading-6 text-white/60">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Sign Up",
      desc: "Farmer registers and receives a unique USSD code for quick access whenever needed.",
    },
    {
      num: "2",
      title: "USSD Request",
      desc: "Farmer dials the code to request veterinary assistance without needing a smartphone app.",
    },
    {
      num: "3",
      title: "Smart Match",
      desc: "The system identifies the nearest available veterinarian in the farmer’s area.",
    },
    {
      num: "4",
      title: "Vet Dispatched",
      desc: "The assigned vet travels to the farm, helping reduce wait times significantly.",
    },
    {
      num: "5",
      title: "Digital Closure",
      desc: "Treatment is completed and captured digitally for better tracking and follow-up.",
    },
  ];

  return (
    <section className="bg-[#071630]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-8">
          <div>
            <SectionTag>How It Works</SectionTag>
            <h2
              className="text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              From request to care,
              <br />
              without the delays.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-white/45 sm:text-base sm:leading-8">
            Our model is built around simple access, smart matching, and a faster route to
            qualified veterinary attention.
          </p>
        </div>

        <MobileHorizontalScroll>
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="w-[260px] shrink-0 snap-start rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
                  i === 0 || i === 4
                    ? "bg-[#F55C15] text-white"
                    : "bg-white/[0.07] text-white/55"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.num}
              </div>

              <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-7 text-white/40">{s.desc}</p>
            </div>
          ))}
        </MobileHorizontalScroll>

        <div className="hidden gap-4 sm:grid-cols-2 xl:grid-cols-5 xl:gap-5 md:grid">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 sm:rounded-[1.75rem] sm:p-7"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold sm:mb-6 sm:h-14 sm:w-14 sm:text-xl ${
                  i === 0 || i === 4
                    ? "bg-[#F55C15] text-white"
                    : "bg-white/[0.07] text-white/55"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.num}
              </div>

              <h3 className="mb-2 text-base font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-7 text-white/40">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      idx: "01",
      name: "Identification of Sick Animals",
      detail: "Early detection across the herd to catch health issues before they spread.",
      tag: "Prevention",
    },
    {
      idx: "02",
      name: "Examination & Diagnosis",
      detail: "On-farm examination to determine the likely cause of illness and next steps.",
      tag: "Diagnosis",
    },
    {
      idx: "03",
      name: "Treatment & Correct Dosage",
      detail: "Structured treatment using the appropriate drugs and dosage guidance.",
      tag: "Treatment",
    },
    {
      idx: "04",
      name: "Digital Record Keeping",
      detail: "Every intervention is documented to support continuity, insight, and follow-up.",
      tag: "Data",
    },
    {
      idx: "05",
      name: "Disease Risk Assessment",
      detail: "Practical risk reviews based on herd history, patterns, and surrounding conditions.",
      tag: "Advisory",
    },
    {
      idx: "06",
      name: "Insurance Valuations",
      detail: "Certified valuations and livestock loss assessments for financing and insurance.",
      tag: "Valuations",
    },
  ];

  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-10 grid gap-6 sm:mb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-8">
          <div>
            <SectionTag>Comprehensive Herd Health</SectionTag>
            <h2
              className="text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] text-[#0B224D]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Services designed for
              <br />
              everyday farm realities.
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8">
            Our care model supports prevention, diagnosis, treatment, record-keeping, valuation,
            and broader herd health management.
          </p>
        </div>

        <MobileHorizontalScroll>
          {services.map((s) => (
            <div
              key={s.idx}
              className="w-[310px] shrink-0 snap-start rounded-[1.25rem] border border-black/5 bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
            >
              <span
                className="text-[0.62rem] uppercase tracking-[0.14em] text-black/25"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {s.idx}
              </span>

              <div className="mt-3">
                <h3 className="text-sm font-semibold text-[#0B224D]">{s.name}</h3>
                <p className="mt-2 text-sm leading-7 text-[#667085]">{s.detail}</p>
              </div>

              <span
                className="mt-4 inline-flex w-fit rounded-full bg-[#FEE8DF] px-3 py-2 text-[0.64rem] uppercase tracking-[0.1em] text-[#F55C15]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </MobileHorizontalScroll>

        <div className="hidden gap-3 sm:gap-4 md:grid">
          {services.map((s) => (
            <div
              key={s.idx}
              className="grid gap-3 rounded-[1.25rem] border border-black/5 bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] sm:rounded-[1.5rem] sm:px-5 sm:py-5 md:grid-cols-[60px_1fr_auto] md:items-center md:gap-4 md:px-7"
            >
              <span
                className="text-[0.62rem] uppercase tracking-[0.14em] text-black/25 sm:text-[0.68rem] sm:tracking-[0.16em]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {s.idx}
              </span>

              <div>
                <h3 className="text-sm font-semibold text-[#0B224D]">{s.name}</h3>
                <p className="mt-1 text-sm leading-7 text-[#667085]">{s.detail}</p>
              </div>

              <span
                className="w-fit rounded-full bg-[#FEE8DF] px-3 py-2 text-[0.64rem] uppercase tracking-[0.1em] text-[#F55C15] sm:text-[0.68rem] sm:tracking-[0.12em]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {s.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const regions = [
    "Mt. Kenya Region",
    "Nakuru",
    "Rift Valley",
    "Nyandarua",
    "Nationwide Expansion",
  ];

  return (
    <section className="bg-[#0B224D]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-12 lg:px-16 xl:px-20">
        <div>
          <SectionTag>Get Started</SectionTag>
          <h2
            className="mb-5 text-[clamp(2rem,8vw,4rem)] font-bold leading-[1.05] text-white sm:mb-6"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            A veterinary partner
            <br />
            you can rely on.
          </h2>

          <p className="mb-7 max-w-xl text-[15px] leading-7 text-white/55 sm:mb-8 sm:text-base sm:leading-8">
            Whether you need routine care, urgent support, or livestock valuation services, Rapid
            Vet is built to respond with speed, quality, and structure.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/book"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#F55C15] px-6 py-3.5 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:opacity-90 sm:w-auto sm:px-7"
            >
              Book a Vet Visit
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition duration-200 hover:border-white/35 hover:bg-white/5 hover:text-white sm:w-auto sm:px-7"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:rounded-[2rem] sm:p-8">
          <div
            className="mb-5 text-[0.62rem] uppercase tracking-[0.2em] text-white/35 sm:text-[0.68rem] sm:tracking-[0.22em]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Regional Coverage
          </div>

          <div className="mb-7 flex flex-wrap gap-2.5 sm:mb-8 sm:gap-3">
            {regions.map((r) => (
              <span
                key={r}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/65"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="rounded-[1.25rem] border border-[#F55C15]/25 bg-[#F55C15]/10 p-4 sm:rounded-[1.5rem] sm:p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F55C15]">
                <ShieldIcon />
              </div>
              <div>
                <strong className="block text-sm font-semibold text-white">
                  Kenya Veterinary Board Approved
                </strong>
                <span className="mt-1 block text-sm leading-6 text-white/50">
                  Our vets are certified, regulated, and selected for dependable service delivery.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main
      className={`${cormorant.variable} ${dmMono.variable} ${manrope.variable} overflow-x-hidden antialiased`}
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      <Hero />
      <WhoWeAre />
      <KpiStrip />
      <ValueProposition />
      <Impact />
      <HowItWorks />
      <Services />
      <CTA />
    </main>
  );
}