"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";

type Step = {
  num: string;
  title: string;
  detail: string;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Partner",
    detail: "A request is submitted digitally by the company.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Customer",
    detail:
      "Customer receives an alert on their phone and confirms the required details either personally or through our call centre.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Vet",
    detail: "A roaming vet is assigned and attends to the customer on location.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Report",
    detail:
      "A report is submitted and made available to both the company and the customer.",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
        />
      </svg>
    ),
  },
];

const stepDelays = [
  "delay-[0ms]",
  "delay-[100ms]",
  "delay-[200ms]",
  "delay-[300ms]",
];

function useInView<T extends HTMLElement>(threshold = 0.15): [
  RefObject<T | null>,
  boolean
] {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const [headerRef, headerInView] = useInView<HTMLDivElement>(0.2);
  const [stepsRef, stepsInView] = useInView<HTMLDivElement>(0.1);
  const [imageRef, imageInView] = useInView<HTMLDivElement>(0.15);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F7FAF8] py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-[480px] w-[480px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="mb-12 text-center lg:mb-20">
          <span
            className={`inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${
              headerInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Our Process
          </span>

          <h2
            className={`mt-4 text-3xl font-bold text-secondary transition-all duration-700 delay-100 sm:text-4xl lg:text-5xl ${
              headerInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            How it Works
          </h2>

          <p
            className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary/60 transition-all duration-700 delay-200 sm:text-base ${
              headerInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Once we receive a request, we notify the customer, assign a roaming
            vet, and deliver a clear report through our platform.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div
            ref={imageRef}
            className={`relative transition-all duration-700 ${
              imageInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative -mx-4 h-56 overflow-hidden sm:mx-0 sm:h-72 sm:rounded-2xl lg:hidden">
              <Image
                src="/home/vet.png"
                alt="Rapid Vets veterinarian in the field"
                fill
                className="object-cover object-[center_20%]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
            </div>

            <div className="hidden lg:block">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-secondary/20">
                <Image
                  src="/home/vet.png"
                  alt="Rapid Vets veterinarian in the field"
                  width={600}
                  height={560}
                  className="h-[560px] w-full object-cover object-[center_20%]"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-secondary/30" />
              </div>
            </div>
          </div>

          <div ref={stepsRef} className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.num}>
                <div
                  className={`group flex items-start transition-all duration-500 ${
                    stepDelays[i]
                  } ${
                    stepsInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  onTouchStart={() => setActiveStep(i)}
                  onTouchEnd={() => {
                    window.setTimeout(() => setActiveStep(null), 600);
                  }}
                >
                  <div
                    className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-base font-bold text-white shadow-lg shadow-primary/25 transition-transform duration-300 ${
                      activeStep === i ? "scale-110" : "group-hover:scale-110"
                    }`}
                  >
                    {step.num}
                  </div>

                  <div
                    className={`ml-4 flex-1 rounded-2xl border bg-white px-5 py-4 transition-all duration-300 sm:px-6 sm:py-5 ${
                      activeStep === i
                        ? "translate-x-1 border-primary/25 shadow-lg shadow-primary/10"
                        : "border-secondary/10 group-hover:translate-x-1 group-hover:border-primary/20 group-hover:shadow-md group-hover:shadow-primary/10"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-primary">{step.icon}</div>

                      <div>
                        <h3
                          className={`text-base font-bold transition-colors duration-300 sm:text-lg ${
                            activeStep === i
                              ? "text-primary"
                              : "text-secondary group-hover:text-primary"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-secondary/55 sm:text-sm">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div className="ml-6 h-5 w-px bg-gradient-to-b from-primary/25 to-primary/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}