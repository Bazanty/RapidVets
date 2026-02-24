"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const redFlags = [
  "Hit by a car / motorcycle",
  "Heavy bleeding or open wounds",
  "Collapsed, not standing",
  "Struggling to breathe",
  "Seizures or repeated fits",
  "Suspected poisoning",
];

const steps = [
  "Stay calm and keep your pet as still as possible.",
  "Avoid giving food, water or medicine unless a vet tells you to.",
  "If there is bleeding, apply gentle pressure with a clean cloth.",
  "Bring your pet to the clinic as soon as you can.",
];

export default function AccidentEmergencyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-red-50/60">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center"
          >
            {/* LEFT */}
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
                Accident & Emergency
              </p>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Has your pet been in an{" "}
                  <span className="text-red-600">accident?</span>
                </h1>
                <p className="max-w-xl text-sm text-slate-700 sm:text-base">
                  We handle urgent cases like road accidents, severe injuries,
                  poisoning and collapse.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 font-medium text-red-600 shadow-sm">
                  🚑 Urgent, same-day care
                </span>
                <span className="inline-flex items-center rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm">
                  🐾 Dogs & cats
                </span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-400/40 transition hover:bg-red-700"
                >
                  📞 Call the clinic now
                </a>
                <Link
                  href="/book-visit"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Not urgent? Book a visit →
                </Link>
              </div>

              <p className="text-[11px] text-slate-600">
                If you&apos;re not sure it&apos;s an emergency, call and we&apos;ll
                guide you.
              </p>
            </div>

            {/* RIGHT – RED FLAGS CARD */}
            <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-[0_20px_40px_rgba(220,38,38,0.15)] sm:p-7">
              <p className="text-sm font-semibold text-slate-900">
                Signs it&apos;s an emergency
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Come in or call immediately if you notice:
              </p>
              <ul className="mt-3 grid gap-2 text-xs text-slate-700 sm:grid-cols-2">
                {redFlags.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[2px] text-red-500">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT TO DO RIGHT NOW */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What to do if your pet has an accident
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Simple steps that help keep your pet safer before you reach us.
            </p>

            <div className="mt-4 grid gap-3 text-xs sm:grid-cols-2">
              {steps.map((text, idx) => (
                <div
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-3"
                >
                  <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                    {idx + 1}
                  </span>
                  <p className="text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SMALL INFO CARD */}
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              Before you move your pet
            </p>
            <ul className="space-y-2 text-slate-700">
              <li>• Approach slowly and speak softly.</li>
              <li>• Use a towel or blanket as a stretcher if needed.</li>
              <li>• Avoid touching the mouth if they are in pain or snapping.</li>
            </ul>
            <p className="pt-2 text-[11px] text-slate-500">
              You can also send us a quick photo or video on WhatsApp (ask when
              you call) so we can advise better.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
          >
            What we can help with
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
            className="mt-5 grid gap-4 text-xs sm:grid-cols-3"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Road traffic accidents
              </p>
              <p className="mt-1 text-slate-600">
                Stabilisation, wound care, pain relief and X-ray referrals if
                needed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Severe wounds & bites
              </p>
              <p className="mt-1 text-slate-600">
                Cleaning, stitching, bandaging and infection control.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Poisoning & sudden illness
              </p>
              <p className="mt-1 text-slate-600">
                Vomiting, seizures, collapse or toxins—fast assessment and
                treatment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="rounded-2xl border border-red-100 bg-red-50/70 p-6 text-sm shadow-sm sm:p-8"
        >
          <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Not sure how serious it is?
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-700">
            Call and describe what you&apos;re seeing. We&apos;ll help you decide
            whether to rush in, monitor at home or book a same-day consult.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="tel:+254700000000"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-400/40 transition hover:bg-red-700"
            >
              📞 Call Rapid Vets
            </a>
            <Link
              href="/book-visit"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Book a follow-up visit
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}