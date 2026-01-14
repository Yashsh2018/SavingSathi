import Image from 'next/image';
import img from "@/assets/home/new-img-banner.png";
import { motion } from "framer-motion";

const VisionMissionSection: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white px-8 py-20 md:py-28">
      <motion.div 
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Our Vision */}
        <motion.div 
          className="md:w-1/3 text-center md:text-left"
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
          <motion.h2 
            className="text-4xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
              Vision
            </span>
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-gray-200 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Our vision is to create a one-stop solution where people can seamlessly connect with like-minded individuals or those sharing similar needs and interests, across any category. We aim to organize this unstructured segment, enabling users to find partners effortlessly through a tech-friendly platform. By building India’s first connecting cum social media platform combined with alike-minded people network, we aspire to redefine connections and collaboration in a uniquely Indian way with win win win situation.
          </motion.p>
        </motion.div>

        <motion.div 
          className="md:w-1/3 text-center md:text-left"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
            <Image
                src={img}
                alt="Vision and Mission"
                className="mx-auto"
            />
        </motion.div>

        {/* Our Mission */}
        <motion.div 
          className="md:w-1/3 text-center md:text-left"
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
          <motion.h2 
            className="text-4xl font-bold mb-6"
            variants={{
              hidden: { opacity: 0, y: -30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
              Mission
            </span>
          </motion.h2>
          <motion.p 
            className="text-sm md:text-base text-gray-200 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            Our mission is to connect like-minded individuals and communities, bridging gaps to foster collaboration, problem-solving, and mutual growth. We aim to provide a platform where users can share ideas, access savings, offers, and exclusive benefits, and validate information through meaningful discussions. By creating opportunities for businesses to advertise at reasonable costs, we eliminate intermediaries, drive transparency, and deliver value for all. Our goal is to empower connections that inspire innovation, savings, and success under one unified platform.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VisionMissionSection;
