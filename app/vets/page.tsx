"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const vets = [
  {
    name: "Dr. Wanjiru Njeri",
    role: "Lead Veterinary Surgeon",
    image: "/images/vets/dr-wanjiru.jpg",
    experience: "10+ years experience",
    focus: "Soft tissue surgery, chronic pain management, senior dogs & cats.",
    vibe: "Steady, calm and very gentle with anxious pets and worried pet parents.",
  },
  {
    name: "Dr. Brian Otieno",
    role: "Small Animal Clinician",
    image: "/images/vets/dr-brian.jpg",
    experience: "7+ years experience",
    focus: "Internal medicine, skin & allergy cases, long-term medical management.",
    vibe: "Loves explaining lab results in simple language you can actually understand.",
  },
  {
    name: "Dr. Amina Noor",
    role: "Emergency & Critical Care Vet",
    image: "/images/vets/dr-amina.jpg",
    experience: "6+ years experience",
    focus: "Emergencies, poisoning, trauma and stabilisation of critical cases.",
    vibe: "Fast, decisive and reassuring when things feel scary or overwhelming.",
  },
  {
    name: "Dr. Kelvin Muriuki",
    role: "Herd & Livestock Health",
    image: "/images/vets/dr-kelvin.jpg",
    experience: "8+ years experience",
    focus: "Herd health plans, vaccinations, fertility work & livestock valuations.",
    vibe: "Practical, farm-focused advice that balances animal health and business reality.",
  },
];

const values = [
  {
    title: "Gentle handling first",
    text: "We move slowly, speak softly and read body language to keep fear and pain as low as possible for your pet.",
  },
  {
    title: "Clear, honest communication",
    text: "We explain what we see, what we suspect and what we recommend—with options and costs before you decide.",
  },
  {
    title: "Team-based medicine",
    text: "Tricky cases are discussed as a team so your pet benefits from multiple vets, not just one opinion.",
  },
];

export default function OurVetsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 pt-24 pb-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          {/* LEFT – title, short copy, stats */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              Meet the team
            </p>

            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                The vets behind{" "}
                <span className="text-orange-500">Rapid Vets.</span>
              </h1>
              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                A calm, kind team that blends clinical skill with clear explanations,
                so both you and your animals feel looked after.
              </p>
            </div>

            {/* tags */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-700">
                🐕 Dogs, cats & small pets
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-700">
                🐄 Herd & livestock health
              </span>
            </div>

            {/* quick stats */}
            <div className="grid gap-3 text-xs sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Experience
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  10+ years
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Combined small & large animal practice.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Approach
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  Fear-friendly
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  Gentle handling & low-stress consultations.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                  Support
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  After-visit help
                </p>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  WhatsApp check-ins on ongoing cases.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – compact “what to expect” card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_22px_45px_rgba(15,23,42,0.08)] sm:p-7"
          >
            <h2 className="text-base font-semibold text-slate-900">
              What to expect from our vets
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Every visit is built around keeping your pet calm and keeping you
              informed.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-sm text-orange-500">
                  🗣
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    We actually listen first
                  </p>
                  <p className="text-xs text-slate-600">
                    You get time to explain what you’ve noticed at home before we
                    start exams.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-sm text-orange-500">
                  🐾
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Gentle, low-stress handling
                  </p>
                  <p className="text-xs text-slate-600">
                    Calm handling, treats and slow movements—especially for anxious
                    pets.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-sm text-orange-500">
                  📋
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Clear plan before you decide
                  </p>
                  <p className="text-xs text-slate-600">
                    We outline options, likely outcomes and costs so you can choose
                    confidently.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/book-visit"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(249,115,22,0.45)] transition hover:bg-orange-600"
            >
              Book a visit with our team
            </Link>

            <p className="mt-2 text-center text-[11px] text-slate-500">
              For emergencies, please call us directly for the fastest support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VETS CARD GRID */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our veterinary team
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              These are some of the vets you might meet at Rapid Vets. You can request
              a specific vet when booking, depending on availability.
            </p>
          </div>
          <Link
            href="/book-visit"
            className="mt-1 inline-flex items-center justify-center rounded-full border border-orange-500/50 bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700 hover:bg-orange-100"
          >
            Prefer a specific vet? Mention it when booking →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {vets.map((vet) => (
            <motion.article
              key={vet.name}
              whileHover={{ y: -4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:border-orange-400/70 hover:shadow-xl"
            >
              {/* Image on top as card hero */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={vet.image}
                  alt={vet.name}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-slate-50 backdrop-blur-sm">
                  {vet.experience}
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {vet.name}
                  </h3>
                  <p className="text-xs font-medium text-orange-600">
                    {vet.role}
                  </p>
                </div>

                <p className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Focus:&nbsp;</span>
                  {vet.focus}
                </p>
                <p className="text-xs text-slate-500 italic">
                  “{vet.vibe}”
                </p>

                <div className="mt-3 flex items-center justify-between gap-2 pt-1">
                  <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
                    Rapid Vets
                  </span>
                  <Link
                    href="/book-visit"
                    className="text-[11px] font-semibold text-orange-600 underline-offset-2 hover:underline"
                  >
                    Book with {vet.name.split(" ")[1]} →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            How our vets approach care
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="mt-6 grid gap-5 md:grid-cols-3"
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-slate-900">
                  {value.title}
                </p>
                <p className="mt-2 text-xs text-slate-600">{value.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-2xl border border-orange-100 bg-orange-50/70 p-6 shadow-sm sm:p-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Ready to meet the team?
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-700">
            Book a visit, share what&apos;s going on with your pet and we&apos;ll
            match you with the best vet for that case—or you can request a specific
            vet if you already have a favourite.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/book-visit"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600"
            >
              Book a vet consultation
            </Link>
            <p className="text-[11px] text-slate-600">
              For emergencies, please call us directly so we can respond faster.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}