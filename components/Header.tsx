"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-the-author", label: "About The Author" },
  { href: "/table-of-contents", label: "Table Of Contents" },
  { href: "/about-the-book", label: "About The Book" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkBase =
    "flex items-center min-h-[44px] px-2 sm:px-5 text-sm sm:text-base md:text-[18px] font-semibold text-[#0E113C] font-montserrat transition-all duration-400 no-underline hover:opacity-80";
  const ctaClass =
    "inline-block bg-[#2FCCD6] text-white text-sm sm:text-[1rem] font-medium px-6 py-3 sm:px-8 sm:py-4 shadow-[-7px_9px_7px_rgba(0,0,0,0.21)] rounded-none hover:text-white focus:text-white transition-all duration-300";

  return (
    <header className="sticky top-0 z-[9999] bg-white border-b border-gray-200/80 md:border-0 md:static md:bg-transparent">
      <div className="px-4 sm:px-6">
        <div className="header-layout my-4 md:my-8 flex-row flex-nowrap gap-0">
          {/* Logo */}
          <div className="flex flex-col justify-center shrink-0 w-auto md:w-1/4">
            <Link href="/" className="max-w-full min-w-0 text-center md:text-left block transition-all duration-300">
              <Image
                src="/images/logo.png"
                className="w-28 sm:w-36 md:w-[52%] rounded-[10px] inline-block align-middle max-w-full h-auto"
                alt="Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Desktop nav - hidden below md */}
          <div className="hidden md:flex flex-col justify-center flex-1 md:w-[55%]">
            <nav className="flex grow shrink-0 order-0 w-full" aria-label="Main navigation">
              <ul className="flex h-full justify-start items-center list-none p-0 m-0 gap-0">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href} className="relative list-none m-0 p-0">
                    <Link href={href} className={`${linkBase} px-5`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Desktop CTA - hidden below md */}
          <div className="hidden md:flex flex-col justify-center md:w-[15%]">
            <div className="text-center">
              <Link href="/contact-now" className={ctaClass}>
                Contact Now
              </Link>
            </div>
          </div>

          {/* Hamburger - visible only below md */}
          <div className="flex md:hidden flex-col justify-center ml-auto">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="p-3 -mr-2 rounded-lg text-[#0E113C] hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
            >
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay + panel */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-[9998] md:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden
        />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-[min(320px,85vw)] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <span className="text-[#0E113C] font-semibold text-lg">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="p-2.5 rounded-lg text-[#0E113C] hover:bg-gray-100 active:bg-gray-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4" aria-label="Mobile navigation">
            <ul className="list-none p-0 m-0 flex flex-col">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="border-b border-gray-100 last:border-0">
                  <Link
                    href={href}
                    onClick={closeMenu}
                    className="flex items-center min-h-[48px] py-3 px-5 text-[#0E113C] font-semibold text-base no-underline hover:bg-gray-50 active:bg-gray-100 -mx-1 rounded-none transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 px-5 border-t border-gray-200">
              <Link
                href="/contact-now"
                onClick={closeMenu}
                className={`flex items-center justify-center min-h-[48px] w-full ${ctaClass} rounded-lg`}
              >
                Contact Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
