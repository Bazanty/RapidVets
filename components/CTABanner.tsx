import Link from "next/link";

interface CTABannerProps {
    title: string;
    description?: string;
    buttonLabel: string;
    buttonHref: string;
    /** Optional secondary button */
    secondaryLabel?: string;
    secondaryHref?: string;
}

export default function CTABanner({
    title,
    description,
    buttonLabel,
    buttonHref,
    secondaryLabel,
    secondaryHref,
}: CTABannerProps) {
    return (
        <section className="bg-white py-8 px-4 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-2xl bg-secondary px-8 py-10 md:px-12 md:py-12">

                    {/* Decorative circles */}
                    <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute top-4 right-64 h-6 w-6 rounded-full bg-white/5" />

                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        {/* Text */}
                        <div className="max-w-2xl">
                            <h2 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                                {title}
                            </h2>
                            {description && (
                                <p className="mt-2 text-sm text-white/70 md:text-base">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-shrink-0 flex-wrap items-center gap-3">
                            <Link
                                href={buttonHref}
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-secondary shadow transition hover:bg-primary hover:text-white hover:shadow-md"
                            >
                                {buttonLabel}
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </Link>

                            {secondaryLabel && secondaryHref && (
                                <Link
                                    href={secondaryHref}
                                    className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                                >
                                    {secondaryLabel}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
