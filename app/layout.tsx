import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JazzCash — Pakistan's #1 Mobile Wallet",
  description:
    "Send money, pay bills, recharge mobile, and do so much more with JazzCash — Pakistan's most trusted digital payments platform.",
  keywords: [
    "JazzCash",
    "mobile wallet",
    "digital payments",
    "send money",
    "bill payments",
    "Pakistan fintech",
  ],
  themeColor: "#EE1C25",
  openGraph: {
    title: "JazzCash — Pakistan's #1 Mobile Wallet",
    description:
      "Send money, pay bills, recharge mobile, and do so much more with JazzCash.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}