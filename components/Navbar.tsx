"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Plans", href: "#plans" },
  { label: "Benefits", href: "#benefits" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[88px] py-3 sm:min-h-[104px] sm:py-4 lg:min-h-[120px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="relative w-44 h-11 sm:w-56 sm:h-12 lg:w-[16.5rem] lg:h-[4rem]">
              <Image
                src="/logo-nav.png"
                alt="GenFin Medical Aid Fund"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-[#F5A623]"
                    : "text-white hover:text-[#F5A623]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-[#F5A623] text-white text-sm font-semibold shadow-lg hover:bg-[#D4891A] transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/98 backdrop-blur-md shadow-xl`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-700 font-medium py-2 border-b border-gray-100 hover:text-[#F5A623] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-6 py-3 rounded-full bg-[#F5A623] text-white font-semibold text-center hover:bg-[#D4891A] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
