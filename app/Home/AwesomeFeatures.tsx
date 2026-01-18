// components/AwesomeFeatures.tsx

import { FC } from "react";
import Image from "next/image";
import img9 from "../../assets/home/img-9.png";
import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg
        className="w-12 h-12 text-red-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20h9"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 3a2.121 2.121 0 013 3L7 18.5 3 20l1.5-4L16.5 3z"
        />
      </svg>
    ),
    text: "AI-driven matching",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 6v12" />
      </svg>
    ),
    text: "Personalised Recommendations",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-purple-600"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a4 4 0 110 5.292m0-5.292a4 4 0 110 10.292m0-10.292L19 16l-7 4-7-4 7-8z"
        />
      </svg>
    ),
    text: "Access to the world of connections",
  },
  {
    icon: (
      <svg
        className="w-12 h-12 text-cyan-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.354a8 8 0 100 15.292 8 8 0 000-15.292zM2 12h20"
        />
      </svg>
    ),
    text: "Live and updated Data, More privacy",
  },
];

const AwesomeFeatures: FC = () => {
  return (
    <section className="bg-[#1F2022] text-white pt-16 px-4">
      <motion.div 
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-white">AWESOME </span>
          <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">FEATures</span>
        </motion.h2>
        <motion.p 
          className="max-w-xl mx-auto text-white text-sm mb-8 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Discover the power of innovation with our cutting-edge app! Designed
          to deliver seamless performance, unmatched efficiency, and a
          user-friendly experience, our app is packed with features that make
          your workflow smarter and faster.
        </motion.p>
        <motion.div 
          className="flex justify-center items-center gap-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <motion.div 
              className="flex flex-col gap-20 m-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {features.slice(0, 2).map(({ icon, text }, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 bg-black rounded-lg p-6 shadow-md max-w-xs"
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {icon}
                  <p className="font-semibold text-xl text-start">{text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="m-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="relative w-[320px] h-[550px] rounded-3xl">
                <Image
                  src={img9} // Place your phone screenshot image in the public folder
                  alt="Phone Screenshot"
                  fill
                  className="object-contain absolute bottom-50"
                  priority
                />
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col gap-20 m-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {features.slice(2, 4).map(({ icon, text }, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 bg-black rounded-lg p-6 shadow-md max-w-xs"
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                  }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  {icon}
                  <p className="font-semibold text-xl text-start">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AwesomeFeatures;
