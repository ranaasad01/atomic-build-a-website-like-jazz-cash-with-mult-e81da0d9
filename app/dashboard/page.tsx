"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Send, Smartphone, CreditCard, ArrowUpRight, ArrowDownLeft, Bell, Eye, EyeOff, Plus, TrendingUp, Zap, Gift, ChevronRight } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, fadeIn } from "@/lib/motion";
import { APP_NAME } from "@/lib/data";

// ─── Mock Transactions ────────────────────────────────────────────────────────
const transactions = [
  {
    id: "tx1",
    name: "Electricity Bill - LESCO",
    date: "Today, 2:30 PM",
    amount: "-PKR 3,200",
    type: "out",
    Icon: CreditCard,
  },
  {
    id: "tx2",
    name: "Received from Ali Khan",
    date: "Today, 11:00 AM",
    amount: "+PKR 5,000",
    type: "in",
    Icon: ArrowDownLeft,
  },
  {
    id: "tx3",
    name: "Jazz Recharge",
    date: "Yesterday",
    amount: "-PKR 200",
    type: "out",
    Icon: Smartphone,
  },
  {
    id: "tx4",
    name: "Salary Credit",
    date: "Dec 1",
    amount: "+PKR 45,000",
    type: "in",
    Icon: TrendingUp,
  },
  {
    id: "tx5",
    name: "Netflix Bill",
    date: "Nov 30",
    amount: "-PKR 1,100",
    type: "out",
    Icon: CreditCard,
  },
];

// ─── Quick Actions ────────────────────────────────────────────────────────────
const quickActions = [
  {
    id: "qa1",
    label: "Send Money",
    Icon: Send,
    href: "/send-money",
    bg: "bg-red-100",
    iconColor: "text-[#EE1C25]",
    ring: "hover:ring-red-300",
  },
  {
    id: "qa2",
    label: "Mobile Top-Up",
    Icon: Smartphone,
    href: "/topup",
    bg: "bg-orange-100",
    iconColor: "text-orange-500",
    ring: "hover:ring-orange-300",
  },
  {
    id: "qa3",
    label: "Pay Bills",
    Icon: CreditCard,
    href: "/bill-payments",
    bg: "bg-blue-100",
    iconColor: "text-blue-600",
    ring: "hover:ring-blue-300",
  },
  {
    id: "qa4",
    label: "Add Money",
    Icon: Plus,
    href: "#",
    bg: "bg-green-100",
    iconColor: "text-green-600",
    ring: "hover:ring-green-300",
  },
];

// ─── Offers ───────────────────────────────────────────────────────────────────
const offers = [
  {
    id: "o1",
    title: "10% Cashback",
    subtitle: "On all Bill Payments this month",
    gradient: "from-[#EE1C25] to-[#c0141b]",
    Icon: Zap,
  },
  {
    id: "o2",
    title: "Free Transfer",
    subtitle: "Send money free this weekend",
    gradient: "from-[#FFD700] to-[#f0a500]",
    Icon: Gift,
    textDark: true,
  },
];

// ─── Bottom Stats ─────────────────────────────────────────────────────────────
const bottomStats = [
  {
    id: "bs1",
    label: "Total Sent",
    sublabel: "This Month",
    value: "PKR 8,200",
    Icon: ArrowUpRight,
    iconBg: "bg-red-100",
    iconColor: "text-[#EE1C25]",
  },
  {
    id: "bs2",
    label: "Total Received",
    sublabel: "This Month",
    value: "PKR 12,400",
    Icon: ArrowDownLeft,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    id: "bs3",
    label: "Active Services",
    sublabel: "Connected",
    value: "4 Services",
    Icon: Sparkles,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <main className="min-h-screen bg-[#F5F5F5] pt-20 pb-16">
      {/* ── 1. TOP GREETING BAR ─────────────────────────────────────────── */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-[#EE1C25] py-6"
      >
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Good morning, Ahmed 👋
            </h1>
            <p className="text-red-100 text-sm mt-1">
              Here&apos;s your financial overview
            </p>
          </div>
          <button
            aria-label="Notifications"
            className="relative p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <Bell className="w-6 h-6 text-white" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FFD700] rounded-full border-2 border-[#EE1C25]" />
          </button>
        </div>
      </motion.section>

      <div className="max-w-5xl mx-auto px-4">
        {/* ── 2. WALLET BALANCE CARD ──────────────────────────────────────── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mt-6 rounded-3xl bg-gradient-to-br from-[#EE1C25] to-[#c0141b] p-6 sm:p-8 shadow-2xl shadow-red-300/40 text-white"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-red-100 text-sm font-medium tracking-wide uppercase">
              Total Balance
            </span>
            <button
              onClick={() => setBalanceVisible((v) => !v)}
              aria-label="Toggle balance visibility"
              className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              {balanceVisible ? (
                <EyeOff className="w-4 h-4 text-white" />
              ) : (
                <Eye className="w-4 h-4 text-white" />
              )}
            </button>
          </div>

          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight my-3">
            {balanceVisible ? "PKR 24,580.00" : "PKR ••••••"}
          </div>

          <p className="text-red-200 text-sm mb-6">0300-1234567</p>

          {/* Mini Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/15 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-400/30 flex items-center justify-center flex-shrink-0">
                <ArrowDownLeft className="w-5 h-5 text-green-300" />
              </div>
              <div>
                <p className="text-red-100 text-xs">This Month In</p>
                <p className="text-white font-bold text-sm">PKR 12,400</p>
              </div>
            </div>
            <div className="bg-white/15 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-300/30 flex items-center justify-center flex-shrink-0">
                <ArrowUpRight className="w-5 h-5 text-red-200" />
              </div>
              <div>
                <p className="text-red-100 text-xs">This Month Out</p>
                <p className="text-white font-bold text-sm">PKR 8,200</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 3. QUICK ACTIONS ────────────────────────────────────────────── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-lg font-bold text-[#1A1A2E] mb-4"
          >
            Quick Actions
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {quickActions.map(({ id, label, Icon, href, bg, iconColor, ring }) => (
              <motion.div key={id} variants={scaleIn}>
                <Link
                  href={href}
                  className={`flex flex-col items-center justify-center gap-3 p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:ring-2 ${ring} transition-all duration-200 group`}
                >
                  <div
                    className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className={`w-6 h-6 ${iconColor}`} />
                  </div>
                  <span className="text-sm font-semibold text-[#1A1A2E] text-center">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 4. RECENT TRANSACTIONS ──────────────────────────────────────── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8"
        >
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-between mb-4"
          >
            <h2 className="text-lg font-bold text-[#1A1A2E]">
              Recent Transactions
            </h2>
            <Link
              href="/transactions"
              className="text-sm font-semibold text-[#EE1C25] flex items-center gap-1 hover:underline"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100"
          >
            {transactions.map(({ id, name, date, amount, type, Icon }) => (
              <div
                key={id}
                className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    type === "in" ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      type === "in" ? "text-green-600" : "text-[#EE1C25]"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#1A1A2E] truncate">
                    {name}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{date}</p>
                </div>
                <span
                  className={`text-sm font-bold flex-shrink-0 ${
                    type === "in" ? "text-green-600" : "text-[#EE1C25]"
                  }`}
                >
                  {amount}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── 5. OFFERS BANNER ────────────────────────────────────────────── */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8"
        >
          <h2 className="text-lg font-bold text-[#1A1A2E] mb-4">
            Offers &amp; Promotions
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {offers.map(({ id, title, subtitle, gradient, Icon, textDark }) => (
              <div
                key={id}
                className={`flex-shrink-0 w-64 sm:w-72 rounded-2xl bg-gradient-to-br ${gradient} p-5 shadow-md flex items-center gap-4 cursor-pointer hover:scale-[1.02] transition-transform duration-200`}
              >
                <div
                  className={`w-12 h-12 rounded-full ${
                    textDark ? "bg-black/10" : "bg-white/20"
                  } flex items-center justify-center flex-shrink-0`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      textDark ? "text-[#1A1A2E]" : "text-white"
                    }`}
                  />
                </div>
                <div>
                  <p
                    className={`font-bold text-base ${
                      textDark ? "text-[#1A1A2E]" : "text-white"
                    }`}
                  >
                    {title}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      textDark ? "text-[#1A1A2E]/70" : "text-white/80"
                    }`}
                  >
                    {subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── 6. BOTTOM STATS ROW ─────────────────────────────────────────── */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-lg font-bold text-[#1A1A2E] mb-4"
          >
            Your Stats
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {bottomStats.map(({ id, label, sublabel, value, Icon, iconBg, iconColor }) => (
              <motion.div
                key={id}
                variants={scaleIn}
                className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4"
              >
                <div
                  className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <Icon className={`w-6 h-6 ${iconColor}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    {label}
                    <span className="block text-gray-300">{sublabel}</span>
                  </p>
                  <p className="text-lg font-extrabold text-[#1A1A2E] mt-0.5">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
