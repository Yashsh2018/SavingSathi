import type { Metadata } from "next";
import PrivacyPolicy from "./Privacy-Policy";

export const metadata: Metadata = {
  title: "Our Privacy Policy | SavingSathi App",
  description: "Read the SavingSathi privacy policy to understand how we handle your data, ensure security, manage permissions, and protect your personal information.",
  keywords: "SavingSathi, privacy-policy, savings, social platform, group deals, money saving, collaborative decisions",
  openGraph: {
    title: "Our Privacy Policy | SavingSathi App",
    description: "Read the SavingSathi privacy policy to understand how we handle your data, ensure security, manage permissions, and protect your personal information.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Privacy Policy | SavingSathi App",
    description: "Read the SavingSathi privacy policy to understand how we handle your data, ensure security, manage permissions, and protect your personal information.",
  },
  alternates: {
    canonical: "https://savingsathi.com/privacy-policy", // Canonical URL
  },
};

export default function PolicyPage() {
  return <PrivacyPolicy />;
}