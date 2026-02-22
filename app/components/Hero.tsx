import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[600px] md:min-h-[700px] h-[85vh] flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/home/vet2.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full mx-auto max-w-7xl px-4 lg:px-8 pt-8">
                <div className="max-w-2xl text-white">
                    <h1 className="text-5xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
                        On-Demand livestock<br />Inspection Platform
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                        Rapid Vets is an On-Demand livestock Inspection Platform that sends its
                        closest available roaming Vets to inspect and assess livestock.
                    </p>
                    <div className="mt-10 flex flex-wrap items-center gap-8">
                        <Link
                            href="/get-started"
                            className="rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-primary/90"
                        >
                            Getting Started
                        </Link>
                        <button className="flex items-center gap-2 text-primary font-semibold text-lg hover:text-primary/80 transition-colors">
                            Watch Video
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
