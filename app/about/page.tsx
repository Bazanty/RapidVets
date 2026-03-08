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
      <span className="h-px w-8 bg-[#F55C15]" />
      <span
        className="text-[0.68rem] uppercase tracking-[0.22em] text-[#F55C15]"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {children}
      </span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
    </svg>
  );
}

function PulseDot() {
  return (
    <span className="h-2.5 w-2.5 rounded-full bg-[#F55C15] shadow-[0_0_18px_rgba(245,92,21,0.95)]" />
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071630] text-white">
      <div className="absolute inset-0">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-[#F55C15]/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-[#123A7A]/50 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 md:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="max-w-2xl">
            <SectionTag>About Rapid Vet</SectionTag>

            <h1
              className="max-w-3xl text-[clamp(2.9rem,8vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Veterinary care
              <br />
              built for speed,
              <br />
              trust, and scale.
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/68 sm:text-base sm:leading-8">
              Rapid Veterinary Services Limited is a Kenyan company operating since 2016,
              approved and regulated by the Kenya Veterinary Board, and focused on making
              quality, affordable veterinary care more accessible to farmers.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/book"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#F55C15] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Book a Vet Visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/85 transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Contact Us
              </Link>
            </div>

            <div
              className="mt-8 inline-flex flex-wrap items-center gap-3 rounded-full border border-[#F55C15]/25 bg-[#F55C15]/10 px-4 py-3 sm:px-5"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              <PulseDot />
              <span className="text-[0.68rem] uppercase tracking-[0.16em] text-[#F7AE8B] sm:text-[0.72rem]">
                KVB Approved · Operating Since 2016
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: "20K+", label: "Farmers Served" },
                  { value: "50K+", label: "Cows Reached" },
                  { value: "200+", label: "Veterinarians" },
                  { value: "KSh 450", label: "Per Month" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.4rem] border border-white/10 bg-[#0C2148]/95 p-5 sm:p-6"
                  >
                    <div
                      className="text-[1.9rem] font-bold leading-none text-white sm:text-[2.4rem]"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="mt-2 text-[0.62rem] uppercase tracking-[0.16em] text-white/45"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="text-sm leading-7 text-white/60">
                  Serving farmers across Mt. Kenya, Nakuru, Rift Valley, and Nyandarua
                  with faster dispatch, structured veterinary support, and valuation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Kenya Veterinary Board Approved",
    "Operating Since 2016",
    "20,000+ Farmers Served",
    "200+ Veterinarians",
  ];

  return (
    <section className="border-y border-black/5 bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full border border-black/5 bg-white px-4 py-3 text-center text-[0.72rem] font-medium uppercase tracking-[0.12em] text-[#0B224D]/75"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  const highlights = [
    "Approved and regulated by the Kenya Veterinary Board",
    "Built to reduce delays, poor diagnosis, and costly private visits",
    "Strong presence across Mt. Kenya, Nakuru, Rift Valley, and Nyandarua",
    "A platform model that combines care delivery, dispatch, tracking, and valuation",
  ];

  return (
    <section className="bg-[#FCFBF8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div>
            <SectionTag>Who We Are</SectionTag>

            <h2
              className="max-w-xl text-[clamp(2.1rem,6vw,4.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#0B224D]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Kenya’s modern veterinary platform for practical herd care.
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8">
              Rapid Vet was created to solve a real challenge: farmers needed faster,
              more dependable veterinary support without the high cost, delays, and
              uncertainty of the traditional model.
            </p>

            <div className="mt-8 grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white px-4 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
                >
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F55C15] text-white">
                    <ShieldIcon />
                  </div>
                  <p className="text-sm leading-7 text-[#0B224D]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-9">
              <div
                className="text-[0.68rem] uppercase tracking-[0.22em] text-[#F55C15]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Our Story
              </div>

              <h3
                className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-tight text-[#0B224D]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                A response to how farmers actually live and work.
              </h3>

              <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#667085] sm:leading-8">
                <p>
                  The idea behind Rapid Vet was shaped by direct experience with the
                  barriers farmers faced: slow access to vets, limited follow-up, and
                  inconsistent treatment quality when animals became sick.
                </p>
                <p>
                  We refined the model into a structured veterinary platform built around
                  faster access, practical service delivery, and better visibility across
                  the full care journey.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#0B224D] p-7 text-white shadow-[0_20px_60px_rgba(11,34,77,0.22)] sm:p-9">
              <div
                className="text-[0.68rem] uppercase tracking-[0.22em] text-white/35"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Mission
              </div>
              <p className="mt-4 text-base leading-8 text-white/72">
                To make veterinary care more affordable, more accessible, and more dependable
                for farmers through qualified professionals, structured support, and
                technology-enabled delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactStats() {
  const stats = [
    { value: "20K+", label: "Farmers served" },
    { value: "50K+", label: "Cows reached" },
    { value: "1 Hour", label: "Response target" },
    { value: "KSh 450", label: "Monthly support" },
  ];

  return (
    <section className="bg-[#0B224D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end lg:gap-14">
          <div>
            <SectionTag>Impact</SectionTag>
            <h2
              className="max-w-md text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Numbers that build trust quickly.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-white/50 sm:text-base sm:leading-8">
              A good About page should not just tell the story. It should prove the scale,
              consistency, and value behind the model.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm"
              >
                <div
                  className="text-[2.2rem] font-bold leading-none text-[#F55C15] sm:text-[2.7rem]"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="mt-3 text-[0.7rem] uppercase tracking-[0.16em] text-white/42"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {stat.label}
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
  const items = [
    {
      num: "01",
      title: "Affordable care",
      desc: "A lower-cost, more structured alternative to repeated private farm visits.",
    },
    {
      num: "02",
      title: "Qualified professionals",
      desc: "A vetted network of veterinarians selected for dependable service delivery.",
    },
    {
      num: "03",
      title: "Faster response",
      desc: "A dispatch-led model designed to connect farmers to care much faster.",
    },
    {
      num: "04",
      title: "Farmer support",
      desc: "Practical guidance that helps improve herd health and day-to-day decisions.",
    },
    {
      num: "05",
      title: "Valuation services",
      desc: "Certified support for insurance, financing, and livestock documentation.",
    },
    {
      num: "06",
      title: "Scalable platform",
      desc: "Built for broader coverage, better tracking, and more consistent operations.",
    },
  ];

  return (
    <section className="bg-[#FCFBF8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-end lg:gap-10">
          <div>
            <SectionTag>Why Rapid Vet</SectionTag>
            <h2
              className="max-w-lg text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.03] tracking-[-0.03em] text-[#0B224D]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A cleaner, smarter model for veterinary access.
            </h2>
          </div>

          <p className="max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8">
            Rapid Vet combines affordability, service quality, dispatch speed, training,
            and valuation support into one system designed for the realities farmers face.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.num}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 w-0 bg-[#F55C15] transition-all duration-300 group-hover:w-full" />

              <div
                className="text-[0.66rem] uppercase tracking-[0.18em] text-black/25"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {item.num}
              </div>

              <h3
                className="mt-5 text-[1.7rem] font-bold leading-tight text-[#0B224D]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#667085]">{item.desc}</p>
            </article>
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
      title: "Farmer signs up",
      desc: "A farmer joins the service and gets access to the Rapid Vet support model.",
    },
    {
      num: "2",
      title: "Request is placed",
      desc: "The farmer requests veterinary assistance through a simple mobile process.",
    },
    {
      num: "3",
      title: "Nearest vet is matched",
      desc: "The system helps identify the closest available veterinarian for the job.",
    },
    {
      num: "4",
      title: "Vet is dispatched",
      desc: "The veterinarian travels to the farm to assess and support the case.",
    },
    {
      num: "5",
      title: "Case is tracked",
      desc: "The visit is digitally captured for visibility, continuity, and follow-up.",
    },
  ];

  return (
    <section className="bg-[#071630] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-12 max-w-3xl">
          <SectionTag>How It Works</SectionTag>
          <h2
            className="text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            From request to farm visit,
            <br />
            without the old delays.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-white/48 sm:text-base sm:leading-8">
            Inspired by product-style process sections, this keeps the flow simple, visual,
            and easy to understand at a glance.
          </p>
        </div>

        <div className="grid gap-4 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="relative rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6"
            >
              {index !== steps.length - 1 && (
                <div className="absolute right-[-10px] top-11 hidden h-px w-5 bg-white/10 xl:block" />
              )}

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold ${
                  index === 0 || index === steps.length - 1
                    ? "bg-[#F55C15] text-white"
                    : "bg-white/10 text-white/70"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {step.num}
              </div>

              <h3 className="mt-5 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/42">{step.desc}</p>
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
      id: "01",
      title: "Identification of sick animals",
      tag: "Detection",
      desc: "Early identification of herd-health issues to support faster response.",
    },
    {
      id: "02",
      title: "Examination and diagnosis",
      tag: "Diagnosis",
      desc: "On-farm examination to understand the condition and plan the next step.",
    },
    {
      id: "03",
      title: "Treatment and dosage guidance",
      tag: "Treatment",
      desc: "Structured treatment support with attention to appropriate interventions.",
    },
    {
      id: "04",
      title: "Digital record keeping",
      tag: "Records",
      desc: "Service documentation that supports continuity and better follow-up.",
    },
    {
      id: "05",
      title: "Disease risk assessment",
      tag: "Risk",
      desc: "Practical reviews based on herd history and surrounding conditions.",
    },
    {
      id: "06",
      title: "Insurance valuations",
      tag: "Valuation",
      desc: "Certified valuation support for insurance and financing processes.",
    },
  ];

  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionTag>Services</SectionTag>
            <h2
              className="max-w-lg text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.03] tracking-[-0.03em] text-[#0B224D]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Practical support for everyday farm realities.
            </h2>
          </div>

          <p className="max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8">
            The About page should summarize capability clearly, without feeling heavy.
            This card grid keeps services readable, structured, and premium.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-[1.6rem] border border-black/5 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className="text-[0.66rem] uppercase tracking-[0.18em] text-black/25"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {service.id}
                </span>

                <span
                  className="rounded-full bg-[#FEE8DF] px-3 py-2 text-[0.64rem] uppercase tracking-[0.12em] text-[#F55C15]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {service.tag}
                </span>
              </div>

              <h3 className="mt-5 text-base font-semibold leading-7 text-[#0B224D]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#667085]">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const regions = [
    "Mt. Kenya",
    "Nakuru",
    "Rift Valley",
    "Nyandarua",
    "Growing Nationwide",
  ];

  return (
    <section className="bg-[#0B224D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 md:px-10 lg:px-16 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <div>
            <SectionTag>Get Started</SectionTag>

            <h2
              className="max-w-xl text-[clamp(2.2rem,6vw,4.2rem)] font-bold leading-[1.02] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              A veterinary partner
              <br />
              farmers can rely on.
            </h2>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-white/56 sm:text-base sm:leading-8">
              Whether the need is routine care, urgent support, or livestock valuation,
              Rapid Vet is built around speed, quality, and dependable follow-through.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/book"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#F55C15] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Book a Vet Visit
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/85 transition duration-300 hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm sm:p-8">
            <div
              className="text-[0.68rem] uppercase tracking-[0.22em] text-white/35"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Coverage
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {regions.map((region) => (
                <span
                  key={region}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/68"
                >
                  {region}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#F55C15]/25 bg-[#F55C15]/10 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F55C15] text-white">
                  <ShieldIcon />
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    Kenya Veterinary Board Approved
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/52">
                    Our platform is built around professional standards, dependable service,
                    and a network of vetted veterinarians.
                  </p>
                </div>
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
      className={`${cormorant.variable} ${dmMono.variable} ${manrope.variable} overflow-x-hidden bg-white antialiased`}
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <ImpactStats />
      <ValueProposition />
      <HowItWorks />
      <Services />
      <CTA />
    </main>
  );
}