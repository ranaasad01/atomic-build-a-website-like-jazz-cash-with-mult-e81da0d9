"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Send, Smartphone, CreditCard, ShieldCheck, Zap, Star, ChevronDown, Check, Download, Users, TrendingUp, Globe, Bell, Lock, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";
import { stats, APP_NAME, APP_TAGLINE, APP_DESCRIPTION, BRAND } from "@/lib/data";

// ─── Inline Data ─────────────────────────────────────────────────────────────

const features = [
  {
    id: "f1",
    icon: Send,
    title: "Instant Money Transfer",
    description: "Send money to any JazzCash account or bank in seconds. No queues, no hassle — just tap and transfer.",
    color: "from-red-500 to-rose-600",
    bg: "bg-red-50",
  },
  {
    id: "f2",
    icon: Smartphone,
    title: "Mobile Top-Up",
    description: "Recharge Jazz, Zong, Telenor, Ufone, and Warid instantly. Never run out of balance again.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
  },
  {
    id: "f3",
    icon: CreditCard,
    title: "Bill Payments",
    description: "Pay electricity, gas, water, internet, and TV bills from the comfort of your home — 24/7.",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
  },
  {
    id: "f4",
    icon: ShieldCheck,
    title: "Bank-Grade Security",
    description: "Your money is protected with 256-bit encryption, biometric authentication, and real-time fraud detection.",
    color: "from-green-500 to-emerald-600",
    bg: "bg-green-50",
  },
  {
    id: "f5",
    icon: Globe,
    title: "International Remittance",
    description: "Receive money from abroad directly into your JazzCash wallet. Fast, reliable, and low-cost transfers.",
    color: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
  },
  {
    id: "f6",
    icon: Zap,
    title: "QR Code Payments",
    description: "Scan any QR code to pay at thousands of merchants across Pakistan. Fast checkout, zero cash needed.",
    color: "from-yellow-500 to-amber-600",
    bg: "bg-yellow-50",
  },
];

const services = [
  {
    id: "s1",
    title: "JazzCash Wallet",
    description: "Your digital wallet for everyday transactions. Store money, earn rewards, and manage finances effortlessly.",
    image: "https://www.jazzcash.com.pk/assets/uploads/2019/06/Mobile-Account.png",
    badge: "Most Popular",
    badgeColor: "bg-red-500",
    features: ["Zero maintenance fee", "Instant transfers", "Cashback rewards"],
  },
  {
    id: "s2",
    title: "Business Payments",
    description: "Accept payments from customers, manage payroll, and grow your business with JazzCash merchant solutions.",
    image: "https://www.stampli.com/wp-content/uploads/2021/06/01-STAMPLI__bill-payment-systems-hero.png",
    badge: "For Business",
    badgeColor: "bg-blue-500",
    features: ["POS integration", "Sales analytics", "Bulk disbursements"],
  },
  {
    id: "s3",
    title: "Savings & Investments",
    description: "Grow your money with JazzCash savings accounts offering competitive profit rates — Shariah-compliant.",
    image: "https://www.investopedia.com/thmb/XeovbMCH3Cwoa8AF8ZQqpCqYx2w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TheDifferencesBetweenSavingandInvesting-bc50bd28537e4fb7b2d696047bee33eb.jpg",
    badge: "New",
    badgeColor: "bg-green-500",
    features: ["Up to 12% p.a.", "Shariah-compliant", "Flexible tenure"],
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Ayesha Malik",
    role: "Small Business Owner, Lahore",
    avatar: "https://hls.harvard.edu/wp-content/uploads/2022/05/Malik_Ayesha_AP_22025322224733_web.jpg",
    rating: 5,
    text: "JazzCash has completely transformed how I run my boutique. I accept payments from customers across Pakistan without any hassle. The merchant dashboard is incredibly easy to use!",
  },
  {
    id: "t2",
    name: "Usman Tariq",
    role: "Freelancer, Karachi",
    avatar: "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/13203/119754.png",
    rating: 5,
    text: "Receiving international payments used to be a nightmare. With JazzCash, my clients send money and it's in my wallet within minutes. The exchange rates are great too!",
  },
  {
    id: "t3",
    name: "Fatima Zahra",
    role: "Student, Islamabad",
    avatar: "http://english.khamenei.ir/d/2022/01/06/4/26897.jpg?ts=1728467047000",
    rating: 5,
    text: "I use JazzCash for everything — paying university fees, splitting bills with friends, and even buying groceries. It's the only app I need for my daily finances.",
  },
];

const offers = [
  {
    id: "o1",
    title: "5% Cashback on Bills",
    description: "Pay any utility bill and get 5% cashback directly into your wallet. Valid till end of month.",
    tag: "Limited Time",
    tagColor: "bg-red-500",
    gradient: "from-red-500 via-rose-500 to-pink-600",
  },
  {
    id: "o2",
    title: "Free Transfers This Week",
    description: "Send money to any bank account with zero transaction fee. Offer valid for all users.",
    tag: "This Week",
    tagColor: "bg-orange-500",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: "o3",
    title: "Earn 500 Reward Points",
    description: "Complete 3 QR payments at any merchant and earn 500 bonus reward points instantly.",
    tag: "Ongoing",
    tagColor: "bg-green-500",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
  },
];

const faqs = [
  {
    id: "q1",
    question: "How do I create a JazzCash account?",
    answer: "Download the JazzCash app, enter your Jazz mobile number, verify with OTP, set a PIN, and you're ready to go. The entire process takes less than 2 minutes.",
  },
  {
    id: "q2",
    question: "Is JazzCash safe to use?",
    answer: "Absolutely. JazzCash uses 256-bit SSL encryption, biometric authentication, and real-time fraud monitoring. Your money and data are always protected.",
  },
  {
    id: "q3",
    question: "What are the transaction limits?",
    answer: "Basic accounts can send up to PKR 25,000 per day. Verified accounts enjoy limits up to PKR 500,000 per day. Upgrade your account by completing CNIC verification.",
  },
  {
    id: "q4",
    question: "Can I use JazzCash without a Jazz SIM?",
    answer: "JazzCash is primarily designed for Jazz subscribers, but you can use the app with any mobile number for certain features. A Jazz SIM unlocks the full suite of services.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      variants={fadeInUp}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="font-semibold text-[#1A1A2E] text-sm sm:text-base pr-4">{question}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-[#EE1C25] flex-shrink-0" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] overflow-hidden pt-20">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#EE1C25]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EE1C25]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">Pakistan's #1 Mobile Wallet</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Your Money,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE1C25] to-rose-400">
                Anywhere
              </span>{" "}
              Anytime
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              {APP_DESCRIPTION}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-[#EE1C25] to-rose-600 text-white font-bold rounded-2xl shadow-xl shadow-red-900/40 hover:shadow-red-900/60 transition-shadow duration-300"
              >
                <Download className="w-5 h-5" />
                Download App
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-colors duration-200"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6">
              {[
                { icon: ShieldCheck, label: "SBP Regulated" },
                { icon: Lock, label: "256-bit Encrypted" },
                { icon: Users, label: "30M+ Users" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/60 text-sm">
                  <Icon className="w-4 h-4 text-[#EE1C25]" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Phone mockup */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#EE1C25]/30 to-transparent rounded-[3rem] blur-2xl scale-110" />
              {/* Phone frame */}
              <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div className="bg-gradient-to-b from-[#1A1A2E] to-[#0F3460] rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 pt-4 pb-2">
                    <span className="text-white/60 text-xs">9:41</span>
                    <div className="w-20 h-5 bg-black rounded-full" />
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-white/40 rounded-sm" />
                    </div>
                  </div>
                  {/* App UI */}
                  <div className="px-4 py-2">
                    <div className="bg-gradient-to-r from-[#EE1C25] to-rose-700 rounded-2xl p-4 mb-3">
                      <p className="text-white/70 text-xs mb-1">Total Balance</p>
                      <p className="text-white text-2xl font-bold">PKR 24,580</p>
                      <p className="text-white/60 text-xs mt-1">**** **** 4821</p>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {["Send", "Receive", "Pay", "More"].map((action) => (
                        <div key={action} className="flex flex-col items-center gap-1">
                          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 bg-[#EE1C25]/80 rounded-sm" />
                          </div>
                          <span className="text-white/60 text-[10px]">{action}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <p className="text-white/50 text-xs font-medium">Recent Transactions</p>
                      {[
                        { name: "Electricity Bill", amount: "-PKR 2,400", color: "text-red-400" },
                        { name: "Received from Ali", amount: "+PKR 5,000", color: "text-green-400" },
                        { name: "Mobile Top-Up", amount: "-PKR 300", color: "text-red-400" },
                      ].map((tx) => (
                        <div key={tx.name} className="flex justify-between items-center bg-white/5 rounded-xl px-3 py-2">
                          <span className="text-white/70 text-[10px]">{tx.name}</span>
                          <span className={`text-[10px] font-semibold ${tx.color}`}>{tx.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Sent</p>
                  <p className="text-xs font-bold text-gray-800">PKR 5,000</p>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-6 bottom-1/3 bg-white rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-red-100 rounded-xl flex items-center justify-center">
                  <Bell className="w-4 h-4 text-[#EE1C25]" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Cashback</p>
                  <p className="text-xs font-bold text-gray-800">PKR 120</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {(stats ?? []).map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-[#EE1C25] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-red-100 text-[#EE1C25] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Why JazzCash?
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-4">
              Everything You Need,{" "}
              <span className="text-[#EE1C25]">One App</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              From sending money to paying bills, JazzCash covers every financial need of modern Pakistanis.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300 border border-gray-100 group"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-red-100 text-[#EE1C25] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Our Services
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-4">
              Tailored for Every{" "}
              <span className="text-[#EE1C25]">Pakistani</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Whether you're an individual, a student, or a business owner — JazzCash has a solution built for you.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-400 bg-white"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 left-4 ${service.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {service.badge}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="#download"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 text-[#EE1C25] font-semibold text-sm hover:gap-3 transition-all duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OFFERS ───────────────────────────────────────────────────────── */}
      <section id="offers" className="py-24 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
              🎁 Exclusive Offers
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Save More with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE1C25] to-rose-400">
                JazzCash Deals
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 text-lg max-w-2xl mx-auto">
              Unlock cashbacks, free transfers, and reward points every time you transact.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {offers.map((offer) => (
              <motion.div
                key={offer.id}
                variants={scaleIn}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`relative bg-gradient-to-br ${offer.gradient} rounded-3xl p-7 overflow-hidden shadow-xl`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative">
                  <span className={`inline-block ${offer.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                    {offer.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">{offer.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">{offer.description}</p>
                  <motion.a
                    href="#download"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white/30 transition-colors duration-200"
                  >
                    Claim Offer <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT / HOW IT WORKS ─────────────────────────────────────────── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="inline-block bg-red-100 text-[#EE1C25] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                About JazzCash
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-6 leading-tight">
                Empowering Pakistan's{" "}
                <span className="text-[#EE1C25]">Digital Future</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                JazzCash is Pakistan's leading mobile financial service, backed by Jazz — the country's largest telecom network. Since 2012, we've been on a mission to bring financial inclusion to every corner of Pakistan.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                With over 30 million active users and a network of 50,000+ agent locations, JazzCash makes digital payments accessible to everyone — from metropolitan cities to remote villages.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Heart, label: "Trusted Since 2012", color: "text-red-500" },
                  { icon: Globe, label: "Nationwide Coverage", color: "text-blue-500" },
                  { icon: ShieldCheck, label: "SBP Licensed", color: "text-green-500" },
                  { icon: Star, label: "4.8★ App Rating", color: "text-yellow-500" },
                ].map(({ icon: Icon, label, color }) => (
                  <div key={label} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-4">
                    <Icon className={`w-5 h-5 ${color} flex-shrink-0`} />
                    <span className="text-sm font-medium text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
              <motion.a
                href="#download"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-[#EE1C25] to-rose-600 text-white font-bold rounded-2xl shadow-lg shadow-red-200 hover:shadow-red-300 transition-shadow duration-300"
              >
                Join 30M+ Users <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D05AQGuhDj3usZo0g/feedshare-thumbnail_720_1280/B4DZt9ooKPHwA0-/0/1767339366812?e=2147483647&v=beta&t=XVMxSXGfaU2q-B4O37Tj4vh3qsgJTRT7oXer7vjQONM"
                  alt="JazzCash team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EE1C25] to-rose-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Monthly Transactions</p>
                      <p className="text-xl font-extrabold text-[#1A1A2E]">PKR 170 Billion+</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Steps */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { step: "01", label: "Download App" },
                  { step: "02", label: "Verify CNIC" },
                  { step: "03", label: "Start Transacting" },
                ].map(({ step, label }) => (
                  <div key={step} className="bg-gray-50 rounded-2xl p-4 text-center border border-gray-100">
                    <p className="text-2xl font-extrabold text-[#EE1C25] mb-1">{step}</p>
                    <p className="text-xs font-medium text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-red-100 text-[#EE1C25] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Testimonials
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-4">
              Loved by Millions{" "}
              <span className="text-[#EE1C25]">Across Pakistan</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Real stories from real users who've made JazzCash part of their daily lives.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-red-100"
                  />
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-red-100 text-[#EE1C25] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FAQ
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-4">
              Got Questions?{" "}
              <span className="text-[#EE1C25]">We've Got Answers</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-3"
          >
            {faqs.map((faq) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-block bg-red-100 text-[#EE1C25] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Contact Us
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A2E] mb-4">
              We're Here to{" "}
              <span className="text-[#EE1C25]">Help You</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Reach out to our 24/7 support team via phone, email, or visit any of our 50,000+ agent locations.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-5"
            >
              {[
                { icon: Phone, title: "Call Us", detail: "051-111-124-444", sub: "Available 24/7", color: "bg-red-100 text-[#EE1C25]" },
                { icon: Mail, title: "Email Support", detail: "support@jazzcash.com.pk", sub: "Response within 2 hours", color: "bg-blue-100 text-blue-600" },
                { icon: MapPin, title: "Head Office", detail: "Jazz Headquarters, Islamabad", sub: "Mon–Fri, 9am–6pm", color: "bg-green-100 text-green-600" },
              ].map(({ icon: Icon, title, detail, sub, color }) => (
                <motion.div
                  key={title}
                  variants={fadeInUp}
                  className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] mb-1">{title}</p>
                    <p className="text-gray-700 text-sm font-medium">{detail}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD CTA ─────────────────────────────────────────────────── */}
      <section id="download" className="py-24 bg-gradient-to-br from-[#EE1C25] via-rose-600 to-[#c0141b] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={scaleIn} className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Download JazzCash Today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join over 30 million Pakistanis who trust JazzCash for their daily financial needs. Available on iOS and Android — free forever.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-white text-[#1A1A2E] font-bold px-7 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <Download className="w-5 h-5 text-[#EE1C25]" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-normal">Download on the</p>
                  <p className="text-sm font-bold">App Store</p>
                </div>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold px-7 py-4 rounded-2xl hover:bg-white/25 transition-colors duration-200"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <p className="text-xs text-white/70 font-normal">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

// ─── Contact Form (isolated to keep state clean) ──────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm">Our team will get back to you within 2 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">Send Us a Message</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Ahmed Khan"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-colors duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0300-1234567"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-colors duration-200"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="ahmed@example.com"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-colors duration-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you today?"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-colors duration-200 resize-none"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-4 bg-gradient-to-r from-[#EE1C25] to-rose-600 text-white font-bold rounded-xl shadow-lg shadow-red-200 hover:shadow-red-300 transition-shadow duration-300"
      >
        Send Message
      </motion.button>
    </form>
  );
}