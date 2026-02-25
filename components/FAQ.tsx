"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Where do you provide veterinary services?",
        answer: "We currently provide on-demand roaming veterinary services across major agricultural regions and surrounding suburbs. Check our Coverage page for a detailed map of our service areas.",
    },
    {
        question: "How quickly can a vet arrive for an emergency?",
        answer: "For emergency inspections or critical care, our closest available roaming vet will be dispatched immediately, aiming to arrive within 30 to 60 minutes depending on your exact location and traffic conditions.",
    },
    {
        question: "What types of animals do you treat?",
        answer: "We specialize in livestock, herd health, and farm animals (cattle, sheep, goats, poultry, etc.). We also provide services for equines and common domestic pets upon request.",
    },
    {
        question: "How do I book a routine clinical inspection?",
        answer: "You can easily book a routine inspection by logging into our platform and clicking 'Book a Valuation' or 'Get Started'. Select the 'Clinical Inspection' service and choose a time that works best for you.",
    },
    {
        question: "What documents or preparations are needed?",
        answer: "Depending on the service, we may need to review previous health records, vaccination history, or herd management logs. Our team will instruct you on any specific requirements when you make your booking.",
    },
    {
        question: "How soon do I get the inspection report?",
        answer: "Comprehensive digital inspection reports are typically generated and securely emailed to you within 24 hours of the vet concluding their assessment.",
    },
    {
        question: "Do you handle post-mortem inspections?",
        answer: "Yes, our certified veterinarians conduct thorough post-mortem examinations to determine causes of mortality. This is crucial for insurance claims and maintaining overall herd health.",
    },
    {
        question: "Which insurance companies do you work with?",
        answer: "We partner with several major agricultural and livestock insurance providers. Please contact our support team or check with your insurer to verify coverage for our inspection services.",
    },
];

function FaqItem({
    faq,
    index,
    openIndex,
    toggleFAQ,
}: {
    faq: { question: string; answer: string };
    index: number;
    openIndex: number | null;
    toggleFAQ: (i: number) => void;
}) {
    const isOpen = openIndex === index;
    return (
        <div
            className={`flex flex-col rounded-xl bg-white border outline outline-1 outline-transparent transition-all duration-300 ${isOpen
                ? "border-primary/30 shadow-md outline-primary/10"
                : "border-tertiary/30 shadow-sm hover:border-tertiary hover:shadow-md"
                }`}
        >
            <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                aria-expanded={isOpen}
            >
                <span className={`font-medium pr-4 transition-colors ${isOpen ? "text-primary" : "text-secondary"}`}>
                    {faq.question}
                </span>
                <span className={`ml-2 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg
                        className={`h-5 w-5 ${isOpen ? "text-primary" : "text-secondary/60"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            <div
                className={`overflow-hidden px-6 transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-sm leading-relaxed text-secondary/70">{faq.answer}</p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split into two independent columns so expanding one doesn't affect the other
    const half = Math.ceil(faqs.length / 2);
    const leftFaqs = faqs.slice(0, half);
    const rightFaqs = faqs.slice(half);

    return (
        <section className="bg-slate-50 py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                {/* Header */}
                <div className="text-center mx-auto max-w-3xl mb-14">
                    <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        Check Our FAQs
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold text-secondary md:text-3xl lg:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-secondary/60 text-lg">
                        Commonly asked questions about our services and platform.
                    </p>
                </div>

                {/* Two independent flex columns — expanding one won't affect the other */}
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                    {/* Left column */}
                    <div className="flex flex-1 flex-col gap-4">
                        {leftFaqs.map((faq, idx) => (
                            <FaqItem
                                key={idx}
                                faq={faq}
                                index={idx}
                                openIndex={openIndex}
                                toggleFAQ={toggleFAQ}
                            />
                        ))}
                    </div>

                    {/* Right column */}
                    <div className="flex flex-1 flex-col gap-4">
                        {rightFaqs.map((faq, idx) => (
                            <FaqItem
                                key={idx + half}
                                faq={faq}
                                index={idx + half}
                                openIndex={openIndex}
                                toggleFAQ={toggleFAQ}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
