import Link from "next/link";

const roles = [
  {
    title: "Small Animal Vet",
    type: "Full-time · On-site",
    location: "Nairobi",
    punchline: "Consults, routine surgeries and follow-ups for dogs and cats.",
    emailSubject: "Application - Small Animal Vet",
  },
  {
    title: "Vet Assistant / Nurse",
    type: "Full-time · On-site",
    location: "Nairobi",
    punchline: "Support exams, prep patients and care for in-patients.",
    emailSubject: "Application - Vet Assistant",
  },
  {
    title: "Front Desk & Client Care",
    type: "Full-time · On-site",
    location: "Nairobi",
    punchline: "Welcome clients, manage bookings and keep updates flowing.",
    emailSubject: "Application - Client Care",
  },
];

function buildMailto(subject: string) {
  const encoded = encodeURIComponent(subject);
  return `mailto:careers@rapidvets.co.ke?subject=${encoded}`;
}

export default function RolesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-5xl px-4 pt-24 pb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Careers
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Open roles at <span className="text-orange-500">Rapid Vets</span>
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            All roles are{" "}
            <span className="font-semibold">on-site in Nairobi</span> and for
            people who enjoy working in a small, kind team.
          </p>
        </div>
      </section>

      {/* Role cards */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {roles.map((role) => {
            const href = buildMailto(role.emailSubject);
            return (
              <a
                key={role.title}
                href={href}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-md"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-500">
                  Now hiring
                </p>
                <h2 className="mt-1 text-sm font-semibold text-slate-900">
                  {role.title}
                </h2>
                <p className="text-[11px] font-medium text-slate-500">
                  {role.type} · {role.location}
                </p>

                <p className="mt-3 text-xs text-slate-600">{role.punchline}</p>

                <span className="mt-4 inline-flex items-center justify-center rounded-lg bg-orange-500 px-3 py-2 text-[11px] font-semibold text-white">
                  Click to apply by email
                </span>
              </a>
            );
          })}
        </div>

        {/* bottom row */}
        <div className="mt-8 flex flex-wrap gap-3 text-xs text-slate-600">
          <a
            href="mailto:careers@rapidvets.co.ke?subject=Speculative%20Application"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Don&apos;t see your role? Send a general application
          </a>
          <Link
            href="/careers"
            className="inline-flex items-center justify-center rounded-lg border border-transparent px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Back to careers overview
          </Link>
        </div>
      </section>
    </main>
  );
}