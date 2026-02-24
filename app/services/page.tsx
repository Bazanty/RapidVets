"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "General Check-ups",
    short: "Full nose-to-tail wellness exams.",
    details:
      "Routine physical exams to track weight, teeth, skin, joints and overall health, with tailored advice for diet, exercise and parasite control.",
    tag: "Wellness",
  },
  {
    title: "Vaccinations",
    short: "Core and lifestyle vaccines.",
    details:
      "Puppy & kitten vaccine schedules, adult boosters and travel-related vaccinations to keep your pet protected and compliant.",
    tag: "Prevention",
  },
  {
    title: "Diagnostics & Lab Tests",
    short: "Get clear answers faster.",
    details:
      "In-house and external lab tests including blood work, stool tests, skin scrapings and imaging referrals where needed.",
    tag: "Investigations",
  },
  {
    title: "Surgery & Procedures",
    short: "From routine to advanced.",
    details:
      "Routine spay/neuter, minor soft-tissue surgery, wound management and pre-/post-op monitoring with clear communication.",
    tag: "Surgery",
  },
  {
    title: "Skin, Allergies & Ears",
    short: "Itching, hair loss or ear smell?",
    details:
      "Diagnosis and treatment plans for skin infections, allergies, ear problems and long-term management of recurring issues.",
    tag: "Dermatology",
  },
  {
    title: "Dental Care",
    short: "Teeth cleaning and extractions.",
    details:
      "Dental scaling, polishing and extractions where necessary, with home-care plans to keep breath fresh and gums healthy.",
    tag: "Dental",
  },
  {
    title: "Home Visits",
    short: "For pets who panic at the clinic.",
    details:
      "Selected services offered at home for anxious pets, elderly animals or busy owners—subject to location and case type.",
    tag: "Mobile",
  },
  {
    title: "Puppy & Kitten Packages",
    short: "Healthy start for new arrivals.",
    details:
      "Structured plans that bundle vaccines, deworming, tick & flea control and early training guidance into clear packages.",
    tag: "Packages",
  },
];

const steps = [
  {
    step: "01",
    title: "Share your pet’s details",
    text: "Tell us your pet’s age, symptoms and preferred visit time using our simple booking form.",
  },
  {
    step: "02",
    title: "We confirm your slot",
    text: "Our team contacts you via call or WhatsApp to confirm the time and explain any preparation needed.",
  },
  {
    step: "03",
    title: "Calm, clear consultation",
    text: "We examine your pet, discuss findings in simple language and agree on a treatment or monitoring plan.",
  },
];

const faq = [
  {
    q: "Do you accept walk-ins, or is booking required?",
    a: "Walk-ins may be accepted depending on how busy the clinic is, but we strongly recommend booking to reduce waiting time and ensure the vet is available.",
  },
  {
    q: "What should I carry for my appointment?",
    a: "Bring any previous medical records, vaccination card, recent medications, and if possible, a fresh stool sample if your pet has digestive issues.",
  },
  {
    q: "Do you offer emergency services?",
    a: "For urgent or life-threatening issues, please call us directly. We will advise whether to come in immediately or go to the nearest 24-hour facility.",
  },
  {
    q: "Can I request a home visit?",
    a: "Yes, home visits are available for selected locations and case types. Share your area in the booking form and we’ll confirm availability and any extra costs.",
  },
];

export default function RapidVetsServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-24 pb-14 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-xl space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              Rapid Vets Services
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Veterinary care that&apos;s calm, clear and kind.
            </h1>
            <p className="text-sm text-slate-600 sm:text-base">
              From routine wellness checks to complex cases, our team focuses on
              gentle handling, honest communication and practical treatment plans
              you can actually follow at home.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/book-visit"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600"
              >
                Book a Consultation
              </Link>
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600">
                🐾 Same-day slots subject to availability
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-5 shadow-lg"
          >
            <h2 className="text-sm font-semibold text-slate-700">
              At a glance
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-600">
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-slate-500">
                  Core focus
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  Preventive & everyday vet care
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-slate-500">
                  Pets we see
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  Dogs, cats & small pets
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-slate-500">
                  Visit types
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  In-clinic & selected home visits
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="text-[11px] font-semibold text-slate-500">
                  Support
                </p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  WhatsApp follow-up after visits
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we can help with
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              These are our core services. If you&apos;re not sure which one you
              need, just book a general consultation and we&apos;ll guide you.
            </p>
          </div>
          <Link
            href="/book-visit"
            className="mt-1 inline-flex items-center justify-center rounded-full border border-orange-500/50 bg-orange-50 px-4 py-2 text-xs font-medium text-orange-700 hover:bg-orange-100"
          >
            Not sure what to choose? Book a general check-up →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-800">
                  {service.title}
                </h3>
                <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-orange-600">
                  {service.tag}
                </span>
              </div>
              <p className="mt-2 text-xs font-medium text-slate-600">
                {service.short}
              </p>
              <p className="mt-2 text-xs text-slate-500">{service.details}</p>
              <div className="mt-3 flex justify-end">
                <Link
                  href="/book-visit"
                  className="text-xs font-semibold text-orange-600 underline-offset-2 hover:underline"
                >
                  Book this service
                </Link>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      {/* How it works */}
      <section className="border-y border-slate-100 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            How a Rapid Vets visit works
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            className="mt-6 grid gap-5 md:grid-cols-3"
          >
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {item.step}
                </span>
                <p className="mt-2 text-sm font-semibold text-slate-800">
                  {item.title}
                </p>
                <p className="mt-2 text-xs text-slate-600">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              If you have a question that isn&apos;t covered here, feel free to
              mention it in the booking form or send us a WhatsApp message.
            </p>

            <div className="mt-6 space-y-4">
              {faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-slate-200 bg-white p-4 text-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-slate-800">
                      {item.q}
                    </span>
                    <span className="text-xs text-slate-400 group-open:hidden">
                      +
                    </span>
                    <span className="hidden text-xs text-slate-400 group-open:inline">
                      –
                    </span>
                  </summary>
                  <p className="mt-2 text-xs text-slate-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50/70 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              Ready to book a visit?
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Tell us what&apos;s going on with your pet and we&apos;ll help
              you choose the right service during the consultation.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-700">
              <li>• Gentle handling for nervous pets</li>
              <li>• Clear explanations of diagnosis & options</li>
              <li>• Follow-up support for your peace of mind</li>
            </ul>
            <Link
              href="/book-visit"
              className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:bg-orange-600"
            >
              Book a vet consultation
            </Link>
            <p className="mt-2 text-[11px] text-slate-500">
              If this is an emergency, please call us directly instead of using
              the online form.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}