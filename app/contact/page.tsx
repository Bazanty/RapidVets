// app/contact/page.tsx
import React from "react";
import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";
import VetLocatorMapWrapper from "@/components/VetLocatorMapWrapper"; // 👈 import the wrapper

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-playfair",
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  preload: false,
});

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
    images: [
      {
        url: "/og/contact.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// Types for contact info items
type ContactInfoItem = {
  icon: React.ReactElement;
  title: string;
  content: React.ReactNode;
};

// Reusable section heading
const SectionHeading = ({
  kicker,
  title,
  className = "",
}: {
  kicker: string;
  title: React.ReactNode;
  className?: string;
}) => (
  <div className={className}>
    <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#f55c15] mb-3 block">
      {kicker}
    </span>
    <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold text-[#0b224d]`}>
      {title}
    </h2>
  </div>
);

// Hero
const Hero = () => (
  <section className="relative bg-[#0b224d] text-white overflow-hidden">
    <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#f55c15]/10 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#f55c15]/5 -translate-x-1/3 translate-y-1/2 pointer-events-none" />

    <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 text-center lg:text-left">
      <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#f55c15] mb-5">
        Nationwide network
      </span>
      <h1 className={`${playfair.className} text-4xl lg:text-6xl font-extrabold leading-[1.1] mb-6 max-w-3xl mx-auto lg:mx-0`}>
        Over 4,000 vets
        <br />
        <span className="italic text-[#f55c15]">ready to help.</span>
      </h1>
      <p className="text-[#b5bfc1] text-lg font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
        Use our interactive map to find a RapidVets professional near you.
        Whether you need a routine inspection or emergency care, we’re always
        close by.
      </p>
    </div>
  </section>
);

// Vet Locator Section
const VetLocator = () => (
  <section className="max-w-6xl mx-auto px-6 py-20">
    <SectionHeading
      kicker="Find a vet"
      title="Locate a RapidVets professional near you"
      className="mb-8 text-center lg:text-left"
    />
    <div className="bg-white border border-[#e0dddc] rounded-3xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter your location (city, zip, etc.)"
          className="flex-1 px-4 py-3 border border-[#b5bfc1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f55c15] focus:border-transparent"
        />
        <select className="px-4 py-3 border border-[#b5bfc1] rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#f55c15]">
          <option>Radius: 10 miles</option>
          <option>Radius: 25 miles</option>
          <option>Radius: 50 miles</option>
          <option>Radius: 100 miles</option>
        </select>
        <button className="px-6 py-3 bg-[#f55c15] text-white font-semibold rounded-xl hover:bg-[#f55c15]/90 transition-colors">
          Search
        </button>
      </div>

      {/* Map container */}
      <div className="h-[500px] rounded-2xl overflow-hidden border border-[#e0dddc]">
        <VetLocatorMapWrapper /> {/* 👈 use the wrapper here */}
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-[#0b224d]/70">
        <span className="w-2 h-2 rounded-full bg-[#f55c15]" />
        <span>Showing 4,000+ vets nationwide. Zoom in to see nearby clinics.</span>
      </div>
    </div>
  </section>
);

// Contact Info Cards
const ContactInfo = () => {
  const items: ContactInfoItem[] = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="#f55c15"
          />
        </svg>
      ),
      title: "Visit us",
      content: (
        <>
          123 Veterinary Lane
          <br />
          Anytown, AN 12345
        </>
      ),
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            fill="#f55c15"
          />
        </svg>
      ),
      title: "Email us",
      content: <a href="mailto:hello@rapidvets.com" className="hover:text-[#f55c15] transition-colors">hello@rapidvets.com</a>,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7-.1-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.5-6.5l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"
            fill="#f55c15"
          />
        </svg>
      ),
      title: "Call us",
      content: <a href="tel:+1234567890" className="hover:text-[#f55c15] transition-colors">(123) 456-7890</a>,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H11v6l5.2 3.1.8-1.2-4.5-2.7V7z"
            fill="#f55c15"
          />
        </svg>
      ),
      title: "Opening hours",
      content: (
        <>
          Mon–Fri: 8am – 6pm
          <br />
          Sat: 9am – 2pm
          <br />
          Sun: Closed
        </>
      ),
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading
        kicker="Contact information"
        title="How to reach us"
        className="mb-12 text-center lg:text-left"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-[#e0dddc] rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 rounded-xl bg-[#f55c15]/10 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className={`${playfair.className} font-bold text-lg text-[#0b224d] mb-2`}>
              {item.title}
            </h3>
            <div className="text-sm text-[#0b224d]/70 leading-relaxed">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Form
const ContactForm = () => {
  return (
    <section className="bg-white border-y border-[#e0dddc]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#f55c15] mb-3 block">
              Send us a message
            </span>
            <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold text-[#0b224d] mb-6`}>
              We’d love to hear from you.
            </h2>
            <p className="text-[#0b224d]/70 leading-relaxed mb-8">
              Whether you have a question about our services, want to book an
              appointment, or just want to share a photo of your pet – fill out
              the form and we’ll get back to you as soon as possible.
            </p>
            <div className="bg-[#e0dddc] rounded-2xl p-6 border border-[#b5bfc1]/30">
              <p className="text-sm text-[#0b224d]/80 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#f55c15] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <span>
                  <strong className="text-[#0b224d]">Prefer to talk?</strong> Call us at{" "}
                  <a href="tel:+1234567890" className="text-[#f55c15] hover:underline">
                    (123) 456-7890
                  </a>
                </span>
              </p>
            </div>
          </div>

          <form
            action="#"
            method="POST"
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="first-name" className="block text-xs font-semibold uppercase tracking-wide text-[#0b224d]/70 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#b5bfc1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f55c15] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-xs font-semibold uppercase tracking-wide text-[#0b224d]/70 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  required
                  className="w-full px-4 py-3 bg-white border border-[#b5bfc1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f55c15] focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wide text-[#0b224d]/70 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white border border-[#b5bfc1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f55c15] focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wide text-[#0b224d]/70 mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-white border border-[#b5bfc1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f55c15] focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-[#0b224d]/70 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white border border-[#b5bfc1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f55c15] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#f55c15] text-white font-semibold py-3.5 rounded-xl hover:bg-[#f55c15]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f55c15] transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Final CTA
const FinalCTA = () => (
  <section className="bg-[#0b224d] text-white">
    <div className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-4`}>
        Ready to book an appointment?
      </h2>
      <p className="text-[#b5bfc1] text-lg mb-8 max-w-2xl mx-auto">
        We’re accepting new patients. Let us help you and your pet feel at ease.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/book"
          className="inline-block bg-[#f55c15] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#f55c15]/90 transition-colors"
        >
          Book online
        </Link>
        <Link
          href="/"
          className="inline-block bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/25 hover:bg-white/25 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  </section>
);

// Main page component
export default function ContactPage() {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#e0dddc] text-[#0b224d] overflow-x-hidden">
        <main>
          <Hero />
          <VetLocator />
          <ContactInfo />
          <ContactForm />
          <FinalCTA />
        </main>
      </body>
    </html>
  );
}