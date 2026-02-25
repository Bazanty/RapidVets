import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/services";

interface ServiceHeroProps {
    service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
    return (
        <section className="relative min-h-[480px] md:min-h-[560px] flex items-end overflow-hidden bg-secondary">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Multi-layer gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

            {/* Decorative accent line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/60 to-transparent" />

            {/* Floating pill badge – top right */}
            <div className="absolute right-8 top-8 hidden md:flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/90">
                    Veterinary Service
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 lg:px-8 lg:pb-20">
                {/* Breadcrumb */}
                <nav className="mb-4 flex items-center gap-2 text-xs text-white/60">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/services" className="hover:text-primary transition-colors">Inspections</Link>
                    <span>/</span>
                    <span className="text-white/90">{service.title}</span>
                </nav>

                {/* Tag */}
                <span className="mb-4 inline-block rounded-full bg-primary/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white shadow">
                    {service.audience}
                </span>

                {/* Title */}
                <h1 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                    {service.title}
                </h1>

                {/* Tagline */}
                <p className="mt-4 max-w-2xl text-base text-white/75 md:text-lg">
                    {service.tagline}
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                        href="/get-started"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90 hover:shadow-xl"
                    >
                        Book this Inspection
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
                    >
                        Talk to a Vet
                    </Link>
                </div>
            </div>
        </section>
    );
}
