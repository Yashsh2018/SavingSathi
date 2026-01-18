'use client';

import * as React from 'react';
import { FaApple, FaAndroid, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleNavClick = (href: string, event: React.MouseEvent) => {
    if (href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 80; // Adjust for header height

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }

      // Close mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <footer className="bg-[#242424] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 xl:px-28">
      {/* Download Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 md:mb-16">
     {/* Android Download */}
       
        <Link
          href="https://play.google.com/store/apps/details?id=com.genhap.global"
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-600 to-stone-400 px-5 sm:px-7 py-4 text-white font-semibold shadow-[0_0_30px_rgba(255,0,81,0.6)] hover:brightness-110 transition w-full sm:w-auto min-w-[200px] sm:min-w-0"
        >
          <span className="text-sm sm:text-base">Download Now</span>
          <FaAndroid size={24} className="sm:w-[35px]" />
        </Link>

            {/* Apple Download */}
        <Link
          href="https://apps.apple.com/in/app/savingsathi/id6747831225"
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-700 to-black px-5 sm:px-7 py-4 text-white font-semibold shadow-[0_0_20px_rgba(0,231,255,0.5)] hover:brightness-110 transition w-full sm:w-auto min-w-[200px] sm:min-w-0"
        >
          <span className="text-sm sm:text-base">Download Now</span>
          <FaApple size={24} className="sm:w-[35px]" />
        </Link>
      </div>

      {/* Separator */}
      <div className="border-b border-gray-800 mb-12 md:mb-16" />

      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-sm">
        {/* Logo & Social */}
        <div className="space-y-4 md:space-y-6 text-center sm:text-left">
          {/* Logo */}
          <div className="flex justify-center sm:justify-start">
            <Image
              src={logo}
              alt="SavingSathi Logo"
              className="w-48 md:w-60 object-contain mb-0"
              loading="lazy"
            />
          </div>
          <p className="text-gray-400 text-base md:text-lg font-semibold px-4 sm:px-0">
            Connect share save Together
          </p>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start space-x-3 md:space-x-4 mt-4">
            <a href="https://www.facebook.com/profile.php?id=61584385346591" aria-label="Facebook" className="bg-[#222222] p-2 md:p-3 text-base md:text-lg rounded-full hover:bg-pink-600 transition">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/savingsathi/" aria-label="LinkedIn" className="bg-[#222222] p-2 md:p-3 text-base md:text-lg rounded-full hover:bg-blue-600 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/savingsathi/" aria-label="Instagram" className="bg-[#222222] p-2 md:p-3 text-base md:text-lg rounded-full hover:bg-rose-600 transition">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@saving_sathi" aria-label="YouTube" className="bg-[#222222] p-2 md:p-3 text-base md:text-lg rounded-full hover:bg-red-600 transition">
              <FaYoutube />
            </a>
            <a href="https://x.com/SavingSathi" aria-label="Twitter" className="bg-[#222222] p-2 md:p-3 text-base md:text-lg rounded-full hover:bg-red-600 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Company News */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-white mb-4 md:mb-6 text-xl">Company News</h4>
          <ul className="space-y-2 md:space-y-2 text-white text-sm md:text-base">
            
            <li>
              <a href="/blogs" className="hover:text-rose-600 transition block">Blogs</a>
            </li>
            <li   onClick={(e) => handleNavClick('#contact', e)}>
              <a href="#contact" className="hover:text-rose-600 transition block">Contact</a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-rose-600 transition block">Reviews</a>
            </li> */}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-xl text-white mb-4 md:mb-6">Useful Links</h4>
          <ul className="space-y-2 md:space-y-2 text-white text-sm md:text-base">
            <li>
              <a href="#home" className="hover:text-rose-600 transition block">Home</a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-rose-600 transition block">How it Works</a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-rose-600 transition block">Benefits</a>
            </li>
            <li>
              <a href="#save-earn" className="hover:text-rose-600 transition block">Save & Earn</a>
            </li>
            <li>
              <a href="#features" className="hover:text-rose-600 transition block">Features</a>
            </li>
            <li>
              <a href="#screenshots" className="hover:text-rose-600 transition block">Screenshots</a>
            </li>
            {/* <li>
              <a href="#team" className="hover:text-rose-600 transition block">Team</a>
            </li> */}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="text-center sm:text-left">
          <h4 className="font-bold text-xl text-white mb-4 md:mb-6">Contact Us</h4>
          <ul className="space-y-2 md:space-y-2 text-white text-sm md:text-base">
            <li className="relaxed text-gray-400">+91-7296890879</li>
            <li>
              <a href="mailto:info@savingsathi.com" className="hover:text-rose-600 transition break-words">
                info@savingsathi.com
              </a>
            </li>
            {/* <li>
              <a href="mailto:support@savingsathi.com" className="hover:text-rose-600 transition break-words">
                support@savingsathi.com
              </a>
            </li> */}
            <li className="relaxed text-gray-400">
              New Aatish Market, Sanganer,
            </li>
            <li className="relaxed text-gray-400">
              Mansarovar Jaipur 302020
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-12 md:mt-16 flex flex-col md:flex-row justify-between items-center text-white text-sm md:text-base gap-4 md:gap-0">
        <p className="text-center md:text-left">© 2026 | Alrights reserved by SavingSathi</p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <a href="/faq" className="hover:text-rose-600 transition px-2 py-1">FAQ</a>
          <span className="hidden md:inline">|</span>
          <a href="/privacy-policy" className="hover:text-rose-600 transition px-2 py-1">Privacy Policy</a>
          <span className="hidden md:inline">|</span>
          <a href="/terms-and-conditions" className="hover:text-rose-600 transition px-2 py-1">Term and Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;