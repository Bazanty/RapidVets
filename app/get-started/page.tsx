"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Tab definitions ───────────────────────────────────────── */
const tabs = [
  {
    id: "company",
    label: "Business / Corporates",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    headline: "Schedule a demo with us",
    sub: "Get in touch with us by dropping a message or calling us now",
    ctaLabel: "Schedule Demo",
    formType: "company" as const,
  },
  {
    id: "owner",
    label: "Animal Owners",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    headline: "Book a vet for your animal",
    sub: "Get expert veterinary care dispatched to your location quickly",
    ctaLabel: "Book Now",
    formType: "owner" as const,
  },
  {
    id: "vet",
    label: "Vets / Join Network",
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-2.1-.54-4.075-1.491-5.793A11.959 11.959 0 0112 5.964z" />
      </svg>
    ),
    headline: "Join our vet network",
    sub: "Register to start receiving inspection requests and earn with RapidVets",
    ctaLabel: "Apply Now",
    formType: "vet" as const,
  },
];

/* ─── Perks per tab ─────────────────────────────────────────── */
const perks: Record<string, { title: string; desc: string; icon: React.ReactNode }[]> = {
  company: [
    { title: "Dedicated Account Manager", desc: "A single point of contact for all your inspection requests.", icon: "👔" },
    { title: "Custom Reporting", desc: "Branded reports delivered to your team in real time.", icon: "📊" },
    { title: "Priority Dispatch", desc: "Your requests go to the top of the queue, always.", icon: "⚡" },
  ],
  owner: [
    { title: "30 Min Response", desc: "A qualified vet reaches you within 30 minutes on average.", icon: "🏃" },
    { title: "4,000+ Vets Nationwide", desc: "Coverage across all 47 counties in Kenya.", icon: "📍" },
    { title: "Digital Reports", desc: "Instant vet reports sent straight to your phone.", icon: "📱" },
  ],
  vet: [
    { title: "Flexible Hours", desc: "Accept requests that fit your schedule — full or part time.", icon: "🕐" },
    { title: "Instant M-Pesa Payments", desc: "Get paid per inspection, directly to your M-Pesa.", icon: "💸" },
    { title: "Easy App Onboarding", desc: "Download, register, get verified and start in under 24h.", icon: "🚀" },
  ],
};

/* ─── Form fields per tab ───────────────────────────────────── */
function CompanyForm() {
  return (
    <div className="space-y-4">
      {/* Calendly-style banner */}
      <a
        href="https://calendly.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
        </svg>
        Book a slot via Calendly
      </a>
      <div className="flex items-center gap-3 text-xs text-secondary/40">
        <div className="flex-1 h-px bg-secondary/10" />
        <span>or fill the form below</span>
        <div className="flex-1 h-px bg-secondary/10" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="c-name" label="Your name" placeholder="Jane Doe" />
        <Field id="c-email" label="Your email" type="email" placeholder="jane@company.co.ke" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="c-phone" label="Your phone" type="tel" placeholder="0712 345 678" />
        <Field id="c-company" label="Company name" placeholder="Acme Ltd." />
      </div>
      <div>
        <label htmlFor="c-message" className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
          What do you need?
        </label>
        <textarea
          id="c-message"
          rows={4}
          placeholder="Tell us about your livestock portfolio, inspection volume, etc."
          className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none text-sm bg-white"
        />
      </div>
      <SubmitBtn label="Schedule Demo" />
    </div>
  );
}

function OwnerForm() {
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="o-name" label="Your name" placeholder="John Kamau" />
        <Field id="o-phone" label="Phone / WhatsApp" type="tel" placeholder="0712 345 678" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="o-location" label="Your location" placeholder="Karen, Nairobi" />
        <div>
          <label htmlFor="o-animal" className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
            Animal type
          </label>
          <select id="o-animal" className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white text-sm text-secondary/80">
            <option value="">Select type…</option>
            <option>Cattle / Livestock</option>
            <option>Dog / Cat</option>
            <option>Goat / Sheep</option>
            <option>Poultry</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="o-service" className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
          Service needed
        </label>
        <select id="o-service" className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white text-sm text-secondary/80">
          <option value="">Select service…</option>
          <option>Livestock Valuation</option>
          <option>Disease Risk Assessment</option>
          <option>Post-Mortem Inspection</option>
          <option>Clinical Examination</option>
          <option>Herd Health Monitoring</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="o-notes" className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
          Additional notes <span className="normal-case font-normal text-secondary/35">(optional)</span>
        </label>
        <textarea
          id="o-notes"
          rows={3}
          placeholder="Any urgent symptoms, preferred time, etc."
          className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none text-sm bg-white"
        />
      </div>
      <SubmitBtn label="Book a Vet Now" />
    </div>
  );
}

function VetForm() {
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="v-name" label="Full name" placeholder="Dr. Amina Wanjiku" />
        <Field id="v-email" label="Email" type="email" placeholder="amina@email.com" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="v-phone" label="Phone" type="tel" placeholder="0712 345 678" />
        <Field id="v-license" label="License / KVB Number" placeholder="KVB-XXXX" />
      </div>
      <div>
        <label htmlFor="v-county" className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
          County / Region
        </label>
        <select id="v-county" className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 bg-white text-sm text-secondary/80">
          <option value="">Select your county…</option>
          {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Nyeri", "Meru", "Thika", "Kisii", "Machakos"].map(c => (
            <option key={c}>{c}</option>
          ))}
          <option>Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="v-speciality" className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
          Speciality / Experience
        </label>
        <textarea
          id="v-speciality"
          rows={3}
          placeholder="e.g. Large animal vet, 5 years experience in livestock inspection…"
          className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none text-sm bg-white"
        />
      </div>
      <SubmitBtn label="Submit Application" />
    </div>
  );
}

/* ─── Shared form sub-components ───────────────────────────── */
function Field({
  id, label, type = "text", placeholder,
}: {
  id: string; label: string; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold uppercase tracking-wide text-secondary/55 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition text-sm bg-white placeholder:text-secondary/30"
      />
    </div>
  );
}

function SubmitBtn({ label }: { label: string }) {
  return (
    <button
      type="submit"
      className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors text-sm"
    >
      {label}
    </button>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function GetStartedPage() {
  const [activeTab, setActiveTab] = useState("company");
  const tab = tabs.find((t) => t.id === activeTab)!;

  return (
    <main className="min-h-screen bg-white text-secondary">
      {/* ── Hero ── */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 text-center">
          <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-5">
            Get Started
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] mb-4">
            Getting <span className="text-primary">Started</span>
          </h1>
          <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            For a better experience, we encourage first-time users to learn
            about their options and pick the path that fits them best.
          </p>
        </div>
      </section>

      {/* ── Tab bar ── */}
      <div className="bg-white border-b border-secondary/10 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto no-scrollbar">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${activeTab === t.id
                    ? "border-primary text-primary"
                    : "border-transparent text-secondary/50 hover:text-secondary hover:border-secondary/20"
                  }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — form */}
          <div className="bg-white border border-secondary/10 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="mb-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-2">{tab.headline}</h2>
              <p className="text-sm text-secondary/55">{tab.sub}</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              {tab.id === "company" && <CompanyForm />}
              {tab.id === "owner" && <OwnerForm />}
              {tab.id === "vet" && <VetForm />}
            </form>
          </div>

          {/* Right — perks + quick links */}
          <div className="space-y-6">
            {/* Perks */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary/40 mb-4">
                What you get
              </h3>
              <div className="space-y-4">
                {perks[activeTab].map((perk) => (
                  <div key={perk.title} className="flex gap-4 p-5 bg-white border border-secondary/10 rounded-2xl hover:border-primary/20 hover:shadow-md transition-all duration-300">
                    <span className="text-2xl flex-shrink-0">{perk.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-secondary mb-1">{perk.title}</p>
                      <p className="text-xs text-secondary/55 leading-relaxed">{perk.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact card */}
            <div className="bg-secondary rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wide">Prefer to talk?</p>
                  <p className="text-sm font-bold">Call us directly</p>
                </div>
              </div>
              <a
                href="tel:+254712345678"
                className="block w-full text-center rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors mb-3"
              >
                +254 712 345 678
              </a>
              <a
                href="mailto:team@rapidvets.co.ke"
                className="block w-full text-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
              >
                team@rapidvets.co.ke
              </a>
            </div>

            {/* Explore links */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { href: "/services", label: "Our Services", icon: "🩺" },
                { href: "/careers", label: "Earn with us", icon: "💼" },
                { href: "/about", label: "About RapidVets", icon: "ℹ️" },
                { href: "/contact", label: "Find a Vet", icon: "📍" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2.5 rounded-xl border border-secondary/10 bg-white p-4 text-xs font-semibold text-secondary hover:border-primary/20 hover:shadow-sm transition-all"
                >
                  <span className="text-base">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}