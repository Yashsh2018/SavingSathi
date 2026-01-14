import Image from "next/image";
import React from "react";
import mob1 from "@/assets/home/how-works/img-13.jpg";
import mob2 from "@/assets/home/how-works/img-8.jpg";
import { FaBell, FaStar, FaRegHeart, FaRegCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

const HowGenhapWorks: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 xl:px-24 2xl:px-36 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 lg:gap-16 xl:gap-24 max-w-7xl mx-auto">
        
        {/* Left Image Section */}
        <motion.div 
          className="lg:w-1/2 flex justify-center items-center gap-4 sm:gap-6 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Mobile phone 1 */}
          <motion.div 
            className="relative w-40 sm:w-48 md:w-56 lg:w-60 h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] bg-gray-900 rounded-3xl lg:rounded-4xl border-6 lg:border-8 border-neutral-500 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <Image 
              src={mob1}
              alt="SavingSathi app feature 1" 
              className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
              priority
            />
          </motion.div>

          {/* Mobile phone 2 */}
          <motion.div 
            className="relative w-40 sm:w-48 md:w-56 lg:w-60 h-[320px] sm:h-[380px] md:h-[460px] lg:h-[520px] bg-gray-900 rounded-3xl lg:rounded-4xl border-6 lg:border-8 border-neutral-500 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 overflow-hidden mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <Image 
              src={mob2}
              alt="SavingSathi app feature 2" 
              className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Right Content Section */}
        <motion.div 
          className="lg:w-1/2 max-w-xl space-y-6 sm:space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Title with gradient text */}
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold flex flex-wrap items-center gap-2 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span>HOW SavingSathi</span>
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent font-extrabold">
              WORKS?
            </span>
          </motion.h2>

          {/* Underline with dot */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-4 sm:w-6 h-1 bg-pink-600 rounded" />
            <div className="w-2 h-2 bg-pink-600 rounded-full" />
            <div className="border-b border-gray-600 flex-grow" />
          </motion.div>

          {/* Subtitle */}
          <motion.h3 
            className="text-xl sm:text-2xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Simple Steps to Get Started
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Using SavingSathi is easy! Follow these steps to explore all features:
          </motion.p>

          {/* Steps */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Left Side Steps */}
            <div className="space-y-6 sm:space-y-8">
              {/* Sign Up */}
              <motion.div 
                className="flex gap-3 sm:gap-4 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-pink-600 to-purple-500 text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaBell />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Sign Up</h4>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    Create your profile in seconds by sharing your limited details.
                  </p>
                </div>
              </motion.div>

              {/* Engage */}
              <motion.div 
                className="flex gap-3 sm:gap-4 items-start"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>

            {/* Right Side Steps */}
            <div className="space-y-6 sm:space-y-8">
              {/* Explore */}
              <motion.div 
                className="flex gap-3 sm:gap-4 items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                  <FaStar />
                </div>
                <div>
                  <h4 className="font-bold text-base sm:text-lg">Explore</h4>
                  <p className="text-gray-300 text-sm sm:text-base max-w-xs leading-relaxed">
                    Find deals, offers, knowledge, experiences, and solutions.
                  </p>
                </div>
              </motion.div>

              {/* Save & Earn */}
              <motion.div 
                className="flex gap-3 sm:gap-4 items-start"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Learn More Button */}
          {/* <button
            type="button"
            className="mt-4 sm:mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-rose-600 to-cyan-700 font-semibold hover:brightness-110 transition transform hover:scale-105 duration-300 text-sm sm:text-base"
          >
            Learn More
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default HowGenhapWorks;