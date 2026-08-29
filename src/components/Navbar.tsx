"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
];

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lookai.app";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/20 px-5 py-1.5 backdrop-blur-xl">
      <div className="relative mx-auto flex max-w-screen-xl items-center justify-between">
        {/* Logo (left) */}
        <Link
          href="/"
          aria-label="Look AI - Home"
          className="flex items-center"
        >
          <Image
            src="/getStartedLogo.svg"
            alt="Look AI Logo"
            width={183}
            height={64}
            className="h-11 w-auto sm:h-14"
            priority
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav
          aria-label="Main navigation"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:flex"
        >
          <ul className="flex items-center gap-[30px] text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-gray-800 transition-colors hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Google Play badge (desktop, right side) */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Get it on Google Play"
          className="hidden transition-opacity hover:opacity-80 lg:block"
        >
          <Image
            src="/googleplay.png"
            alt="Get it on Google Play"
            width={135}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Hamburger menu (mobile only) */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="block text-gray-800 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`${mobileMenuOpen ? "block" : "hidden"
            } absolute left-0 right-0 top-full mt-4 w-full lg:hidden`}
        >
          <ul className="flex flex-col rounded-lg bg-white/80 px-4 py-2 text-lg shadow-sm backdrop-blur-xl">
            {navLinks.map((link) => (
              <li key={link.href} className="py-2">
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-800 hover:text-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 flex justify-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="transition-opacity hover:opacity-80"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/googleplay.png"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-10 w-auto"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
