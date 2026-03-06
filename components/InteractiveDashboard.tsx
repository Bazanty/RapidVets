"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

/* Properly typed easing curve */
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/* Section animation */
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

/* Card stagger animation */
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.12 * i,
      ease: EASE_OUT,
    },
  }),
};

export default function InteractiveDashboard() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-24">
      
      {/* Ambient glow shapes */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]" />

      {/* top line shimmer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >

        {/* Header */}
        <div className="space-y-4">

          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-100/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
            A better experience
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">

            <div>
              <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 [font-family:var(--font-grandview,system-ui)] sm:text-4xl md:text-[2.5rem]">
                Interactive{" "}
                <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
                  dashboard
                </span>
                .
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                See every livestock valuation, visit, and report at a glance.
                RapidVets gives partners and livestock owners one clean view of
                what’s happening in the field — without chasing phone calls
                or WhatsApp updates.
              </p>
            </div>

            <p className="max-w-sm text-xs leading-relaxed text-slate-500">
              Built for how teams actually work: quick requests, clear statuses,
              and reports that are always easy to find again.
            </p>

          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4 md:gap-5">

            {/* Corporate */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-300/80 hover:shadow-md"
              variants={cardVariants}
              custom={0}
            >
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-[0.95rem] font-semibold text-slate-900 [font-family:var(--font-grandview,system-ui)]">
                    For business / corporate teams
                  </h3>

                  <p className="text-[0.83rem] leading-relaxed text-slate-600">
                    Centralise livestock valuations across branches and regions.
                    Create requests instantly, assign RapidVets, and download signed reports anytime.
                  </p>
                </div>

              </div>
            </motion.div>


            {/* Brokers */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300/80 hover:shadow-md"
              variants={cardVariants}
              custom={1}
            >
              <div className="flex gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#3b82f6" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5"
                    />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="text-[0.95rem] font-semibold text-slate-900 [font-family:var(--font-grandview,system-ui)]">
                    For brokers / agents
                  </h3>

                  <p className="text-[0.83rem] leading-relaxed text-slate-600">
                    Manage inspections for insurers, lenders, and Saccos
                    from one dashboard with a clear audit trail.
                  </p>
                </div>

              </div>
            </motion.div>


            {/* CTA */}
            <motion.div
              className="mt-1 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-orange-50/60 to-rose-50/60 px-5 py-4 shadow-sm"
              variants={cardVariants}
              custom={2}
            >

              <div>
                <p className="text-[0.95rem] font-semibold text-slate-900">
                  Ready to see it in action?
                </p>
                <p className="text-[0.8rem] text-slate-600">
                  Create your RapidVets account and book your first livestock valuation.
                </p>
              </div>

              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 px-4 py-2.5 text-[0.8rem] font-semibold tracking-wide text-slate-950 shadow-sm hover:opacity-90"
              >
                Get started
              </Link>

            </motion.div> 

          </div>


          {/* RIGHT SIDE */}
          <motion.div
            className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/80 p-1.5 shadow-sm md:mt-3"
            variants={cardVariants}
            custom={3}
          >

            <div className="flex items-center gap-1.5 border-b border-slate-200/70 px-4 py-2.5">
              {["#f97373", "#fbbf24", "#34d399"].map((c, i) => (
                <span key={i} className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: c }} />
              ))}
              <div className="ml-3 h-5 max-w-[220px] flex-1 rounded-md bg-slate-200/60" />
            </div>

            <div className="p-1.5">
              <Image
                src="/home/dash.png"
                alt="RapidVets interactive dashboard"
                width={800}
                height={600}
                className="h-auto w-full rounded-2xl border border-slate-200/70 object-cover"
                priority
              />
            </div>

          </motion.div>

        </div>

      </motion.div>
    </section>
  );
}