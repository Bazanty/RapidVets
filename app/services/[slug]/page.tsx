import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/lib/services";
import ServiceHero from "@/components/ServiceHero";
import CTABanner from "@/components/CTABanner";
import Link from "next/link";

/* ── Static params for all service slugs ──────────── */
export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }));
}

/* ── Metadata ─────────────────────────────────────── */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service Not Found | RapidVets" };
    return {
        title: `${service.title} | RapidVets`,
        description: service.description,
    };
}

/* ── Page ─────────────────────────────────────────── */
export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    return (
        <main>
            {/* Hero */}
            <ServiceHero service={service} />

            {/* Overview */}
            <section className="bg-white py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
                        {/* Left – description */}
                        <div>
                            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                                About this Service
                            </span>
                            <h2 className="mt-4 text-2xl font-bold text-secondary md:text-3xl">
                                What is a {service.title}?
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-secondary/70">
                                {service.description}
                            </p>

                            {/* Outcomes */}
                            <div className="mt-8">
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary/50">
                                    Key Outcomes
                                </h3>
                                <ul className="space-y-3">
                                    {service.outcomes.map((o) => (
                                        <li key={o} className="flex items-start gap-3">
                                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                <svg
                                                    className="h-3 w-3 text-primary"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                            <span className="text-sm leading-relaxed text-secondary/70">{o}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right – Who this is for card */}
                        <div className="rounded-2xl border border-tertiary/30 bg-slate-50 p-8 shadow-sm">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                                <svg
                                    className="h-6 w-6 text-secondary"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold text-secondary">Who is this service for?</h3>
                            <p className="mt-2 text-sm leading-relaxed text-secondary/70">{service.audience}</p>

                            <hr className="my-6 border-tertiary/30" />

                            <p className="mb-4 text-sm font-semibold text-secondary">Ready to get started?</p>
                            <Link
                                href="/get-started"
                                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                            >
                                Book this Inspection
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works – Steps */}
            <section className="bg-slate-50 py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block rounded-full border border-secondary/20 bg-secondary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary">
                            The Process
                        </span>
                        <h2 className="mt-4 text-2xl font-bold text-secondary md:text-3xl">
                            How it works
                        </h2>
                        <p className="mt-3 text-secondary/60">
                            A transparent, step-by-step process from start to report.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {service.steps.map((step, i) => (
                            <div
                                key={step.heading}
                                className="relative rounded-xl border border-tertiary/30 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5 hover:border-primary/20"
                            >
                                {/* Step number */}
                                <div className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow">
                                    {i + 1}
                                </div>
                                {/* Icon */}
                                <div className="mb-4 text-3xl">{step.icon}</div>
                                <h3 className="mb-2 font-bold text-secondary">{step.heading}</h3>
                                <p className="text-sm leading-relaxed text-secondary/60">{step.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <CTABanner
                title={`Ready to book a ${service.title}?`}
                description="Our certified veterinarians are on-demand, wherever you need them."
                buttonLabel="Book Now"
                buttonHref="/get-started"
                secondaryLabel="Contact Us"
                secondaryHref="/contact"
            />
        </main>
    );
}
