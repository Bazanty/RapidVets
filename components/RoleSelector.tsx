"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Role definitions ──────────────────────────────────── */
const roles = [
    {
        id: "company",
        label: "I am a Company",
        description:
            "Farms, agribusinesses, and livestock enterprises looking for professional veterinary inspection services at scale.",
        icon: (
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
        cta: "Explore Corporate Plans",
        href: "/get-started?role=company",
        accent: "from-secondary to-secondary/80",
        accentText: "text-secondary",
        accentBg: "bg-secondary",
        borderHover: "hover:border-secondary",
        highlight: "bg-secondary/10",
    },
    {
        id: "vet",
        label: "I am a Vet",
        description:
            "Licensed veterinary professionals seeking to join our network and provide on-demand livestock inspection services.",
        icon: (
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.84-3.37a1.005 1.005 0 010-1.74l5.84-3.37a2.01 2.01 0 012.01 0l5.84 3.37c.58.34.58 1.17 0 1.51l-5.84 3.37a2.01 2.01 0 01-2.01.23zM12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8 2 4.5 5.5 4.5 9.5c0 2.1.9 4 2.3 5.4L12 20l5.2-5.1c1.4-1.4 2.3-3.3 2.3-5.4C19.5 5.5 16 2 12 2zm0 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
            </svg>
        ),
        cta: "Join Our Vet Network",
        href: "/get-started?role=vet",
        accent: "from-primary to-primary/80",
        accentText: "text-primary",
        accentBg: "bg-primary",
        borderHover: "hover:border-primary",
        highlight: "bg-primary/10",
    },
    {
        id: "owner",
        label: "I am an Animal Owner",
        description:
            "Individual livestock or pet owners who need quick, trusted veterinary inspection and health assessment services.",
        icon: (
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
        ),
        cta: "Find a Vet Near You",
        href: "/get-started?role=owner",
        accent: "from-tertiary to-tertiary/80",
        accentText: "text-secondary",
        accentBg: "bg-secondary",
        borderHover: "hover:border-secondary/60",
        highlight: "bg-tertiary/20",
    },
];

/* ─── Component ─────────────────────────────────────────── */
export default function RoleSelector() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <section className="relative bg-white py-20 overflow-hidden">
            {/* Subtle decorative blobs */}
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />

            <div className="relative mx-auto max-w-5xl px-4 lg:px-8 text-center">
                {/* Badge */}
                <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
                    Welcome
                </span>

                {/* Heading */}
                <h2 className="mt-4 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
                    Here for the <span className="text-primary">first time?</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-secondary/60 md:text-lg">
                    For a better experience on our platform, we encourage first-time users
                    to learn about their options.
                </p>

                {/* Prompt */}
                <p className="mt-8 text-sm font-semibold text-secondary/80">
                    Which option below best <span className="text-primary">describes</span> you?
                </p>

                {/* Role cards */}
                <div className="mt-8 grid gap-5 sm:grid-cols-3">
                    {roles.map((role) => {
                        const isActive = selected === role.id;
                        return (
                            <button
                                key={role.id}
                                onClick={() => setSelected(isActive ? null : role.id)}
                                className={`group relative flex flex-col items-center gap-4 rounded-2xl border-2 p-8 text-center transition-all duration-300 
                  ${isActive
                                        ? `border-current ${role.accentText} shadow-lg scale-[1.03]`
                                        : `border-tertiary/40 text-secondary/70 ${role.borderHover} hover:shadow-md`
                                    }`}
                            >
                                {/* Icon circle */}
                                <div
                                    className={`flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300 ${isActive ? role.highlight : "bg-quaternary/50 group-hover:bg-quaternary"
                                        }`}
                                >
                                    <span className={isActive ? role.accentText : "text-secondary/60"}>
                                        {role.icon}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className={`text-lg font-bold transition-colors ${isActive ? role.accentText : "text-secondary"}`}>
                                    {role.label}
                                </h3>

                                {/* Description */}
                                <p className="text-sm leading-relaxed text-secondary/60">
                                    {role.description}
                                </p>

                                {/* Active indicator dot */}
                                <div
                                    className={`h-1.5 w-10 rounded-full transition-all duration-300 ${isActive ? role.accentBg : "bg-tertiary/40"
                                        }`}
                                />
                            </button>
                        );
                    })}
                </div>

                {/* CTA appears when a role is selected */}
                <div
                    className={`mt-8 transition-all duration-500 ${selected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                        }`}
                >
                    {selected && (
                        <Link
                            href={roles.find((r) => r.id === selected)!.href}
                            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:bg-primary/90"
                        >
                            {roles.find((r) => r.id === selected)!.cta}
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
