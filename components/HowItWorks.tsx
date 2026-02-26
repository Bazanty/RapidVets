"use client";

import Image from "next/image";

/* ─── Steps data ─────────────────────────────────────────── */
const steps = [
    {
        num: "01",
        title: "Partner",
        detail: "A request is submitted digitally by the company.",
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
    },
    {
        num: "02",
        title: "Customer",
        detail:
            "Customer receives an alert on their phone and proceeds to confirm required details either themselves or through our call centre.",
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        ),
    },
    {
        num: "03",
        title: "Vet",
        detail: "Roaming Vet attends to the customer.",
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
    },
    {
        num: "04",
        title: "Report",
        detail:
            "Report is submitted and made available to the company and customer.",
        icon: (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
            </svg>
        ),
    },
];

/* ─── Component ──────────────────────────────────────────── */
export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative bg-white py-16 lg:py-28 overflow-hidden">
            {/* Subtle background decoration */}
            <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16 lg:mb-20">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                        Our Process
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
                        How it Works
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-secondary/60 md:text-lg">
                        Once we have received the request to inspect, we notify the customer
                        and our roaming vets get to the location as soon as possible. The vet
                        conducts the inspection and submits a report which is then made
                        available on our platform.
                    </p>
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left – Image */}
                    <div className="relative">
                        {/* Main image container */}
                        <div className="relative overflow-hidden shadow-2xl shadow-secondary/15">
                            <Image
                                src="/home/vet.png"
                                alt="RapidVets veterinarian in the field"
                                width={600}
                                height={720}
                                className="w-full h-[500px] lg:h-[700px] object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            {/* Gradient overlay at bottom */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                        </div>

                        {/* Floating accent card */}
                        <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl shadow-secondary/10 border border-tertiary/30 px-6 py-4 flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-secondary">Trusted Process</p>
                                <p className="text-xs text-secondary/50">End-to-end transparency</p>
                            </div>
                        </div>
                    </div>

                    {/* Right – Steps */}
                    <div className="relative">
                        <div className="space-y-8 lg:space-y-10">
                            {steps.map((step) => (
                                <div key={step.num} className="group relative pl-7">
                                    {/* Number circle — overlaps card left edge, vertically centered */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-xl shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:scale-110">
                                            {step.num}
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="ml-2 border border-secondary/10 bg-white px-7 py-5 transition-shadow duration-300 group-hover:shadow-md w-md">
                                        <h3 className="text-lg font-bold text-secondary mb-1.5 group-hover:text-primary transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-secondary/55">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
