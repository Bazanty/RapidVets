// app/privacy-policy/page.jsx

export default function PrivacyPolicy() {
  const sections = [
    { id: "overview", label: "1. Overview" },
    { id: "data-collected", label: "2. Data We Collect" },
    { id: "how-we-use", label: "3. How We Use Your Data" },
    { id: "sharing", label: "4. Sharing & Disclosure" },
    { id: "platform", label: "5. Mobile Platform & USSD" },
    { id: "rights", label: "6. Your Rights" },
    { id: "contact", label: "7. Contact Us" },
  ];

  const rights = [
    {
      icon: "👁️",
      title: "Right to Access",
      desc: "Request a copy of the personal and farm data we hold about you at any time.",
    },
    {
      icon: "✏️",
      title: "Right to Correct",
      desc: "Ask us to update or correct any inaccurate information in your farm or animal records.",
    },
    {
      icon: "🗑️",
      title: "Right to Delete",
      desc: "Request deletion of your account and data, subject to regulatory retention requirements.",
    },
    {
      icon: "🚫",
      title: "Right to Object",
      desc: "Opt out of non-essential data sharing, such as aggregated reports used for business analytics.",
    },
    {
      icon: "📦",
      title: "Right to Portability",
      desc: "Request your animal health records in a usable format to transfer to another provider.",
    },
    {
      icon: "📞",
      title: "Right to Complain",
      desc: "Lodge a complaint with the Office of the Data Protection Commissioner of Kenya.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0B224D]">
      {/* HERO */}
      <header className="relative overflow-hidden bg-[#0B224D] px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,92,21,0.18),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(181,191,193,0.18),transparent_28%)]" />

        <div className="relative mx-auto max-w-4xl">
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#F55C15]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F55C15]" />
            Legal &amp; Compliance
          </span>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Privacy <span className="text-[#F55C15]">Policy</span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            How Rapid Veterinary Services Limited collects, uses, and protects
            your personal information when you use our platform and services.
          </p>

          <div className="mt-10 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Company", "Rapid Veterinary Services Limited"],
              ["Regulator", "Kenya Veterinary Board (KVB)"],
              ["Effective Date", "January 1, 2025"],
              ["Jurisdiction", "Republic of Kenya"],
            ].map(([label, value]) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                  {label}
                </span>
                <span className="text-sm font-medium text-white/85">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* LAYOUT */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 py-16 md:grid-cols-[240px_1fr] md:gap-16">
        {/* SIDEBAR */}
        <aside className="md:sticky md:top-24 md:self-start">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F55C15]">
            On this page
          </p>

          <ul className="flex flex-col gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-xl border-l-2 border-transparent px-3 py-2 text-sm font-medium text-slate-600 transition-all hover:border-[#F55C15] hover:bg-[#F7F7F7] hover:text-[#0B224D]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-[#E0DDDC] bg-[#F8F8F8] p-5">
            <h4 className="text-base font-bold text-[#0B224D]">Questions?</h4>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Our team is available to help you understand how we handle your
              data.
            </p>
            <a
              href="mailto:privacy@rapidvets.co.ke"
              className="mt-4 inline-block rounded-lg bg-[#F55C15] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#d94f12]"
            >
              Email Us
            </a>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex flex-col gap-14">
          {/* 1. Overview */}
          <section id="overview" className="scroll-mt-24">
            <SectionHeader
              icon="🌿"
              num="01"
              title="Who We Are & What This Policy Covers"
            />
            <p className="mb-4 text-[15.5px] leading-relaxed text-slate-700">
              Rapid Veterinary Services Limited (&quot;Rapid Vets&quot;) is a
              Kenyan company providing quality, affordable veterinary services
              to farmers since 2016, fully approved and regulated by the{" "}
              <strong>Kenya Veterinary Board (KVB)</strong>.
            </p>
            <p className="mb-4 text-[15.5px] leading-relaxed text-slate-700">
              We operate a mobile veterinary dispatch platform serving farmers
              across Mt. Kenya, Nakuru, the Rift Valley, Nyandarua, and other
              growing regions.
            </p>

            <InfoCard highlight>
              <h4 className="mb-2 text-lg font-bold text-[#0B224D]">
                Our Commitment to You
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">
                We collect only information necessary to connect you with a
                qualified vet and improve the health of your animals. We do not
                sell your personal data to third parties for marketing purposes.
              </p>
            </InfoCard>
          </section>

          <Divider />

          {/* 2. Data Collected */}
          <section id="data-collected" className="scroll-mt-24">
            <SectionHeader
              icon="📋"
              num="02"
              title="Information We Gather"
            />
            <p className="mb-6 text-[15.5px] leading-relaxed text-slate-700">
              To deliver our services effectively, we may collect the following
              categories of information:
            </p>

            <InfoCard title="Farmer & Account Information">
              <DataList
                items={[
                  "Full name, phone number, and farm location (county, sub-county, address)",
                  "USSD-linked mobile number used to request veterinary services",
                  "Payment details for monthly subscription via mobile money",
                  "Cooperative or financial institution affiliation for check-off payments",
                ]}
              />
            </InfoCard>

            <InfoCard title="Animal & Farm Records">
              <DataList
                items={[
                  "Number of cows, breed, age, and ear tag identification numbers",
                  "Health records including diagnoses, treatments administered, drug types, and dosages",
                  "Cow valuation data for insurance and financing purposes",
                  "Milk production and herd performance information",
                  "Disease history and farm risk assessments",
                ]}
              />
            </InfoCard>

            <InfoCard title="Platform & Usage Data">
              <DataList
                items={[
                  "USSD session logs and timestamps of vet requests",
                  "GPS or proximity data to match you with the nearest available vet",
                  "Task completion records and vet performance data",
                  "Drug procurement and supply chain logs where relevant",
                ]}
              />
            </InfoCard>
          </section>

          <Divider />

          {/* 3. How We Use */}
          <section id="how-we-use" className="scroll-mt-24">
            <SectionHeader
              icon="⚙️"
              num="03"
              title="Purpose of Processing"
            />
            <p className="mb-4 text-[15.5px] leading-relaxed text-slate-700">
              We use the information we collect for the following purposes:
            </p>

            <DataList
              items={[
                "Dispatching the nearest qualified veterinarian to your farm after your request",
                "Managing your subscription, processing payments, and issuing service records",
                "Conducting cow valuations for insurance companies and financial institutions, where applicable",
                "Providing herd health programs, treatment guidance, and record keeping",
                "Training farmers on best practices for animal health and disease prevention",
                "Improving our platform and optimising vet dispatch operations",
                "Complying with Kenya Veterinary Board regulations and applicable Kenyan law",
              ]}
            />
          </section>

          <Divider />

          {/* 4. Sharing */}
          <section id="sharing" className="scroll-mt-24">
            <SectionHeader
              icon="🤝"
              num="04"
              title="When We Share Your Information"
            />
            <p className="mb-6 text-[15.5px] leading-relaxed text-slate-700">
              We do not sell or rent your personal data. We may share your
              information only in the following circumstances:
            </p>

            <InfoCard title="Authorised Partners">
              <DataList
                items={[
                  "Insurance companies: valuation reports shared for livestock insurance, where consent or contract applies",
                  "Financial institutions and SACCOs: farm and animal data shared for credit assessment and loan security valuations",
                  "Cooperatives: information shared for check-off payment processing",
                  "Assigned veterinarians: your farm location and relevant animal health records shared only with the vet handling your case",
                ]}
              />
            </InfoCard>

            <div className="mt-4 flex gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
              <span className="text-xl">⚠️</span>
              <p className="text-sm leading-relaxed text-orange-800">
                <strong>Regulatory Disclosure:</strong> We may be required to
                disclose information to the Kenya Veterinary Board or other
                government authorities in compliance with Kenyan law. We will
                notify you where legally permissible.
              </p>
            </div>
          </section>

          <Divider />

          {/* 5. Platform */}
          <section id="platform" className="scroll-mt-24">
            <SectionHeader
              icon="📱"
              num="05"
              title="How Our Technology Works"
            />
            <p className="mb-4 text-[15.5px] leading-relaxed text-slate-700">
              Rapid Vets operates a mobile platform that manages the customer
              journey from onboarding to vet dispatch, payment, and follow-up.
              When you use our platform or USSD process to request a vet:
            </p>

            <DataList
              items={[
                "Our system identifies your registered farm location and matches you with a nearby available vet",
                "Session data such as request time, vet assignment, and task closure is logged for service quality and accountability",
                "Payment integrations may process transaction metadata to confirm subscription or payment status",
              ]}
            />

            <InfoCard highlight className="mt-6">
              <h4 className="mb-2 text-lg font-bold text-[#0B224D]">
                Data Security
              </h4>
              <p className="text-sm leading-relaxed text-slate-700">
                All data transmitted through our platform is handled with
                appropriate technical and organisational safeguards. Farm and
                animal health records are retained only as long as necessary to
                provide our services or as required by applicable regulations.
              </p>
            </InfoCard>
          </section>

          <Divider />

          {/* 6. Rights */}
          <section id="rights" className="scroll-mt-24">
            <SectionHeader
              icon="🛡️"
              num="06"
              title="Control Over Your Information"
            />
            <p className="mb-6 text-[15.5px] leading-relaxed text-slate-700">
              As a Rapid Vets customer or subscriber, you have the following
              rights regarding your personal data:
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {rights.map((r) => (
                <div
                  key={r.title}
                  className="rounded-xl border border-[#E0DDDC] bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#F55C15] hover:shadow-sm"
                >
                  <div className="mb-2 text-2xl">{r.icon}</div>
                  <h5 className="mb-1 text-base font-bold text-[#0B224D]">
                    {r.title}
                  </h5>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <Divider />

          {/* 7. Contact */}
          <section id="contact" className="scroll-mt-24">
            <SectionHeader icon="✉️" num="07" title="Get in Touch" />
            <p className="mb-6 text-[15.5px] leading-relaxed text-slate-700">
              If you have questions about this Privacy Policy, wish to exercise
              your rights, or have a concern about how your data is handled,
              please contact us:
            </p>

            <InfoCard title="Rapid Vets Data & Privacy Team">
              <DataList
                items={[
                  "Company: Rapid Veterinary Services Limited",
                  "Email: privacy@rapidvets.co.ke",
                  "Phone: Available via our customer support channels",
                  "Operating Region: Kenya",
                  "Regulator: Kenya Veterinary Board (KVB)",
                ]}
              />
            </InfoCard>

            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              This policy may be updated from time to time. We will notify users
              of any material changes through appropriate communication channels.
              Continued use of our services after notification constitutes
              acceptance of the revised policy.
            </p>
          </section>
        </main>
      </div>

      <footer className="bg-[#0B224D] px-4 py-6 text-center text-xs text-white/65">
        <strong className="text-white">Rapid Veterinary Services Limited</strong>
        {" · "}Regulated by the Kenya Veterinary Board{" · "}Privacy Policy v1.0
        {" · "}Effective January 2025
      </footer>
    </div>
  );
}

/* Reusable components */

function SectionHeader({ icon, num, title }) {
  return (
    <div className="mb-5 flex items-start gap-4">
      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B224D] text-xl">
        {icon}
      </div>
      <h2 className="text-2xl leading-snug text-[#0B224D]">
        <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F55C15]">
          {num} —
        </span>
        {title}
      </h2>
    </div>
  );
}

function InfoCard({ children, title, highlight = false, className = "" }) {
  return (
    <div
      className={`mb-4 rounded-2xl border p-6 ${
        highlight
          ? "border-[#B5BFC1] bg-[#F8F8F8]"
          : "border-[#E0DDDC] bg-white"
      } ${className}`}
    >
      {title && (
        <h4 className="mb-3 text-lg font-bold text-[#0B224D]">{title}</h4>
      )}
      {children}
    </div>
  );
}

function DataList({ items }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F55C15]">
            <svg
              className="h-3 w-3 text-white"
              fill="none"
              viewBox="0 0 16 16"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 3.5L6.5 10.5 3 7"
              />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr className="border-t border-[#E0DDDC]" />;
}