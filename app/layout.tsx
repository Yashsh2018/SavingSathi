import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "./Mainlayout/Header/page";
import { ThemeProvider } from 'next-themes';
import Footer from "./Mainlayout/Footer/page";
import fav from "./favicon.ico";
import fav16 from "../assets/favicon-16x16.png";
import fav32 from "../assets/favicon-32x32.png";
import apple from "../assets/apple-touch-icon.png";
import DynamicSchema from "./DynamicSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SavingSathi: Connect, Share, Save & Explore Deals Together",
  description: "Join SavingSathi to connect with people, share moments, discover offers, save together, get gym membership deals and find travel buddies. Grab your offer now.",
  alternates: {
    canonical: 'https://savingsathi.com',
  },
  icons: {
    icon: [
      { url: fav.src, type: "image/x-icon" },
      { url: fav16.src, sizes: "16x16", type: "image/png" },
      { url: fav32.src, sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: apple.src, sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={quicksand.variable}>
       <head>
        <DynamicSchema />
      </head>
      <body className={`${quicksand.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="lumina-theme"
        >
          <Navbar />
          <main className="overflow-hidden">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}