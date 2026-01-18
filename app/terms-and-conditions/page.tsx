import type { Metadata } from "next";
import Terms from "./termsAndConditions";

export const metadata: Metadata = {
  title: "SavingSathi Terms & Conditions | User Agreement & Policies",
  description: "Understand SavingSathi’s user terms, how pairing with a Sathi works, offer redemption policies, account rules, and other important legal guidelines.",
  keywords: "SavingSathi, privacy-policy, savings, social platform, group deals, money saving, collaborative decisions",
  openGraph: {
    title: "SavingSathi Terms & Conditions | User Agreement & Policies",
    description: "Understand SavingSathi’s user terms, how pairing with a Sathi works, offer redemption policies, account rules, and other important legal guidelines.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SavingSathi Terms & Conditions | User Agreement & Policies",
    description: "Understand SavingSathi’s user terms, how pairing with a Sathi works, offer redemption policies, account rules, and other important legal guidelines.",
  },
  alternates: {
    canonical: "https://savingsathi.com/terms-and-conditions", // Canonical URL
  },
};

export default function PolicyPage() {
  return <Terms />;

}