"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RapidVetsBookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      ownerName: formData.get("ownerName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      petName: formData.get("petName"),
      petType: formData.get("petType"),
      petAge: formData.get("petAge"),
      serviceType: formData.get("serviceType"),
      visitType: formData.get("visitType"),
      preferredDate: formData.get("preferredDate"),
      preferredTime: formData.get("preferredTime"),
      branch: formData.get("branch"),
      notes: formData.get("notes"),
      whatsappUpdates: formData.get("whatsappUpdates") === "on",
    };

    try {
      console.log("RapidVets booking payload:", payload);

      // TODO: replace with your real API route
      // await fetch("/api/rapidvets-booking", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(payload),
      // });

      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Top hero image */}
      <section className="border-b border-slate-100 bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-10 sm:pb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/10 via-transparent to-orange-500/10" />
            <Image
              src="/images/dog-vet-hero.jpg"
              alt="Vet gently examining a happy dog"
              width={1600}
              height={700}
              className="h-56 w-full object-cover sm:h-72 lg:h-80"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
                🐾 Calm, gentle care for anxious pets
              </div>
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-4xl">
                Book a Private Vet Consultation with Rapid Vets
              </h1>
              <p className="mt-2 max-w-xl text-xs text-slate-100 sm:text-sm">
                From routine check-ups to urgent concerns, our team is ready to care for
                your pet with patience, clarity and kindness.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Form */}
      <section className="mx-auto flex max-w-6xl flex-col items-start gap-12 px-4 py-10 lg:flex-row lg:items-stretch lg:py-16">
        {/* LEFT: Info / selling points */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="w-full max-w-xl space-y-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
            Rapid Vets
          </p>

          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            A calmer way to visit the vet.
          </h2>

          <p className="max-w-xl text-sm text-slate-600 sm:text-base">
            Share a few details about your pet and preferred time. Our team will
            confirm your appointment and walk you through any preparation needed
            before the visit.
          </p>

          <div className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm font-semibold">Gentle, fear-free approach</p>
              <p className="mt-1 text-xs text-slate-500">
                We work slowly and calmly, especially with anxious or rescue pets.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm font-semibold">Transparent treatment plans</p>
              <p className="mt-1 text-xs text-slate-500">
                Clear explanations of options, costs and next steps before we proceed.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm font-semibold">Home & in-clinic visits</p>
              <p className="mt-1 text-xs text-slate-500">
                Choose the visit type that feels safest and most convenient for your pet.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm font-semibold">WhatsApp follow-up</p>
              <p className="mt-1 text-xs text-slate-500">
                Ask follow-up questions after your appointment for extra peace of mind.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            For life-threatening emergencies, please call us directly instead of using
            the online booking form.
          </p>
        </motion.div>

        {/* RIGHT: Form (slides in from the right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md self-stretch"
        >
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-7">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Booking Details
              </h3>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700 border border-emerald-100">
                Same-day slots subject to availability
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {/* Owner details */}
              <div className="space-y-1.5">
                <label
                  htmlFor="ownerName"
                  className="block text-xs font-medium text-slate-700"
                >
                  Your Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  id="ownerName"
                  name="ownerName"
                  required
                  placeholder="e.g. Jane Doe"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Phone / WhatsApp<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+254 7xx xxx xxx"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Email (optional)
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Pet details */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="petName"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Pet Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="petName"
                    name="petName"
                    required
                    placeholder="e.g. Simba"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="petType"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Pet Type<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="petType"
                    name="petType"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Select</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="rabbit">Rabbit</option>
                    <option value="bird">Bird</option>
                    <option value="other">Exotic / other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="petAge"
                  className="block text-xs font-medium text-slate-700"
                >
                  Pet Age (approx.)<span className="text-red-500">*</span>
                </label>
                <input
                  id="petAge"
                  name="petAge"
                  type="text"
                  required
                  placeholder="e.g. 6 months, 3 years"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              {/* Visit details */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="serviceType"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Reason for Visit<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Select</option>
                    <option value="general-checkup">General check-up</option>
                    <option value="vaccination">Vaccination</option>
                    <option value="surgery-consult">Surgery consultation</option>
                    <option value="skin-allergies">Skin / allergy issues</option>
                    <option value="emergency-concern">Emergency concern</option>
                    <option value="other">Other (explain in notes)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="visitType"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Visit Type<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="visitType"
                    name="visitType"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Select</option>
                    <option value="in-clinic">In-clinic visit</option>
                    <option value="home-visit">Home visit</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="preferredDate"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Preferred Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="preferredTime"
                    className="block text-xs font-medium text-slate-700"
                  >
                    Preferred Time
                  </label>
                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="branch"
                  className="block text-xs font-medium text-slate-700"
                >
                  Preferred Branch / Area
                </label>
                <input
                  id="branch"
                  name="branch"
                  type="text"
                  placeholder="e.g. RapidVets - Westlands"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="notes"
                  className="block text-xs font-medium text-slate-700"
                >
                  Notes (symptoms, history, etc.)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Describe what you’ve noticed (e.g. vomiting, itching, limping, not eating, when it started, any previous treatments)."
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="flex items-start gap-2">
                <input
                  id="whatsappUpdates"
                  name="whatsappUpdates"
                  type="checkbox"
                  className="mt-[3px] h-4 w-4 rounded border-slate-400 text-orange-500 focus:ring-orange-500"
                />
                <label
                  htmlFor="whatsappUpdates"
                  className="text-xs text-slate-600"
                >
                  I’m okay with getting booking updates and reminders on WhatsApp.
                </label>
              </div>

              {error && (
                <p className="text-xs font-medium text-red-500">{error}</p>
              )}

              {submitted && !error && (
                <p className="text-xs font-medium text-emerald-600">
                  Thank you! Your request has been received. Our team will contact you
                  shortly to confirm your appointment time.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/30 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-75"
              >
                {isSubmitting ? "Sending..." : "Book My Vet Consultation"}
              </button>

              <p className="pt-2 text-[10px] leading-relaxed text-slate-500">
                This form sends a booking request to our team. Appointment date and time
                are only confirmed once we contact you.
              </p>
            </form>
          </div>
        </motion.div>
      </section>
    </main>
  );
}