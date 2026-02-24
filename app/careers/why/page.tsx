import Link from "next/link";

const reasons = [
  {
    title: "Kind, no-drama team",
    text: "We treat pets, clients and each other with respect. No shouting, no blame games.",
  },
  {
    title: "Real work–life balance",
    text: "Rotas are planned properly and off-days are protected so you can stay human.",
  },
  {
    title: "Room to grow",
    text: "Case discussions, feedback and chances to build the kind of vet you want to be.",
  },
];

const extras = [
  "Modern, growing clinic in Nairobi.",
  "Mix of small animal and livestock work.",
  "Support if you’re early in your career.",
];

export default function WhyCareersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Careers
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Why work at <span className="text-orange-500">Rapid Vets?</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            We&apos;re building a clinic that does good medicine{" "}
            <span className="font-semibold">and</span> takes care of the people
            doing it.
          </p>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm"
            >
              <h2 className="text-sm font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-xs text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 text-xs text-slate-700 sm:p-6">
          <p className="font-semibold text-slate-900">
            A few more things people like:
          </p>
          <ul className="mt-2 grid gap-2 sm:grid-cols-3">
            {extras.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-[2px] text-orange-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA row */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/careers/roles"
            className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600"
          >
            View open roles
          </Link>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Back to careers overview
          </Link>
        </div>
      </section>
    </main>
  );
}