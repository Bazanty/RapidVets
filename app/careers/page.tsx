"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const roles = [
  {
    title: "Small Animal Vet",
    type: "Full-time · On-site",
    location: "Nairobi",
    punchline: "Consults, routine surgery & follow-ups for dogs and cats.",
    applyLink:
      "mailto:careers@rapidvets.co.ke?subject=Application%20-%20Small%20Animal%20Vet",
  },
  {
    title: "Vet Assistant / Nurse",
    type: "Full-time · On-site",
    location: "Nairobi",
    punchline: "Support exams, prep patients and care for in-patients.",
    applyLink:
      "mailto:careers@rapidvets.co.ke?subject=Application%20-%20Vet%20Assistant",
  },
  {
    title: "Front Desk & Client Care",
    type: "Full-time · On-site",
    location: "Nairobi",
    punchline: "Welcome clients, manage bookings and keep updates flowing.",
    applyLink:
      "mailto:careers@rapidvets.co.ke?subject=Application%20-%20Client%20Care",
  },
];

const quickReasons = [
  "Kind, no-drama team.",
  "Planned rotas & real off-days.",
  "Space to grow your skills.",
];

const steps = [
  "Email your CV & a short intro.",
  "Quick call if there’s a match.",
  "Visit the clinic & meet the team.",
  "Offer, onboarding & mentorship.",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center"
          >
            {/* LEFT */}
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                Careers
              </p>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Help us build a calmer{" "}
                  <span className="text-orange-500">vet clinic.</span>
                </h1>
                <p className="max-w-xl text-sm text-slate-600">
                  Love animals, like people and want medicine without chaos?
                  You&apos;ll fit right in.
                </p>
              </div>

              {/* quick reasons */}
              <div className="flex flex-wrap gap-2">
                {quickReasons.map((reason) => (
                  <span
                    key={reason}
                    className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-[11px] font-medium text-orange-700"
                  >
                    {reason}
                  </span>
                ))}
              </div>

              {/* hero buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="/careers/roles"
                  className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600"
                >
                  View open roles
                </a>
                <a
                  href="/careers/why"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Why work at Rapid Vets?
                </a>
              </div>
            </div>

            {/* RIGHT – tiny highlight card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)] sm:p-7">
              <p className="text-sm font-semibold text-slate-900">
                What we care about
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-600">
                <li>🐾 Kindness to pets, clients & team.</li>
                <li>🩺 Good medicine without ego.</li>
                <li>🕒 Hours that don&apos;t burn you out.</li>
              </ul>
              <a
                href="mailto:careers@rapidvets.co.ke?subject=General%20Application"
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Send a general application
              </a>
              <p className="mt-2 text-center text-[11px] text-slate-500">
                Short intro + CV is enough to start.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY WORK HERE – SHORT & VISUAL */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                Why people like working here
              </h2>
              <p className="text-xs text-slate-600">
                Simple things done well, every day.
              </p>
            </div>
            <p className="text-xs font-medium text-slate-500">
              Small team · Growing clinic · Real mentorship
            </p>
          </div>

          <div className="mt-4 grid gap-3 text-xs sm:grid-cols-3">
            <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Support, not shouting
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Calm, respectful culture. We fix problems together.
              </p>
            </div>
            <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Planned rotas
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Protected off-days and fair sharing of busy shifts.
              </p>
            </div>
            <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Room to grow
              </p>
              <p className="mt-1 text-[11px] text-slate-600">
                Case discussions, skills practice and clear feedback.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* OPEN ROLES – SHORT CARDS */}
      <section id="roles" className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Open roles
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Nairobi · On-site · Team players only 
            </p>
          </div>
          <a
            href="mailto:careers@rapidvets.co.ke?subject=Speculative%20Application"
            className="mt-1 inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            Don&apos;t see your role? Email us →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="mt-6 grid gap-6 lg:grid-cols-3"
        >
          {roles.map((role) => (
            <article
              key={role.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Now hiring
              </p>
              <h3 className="mt-1 text-sm font-semibold text-slate-900">
                {role.title}
              </h3>
              <p className="text-[11px] font-medium text-slate-500">
                {role.type} · {role.location}
              </p>

              <p className="mt-3 text-xs text-slate-600">{role.punchline}</p>

              <a
                href={role.applyLink}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-orange-500 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                Apply by email
              </a>
            </article>
          ))}
        </motion.div>
      </section>

      {/* HOW WE HIRE – SUPER SHORT */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Simple, human hiring process
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="mt-5 grid gap-4 text-xs md:grid-cols-4"
          >
            {steps.map((text, index) => (
              <div
                key={text}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <span className="mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-[11px] font-semibold text-orange-600">
                  {index + 1}
                </span>
                <p className="text-slate-700">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-2xl border border-orange-100 bg-orange-50/80 p-6 text-sm shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Ready to say hi?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-700">
            Send your CV and a few lines about the kind of work you&apos;d like
            to do. We reply to every serious application.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="mailto:careers@rapidvets.co.ke?subject=Careers%20at%20Rapid%20Vets"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600"
            >
              Email your CV
            </a>
            <p className="text-[11px] text-slate-600">
              No perfect CV? That&apos;s okay. Effort and attitude matter most.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}