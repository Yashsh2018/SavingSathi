import type { Metadata } from "next";
import BlogPage from "./Blog";

export const metadata: Metadata = {
  title: "Smart Saving Tips & Community Saving Blogs | SavingSathi",
  description: "Read SavingSathi blogs covering smart group saving ideas, and community savings across fitness, travel, education, shopping, and everyday lifestyle needs.",
  keywords: "SavingSathi, privacy-policy, savings, social platform, group deals, money saving, collaborative decisions",
  openGraph: {
    title: "Smart Saving Tips & Community Saving Blogs | SavingSathi",
    description: "Read SavingSathi blogs covering smart group saving ideas, and community savings across fitness, travel, education, shopping, and everyday lifestyle needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Saving Tips & Community Saving Blogs | SavingSathi",
    description: "Read the SavingSathi privacy policy to understand how we handle your data, ensure security, manage permissions, and protect your personal information.",
  },
  alternates: {
    canonical: "https://savingsathi.com/blogs", // Canonical URL
  },
};

export default function Blog() {
  return <BlogPage />;
}