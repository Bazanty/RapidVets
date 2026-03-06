// app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import VetLocatorMapWrapper from "@/components/VetLocatorMapWrapper";

export const metadata: Metadata = {
  title: "Find a Vet | Rapid Vets",
  description:
    "Locate one of our vets across Kenya. Use our interactive map to find a Rapid Vets professional near you.",
  openGraph: {
    title: "Find a Vet | Rapid Vets",
    description:
      "Locate one of our vets across Kenya. Use our interactive map to find a Rapid Vets professional near you.",
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

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-px w-8 bg-primary" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
        {children}
      </span>
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */
function Hero() {
  const stats = [
    { label: "Active Vets", value: "4,000+" },
    { label: "Counties Covered", value: "47" },
    { label: "Avg Response", value: "30 min" },
  ];

  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,92,21,0.14),transparent_28%)]" />
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />

      <div
        className="pointer-events-none absolute right-2 top-0 select-none text-[clamp(160px,28vw,360px)] font-black leading-none text-white/[0.03]"
        aria-hidden
      >
        4K
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <SectionEyebrow>Nationwide Network</SectionEyebrow>

        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Find a qualified vet
              <br />
              <span className="text-primary">near you, fast.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Use our interactive map to locate a Rapid Vets professional near
              your area. From routine herd checks to urgent support, help is
              closer than you think.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-primary/90"
              >
                Book a Vet
              </Link>
              <Link
                href="#vet-locator"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                Open Map
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-5"
                >
                  <p className="text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Vet Locator ──────────────────────────────────────────── */
function VetLocator() {
  return (
    <section
      id="vet-locator"
      className="mx-auto max-w-7xl px-6 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-24"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionEyebrow>Find a Vet</SectionEyebrow>
          <h2 className="text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Locate a Rapid Vets professional
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-secondary/60 sm:text-base">
            Search by town, county, or area and explore our network through the
            live map below.
          </p>
        </div>

        <p className="text-xs uppercase tracking-[0.18em] text-secondary/35">
          Zoom in to see nearby vets
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-secondary/10 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
        <div className="border-b border-secondary/8 bg-secondary/[0.025] px-5 py-4 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <svg
                className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-secondary/35"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Enter your location (city, county, area...)"
                className="w-full rounded-xl border border-secondary/12 bg-white py-3 pl-10 pr-4 text-sm text-secondary placeholder:text-secondary/35 focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <select className="rounded-xl border border-secondary/12 bg-white px-4 py-3 text-sm text-secondary/70 focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option>Within 10 km</option>
              <option>Within 25 km</option>
              <option>Within 50 km</option>
              <option>Within 100 km</option>
            </select>

            <button className="rounded-xl bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-primary/90">
              Search
            </button>
          </div>
        </div>

        <div className="h-[420px] sm:h-[500px] lg:h-[560px]">
          <VetLocatorMapWrapper />
        </div>

        <div className="flex items-center gap-2.5 border-t border-secondary/8 bg-secondary/[0.015] px-5 py-3 sm:px-6">
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-primary/15">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          </span>
          <span className="text-xs tracking-wide text-secondary/45">
            Showing 4,000+ vets nationwide. Zoom in to see vets nearest to you.
          </span>
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
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      title: "Visit us",
      content: (
        <>
          ESA Springette Office Park
          <br />
          Spring Valley, Nairobi
        </>
      ),
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      title: "Email us",
      content: (
        <a
          href="mailto:team@rapidvets.co.ke"
          className="transition-colors hover:text-primary"
        >
          team@rapidvets.co.ke
        </a>
      ),
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      title: "Call us",
      content: (
        <>
          <a
            href="tel:+254712345678"
            className="block transition-colors hover:text-primary"
          >
            +254 712 345 678
          </a>
          <a
            href="tel:+254787654321"
            className="block transition-colors hover:text-primary"
          >
            +254 787 654 321
          </a>
        </>
      ),
    },
    {
      icon: (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Working hours",
      content: (
        <>
          Mon–Fri: 8am – 6pm
          <br />
          Sat: 9am – 2pm
          <br />
          <span className="font-semibold text-primary">24/7 Emergency Line</span>
        </>
      ),
    },
  ];

  return (
    <section className="border-y border-secondary/8 bg-secondary/[0.025]">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-24">
        <SectionEyebrow>Contact Information</SectionEyebrow>
        <h2 className="mb-12 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          How to reach us
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-secondary/10 bg-white p-7 transition-all duration-300 hover:border-primary/25 hover:shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />

              <div
                className="pointer-events-none absolute right-4 top-3 select-none text-6xl font-black leading-none text-secondary/[0.04]"
                aria-hidden
              >
                0{i + 1}
              </div>

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-secondary transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>

              <div className="text-sm leading-7 text-secondary/60">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form ─────────────────────────────────────────── */
function ContactForm() {
  const inputClass =
    "w-full rounded-xl border border-secondary/12 bg-white px-4 py-3 text-sm text-secondary placeholder:text-secondary/30 transition focus:border-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/20";

  const labelClass =
    "mb-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-secondary/50";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-24">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="lg:sticky lg:top-24">
            <SectionEyebrow>Send us a message</SectionEyebrow>

            <h2 className="mb-5 text-3xl font-bold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl">
              We&apos;d love to
              <br />
              hear from you.
            </h2>

            <p className="mb-10 max-w-md text-sm leading-8 text-secondary/60 sm:text-base">
              Whether you have a question about our services, want to book an
              inspection, or need urgent assistance, fill out the form and our
              team will get back to you as soon as possible.
            </p>

            <div className="flex items-center gap-4 rounded-3xl bg-secondary p-5 text-white">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>

              <div>
                <p className="mb-0.5 text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Prefer to talk?
                </p>
                <a
                  href="tel:+254712345678"
                  className="text-sm font-semibold tracking-wide text-white transition-colors hover:text-primary"
                >
                  +254 712 345 678
                </a>
              </div>
            </div>
          </div>

          <form action="#" method="POST" className="space-y-5 rounded-3xl border border-secondary/10 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className={labelClass}>
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  placeholder="Jane"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="last-name" className={labelClass}>
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  placeholder="Doe"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="jane@example.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone{" "}
                <span className="normal-case font-normal tracking-normal text-secondary/35">
                  (optional)
                </span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+254 712 345 678"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Tell us how we can help..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send message
            </button>

            <p className="text-center text-xs text-secondary/35">
              We typically respond within 2 business hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ─── Final CTA ────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-secondary text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
        }}
      />
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,92,21,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-18 sm:px-8 sm:py-22 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <SectionEyebrow>Get Started</SectionEyebrow>

            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to book
              <br />
              an inspection?
            </h2>

            <p className="max-w-md text-base leading-8 text-white/55">
              We&apos;re available 24/7 for emergencies. Book a vet or submit a
              request and we&apos;ll connect you with the closest available
              professional.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[320px]">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-primary/90"
            >
              Book an Inspection
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/8 px-8 py-4 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-secondary">
      <Hero />
      <VetLocator />
      <ContactInfo />
      <ContactForm />
      <FinalCTA />
    </main>
  );
}  