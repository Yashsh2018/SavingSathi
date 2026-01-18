// components/SaveEarnSection.tsx
import React from "react";
import img1 from "../../assets/home/save/f-icon1.png";
import img2 from "../../assets/home/save/f-icon2.png";
import img3 from "../../assets/home/save/f-icon3.png";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Bulk Buying",
    desc: "Join deals and split costs.",
    imgSrc: img1,
    imgAlt: "Bulk Buying Illustration",
  },
  {
    id: 2,
    title: "Referral Rewards",
    desc: "Invite friends and get benefits.",
    imgSrc: img2,
    imgAlt: "Referral Rewards Illustration",
  },
  {
    id: 3,
    title: "More Active More Income",
    desc: "Earn Loyalty Rewards on more post uploads.",
    imgSrc: img3,
    imgAlt: "More Active Illustration",
  },
  {
    id: 4,
    title: "Expert knowledge sharing",
    desc: "Help others and earn Income.",
    imgSrc: img1,
    imgAlt: "Expert Knowledge Sharing Illustration",
  },
  {
    id: 5,
    title: "Exclusive Partnership",
    desc: "Save more on SavingSathi’s exclusive deals and offers.",
    imgSrc: img3,
    imgAlt: "Exclusive Partnership Illustration",
  },
];

const SaveEarnSection = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="font-semibold text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          SAVE MORE, EARN MORE
        </motion.p>
        <motion.h2 
          className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          SMART WAYS TO SAVE & EARN <br className="hidden sm:block" />
          WITH{" "}
          <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">
            SavingSathi
          </span>
        </motion.h2>
        <motion.p 
          className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why pay more when you can save <span className="font-semibold text-white">together</span>!
        </motion.p>

        {/* First Row - Current Features */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {data.slice().map(({ id, title, desc, imgSrc, imgAlt }) => (
            <motion.div 
              key={id} 
              className="flex flex-col items-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mb-4 sm:mb-6 flex items-center justify-center">
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-center">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed">
                {desc}
              </p>
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-rose-600 to-cyan-700 bg-white bg-origin-border">
                <div className="bg-black rounded-full w-full h-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  {id}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Coming Soon Section */}
       

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
            {data.slice(3).map(({ id, title, desc, imgSrc, imgAlt }) => (
              <div key={id} className="flex flex-col items-center opacity-80">
                <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mb-4 sm:mb-6 flex items-center justify-center">
                  <Image
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-center">
                  {title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 text-center leading-relaxed">
                  {desc}
                </p>
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 flex items-center justify-center rounded-full border-2 border-transparent bg-gradient-to-r from-rose-600 to-cyan-700 bg-white bg-origin-border">
                  <div className="bg-black rounded-full w-full h-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                    {id}
                  </div>
                </div>
              </div>
            ))}
          </div>
         */}
      </motion.div>
    </section>
  );
};

export default SaveEarnSection;
