"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from 'lucide-react';
import { navLinks, APP_NAME, primaryCTA } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
      // If not on homepage, let Next.js navigate to /#section naturally
    }
    setIsOpen(false);
  };

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-red-100/50"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#EE1C25] to-[#c0141b] flex items-center justify-center shadow-md group-hover:shadow-red-300 transition-shadow duration-300">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#1A1A2E] tracking-tight">
              Jazz<span className="text-[#EE1C25]">Cash</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-red-50 hover:text-[#EE1C25] ${
                  pathname === link.href && !link.href.startsWith("#")
                    ? "text-[#EE1C25] bg-red-50"
                    : "text-gray-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#download"
              onClick={(e) => handleNavClick(e, "#download")}
              className="px-4 py-2 text-sm font-semibold text-[#EE1C25] border-2 border-[#EE1C25] rounded-xl hover:bg-red-50 transition-all duration-200"
            >
              Log In
            </Link>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href={primaryCTA.href}
                onClick={(e) => handleNavClick(e, primaryCTA.href)}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#EE1C25] to-[#c0141b] rounded-xl shadow-md hover:shadow-red-300 hover:shadow-lg transition-all duration-200"
              >
                {primaryCTA.label}
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-red-50 hover:text-[#EE1C25] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[#EE1C25] transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 flex flex-col gap-2">
                <Link
                  href="#download"
                  onClick={(e) => handleNavClick(e, "#download")}
                  className="block text-center px-4 py-3 text-sm font-semibold text-[#EE1C25] border-2 border-[#EE1C25] rounded-xl hover:bg-red-50 transition-all duration-200"
                >
                  Log In
                </Link>
                <Link
                  href={primaryCTA.href}
                  onClick={(e) => handleNavClick(e, primaryCTA.href)}
                  className="block text-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#EE1C25] to-[#c0141b] rounded-xl shadow-md transition-all duration-200"
                >
                  {primaryCTA.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}