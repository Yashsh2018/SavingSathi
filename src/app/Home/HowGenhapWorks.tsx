import Image from "next/image";
import React from "react";
import mob1 from "@/assets/home/how-works/img-13.jpg";
import mob2 from "@/assets/home/how-works/img-8.jpg";
import { FaBell, FaStar, FaRegHeart, FaRegCommentDots } from "react-icons/fa";

const HowGenhapWorks: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-36">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 lg:gap-16 xl:gap-24 max-w-7xl mx-auto">
        
        {/* Left Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center gap-4 sm:gap-6 relative">
          {/* Mobile phone 1 */}
          <div className="relative w-40 sm:w-48 md:w-56 lg:w-60 h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] bg-gray-900 rounded-3xl lg:rounded-4xl border-6 lg:border-8 border-neutral-500 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <Image 
              src={mob1}
              alt="SavingSathi app feature 1" 
              className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
              priority
            />
          </div>

          {/* Mobile phone 2 */}
          <div className="relative w-40 sm:w-48 md:w-56 lg:w-60 h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] bg-gray-900 rounded-3xl lg:rounded-4xl border-6 lg:border-8 border-neutral-500 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 mt-8 lg:mt-0">
            <Image 
              src={mob2}
              alt="SavingSathi app feature 2" 
              className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
              priority
            />
          </div>
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 max-w-xl space-y-6 sm:space-y-8">
          {/* Title with gradient text */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold flex flex-wrap items-center gap-2 leading-tight">
            <span>HOW SavingSathi</span>
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent font-extrabold">
              WORKS?
            </span>
          </h2>

          {/* Underline with dot */}
          <div className="flex items-center space-x-2">
            <div className="w-4 sm:w-6 h-1 bg-pink-600 rounded" />
            <div className="w-2 h-2 bg-pink-600 rounded-full" />
            <div className="border-b border-gray-600 flex-grow" />
          </div>

          {/* Subtitle */}
          <h3 className="text-xl sm:text-2xl font-semibold">Simple Steps to Get Started</h3>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Using SavingSathi is easy! Follow these steps to explore all features:
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side Steps */}
            <div className="space-y-6 sm:space-y-8">
              {/* Sign Up */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-pink-600 to-purple-500 text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaBell />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Sign Up</h4>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    Create your profile in seconds by sharing your limited details.
                  </p>
                </div>
              </div>

              {/* Engage */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-pink-500 to-red-400 text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaRegCommentDots />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Engage</h4>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    Chat with likeminded people, share your requirement and connect
                    to grab the best offers.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side Steps */}
            <div className="space-y-6 sm:space-y-8">
              {/* Explore */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaStar />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Explore</h4>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    Find deals, offers, knowledge, experiences, and solutions.
                  </p>
                </div>
              </div>

              {/* Save & Earn */}
              <div className="flex gap-3 sm:gap-4 items-start">
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaRegHeart />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Save & Earn</h4>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    Benefit from shared discounts, earn from knowledge transfer and
                    cost savings on bulk buying.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          {/* <button
            type="button"
            className="mt-4 sm:mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-cyan-700 font-semibold hover:brightness-110 transition transform hover:scale-105 duration-300 text-sm sm:text-base"
          >
            Learn More
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default HowGenhapWorks;