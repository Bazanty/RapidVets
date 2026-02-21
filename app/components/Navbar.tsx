"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#vets", label: "Our Vets" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy/95 text-white backdrop-blur-md shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          {/* Simple logo mark (you can replace with an <Image /> later) */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange">
            <span className="text-sm font-bold leading-none">RV</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight">Rapid Vets</span>
            <span className="text-xs text-soft-grey">
              24/7 Veterinary Care
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange lg:inline">
              24/7 Emergency
            </span>
            <Link
              href="#booking"
              className="rounded-full bg-orange px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-navy"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-soft-grey hover:text-orange lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {/* Icon: hamburger / close */}
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg
            className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="border-t border-soft-grey/40 bg-navy/98 lg:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <ul className="flex flex-col gap-1 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-soft-grey hover:bg-orange hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-3 flex flex-col gap-2">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                <span className="h-2 w-2 rounded-full bg-orange animate-pulse" />
                24/7 Emergency
              </span>

              <Link
                href="#booking"
                className="mt-1 block rounded-full bg-orange px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-white hover:text-navy"
                onClick={() => setIsOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}