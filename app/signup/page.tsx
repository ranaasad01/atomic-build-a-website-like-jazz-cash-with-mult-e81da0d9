"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Sparkles, Phone, Lock, User, Mail, ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

const benefits = [
  "Free account, no monthly fees",
  "Instant money transfers",
  "Pay bills in seconds",
  "Exclusive cashback offers",
];

function getPasswordStrength(password: string): {
  label: string;
  color: string;
  width: string;
} {
  if (password.length === 0) return { label: "", color: "bg-gray-200", width: "w-0" };
  if (password.length < 6) return { label: "Weak", color: "bg-red-500", width: "w-1/3" };
  if (password.length < 10) return { label: "Medium", color: "bg-yellow-400", width: "w-2/3" };
  return { label: "Strong", color: "bg-green-500", width: "w-full" };
}

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-stretch">
      {/* Left Brand Panel — hidden on mobile */}
      <div className="hidden lg:flex lg:w-5/12 xl:w-2/5 bg-gradient-to-br from-[#EE1C25] to-[#c0141b] flex-col justify-center px-12 py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-8 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {/* Logo */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">
              Jazz<span className="text-yellow-300">Cash</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4"
          >
            Join 30M+
            <br />
            <span className="text-yellow-300">Users</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="text-white/80 text-base leading-relaxed mb-10 max-w-sm"
          >
            Create your free JazzCash account and start sending money, paying
            bills, and earning rewards today.
          </motion.p>

          {/* Benefits */}
          <motion.ul variants={staggerContainer} className="space-y-4">
            {benefits.map((benefit) => (
              <motion.li
                key={benefit}
                variants={fadeInUp}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white/90 text-sm font-medium">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Trust badge */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4"
          >
            <ShieldCheck className="w-8 h-8 text-yellow-300 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold text-sm">Bank-Grade Security</p>
              <p className="text-white/70 text-xs">256-bit encryption & biometric auth</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Form Panel */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 justify-center mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#EE1C25] to-[#c0141b] flex items-center justify-center shadow-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-[#1A1A2E] tracking-tight">
              Jazz<span className="text-[#EE1C25]">Cash</span>
            </span>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/80 p-8 sm:p-10">
            {submitted ? (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                className="text-center py-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-[#1A1A2E] mb-2">Account Created!</h2>
                <p className="text-gray-500 text-sm mb-8">
                  Welcome to JazzCash! Your account has been created successfully.
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#EE1C25] text-white font-semibold rounded-xl hover:bg-[#c0141b] transition-colors duration-200"
                >
                  Go to Login <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <>
                {/* Form Header */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A2E] mb-2">
                    Create Your Account
                  </h2>
                  <p className="text-gray-500 text-sm">
                    It only takes 2 minutes to get started
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400 w-[18px] h-[18px]" />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Muhammad Ali"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="03XX-XXXXXXX"
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Email (optional) */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a strong password"
                        required
                        className="w-full pl-10 pr-11 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25] transition-all duration-200 bg-gray-50 focus:bg-white"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="w-[18px] h-[18px]" />
                        ) : (
                          <Eye className="w-[18px] h-[18px]" />
                        )}
                      </button>
                    </div>
                    {/* Password strength indicator */}
                    {password.length > 0 && (
                      <div className="mt-2">
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-300 ${strength.color} ${strength.width}`}
                          />
                        </div>
                        <p
                          className={`text-xs mt-1 font-medium ${
                            strength.label === "Weak"
                              ? "text-red-500"
                              : strength.label === "Medium"
                              ? "text-yellow-500"
                              : "text-green-500"
                          }`}
                        >
                          {strength.label} password
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-400" />
                      <input
                        type={showConfirm ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Repeat your password"
                        required
                        className={`w-full pl-10 pr-11 py-3 border rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 bg-gray-50 focus:bg-white ${
                          confirmPassword.length > 0 && confirmPassword !== password
                            ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                            : "border-gray-200 focus:ring-[#EE1C25]/30 focus:border-[#EE1C25]"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirm ? (
                          <EyeOff className="w-[18px] h-[18px]" />
                        ) : (
                          <Eye className="w-[18px] h-[18px]" />
                        )}
                      </button>
                    </div>
                    {confirmPassword.length > 0 && confirmPassword !== password && (
                      <p className="text-xs text-red-500 mt-1">Passwords do not match</p>
                    )}
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 w-4 h-4 accent-[#EE1C25] cursor-pointer flex-shrink-0"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-gray-600 leading-relaxed cursor-pointer"
                    >
                      I agree to the{" "}
                      <Link
                        href="#"
                        className="text-[#EE1C25] font-semibold hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="text-[#EE1C25] font-semibold hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading || !agreed}
                    whileHover={{ scale: agreed && !isLoading ? 1.02 : 1 }}
                    whileTap={{ scale: agreed && !isLoading ? 0.98 : 1 }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#EE1C25] hover:bg-[#c0141b] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base rounded-xl shadow-md hover:shadow-red-300 hover:shadow-lg transition-all duration-200"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="text-[#EE1C25] font-semibold hover:underline"
                  >
                    Log In
                  </Link>
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
