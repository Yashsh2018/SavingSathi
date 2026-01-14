import Image from 'next/image';
import ban from "@/assets/home/contact.png";
import { motion } from "framer-motion";

const SupportBanner: React.FC = () => {
  return (
    <section className="bg-[#1F2022] py-12 px-6">
      <motion.div 
        className="flex flex-col md:flex-row items-center rounded-xl bg-gradient-to-r from-rose-600 to-cyan-700 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Text Side with Gradient Background */}
        <motion.div 
          className="flex-1 p-8 md:p-12 rounded-xl text-white max-w-7xl"
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
          <motion.h3 
            className="font-semibold uppercase text-sm md:text-base mb-2 tracking-wide"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            NEED HELP? WE’RE HERE!
          </motion.h3>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Support That Cares SavingSathi
          </motion.h2>

          <motion.p 
            className="text-gray-300 mb-6 max-w-lg text-sm md:text-base"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Have questions? Need help? Our team is here to assist you anytime. Reach out through:
          </motion.p>

          <motion.ul 
            className="flex gap-8 text-gray-300 font-semibold text-sm md:text-base"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.li 
              className="flex items-center gap-2 cursor-pointer hover:text-white transition"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a1 1 0 001-1v-8a1 1 0 00-1-1H5a1 1 0 00-1 1v8a1 1 0 001 1z"
                />
              </svg>
              Live Chat
            </motion.li>

            <motion.li 
              className="flex items-center gap-2 cursor-pointer hover:text-white transition"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10a7 7 0 007 7v3a1 1 0 001 1h3a1 1 0 001-1v-3a7 7 0 007-7v-3a3 3 0 00-3-3h-1a3 3 0 00-3 3v3a7 7 0 00-7 7z"
                />
              </svg>
              Call Support
            </motion.li>

            <motion.li 
              className="flex items-center gap-2 cursor-pointer hover:text-white transition"
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-4m0-4h.01" />
              </svg>
              Help Center
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div 
          className="relative w-100 h-50 flex-shrink-0 flex-col"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
            <Image
              src={ban} // Replace with the actual image path in public folder
              alt="banner"
              fill
              className="object-contain"
              sizes="100px"
              priority
            />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SupportBanner;
