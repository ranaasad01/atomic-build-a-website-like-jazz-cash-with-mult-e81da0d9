"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Target, Heart, Users, TrendingUp, Award, Globe, Zap, Shield, CheckCircle, ArrowRight, Star, Building, Calendar } from 'lucide-react';
import {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";
import { stats } from "@/lib/data";

// ─── Timeline Data ────────────────────────────────────────────────────────────
const timeline = [
  {
    id: "t1",
    year: "2012",
    title: "JazzCash Founded",
    description:
      "Launched as Pakistan's first mobile financial service by Jazz (Mobilink).",
  },
  {
    id: "t2",
    year: "2014",
    title: "5 Million Users",
    description:
      "Reached 5 million registered users within 2 years of launch.",
  },
  {
    id: "t3",
    year: "2016",
    title: "Bill Payments Launch",
    description:
      "Introduced utility bill payments, revolutionizing how Pakistanis pay bills.",
  },
  {
    id: "t4",
    year: "2018",
    title: "International Remittance",
    description:
      "Partnered with global money transfer operators for international remittances.",
  },
  {
    id: "t5",
    year: "2020",
    title: "15 Million Users",
    description:
      "Crossed 15 million users milestone during COVID-19 digital adoption surge.",
  },
  {
    id: "t6",
    year: "2022",
    title: "QR Payments",
    description:
      "Launched QR code payment system across 100,000+ merchants nationwide.",
  },
  {
    id: "t7",
    year: "2024",
    title: "30 Million Strong",
    description:
      "Reached 30 million active users, cementing position as Pakistan's #1 wallet.",
  },
];

// ─── Team Data ────────────────────────────────────────────────────────────────
const team = [
  {
    id: "tm1",
    name: "Ahmed Khan",
    title: "CEO & President",
    description: "Visionary leader with 20+ years in fintech and telecom.",
    initials: "AK",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "tm2",
    name: "Sara Malik",
    title: "Chief Technology Officer",
    description: "Driving digital innovation and platform scalability.",
    initials: "SM",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "tm3",
    name: "Omar Farooq",
    title: "Chief Financial Officer",
    description: "Ensuring financial excellence and regulatory compliance.",
    initials: "OF",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: "tm4",
    name: "Ayesha Raza",
    title: "Chief Marketing Officer",
    description: "Building Pakistan's most trusted digital brand.",
    initials: "AR",
    gradient: "from-purple-500 to-violet-600",
  },
];

// ─── Partners Data ────────────────────────────────────────────────────────────
const partners = [
  { id: "p1", name: "Jazz Telecom", icon: Globe },
  { id: "p2", name: "State Bank of Pakistan", icon: Building },
  { id: "p3", name: "Visa", icon: Globe },
  { id: "p4", name: "Mastercard", icon: Globe },
  { id: "p5", name: "Western Union", icon: Building },
  { id: "p6", name: "MoneyGram", icon: Globe },
];

// ─── Values Data ─────────────────────────────────────────────────────────────
const values = [
  "Financial Inclusion for All",
  "Innovation-First Approach",
  "Uncompromising Security",
  "Customer-Centric Design",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#EE1C25] via-[#c0141b] to-[#1A1A2E] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full border border-white/30">
                <Star className="w-4 h-4 text-[#FFD700]" />
                Our Story
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Empowering Pakistan's{" "}
              <span className="text-[#FFD700]">Digital Future</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              JazzCash is on a mission to bring financial inclusion to every
              Pakistani — from bustling cities to remote villages — by making
              digital payments simple, secure, and accessible to all.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#EE1C25] font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Join Millions of Users
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#mission"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-white hover:bg-white/10 transition-all duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. MISSION & VALUES SECTION ─────────────────────────────────── */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block text-[#EE1C25] font-semibold text-sm uppercase tracking-widest mb-4">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-6">
                Our Mission
              </h2>
              <p className="text-2xl font-light text-gray-600 italic leading-relaxed mb-6 border-l-4 border-[#EE1C25] pl-6">
                &ldquo;To democratize financial services in Pakistan and create
                a world where every citizen has access to safe, affordable, and
                convenient digital payments.&rdquo;
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Founded in 2012, JazzCash was born from a simple yet powerful
                vision: to bridge the financial gap in Pakistan by leveraging
                mobile technology. Today, we serve over 30 million users and
                continue to innovate for a more inclusive financial future.
              </p>

              {/* Values List */}
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#EE1C25] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Decorative Card Stack */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              {/* Main Card */}
              <div className="relative z-10 bg-gradient-to-br from-[#EE1C25] to-[#c0141b] rounded-3xl p-8 shadow-2xl text-white max-w-sm w-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Our Mission</h3>
                </div>
                <p className="text-white/90 leading-relaxed mb-6">
                  Empowering every Pakistani with access to fast, secure, and
                  affordable digital financial services — anytime, anywhere.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#FFD700]">30M+</p>
                    <p className="text-white/70 text-xs mt-1">Active Users</p>
                  </div>
                  <div className="w-px h-12 bg-white/30" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#FFD700]">12+</p>
                    <p className="text-white/70 text-xs mt-1">Years of Trust</p>
                  </div>
                  <div className="w-px h-12 bg-white/30" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#FFD700]">50K+</p>
                    <p className="text-white/70 text-xs mt-1">Agent Locations</p>
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute -bottom-6 -right-4 z-0 bg-white rounded-2xl p-6 shadow-xl max-w-xs w-64">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A2E]">PKR 2T+</p>
                    <p className="text-xs text-gray-500">Transactions Yearly</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-[#EE1C25] to-[#c0141b] rounded-full" />
                </div>
                <p className="text-xs text-gray-400 mt-2">Growing 40% year-over-year</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. KEY STATS SECTION ────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              JazzCash by the Numbers
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Our growth reflects the trust millions of Pakistanis place in us
              every single day.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-4xl font-bold text-[#EE1C25] mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 4. TIMELINE SECTION ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Key milestones in JazzCash&apos;s growth story
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line (desktop only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1 md:max-w-[calc(50%-2rem)]">
                    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <span className="inline-block bg-[#EE1C25] text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-[#EE1C25] rounded-full border-4 border-white shadow-md z-10" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP TEAM SECTION ──────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Leadership Team
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Meet the visionaries driving Pakistan&apos;s digital payments
              revolution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.id}
                variants={scaleIn}
                className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
              >
                {/* Avatar */}
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <span className="text-white text-xl font-bold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#EE1C25] text-sm font-semibold mb-3">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 6. PARTNERS SECTION ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We collaborate with world-class organizations to deliver the best
              financial services to Pakistanis.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {partners.map((partner) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={partner.id}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 flex flex-col items-center justify-center gap-3"
                >
                  <Icon className="w-8 h-8 text-gray-400" />
                  <p className="text-gray-600 text-xs font-semibold text-center leading-tight">
                    {partner.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 7. CTA SECTION ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#EE1C25] to-[#c0141b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Join Pakistan&apos;s{" "}
              <span className="text-[#FFD700]">Digital Revolution?</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join over 30 million Pakistanis who trust JazzCash for their
              everyday financial needs. Sign up in minutes — it&apos;s free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#EE1C25] font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Create Free Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/help"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-2xl border-2 border-white hover:bg-white/10 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
