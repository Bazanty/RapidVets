import Image from "next/image";
import Link from "next/link";
import FAQ from '@/components/FAQ';
export const metadata = {
  title: "Join Our Network - Rapid Vets",
  description:
    "Earn extra income as a roaming veterinarian. Join 4,000+ vets on the RapidVets platform — easy setup, 24/7 support, and flexible hours.",
};

const perks = [
  { label: "Easy Set Up", icon: CheckIcon },
  { label: "24/7 Support", icon: CheckIcon },
  { label: "Intuitive Mobile App", icon: CheckIcon },
  { label: "Intuitive Dashboard", icon: CheckIcon },
];

const howItWorks = [
  {
    num: "01",
    title: "Download & Register",
    detail: "Get the RapidVets app from Google Play, create your profile and upload your credentials.",
  },
  {
    num: "02",
    title: "Get Verified",
    detail: "Our team reviews your qualifications and activates your account within 24 hours.",
  },
  {
    num: "03",
    title: "Receive Requests",
    detail: "Get real-time inspection requests from companies near you and accept the ones that suit your schedule.",
  },
  {
    num: "04",
    title: "Earn & Get Paid",
    detail: "Complete inspections, submit reports through the app and receive payment directly to your M-Pesa.",
  },
];

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="#f55c15" fillOpacity={0.15} />
      <path
        d="M7 11.5l2.5 2.5L15 9"
        stroke="#f55c15"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-secondary">
      {/* ─── HERO: Earn with RapidVets ─────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left – copy */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                  New
                </span>
                <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
                  We Are Hiring
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-secondary">
                Earn with{" "}
                <span className="text-primary">RapidVets</span>
              </h1>

              {/* Subtext */}
              <p className="mt-5 text-base sm:text-lg text-secondary/65 leading-relaxed max-w-xl">
                Earn extra income by providing accurate inspection reports on
                livestock and animals. Download the RapidVets App and Register
                to start receiving requests.
              </p>

              {/* Perk grid */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {perks.map((perk) => (
                  <div key={perk.label} className="flex items-center gap-2.5">
                    <perk.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="text-sm font-medium text-secondary/70 italic">
                      {perk.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <p className="text-sm font-bold text-primary mb-3">Download App</p>
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl border-2 border-secondary/15 bg-white px-5 py-3 transition hover:border-primary/40 hover:shadow-md"
                >
                  <svg className="h-8 w-8 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.39 12l2.308-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-secondary/50 leading-none">
                      Android App on
                    </p>
                    <p className="text-lg font-bold text-secondary leading-tight">
                      GOOGLE PLAY
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right – image */}
            <div className="relative hidden sm:block">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/home/vet.jpeg"
                  alt="RapidVets veterinarian inspecting livestock"
                  width={600}
                  height={500}
                  className="w-full h-[400px] sm:h-[450px] lg:h-[520px] object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating stat */}
              <div className="absolute -bottom-4 -left-4 lg:-left-6 bg-white rounded-2xl shadow-xl shadow-secondary/10 border border-secondary/10 px-5 py-3.5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                  4K+
                </div>
                <div>
                  <p className="text-sm font-bold text-secondary">Active Vets</p>
                  <p className="text-xs text-secondary/50">Nationwide network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW TO JOIN ───────────────────────────────────────── */}
      <section className="bg-quaternary/30 border-y border-secondary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Getting Started
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-secondary lg:text-4xl">
              How to Join Our Network
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-secondary/55">
              Getting started as a RapidVets roaming vet is quick and easy.
              Follow these four simple steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.num} className="group relative bg-white rounded-2xl border border-secondary/10 p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20">
                {/* Number */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white font-bold text-sm mb-4 transition-transform duration-300 group-hover:scale-110">
                  {step.num}
                </div>
                <h3 className="text-base font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-secondary/55">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY JOIN ──────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Benefits
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-secondary lg:text-4xl">
              Why Vets Choose RapidVets
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Flexible Schedule",
                desc: "Accept requests that fit your availability. Work on your own terms — full-time or part-time.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Competitive Earnings",
                desc: "Transparent pay per inspection with no hidden deductions. Payments processed via M-Pesa.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
              },
              {
                title: "Nationwide Coverage",
                desc: "Join a network of 4,000+ vets across the country. Get matched with jobs close to you.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                title: "Easy-to-Use App",
                desc: "Our intuitive mobile app and dashboard make accepting jobs and filing reports seamless.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                ),
              },
              {
                title: "Professional Growth",
                desc: "Access training materials, case studies and peer collaboration to hone your veterinary skills.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                ),
              },
              {
                title: "24/7 Support",
                desc: "Our dedicated support team is available around the clock to help you with any challenges.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-secondary/10 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-base font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-secondary/55">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to start earning?
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/65 mb-8">
            Join thousands of veterinary professionals already earning with
            RapidVets. Download the app and get started in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition hover:bg-primary/90"
            >
              Download the App
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/get-started?role=vet"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
            >
              Register Online
            </Link>
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  );
}