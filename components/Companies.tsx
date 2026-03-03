"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const CARD_WIDTH = 180;
const CARD_HEIGHT = 100;
const RADIUS = 320;
const COUNT = partners.length;

export default function Companies() {
    const sectionRef = useRef<HTMLElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const angleRef = useRef(0);
    const rafRef = useRef<number>(0);
    // ✅ Fix: initialise to {0,0} — window doesn't exist on the server
    const cursorPos = useRef({ x: 0, y: 0 });
    const [currentAngle, setCurrentAngle] = useState(0);

    // Always-visible cursor — starts at screen centre, follows mouse
    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // ✅ Fix: set real screen centre here, inside useEffect (client-only)
        cursorPos.current = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        };
        cursor.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;

        const onMove = (e: MouseEvent) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };
            cursor.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        };

        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);

    // 3D wheel auto-rotation
    useEffect(() => {
        const speed = 0.3;

        const animate = () => {
            angleRef.current = (angleRef.current + speed) % 360;
            setCurrentAngle(angleRef.current);
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    return (
        <>
            {/* Always-visible custom cursor */}
            <div
                ref={cursorRef}
                className="pointer-events-none fixed left-0 top-0 z-[9999]"
                style={{ willChange: "transform" }}
            >
                <div className="relative flex h-10 w-10 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-30" />
                    <div className="absolute inset-0 rounded-full border-2 border-primary/80" />
                    <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
            </div>

            <section
                ref={sectionRef}
                className="relative bg-white py-20 lg:py-28 overflow-hidden"
                style={{ cursor: "none" }}
            >
                {/* Decorative backgrounds */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/[0.03] blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/[0.03] blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
                    {/* Header */}
                    <div className="text-center mx-auto max-w-3xl mb-20">
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

                    {/* 3D Wheel Carousel */}
                    <div
                        className="relative mx-auto flex items-center justify-center"
                        style={{
                            height: `${CARD_HEIGHT + RADIUS * 2 * 0.45}px`,
                            perspective: "1000px",
                        }}
                    >
                        <div
                            style={{
                                position: "relative",
                                width: `${CARD_WIDTH}px`,
                                height: `${CARD_HEIGHT}px`,
                                transformStyle: "preserve-3d",
                                transform: `rotateY(${currentAngle}deg)`,
                                transition: "none",
                            }}
                        >
                            {partners.map((partner, index) => {
                                const theta = (360 / COUNT) * index;
                                const rotateY = theta;
                                const cardStyle: React.CSSProperties = {
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: `${CARD_WIDTH}px`,
                                    height: `${CARD_HEIGHT}px`,
                                    transform: `rotateY(${rotateY}deg) translateZ(${RADIUS}px)`,
                                    backfaceVisibility: "hidden",
                                };

                                const normalizedAngle = ((theta - currentAngle) % 360 + 360) % 360;
                                const facingFactor = Math.cos((normalizedAngle * Math.PI) / 180);
                                const opacity = Math.max(0.15, (facingFactor + 1) / 2);
                                const scale = 0.8 + 0.2 * Math.max(0, facingFactor);

                                return (
                                    <div key={partner.name} style={cardStyle}>
                                        <div
                                            className="group flex h-full w-full items-center justify-center rounded-xl border border-tertiary/30 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-xl"
                                            style={{
                                                opacity,
                                                transform: `scale(${scale})`,
                                                transition: "opacity 0.1s, transform 0.1s",
                                            }}
                                        >
                                            <Image
                                                src={partner.src}
                                                alt={`${partner.name} logo`}
                                                width={120}
                                                height={50}
                                                className="h-10 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                                                style={{ opacity: 0.7 + 0.3 * Math.max(0, facingFactor) }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}