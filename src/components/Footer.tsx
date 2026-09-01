"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  About: [
    { label: "What's New", href: "/whats-new" },
    { label: "Download", href: "/download" },
    { label: "Features", href: "/features" },
    { label: "Product", href: "/product" },
    { label: "Blog", href: "/blog" },
  ],
  Company: [
    { label: "Join UGC Army", href: "/join-ugc-army" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Terms of Use", href: "/tos" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  Socials: [
    { label: "Twitter", href: "https://x.com" },
    { label: "Reddit", href: "https://reddit.com" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="w-full text-[#1d1d1f] overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f5f5f7 0%, #fffbfb 40%, #f8dfe4 75%, #cba8e5 100%)"
      }}
    >


      {/* Main links grid */}
      <section className="px-6 pt-6 pb-4 sm:px-8">
        <div className="mx-auto max-w-[1024px] flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Logo & Copyright */}
          <div className="flex flex-col items-start gap-2 lg:w-1/3">
            <Link href="/" aria-label="Look AI - Home">
              <Image
                src="/getStartedLogo.svg"
                alt="Look AI Logo"
                width={0}
                height={0}
                className="h-12 w-auto -ml-2 -mt-2.5"
              />
            </Link>
            <p className="text-[14px] text-[#6e6e73]">
              Copyright &copy; {new Date().getFullYear()} Look AI. All rights reserved.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-4 gap-x-2 gap-y-10 sm:gap-x-6 sm:grid-cols-4 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left">
                <h3 className="text-[15px] font-semibold text-[#1d1d1f]">
                  {category}
                </h3>
                <ul className="flex flex-col gap-2.5 items-center sm:items-start">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] hover:underline transition-colors"
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

      {/* Giant Bottom Text */}
      <div className="w-full flex justify-center px-6 sm:px-8 translate-y-[40%]">
        <h1 className="text-[11vw] leading-none font-black tracking-tighter lowercase text-center text-gray-800">
          asthatice look
        </h1>
      </div>
    </footer>
  );
}
