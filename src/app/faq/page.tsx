import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "SavingSathi App FAQs – Saving, Offers & Support Guide",
  description: "Find all answers about using the SavingSathi app to understand saving together, pairing with a Sathi, unlocking offers, redeeming deals, and support options.",
  keywords: "SavingSathi, FAQ, savings, social platform, group deals, money saving, collaborative decisions",
  openGraph: {
    title: "SavingSathi App FAQs – Saving, Offers & Support Guide",
    description: "Find all answers about using the SavingSathi app to understand saving together, pairing with a Sathi, unlocking offers, redeeming deals, and support options.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavingSathi - Frequently Asked Questions",
    description: "Learn how SavingSathi helps you save money by connecting with like-minded people.",
  },
  alternates: {
    canonical: "https://savingsathi.com/faq", // Canonical URL
  },
};

export default function FaqPage() {
  return <FaqClient />;
}