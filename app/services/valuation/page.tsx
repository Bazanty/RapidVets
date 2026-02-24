"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LivestockValuationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO WITH IMAGE */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/valuation/hero-cattle.jpg"
            alt="Cattle herd in pasture"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-4 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-orange-300">
                Livestock Valuation
              </p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Professional Farm & Herd Valuation
              </h1>
              <p className="mt-4 text-sm text-slate-200 sm:text-base">
                Clear, defendable livestock valuation reports for banks,
                insurance, farm sales and internal audits.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/40 hover:bg-orange-600"
                >
                  Book a Valuation
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-white/60 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Ask a Question
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY PEOPLE REQUEST VALUATION */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-80 w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/valuation/farm-inspection.jpg"
              alt="Vet inspecting cattle"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Why farmers request valuation
            </h2>
            <div className="mt-6 grid gap-4 text-sm">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                🏦 Bank loan or asset financing
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                🛡 Insurance coverage or claims
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                🔄 Buying or selling livestock
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                📊 Farm audits & business records
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50/70 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl">
            How the valuation process works
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Request Visit",
                text: "Share farm location and herd details.",
              },
              {
                step: "02",
                title: "On-Site Inspection",
                text: "Physical assessment of animals and records.",
              },
              {
                step: "03",
                title: "Receive Report",
                text: "Signed written valuation document.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 font-semibold text-orange-600">
                  {item.step}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              What your report includes
            </h2>

            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>• Animal count & identification</li>
              <li>• Breed, age & condition assessment</li>
              <li>• Production & health review</li>
              <li>• Market-based value estimate</li>
              <li>• Signed professional valuation summary</li>
            </ul>

            <div className="mt-8">
              <Link
                href="/book"
                className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-500/30 hover:bg-orange-600"
              >
                Schedule a Farm Visit
              </Link>
            </div>
          </div>

          <div className="relative h-80 w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/valuation/dairy-farm.jpg"
              alt="Dairy farm inspection"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}