// components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
  preload: false,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  preload: false,
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[700px] h-[85vh] bg-white overflow-hidden">
      {/* Background image only on right side */}
      <div className="absolute inset-0 lg:inset-auto lg:right-0 lg:w-1/2 h-full z-0">
        <Image
          src="/home/vet.jpeg"
          alt="Veterinarian examining a cow"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay for better text contrast on image */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent lg:bg-none" />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full">
          {/* Left column – text */}
          <div className="text-[#0b224d] py-12 lg:py-0">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase bg-[#f55c15]/10 text-[#f55c15] rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f55c15]" />
              Trusted by 4,000+ farmers
            </span>

            {/* Headline */}
            <h1 className={`${playfair.className} text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-[#0b224d]`}>
              On-Demand Animal
              <br />
              <span className="text-[#f55c15]">Inspection Platform</span>
            </h1>

            {/* Subheadline */}
            <p className={`${dmSans.className} mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl`}>
              Rapid Vets is an On-Demand animal Inspection Platform that sends its
              closest available roaming Vets to inspect and assess animals.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/get-started"
                className="rounded-md bg-[#f55c15] px-8 py-4 text-base font-semibold text-white shadow-md hover:bg-[#f55c15]/90 transition-all hover:shadow-lg"
              >
                Getting Started
              </Link>
              <button className="flex items-center gap-2 text-[#0b224d] font-semibold text-lg hover:text-[#f55c15] transition-colors group">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f55c15]/10 group-hover:bg-[#f55c15] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
                Watch Video
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f55c15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#f55c15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Under 30 min response</span>
              </div>
            </div>
          </div>

          {/* Right column – stat card (empty on mobile, visible on lg) */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-8 shadow-xl w-80 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#f55c15] flex items-center justify-center text-white font-bold text-xl">
                  RV
                </div>
                <div>
                  <p className="font-display font-bold text-[#0b224d] text-lg">Rapid Vets</p>
                  <p className="text-sm text-gray-500">4,000+ vets nationwide</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Response time</span>
                  <span className="font-semibold text-[#0b224d]">30 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Active vets now</span>
                  <span className="font-semibold text-[#f55c15]">247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Farmers served</span>
                  <span className="font-semibold text-[#0b224d]">12.5k+</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-[#0b224d] text-white text-xs flex items-center justify-center">
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">vets near you</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f55c15] via-[#0b224d] to-transparent" />
    </section>
  );
}