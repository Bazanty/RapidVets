// app/contact/page.tsx
import React from "react";
import Link from "next/link";
import VetLocatorMapWrapper from "@/components/VetLocatorMapWrapper";

export const metadata = {
  title: "Find a Vet - Rapid Vets",
  description:
    "Locate one of our 4000+ vets across the country. Use our interactive map to find a RapidVets professional near you.",
  openGraph: {
    title: "Find a Vet - Rapid Vets",
    description:
      "Locate one of our 4000+ vets across the country. Use our interactive map to find a RapidVets professional near you.",
    url: "https://rapidvets.com/contact",
    siteName: "Rapid Vets",
    images: [{ url: "/og/contact.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

type ContactInfoItem = {
  icon: React.ReactElement;
  title: string;
  content: React.ReactNode;
};

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-secondary text-white overflow-hidden">
      {/* Decorative blobs */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-5 bg-primary/10 px-3 py-1.5 rounded-full">
            Nationwide Network
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Over 4,000 vets{" "}
            <span className="italic text-primary">ready to help.</span>
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl">
            Use our interactive map to find a RapidVets professional near you.
            Whether you need a routine inspection or emergency care, we&apos;re
            always close by.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-8">
            {[
              { label: "Active Vets", value: "4,000+" },
              { label: "Counties Covered", value: "47" },
              { label: "Avg Response", value: "30 min" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-wide mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Vet Locator ──────────────────────────────────────────── */
function VetLocator() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
            Find a Vet
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">
            Locate a RapidVets professional
          </h2>
        </div>
        <p className="text-sm text-secondary/50">Zoom in to see vets near you</p>
      </div>

      <div className="bg-white border border-secondary/10 rounded-3xl p-4 sm:p-6 shadow-sm">
        {/* Search bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-secondary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Enter your location (city, county…)"
              className="w-full pl-10 pr-4 py-3 border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 text-sm bg-white"
            />
          </div>
          <select className="px-4 py-3 border border-secondary/15 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 text-sm text-secondary/70">
            <option>Within 10 km</option>
            <option>Within 25 km</option>
            <option>Within 50 km</option>
            <option>Within 100 km</option>
          </select>
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors text-sm whitespace-nowrap">
            Search
          </button>
        </div>

        {/* Map */}
        <div className="h-[420px] sm:h-[500px] rounded-2xl overflow-hidden border border-secondary/10">
          <VetLocatorMapWrapper />
        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-secondary/50">
          <span className="flex h-3 w-3 items-center justify-center rounded-full bg-primary/15">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Showing 4,000+ vets nationwide. Zoom in to see nearby vets.
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Info Cards ───────────────────────────────────── */
function ContactInfo() {
  const items: ContactInfoItem[] = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Visit us",
      content: (
        <>
          ESA Springette Office Park<br />
          Spring Valley, Nairobi
        </>
      ),
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Email us",
      content: (
        <a href="mailto:team@rapidvets.co.ke" className="hover:text-primary transition-colors">
          team@rapidvets.co.ke
        </a>
      ),
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      title: "Call us",
      content: (
        <>
          <a href="tel:+254712345678" className="hover:text-primary transition-colors block">+254 712 345 678</a>
          <a href="tel:+254787654321" className="hover:text-primary transition-colors block">+254 787 654 321</a>
        </>
      ),
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Working hours",
      content: (
        <>
          Mon–Fri: 8am – 6pm<br />
          Sat: 9am – 2pm<br />
          <span className="text-primary font-medium">24/7 Emergency Line</span>
        </>
      ),
    },
  ];

  return (
    <section className="bg-quaternary/30 border-y border-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-10">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-2 block">
            Contact Information
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary">How to reach us</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="group bg-white border border-secondary/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="font-bold text-base text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <div className="text-sm text-secondary/60 leading-relaxed">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form ─────────────────────────────────────────── */
function ContactForm() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3 block">
              Send us a message
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary mb-5">
              We&apos;d love to hear from you.
            </h2>
            <p className="text-secondary/60 leading-relaxed mb-8 text-sm sm:text-base">
              Whether you have a question about our services, want to book an
              inspection, or need urgent assistance — fill out the form and
              we&apos;ll get back to you as soon as possible.
            </p>

            {/* Quick-contact pill */}
            <div className="flex items-center gap-4 bg-secondary/5 border border-secondary/10 rounded-2xl p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-secondary/50 mb-0.5">Prefer to talk?</p>
                <a href="tel:+254712345678" className="text-sm font-bold text-secondary hover:text-primary transition-colors">
                  +254 712 345 678
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form action="#" method="POST" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="block text-xs font-semibold uppercase tracking-wide text-secondary/60 mb-1.5">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="w-full px-4 py-3 bg-white border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-xs font-semibold uppercase tracking-wide text-secondary/60 mb-1.5">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="w-full px-4 py-3 bg-white border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-secondary/60 mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition text-sm"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-secondary/60 mb-1.5">
                Phone <span className="normal-case font-normal text-secondary/40">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-white border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-secondary/60 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white border border-secondary/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3.5 rounded-xl hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
          Get Started
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Ready to book an inspection?
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-xl mx-auto leading-relaxed">
          We&apos;re available 24/7 for emergencies. Book a vet or submit a request
          and we&apos;ll dispatch the closest available professional immediately.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
          >
            Book an Inspection
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Page ────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-secondary overflow-x-hidden">
      <Hero />
      <VetLocator />
      <ContactInfo />
      <ContactForm />
      <FinalCTA />
    </main>
  );
}