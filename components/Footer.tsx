"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, MessageCircle as Twitter, Globe as Facebook, Briefcase as Linkedin, Code2 as Github } from 'lucide-react';
import { APP_NAME, APP_TAGLINE } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const footerLinks = {
  Services: [
    { label: "Send Money", href: "#services" },
    { label: "Mobile Top-Up", href: "#services" },
    { label: "Bill Payments", href: "#services" },
    { label: "QR Payments", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Press", href: "#about" },
    { label: "Blog", href: "#about" },
  ],
  Support: [
    { label: "Help Center", href: "#contact" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#contact" },
    { label: "Terms of Service", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  const pathname = usePathname();

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const getHref = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  };

  return (
    <footer className="bg-[#1A1A2E] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EE1C25] to-[#c0141b] flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Jazz<span className="text-[#EE1C25]">Cash</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              {APP_TAGLINE}. Empowering millions of Pakistanis with fast, secure,
              and convenient digital financial services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-[#EE1C25] flex-shrink-0" />
                <span>051-111-124-444</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-[#EE1C25] flex-shrink-0" />
                <span>support@jazzcash.com.pk</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#EE1C25] flex-shrink-0" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#EE1C25] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={fadeInUp}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={getHref(link.href)}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="text-sm text-gray-400 hover:text-[#EE1C25] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-gray-400 mb-4 font-medium">
            Download the JazzCash App
          </p>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#download"
              onClick={(e) => handleAnchorClick(e, "#download")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-200"
            >
              <div className="text-left">
                <p className="text-[10px] text-gray-400 leading-none">
                  Download on the
                </p>
                <p className="text-sm font-semibold text-white leading-tight">
                  App Store
                </p>
              </div>
            </motion.a>
            <motion.a
              href="#download"
              onClick={(e) => handleAnchorClick(e, "#download")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all duration-200"
            >
              <div className="text-left">
                <p className="text-[10px] text-gray-400 leading-none">
                  Get it on
                </p>
                <p className="text-sm font-semibold text-white leading-tight">
                  Google Play
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            Regulated by the State Bank of Pakistan.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}