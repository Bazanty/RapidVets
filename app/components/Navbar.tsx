"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type NavItem =
  | { label: string; href: string; children?: never }
  | { label: string; href?: never; children: { label: string; href: string }[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Inspections",
    children: [
      { label: "Clinical Inspection", href: "/services/clinical-inspection" },
      { label: "Emergency Inspection", href: "/services/emergency-inspection" },
      { label: "Herd Health Inspection", href: "/services/herd-inspection" },
      { label: "Livestock Valuation Inspection", href: "/services/livestock-valuation" },
      { label: "Livestock Postmortem Inspection", href: "/services/clinical-inspection" },
    ],
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Vets", href: "/vets" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "Contacts", href: "/contact" },
  { label: "Book A Private Valuation", href: "/book" },
];

function DropdownLink({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary transition-colors"
      >
        {item.label}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute left-0 top-full mt-2 min-w-[180px] rounded-lg border border-tertiary/40 bg-white py-1.5 shadow-lg z-50">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-secondary hover:bg-tertiary/20 hover:text-primary transition-colors"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      // Add background after scrolling 10px
      setScrolled(offset > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // Set initial state based on current scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo/logo.png"
            alt="RapidVets logo"
            width={289}
            height={98}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <DropdownLink key={item.label} item={item} />
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/get-started"
            className="rounded-md bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-secondary/85"
          >
            Get Started
          </Link>
          <Link
            href="/sign-in"
            className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/85"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((p) => !p)}
          className="inline-flex items-center justify-center rounded-md p-2 text-secondary hover:text-primary lg:hidden"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-tertiary/40 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {navItems.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-semibold text-secondary hover:bg-tertiary/20 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileExpanded === item.label;
              return (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(expanded ? null : item.label)
                    }
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-secondary hover:bg-tertiary/20 hover:text-primary"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {expanded && (
                    <div className="ml-4 mt-0.5 border-l-2 border-tertiary/40 pl-3 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-md px-3 py-1.5 text-sm text-secondary/80 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile CTAs */}
            <div className="flex gap-2 pt-2">
              <Link
                href="/get-started"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-md bg-secondary py-2 text-center text-sm font-semibold text-white transition hover:bg-secondary/85"
              >
                Get Started
              </Link>
              <Link
                href="/sign-in"
                onClick={() => setMobileOpen(false)}
                className="flex-1 rounded-md bg-primary py-2 text-center text-sm font-semibold text-white transition hover:bg-primary/85"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}