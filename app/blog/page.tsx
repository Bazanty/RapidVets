"use client"

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Category = "all" | "pets" | "livestock" | "clinic";

const posts = [
  {
    slug: "first-24-hours-with-a-new-puppy",
    title: "First 24 hours with a new puppy",
    category: "pets" as Category,
    readTime: "4 min read",
    snippet: "Simple steps to make your puppy feel safe, calm and settled on day one.",
    date: "Jan 2025",
  },
  {
    slug: "is-this-an-emergency-or-can-it-wait",
    title: "Is this an emergency or can it wait?",
    category: "pets" as Category,
    readTime: "3 min read",
    snippet: "How to decide when to rush to the vet vs when a normal visit is okay.",
    date: "Jan 2025",
  },
  {
    slug: "checklist-before-a-livestock-valuation",
    title: "Checklist before a livestock valuation",
    category: "livestock" as Category,
    readTime: "5 min read",
    snippet: "What to prepare so your herd valuation visit is fast and accurate.",
    date: "Dec 2024",
  },
  {
    slug: "simple-herd-health-habits-that-pay-off",
    title: "Simple herd health habits that pay off",
    category: "livestock" as Category,
    readTime: "4 min read",
    snippet: "Small routine changes that reduce disease and losses over a season.",
    date: "Nov 2024",
  },
  {
    slug: "how-we-keep-anxious-pets-calmer",
    title: "How we keep anxious pets calmer at the clinic",
    category: "clinic" as Category,
    readTime: "3 min read",
    snippet: "Little things we do at Rapid Vets to make visits less stressful.",
    date: "Oct 2024",
  },
];

const categoryLabels: Record<Category, string> = {
  all: "All posts",
  pets: "Pets",
  livestock: "Livestock",
  clinic: "Inside the clinic",
};

const categoryStyles: Record<Category, string> = {
  all: "border-slate-200 bg-slate-50 text-slate-700",
  pets: "border-orange-100 bg-orange-50 text-orange-700",
  livestock: "border-emerald-100 bg-emerald-50 text-emerald-700",
  clinic: "border-sky-100 bg-sky-50 text-sky-700",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-slate-50/80">
        <div className="mx-auto max-w-6xl px-4 pt-24 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
              Blog
            </p>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Tips, explainers & real talk from{" "}
                <span className="text-orange-500">Rapid Vets</span>.
              </h1>
              <p className="max-w-xl text-sm text-slate-600 sm:text-base">
                Short, practical posts to help you look after pets, herds and
                your peace of mind.
              </p>
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap gap-2 pt-2">
              {(["all", "pets", "livestock", "clinic"] as Category[]).map(
                (category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={[
                        "inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-medium transition",
                        isActive
                          ? "bg-slate-900 text-white border-slate-900"
                          : categoryStyles[category],
                      ].join(" ")}
                    >
                      {categoryLabels[category]}
                    </button>
                  );
                }
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {filteredPosts.length === 0 ? (
          <p className="text-sm text-slate-500">
            No posts in this category yet. Try another filter.
          </p>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition hover:-translate-y-1 hover:border-orange-400/70 hover:shadow-md"
                >
                  <div className="flex items-center justify-between text-[11px]">
                    <span
                      className={[
                        "inline-flex items-center rounded-full border px-2 py-0.5",
                        categoryStyles[post.category],
                      ].join(" ")}
                    >
                      {categoryLabels[post.category]}
                    </span>
                    <span className="text-slate-400">{post.readTime}</span>
                  </div>

                  <h2 className="mt-3 line-clamp-2 text-sm font-semibold text-slate-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-xs text-slate-600">
                    {post.snippet}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                    <span>{post.date}</span>
                    <span className="font-semibold text-orange-600 opacity-0 transition group-hover:opacity-100">
                      Read post →
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </section>
    </main>
  );
}