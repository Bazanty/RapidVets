import Image from "next/image";

const partners = [
    { name: "Amica", src: "/logo/amica.png" },
    { name: "APA Insurance", src: "/logo/apa.webp" },
    { name: "CIC Group", src: "/logo/cic.webp" },
    { name: "Digicow", src: "/logo/digicow.png" },
    { name: "GDC", src: "/logo/gdc.png" },
    { name: "Inuka", src: "/logo/inuka.png" },
    { name: "K-Unity", src: "/logo/k-unity.png" },
    { name: "Liberty", src: "/logo/liberty.webp" },
    { name: "Majani", src: "/logo/majani.png" },
    { name: "UAP Insurance", src: "/logo/uap.png" },
    { name: "Vision", src: "/logo/vision.png" },
];

export default function Companies() {
    return (
        <section className="relative bg-white py-20 lg:py-24 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/[0.03] blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-14">
                    <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Trusted Partners
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold text-secondary md:text-3xl lg:text-4xl">
                        Companies that work with us
                    </h2>
                    <p className="mt-4 text-secondary/60 text-lg">
                        Here are some of our notable partners powering veterinary excellence across the region.
                    </p>
                </div>

                {/* Logo Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="group flex items-center justify-center rounded-xl border border-tertiary/30 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                        >
                            <Image
                                src={partner.src}
                                alt={`${partner.name} logo`}
                                width={140}
                                height={60}
                                className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 md:h-12"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
