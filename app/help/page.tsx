"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, User, CreditCard, ShieldCheck, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion";

const categories = [
  {
    id: "cat-1",
    icon: User,
    title: "Account & Profile",
    description:
      "Manage your account settings, KYC, and profile information.",
  },
  {
    id: "cat-2",
    icon: CreditCard,
    title: "Payments & Transfers",
    description:
      "Learn about sending money, bill payments, and top-ups.",
  },
  {
    id: "cat-3",
    icon: ShieldCheck,
    title: "Security & Privacy",
    description:
      "Keep your account safe with our security features and tips.",
  },
];

const faqs = [
  {
    id: "faq-1",
    question: "How do I create a JazzCash account?",
    answer:
      "Creating a JazzCash account is simple. Download the JazzCash app from the App Store or Google Play, enter your CNIC number and registered mobile number, then complete the biometric verification process. Your account will be activated within minutes and you can start transacting immediately.",
  },
  {
    id: "faq-2",
    question: "How do I send money to another user?",
    answer:
      "To send money, navigate to the 'Send Money' section in your JazzCash app or dashboard. Enter the recipient's JazzCash mobile number, specify the amount you wish to transfer, review the transaction details, and confirm with your 4-digit PIN. The money is transferred instantly to the recipient's wallet.",
  },
  {
    id: "faq-3",
    question: "What are the transaction limits?",
    answer:
      "Transaction limits depend on your account verification level. Unverified accounts have a daily transaction limit of PKR 25,000 and a monthly limit of PKR 100,000. Fully verified accounts (with completed KYC) enjoy a daily limit of PKR 200,000 and a monthly limit of PKR 500,000. Upgrade your account to unlock higher limits.",
  },
  {
    id: "faq-4",
    question: "How do I pay utility bills?",
    answer:
      "Go to the 'Bill Payments' section in your JazzCash app. Select your utility provider (LESCO, SNGPL, PTCL, etc.), enter your consumer reference number or account number, verify the bill amount displayed, and confirm payment with your PIN. You'll receive a digital receipt instantly.",
  },
  {
    id: "faq-5",
    question: "Is my money safe with JazzCash?",
    answer:
      "Absolutely. JazzCash uses 256-bit SSL encryption to protect all your transactions and personal data. We are fully regulated by the State Bank of Pakistan (SBP) and comply with all SECP regulations. Your funds are held in a dedicated trust account, and we employ real-time fraud detection systems to keep your money secure 24/7.",
  },
  {
    id: "faq-6",
    question: "How do I reset my PIN?",
    answer:
      "If you've forgotten your PIN, tap 'Forgot PIN' on the login screen. You'll receive a One-Time Password (OTP) on your registered mobile number. Enter the OTP to verify your identity, then set a new 4-digit PIN of your choice. For security, choose a PIN that is not easily guessable.",
  },
  {
    id: "faq-7",
    question: "Can I use JazzCash without internet?",
    answer:
      "Yes! JazzCash offers basic services via USSD by dialing *786# from your registered Jazz number. This allows you to check your balance, send money, and perform mobile top-ups even without a smartphone or internet connection. Standard Jazz call charges apply.",
  },
  {
    id: "faq-8",
    question: "How long do transfers take?",
    answer:
      "JazzCash-to-JazzCash transfers are instant — your recipient gets the money within seconds. Transfers to other bank accounts via IBFT typically take 1-2 business days depending on the receiving bank. International remittances may take 1-3 business days. You'll receive SMS notifications at every step of the transfer.",
  },
];

const contactMethods = [
  {
    id: "cm-1",
    icon: Phone,
    title: "Call Us",
    detail: "+92-311-1111-111",
    sub: "Mon–Sun, 8am–10pm",
  },
  {
    id: "cm-2",
    icon: Mail,
    title: "Email Support",
    detail: "support@jazzcash.com.pk",
    sub: "Response within 24 hours",
  },
  {
    id: "cm-3",
    icon: MessageSquare,
    title: "Live Chat",
    detail: "Available 24/7",
    sub: "Instant response guaranteed",
  },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen font-sans">
      {/* ── 1. HERO ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#EE1C25] to-[#c0141b] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
                Help &amp; Support
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              How Can We Help You?
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-white/80 text-lg max-w-xl mx-auto mb-10"
            >
              Find answers to common questions, browse support categories, or
              reach out to our team — we&apos;re here around the clock.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center bg-white rounded-2xl shadow-xl max-w-2xl mx-auto overflow-hidden"
            >
              <div className="pl-5 pr-3 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for help topics..."
                className="flex-1 py-4 text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
              />
              <button
                onClick={() => {
                  const el = document.getElementById("faq");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="m-2 px-6 py-3 bg-[#EE1C25] text-white font-semibold rounded-xl hover:bg-[#c0141b] transition-colors text-sm"
              >
                Search
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. SUPPORT CATEGORIES ───────────────────────────────────── */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">
              Browse by Category
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Select a category to find the help you need quickly.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {categories.map(({ id, icon: Icon, title, description }) => (
              <motion.div key={id} variants={scaleIn}>
                <Link
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("faq");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-5 group-hover:bg-[#EE1C25] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#EE1C25] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <span className="text-[#EE1C25] font-semibold text-sm">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. FAQ ACCORDION ────────────────────────────────────────── */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Can&apos;t find what you&apos;re looking for? Browse our most
              common questions below.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-gray-400 py-10">
                No results found for &ldquo;{searchQuery}&rdquo;. Try a
                different search term.
              </p>
            ) : (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  variants={fadeInUp}
                  className="border border-gray-200 rounded-xl mb-3 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex justify-between items-center p-5 cursor-pointer hover:bg-red-50 transition-colors duration-200 text-left"
                  >
                    <span className="font-semibold text-[#1A1A2E] pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-[#EE1C25] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="p-5 pt-0 text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>

      {/* ── 4. CONTACT SECTION ──────────────────────────────────────── */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#1A1A2E] mb-3">
              Still Need Help?
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Our support team is ready to assist you through multiple channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Methods */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-5 justify-center"
            >
              {contactMethods.map(({ id, icon: Icon, title, detail, sub }) => (
                <motion.div
                  key={id}
                  variants={fadeInUp}
                  className="flex items-center gap-5 bg-white rounded-2xl p-6 shadow-md"
                >
                  <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#EE1C25]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1A2E] text-base">{title}</p>
                    <p className="text-[#EE1C25] font-semibold text-sm">{detail}</p>
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
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. Our support team will get back
                    to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 bg-[#EE1C25] text-white font-semibold rounded-xl hover:bg-[#c0141b] transition-colors text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-6">
                    Send Us a Message
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="border border-gray-200 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#EE1C25] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="border border-gray-200 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#EE1C25] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) =>
                        setForm({ ...form, subject: e.target.value })
                      }
                      placeholder="How can we help?"
                      className="border border-gray-200 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#EE1C25] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      placeholder="Describe your issue in detail..."
                      className="border border-gray-200 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#EE1C25] text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-[#EE1C25] to-[#c0141b] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all duration-200 text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
