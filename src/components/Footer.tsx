"use client";

import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "What's New", href: "/whats-new" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Help Center", href: "/help-center" },
    { label: "Changelog", href: "/changelog" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  Community: [
    { label: "Request a Feature", href: "/request-feature" },
    { label: "Report a Bug", href: "/report-bug" },
    { label: "Share Feedback", href: "/feedback" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/tos" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Newsroom-style caption (Apple's small intro line) */}
      <section className="px-6 pt-12 sm:px-8">
        <div className="mx-auto max-w-[1024px]">
          <p className="text-[12px] text-[#6e6e73]">
            News about the Look AI app.
          </p>
          <a
            href="/blog"
            className="mt-2 inline-flex items-center gap-1 text-[14px] text-[#1d1d1f] hover:underline"
          >
            See all blog articles
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto mt-10 max-w-[1024px] px-6 sm:px-8">
        <div className="h-px w-full bg-[#d2d2d7]" />
      </div>

      {/* Look AI Footer label */}
      <section className="px-6 pt-6 sm:px-8">
        <div className="mx-auto max-w-[1024px]">
          <h2 className="text-[14px] font-semibold text-[#1d1d1f]">
            Look AI Footer
          </h2>
        </div>
      </section>

      {/* Main links grid */}
      <section className="px-6 pt-6 pb-10 sm:px-8">
        <div className="mx-auto max-w-[1024px]">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3">
                <h3 className="text-[12px] font-semibold text-[#1d1d1f]">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[12px] text-[#1d1d1f] hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1024px] px-6 sm:px-8">
        <div className="h-px w-full bg-[#d2d2d7]" />
      </div>

      {/* Copyright + Social Icons */}
      <section className="px-6 py-6 sm:px-8">
        <div className="mx-auto max-w-[1024px]">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-[12px] text-[#6e6e73]">
              &copy; Copyright 2026, All rights reserved
            </p>
            <div className="flex items-center gap-5">
              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="text-[#1d1d1f] transition-opacity hover:opacity-60"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 9.724h-3.304l-7.227-8.26L2.25 21.75h3.308l7.227-8.26-8.502-9.724h-3.304l7.227 8.26L21.75 2.25h-3.308l-7.227 8.26 8.502 9.724h-3.304l-7.227-8.26L2.25 21.75h3.308l7.227-8.26-8.502-9.724h-3.304l7.227 8.26L21.75 2.25z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on GitHub"
                className="text-[#1d1d1f] transition-opacity hover:opacity-60"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
