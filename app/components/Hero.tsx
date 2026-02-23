// app/about/page.jsx
import Image from "next/image";

export const metadata = {
  title: "About Us - Rapid Vets",
  description:
    "Learn more about Rapid Vets – a modern veterinary practice focused on fast, compassionate care for your pets.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page wrapper */}
      <div className="mx-auto max-w-6xl px-4 py-16 space-y-16 text-slate-900">
        {/* Header / Intro */}
        <section className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
            About Rapid Vets
          </p>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Caring for pets like{" "}
              <span className="text-orange-500">family.</span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-700">
              Rapid Vets is a modern veterinary practice dedicated to fast,
              reliable and compassionate care. We blend technology, experience
              and genuine love for animals to keep your pets healthy, happy and
              safe.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Experience
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">5+ yrs</p>
              <p className="mt-1 text-xs text-slate-600">
                of combined small-animal practice.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Patients
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">1000+</p>
              <p className="mt-1 text-xs text-slate-600">
                pets trusted in our care.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Response time
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">Fast</p>
              <p className="mt-1 text-xs text-slate-600">
                same-day appointments whenever possible.
              </p>
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Who we are</h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              At Rapid Vets, we know pets are more than animals – they&apos;re
              family. Our clinic was created to bring together modern medicine,
              honest communication and a calm, friendly environment where both
              pets and owners feel understood.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              From routine check-ups and vaccinations to diagnostics and urgent
              care, our team focuses on doing the basics extremely well:
              listening carefully, explaining clearly and acting quickly when
              your pet needs us most.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              We invest in up-to-date equipment, digital records and organized
              workflows so your experience is smooth from booking to follow-up.
              Less waiting. Less confusion. More time focused on your pet.
            </p>
          </div>

          {/* Clinic highlight card */}
          <div className="rounded-3xl bg-white border border-slate-200 shadow-md px-6 py-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                RV
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  A modern clinic
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Built for pets & people
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-700">
              Clean spaces, gentle handling and a calm atmosphere – our
              environment is designed to reduce stress for both pets and
              owners.
            </p>

            <div className="grid gap-3 text-xs sm:grid-cols-2 text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                ✚ Dedicated consultation rooms
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                ✚ Digital records & reminders
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                ✚ Modern diagnostics
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3">
                ✚ Friendly, patient-focused team
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            What we stand for
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-500">
                Mission
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Fast, reliable, compassionate care.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                To support pets and owners with prompt, thoughtful veterinary
                care that prioritizes comfort, clarity and long-term health.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-500">
                Vision
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                A trusted partner for every pet.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                To become the go-to clinic families rely on – not just in
                emergencies, but throughout their pet&apos;s life.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <p className="text-xs uppercase tracking-[0.18em] text-orange-500">
                Values
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Care, honesty & innovation.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-700">
                We treat every pet with kindness, communicate openly and keep
                improving how we work so your experience gets better over time.
              </p>
            </div>
          </div>
        </section>

        {/* The people behind Rapid Vets */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            The people behind Rapid Vets
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-700">
            Rapid Vets is run by a small, dedicated team who genuinely care
            about every animal that walks through the door. These are the people
            making sure your pet receives calm, careful and professional care
            from start to finish.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Lead Vet */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-center">
                <Image
                  src="/images/team/lead-vet.jpg"
                  alt="Lead veterinarian at Rapid Vets"
                  width={160}
                  height={160}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm font-semibold text-slate-900">
                  Dr. [Lead Vet Name]
                </p>
                <p className="text-xs text-slate-500">
                  Veterinary Surgeon • Small Animals
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 text-center">
                Oversees medical decisions and complex cases with a focus on
                accurate diagnosis, gentle handling and long-term wellness for
                every pet.
              </p>
            </div>

            {/* Nurse / Assistant */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-center">
                <Image
                  src="/images/team/nurse.jpg"
                  alt="Veterinary nurse at Rapid Vets"
                  width={160}
                  height={160}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm font-semibold text-slate-900">
                  [Nurse / Assistant Name]
                </p>
                <p className="text-xs text-slate-500">
                  Veterinary Nurse • Patient Care
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 text-center">
                Supports patients before, during and after visits – from
                preparing treatment rooms to monitoring recovery and comfort.
              </p>
            </div>

            {/* Reception / Client Care */}
            <div className="flex flex-col gap-3 rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-center">
                <Image
                  src="/images/team/reception.jpg"
                  alt="Client care at Rapid Vets"
                  width={160}
                  height={160}
                  className="h-32 w-32 rounded-full object-cover"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm font-semibold text-slate-900">
                  [Reception / Client Care]
                </p>
                <p className="text-xs text-slate-500">
                  Client Experience & Bookings
                </p>
              </div>
              <p className="text-xs leading-relaxed text-slate-700 text-center">
                Welcomes clients, manages bookings and keeps communication clear
                – from reminders and follow-ups to answering everyday questions.
              </p>
            </div>
          </div>
        </section>

        {/* Why choose us + CTA */}
        <section className="space-y-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Why pet owners choose Rapid Vets
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-slate-700">
                <li>• Fast, organized appointments with minimal waiting.</li>
                <li>• Clean, calm environment designed to reduce stress.</li>
                <li>• Clear explanations – no confusing medical jargon.</li>
                <li>• Thoughtful follow-up and reminders after each visit.</li>
                <li>• A small team that remembers you and your pet.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-orange-200 shadow-md px-6 py-7 space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                Ready when you are
              </p>
              <h3 className="text-lg font-semibold text-slate-900">
                Your pet&apos;s health partner – not just in emergencies.
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                Whether it&apos;s a routine check, a sudden concern or a second
                opinion, we&apos;re here to support you with calm, confident
                care.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <button className="rounded-full bg-orange-500 px-5 py-2.5 text-xs font-semibold text-white hover:bg-orange-400 transition">
                  Book an appointment
                </button>
                <button className="rounded-full border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-700 hover:border-slate-500 transition">
                  Contact the clinic
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}