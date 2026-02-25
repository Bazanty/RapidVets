"use client";

import dynamic from "next/dynamic";

// Dynamically import the map component (client‑side only)
const VetLocatorMap = dynamic(() => import("../components/VetLocatorMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] bg-[#e0dddc] rounded-3xl flex items-center justify-center text-[#0b224d]/50">
      Loading map...
    </div>
  ),
});

export default function VetLocatorMapWrapper() {
  return <VetLocatorMap />;
}