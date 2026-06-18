export const APP_NAME = "JazzCash";
export const APP_TAGLINE = "Pakistan's #1 Mobile Wallet";
export const APP_DESCRIPTION =
  "Send money, pay bills, recharge your mobile, and unlock a world of digital payments — all in one place.";

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Offers", href: "#offers" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const primaryCTA = {
  label: "Get Started Free",
  href: "#download",
};

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "30M+", label: "Active Users" },
  { value: "PKR 2T+", label: "Transactions Yearly" },
  { value: "50K+", label: "Agent Locations" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

export const BRAND = {
  red: "#EE1C25",
  white: "#FFFFFF",
  dark: "#1A1A2E",
  light: "#F5F5F5",
  gold: "#FFD700",
};