// app/about/page.tsx
import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";

// Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

// Metadata
export const metadata = {
  title: "About Us - Rapid Vets",
  description:
    "Learn more about Rapid Vets – a modern veterinary practice focused on fast, compassionate care for your pets.",
  openGraph: {
    title: "About Us - Rapid Vets",
    description:
      "Learn more about Rapid Vets – a modern veterinary practice focused on fast, compassionate care for your pets.",
    url: "https://rapidvets.com/about",
    siteName: "Rapid Vets",
    images: [
      {
        url: "/og/about.jpg", // replace with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

// ─── Helper components (could be moved to separate files) ─────────────────

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
    {/* decorative blobs */}
    <div className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full bg-[#f55c15]/10 translate-x-1/2 -translate-y-1/3 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#f55c15]/5 -translate-x-1/3 translate-y-1/2 pointer-events-none" />

    <div className="relative max-w-6xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
      {/* left */}
      <div>
        <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-[#f55c15] mb-5">
          About Rapid Vets
        </span>
        <h1 className={`${playfair.className} text-4xl lg:text-6xl font-extrabold leading-[1.1] mb-6`}>
          Caring for pets
          <br />
          like{" "}
          <span className="italic text-[#f55c15]">family.</span>
        </h1>
        <p className="text-[#b5bfc1] text-lg font-light leading-relaxed max-w-xl">
          Rapid Vets is a modern veterinary practice dedicated to fast,
          reliable and compassionate care. We blend technology, experience
          and genuine love for animals to keep your pets healthy, happy
          and safe.
        </p>
      </div>

      {/* right – decorative card */}
      <div className="hidden lg:flex justify-end">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-72 backdrop-blur-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#f55c15] flex items-center justify-center text-white font-display font-bold text-xl mb-5">
            RV
          </div>
          <p className={`${playfair.className} text-2xl font-bold mb-2`}>
            Rapid Vets
          </p>
          <p className="text-[#b5bfc1] text-sm mb-6 leading-relaxed">
            Modern veterinary care for the pets you love most.
          </p>
          <div className="flex items-center gap-2 text-xs text-[#b5bfc1]">
            <span className="w-2 h-2 rounded-full bg-[#f55c15] inline-block" />
            Accepting new patients
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Who we are
const WhoWeAre = () => (
  <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
    <div>
      <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#f55c15] mb-3 block">
        Who we are
      </span>
      <h2 className={`${playfair.className} text-3xl lg:text-5xl font-bold leading-[1.15] text-[#0b224d]`}>
        Medicine, honesty &amp;
        <br />a calm environment.
      </h2>
    </div>
    <div className="space-y-5 text-[#0b224d]/75 leading-relaxed">
      <p>
        At Rapid Vets, we know pets are more than animals – they&apos;re
        family. Our clinic was created to bring together modern medicine,
        honest communication and a calm, friendly environment where both
        pets and owners feel understood.
      </p>
      <p>
        From routine check-ups and vaccinations to diagnostics and urgent
        care, our team focuses on doing the basics extremely well: listening
        carefully, explaining clearly and acting quickly when your pet needs
        us most.
      </p>
      <p>
        We invest in up-to-date equipment, digital records and organised
        workflows so your experience is smooth from booking to follow-up.
        Less waiting. Less confusion. More time focused on your pet.
      </p>
    </div>
  </section>
);

// Clinic highlight card
const ClinicHighlight = () => (
  <div className="max-w-6xl mx-auto px-6 pb-20">
    <div className="relative bg-[#0b224d] text-white rounded-3xl p-10 lg:p-14 overflow-hidden">
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#f55c15]/15 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />

      <div className="relative flex flex-col lg:flex-row gap-10 items-start">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#f55c15] flex items-center justify-center font-display font-bold text-xl">
          RV
        </div>
        <div className="flex-1">
          <p className={`${playfair.className} text-2xl font-bold mb-1`}>
            A modern clinic
          </p>
          <p className="text-[#b5bfc1] text-sm mb-5">Built for pets &amp; people</p>
          <p className="text-white/80 leading-relaxed mb-8 max-w-xl">
            Clean spaces, gentle handling and a calm atmosphere – our
            environment is designed to reduce stress for both pets and owners.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Dedicated consultation rooms",
              "Digital records & reminders",
              "Modern diagnostics",
              "Friendly, patient-focused team",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                <span className="w-5 h-5 rounded-full bg-[#f55c15] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  ✚
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// Mission / Vision / Values cards
const MissionVisionValues = () => {
  const cards = [
    {
      kicker: "Mission",
      title: "Fast, reliable, compassionate care.",
      body: "To support pets and owners with prompt, thoughtful veterinary care that prioritises comfort, clarity and long-term health.",
    },
    {
      kicker: "Vision",
      title: "A trusted partner for every pet.",
      body: "To become the go-to clinic families rely on – not just in emergencies, but throughout their pet's life.",
    },
    {
      kicker: "Values",
      title: "Care, honesty & innovation.",
      body: "We treat every pet with kindness, communicate openly and keep improving how we work so your experience gets better over time.",
    },
  ];

  return (
    <section className="bg-white border-y border-[#e0dddc]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading
          kicker="What we stand for"
          title="Our mission, vision & values."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <article
              key={card.kicker}
              className="border border-[#e0dddc] rounded-2xl p-8 hover:border-[#f55c15]/50 hover:shadow-md transition-all duration-200"
            >
              <span className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase text-[#f55c15] mb-3">
                {card.kicker}
              </span>
              <p className={`${playfair.className} text-lg font-bold text-[#0b224d] mb-3`}>
                {card.title}
              </p>
              <p className="text-sm text-[#0b224d]/65 leading-relaxed">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// Team
const Team = () => {
  const members = [
    {
      emoji: "🩺",
      name: "Dr. [Lead Vet Name]",
      role: "Veterinary Surgeon · Small Animals",
      desc: "Oversees medical decisions and complex cases with a focus on accurate diagnosis, gentle handling and long-term wellness for every pet.",
    },
    {
      emoji: "💉",
      name: "[Nurse / Assistant Name]",
      role: "Veterinary Nurse · Patient Care",
      desc: "Supports patients before, during and after visits – from preparing treatment rooms to monitoring recovery and comfort.",
    },
    {
      emoji: "📋",
      name: "[Reception / Client Care]",
      role: "Client Experience & Bookings",
      desc: "Welcomes clients, manages bookings and keeps communication clear – from reminders and follow-ups to answering everyday questions.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#f55c15] mb-3 block">
          The people behind Rapid Vets
        </span>
        <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold text-[#0b224d] mb-4`}>
          A small team who genuinely care.
        </h2>
        <p className="text-[#0b224d]/65 max-w-xl leading-relaxed">
          These are the people making sure your pet receives calm, careful and
          professional care from start to finish.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member.name}
            className="bg-white border border-[#e0dddc] rounded-2xl overflow-hidden group hover:shadow-lg transition-shadow duration-200"
          >
            <div className="h-44 bg-[#e0dddc] group-hover:bg-[#f55c15]/10 transition-colors duration-200 flex items-center justify-center text-5xl">
              {member.emoji}
            </div>
            <div className="p-6">
              <p className={`${playfair.className} text-lg font-bold text-[#0b224d] mb-1`}>
                {member.name}
              </p>
              <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#f55c15] mb-3">
                {member.role}
              </p>
              <p className="text-sm text-[#0b224d]/65 leading-relaxed">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Why choose us + CTA
const WhyChooseUs = () => (
  <section className="bg-[#0b224d] text-white">
    <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
      {/* reasons */}
      <div>
        <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#f55c15] mb-4 block">
          Why pet owners choose us
        </span>
        <h2 className={`${playfair.className} text-3xl lg:text-4xl font-bold mb-8 leading-snug`}>
          Everything you need.{" "}
          <span className="text-[#f55c15]">Nothing you don&apos;t.</span>
        </h2>
        <ul className="space-y-4">
          {[
            "Fast, organised appointments with minimal waiting.",
            "Clean, calm environment designed to reduce stress.",
            "Clear explanations – no confusing medical jargon.",
            "Thoughtful follow-up and reminders after each visit.",
            "A small team that remembers you and your pet.",
          ].map((reason) => (
            <li key={reason} className="flex items-start gap-4 text-[#b5bfc1]">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#f55c15] flex items-center justify-center">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4l2.5 2.5L9 1"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="leading-relaxed text-sm">{reason}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA box */}
      <div className="bg-[#f55c15] rounded-3xl p-10">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/70 mb-4">
          Ready when you are
        </p>
        <h3 className={`${playfair.className} text-2xl lg:text-3xl font-bold leading-snug mb-4`}>
          Your pet&apos;s health partner – not just in emergencies.
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-8">
          Whether it&apos;s a routine check, a sudden concern or a second
          opinion, we&apos;re here to support you with calm, confident care.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/book"
            className="flex-1 text-center bg-[#0b224d] text-white font-semibold text-sm rounded-xl px-6 py-3.5 hover:bg-[#0b224d]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b224d] transition-colors"
          >
            Book an appointment
          </Link>
          <Link
            href="/contact"
            className="flex-1 text-center bg-white/15 text-white font-semibold text-sm rounded-xl px-6 py-3.5 border border-white/25 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
          >
            Contact the clinic
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// ─── Main page component ─────────────────────────────────────────────
export default function AboutPage() {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-[#e0dddc] text-[#0b224d] overflow-x-hidden">
        <main>
          <Hero />
          <WhoWeAre />
          <ClinicHighlight />
          <MissionVisionValues />
          <Team />
          <WhyChooseUs />
        </main>
      </body>
    </html>
  );
}