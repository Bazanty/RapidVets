"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              Get Started
            </p>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Ready to book with{" "}
                <span className="text-orange-500">Rapid Vets</span>?
              </h1>
              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                Choose what you need help with and share a few details. We’ll
                confirm time, fees and next steps.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TWO MAIN PATHS */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {/* PET VISIT */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              For pet owners
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
              Book a vet visit for your pet
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Check-ups, vaccinations, skin issues, surgery consults or follow-ups.
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li>• Dogs, cats & small pets</li>
              <li>• In-clinic & some home visits (depending on area)</li>
              <li>• Same or next day where possible</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/book-visit"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600"
              >
                Book a vet visit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                View all services
              </Link>
            </div>
          </div>

          {/* LIVESTOCK VALUATION */}
          <div className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
              For farms & businesses
            </p>
            <h2 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
              Book a livestock valuation
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Professional herd valuation for banks, insurance, sales or audits.
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
              <li>• Dairy & beef cattle, goats, sheep</li>
              <li>• On-site farm visit & written report</li>
              <li>• Suitable for loans, insurance & records</li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600"
              >
                Book a valuation
              </Link>
              <Link
                href="/services/livestock-valuation"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Learn more first
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHAT WE NEED FROM YOU */}
      <section className="border-y border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center"
          >
            {/* LEFT */}
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                What we need from you to get started
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Share a few basics so we can confirm the right vet, time and fees.
              </p>

              <div className="mt-5 grid gap-3 text-xs sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    For pets
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li>• Pet name & species</li>
                    <li>• Main reason for visit</li>
                    <li>• Preferred date & time</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    For farms
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li>• Farm location</li>
                    <li>• Number & type of animals</li>
                    <li>• Purpose of valuation</li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Your contacts
                  </p>
                  <ul className="mt-2 space-y-1 text-slate-700">
                    <li>• Phone / WhatsApp number</li>
                    <li>• Optional email for reports</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT – QUICK HELP CARD */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 text-xs shadow-sm">
              <p className="text-sm font-semibold text-slate-900">
                Not sure which option to choose?
              </p>
              <p className="mt-1 text-slate-600">
                Tell us briefly what you need help with and we&apos;ll guide you.
              </p>

              <div className="mt-4 space-y-2">
                <a
                  href="tel:+254700000000"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Call the clinic
                </a>
                <a
                  href="mailto:hello@rapidvets.co.ke?subject=Get%20Started%20Enquiry"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                >
                  Email a quick question
                </a>
              </div>

              <p className="mt-2 text-[11px] text-slate-500">
                You can also use the booking forms—just choose the closest option and
                we&apos;ll fine-tune details when we call you back.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}