"use client";

import Image from "next/image";
import Link from "next/link";

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-[#F55C15]" />
      <span
        className="text-[0.68rem] uppercase tracking-[0.2em] text-[#F55C15]"
        style={{ fontFamily: "var(--font-grandview)" }}
      >
        {children}
      </span>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

function Hero() {
  const highlights = [
    "Veterinary referrals",
    "Livestock valuation",
    "Farmer onboarding",
    "Regional partnerships",
  ];

  return (
    <section className="relative overflow-hidden bg-[#071630] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-[#F55C15]/15 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-40px] h-[420px] w-[420px] rounded-full bg-[#123A7A]/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-16 lg:py-28 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div>
            <SectionTag>Affiliate Program</SectionTag>

            <h1
              className="text-[clamp(2.7rem,8vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.03em]"
              style={{ fontFamily: "var(--font-grandview)" }}
            >
              Become a
              <span className="text-[#F55C15]"> RapidVets Affiliate</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
              style={{ fontFamily: "var(--font-grandview)" }}
            >
              Help farmers access trusted veterinary care, livestock valuation,
              and herd-health support while building income through meaningful
              referrals across Kenya.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#F55C15] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                Apply to Become an Affiliate
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/85 transition duration-300 hover:border-white/30 hover:bg-white/[0.06]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                Learn About RapidVets
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/70"
                  style={{ fontFamily: "var(--font-grandview)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <Image
                src="/pexels-DOG.jpg"
                alt="Veterinarian speaking with a dairy farmer beside cattle"
                width={720}
                height={560}
                priority
                className="h-full w-full rounded-[1.5rem] object-cover"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-[1.25rem] border border-white/10 bg-[#071630]/75 p-4 backdrop-blur-md">
                <p
                  className="text-sm leading-6 text-white/85"
                  style={{ fontFamily: "var(--font-grandview)" }}
                >
                  Real partnerships that connect farmers to veterinary care,
                  livestock valuations, and structured support in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyJoin() {
  const benefits = [
    "Earn through referrals",
    "Help farmers access trusted care",
    "Work with a KVB-approved platform",
    "No treatment delivery required",
  ];

  return (
    <section className="bg-[#FCFBF8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-16 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionTag>Why Join</SectionTag>
            <h2
              className="max-w-lg text-[clamp(2rem,6vw,3.8rem)] font-bold leading-[1.03] text-[#0B224D]"
              style={{ fontFamily: "var(--font-grandview)" }}
            >
              A simple way to create value and earn.
            </h2>

            <p
              className="mt-5 max-w-lg text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8"
              style={{ fontFamily: "var(--font-grandview)" }}
            >
              The affiliate program is built for people and organizations that
              already work closely with farmers and want to connect them to
              reliable veterinary support.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white px-5 py-5 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F55C15] text-white">
                  <CheckIcon />
                </div>
                <p
                  className="text-sm leading-7 text-[#0B224D]"
                  style={{ fontFamily: "var(--font-grandview)" }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const groups = [
    {
      title: "Agri Businesses",
      items: ["Agrovet shops", "Feed suppliers", "Milk collection centers"],
    },
    {
      title: "Farmer Networks",
      items: ["Farmer groups", "Cooperative leaders", "Field officers"],
    },
    {
      title: "Livestock Partners",
      items: ["AI technicians", "Farm consultants", "Rural agents"],
    },
    {
      title: "Institutional Channels",
      items: ["Cooperatives", "Agri platforms", "Financial partners"],
    },
  ];

  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-16 xl:px-20">
        <div className="mb-12 max-w-3xl">
          <SectionTag>Who It’s For</SectionTag>
          <h2
            className="text-[clamp(2rem,6vw,3.8rem)] font-bold leading-[1.03] text-[#0B224D]"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            Best for people already close to farmers.
          </h2>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-7 text-[#667085] sm:text-base sm:leading-8"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            Affiliates should already have trusted relationships in farming,
            livestock, cooperative, or agri-service spaces.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
            >
              <h3
                className="text-[1.2rem] font-bold leading-tight text-[#0B224D]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-7 text-[#667085]"
                    style={{ fontFamily: "var(--font-grandview)" }}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
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
      num: "01",
      title: "Apply",
      desc: "Submit your details and tell us how you work with farmers.",
    },
    {
      num: "02",
      title: "Get Reviewed",
      desc: "We assess fit, location, and partnership potential.",
    },
    {
      num: "03",
      title: "Get Onboarded",
      desc: "You receive guidance on services, referrals, and support.",
    },
    {
      num: "04",
      title: "Start Referring",
      desc: "Connect farmers and service opportunities to RapidVets.",
    },
    {
      num: "05",
      title: "Grow With Us",
      desc: "Build local impact and a stronger long-term partnership.",
    },
  ];

  return (
    <section className="bg-[#071630] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-16 xl:px-20">
        <div className="mb-12 max-w-3xl">
          <SectionTag>How It Works</SectionTag>
          <h2
            className="text-[clamp(2rem,6vw,3.8rem)] font-bold leading-[1.02]"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            A simple path from application to partnership.
          </h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${
                  index === 0 || index === steps.length - 1
                    ? "bg-[#F55C15] text-white"
                    : "bg-white/10 text-white/75"
                }`}
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {step.num}
              </div>

              <h3
                className="mt-5 text-base font-semibold text-white"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {step.title}
              </h3>

              <p
                className="mt-3 text-sm leading-7 text-white/45"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatYouCanRefer() {
  const items = [
    {
      title: "Veterinary Visits",
      desc: "Connect farmers who need faster access to qualified care.",
    },
    {
      title: "Livestock Valuations",
      desc: "Refer valuation needs linked to insurance or financing.",
    },
    {
      title: "Farmer Onboarding",
      desc: "Introduce new farmers to the RapidVets service model.",
    },
    {
      title: "Training Opportunities",
      desc: "Connect farmer groups to herd-health support and training.",
    },
  ];

  return (
    <section className="bg-[#FCFBF8]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-16 xl:px-20">
        <div className="mb-12 max-w-3xl">
          <SectionTag>Referral Opportunities</SectionTag>
          <h2
            className="text-[clamp(2rem,6vw,3.8rem)] font-bold leading-[1.03] text-[#0B224D]"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            What you can refer into the RapidVets ecosystem.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-[1.6rem] border border-black/5 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.04)]"
            >
              <div
                className="text-[0.66rem] uppercase tracking-[0.18em] text-[#F55C15]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                0{i + 1}
              </div>

              <h3
                className="mt-4 text-[1.2rem] font-bold leading-tight text-[#0B224D]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {item.title}
              </h3>

              <p
                className="mt-4 text-sm leading-7 text-[#667085]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do I need to be a veterinarian?",
      a: "No. Affiliates are trusted referrers and partners. RapidVets handles service delivery.",
    },
    {
      q: "Can organizations apply?",
      a: "Yes. Cooperatives, agri-businesses, farmer groups, and institutions can apply.",
    },
    {
      q: "What can I refer?",
      a: "Veterinary care needs, livestock valuation opportunities, onboarding, and related service referrals.",
    },
    {
      q: "Where does the program operate?",
      a: "RapidVets already has strong presence in Mt. Kenya, Nakuru, Rift Valley, and Nyandarua, with wider expansion across Kenya.",
    },
  ];

  return (
    <section className="bg-[#F8F5F0]">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-16">
        <div className="mb-12 text-center">
          <SectionTag>Questions</SectionTag>
          <h2
            className="text-[clamp(2rem,6vw,3.4rem)] font-bold leading-[1.03] text-[#0B224D]"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            Affiliate FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-[1.5rem] border border-black/5 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
            >
              <h3
                className="text-base font-semibold text-[#0B224D]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {faq.q}
              </h3>
              <p
                className="mt-3 text-sm leading-7 text-[#667085]"
                style={{ fontFamily: "var(--font-grandview)" }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-[#0B224D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-16 xl:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 text-center sm:p-10">
          <div
            className="text-[0.68rem] uppercase tracking-[0.2em] text-[#F55C15]"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            Join the Network
          </div>

          <h2
            className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.02]"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            Become a RapidVets Affiliate.
          </h2>

          <p
            className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/60 sm:text-base sm:leading-8"
            style={{ fontFamily: "var(--font-grandview)" }}
          >
            Start referring farmers and livestock service opportunities through a
            platform built for speed, structure, and impact.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#F55C15] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
              style={{ fontFamily: "var(--font-grandview)" }}
            >
              Apply Now
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-medium text-white/85 transition duration-300 hover:border-white/30 hover:bg-white/[0.06]"
              style={{ fontFamily: "var(--font-grandview)" }}
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AffiliatePage() {
  return (
    <main className="overflow-x-hidden bg-white antialiased">
      <Hero />
      <WhyJoin />
      <WhoItsFor />
      <HowItWorks />
      <WhatYouCanRefer />
      <FAQ />
      <CTA />
    </main>
  );
}