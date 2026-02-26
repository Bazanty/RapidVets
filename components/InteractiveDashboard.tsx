import Image from "next/image";
import Link from "next/link";

export default function InteractiveDashboard() {
    return (
        <section className="bg-white py-16 lg:py-24 border-t border-secondary/10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Left: Dashboard image */}
                    <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                        {/* Soft decorative background blob to match the playful/clean vibe */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[110%] w-[110%] rounded-[40px] bg-primary/5 blur-2xl pointer-events-none" />

                        <Image
                            src="/home/dash.png"
                            alt="Interactive RapidVets Dashboard"
                            width={800}
                            height={600}
                            className="relative z-10 h-auto w-full drop-shadow-xl"
                            priority
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="max-w-xl">
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-primary">
                            A better experience
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary mb-5">
                            Interactive Dashboard!
                        </h2>
                        <p className="text-secondary/65 leading-relaxed mb-10">
                            We provide an intuitive web interface that makes it easy for our partners
                            and livestock owners to request, track, and receive assessment reports on their own.
                        </p>

                        {/* Feature 1 */}
                        <div className="mb-8">
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">
                                For Business/Corporate
                            </h3>
                            <p className="text-sm text-secondary/60 leading-relaxed">
                                Are you a company that needs livestock to be valued or inspected?
                                Setup your RapidVets account today to get us to inspect and value animals for you seamlessly.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div>
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-tertiary/20 text-tertiary">
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-2">
                                For Brokers/Agents
                            </h3>
                            <p className="text-sm text-secondary/60 leading-relaxed">
                                Are you a broker or agent to companies that require livestock to be valued?
                                Setup your account to get us to inspect and value animals on behalf of your partners.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
