import React from "react";
// import {
//   ShoppingBagIcon,
//   PhoneIcon,
//   LockClosedIcon,
//   TagIcon,
// } from "@heroicons/react/solid";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { BsTagFill } from "react-icons/bs";
import Image from "next/image";
import help from "../../assets/home/help.png";
import bg2 from "../../assets/home/bg-2.jpg";

const features = [
  {
    icon: <RiShoppingBagFill />,
    title: "Shopping & Deals",
    subtitle: "Share and save together.",
  },
  {
    icon: <FaPhone />,
    title: "Support & Advice",
    subtitle: "Get real solutions from real people.",
  },
  {
    icon: <FaLock />,
    title: "Private Discussions",
    subtitle: "Talk securely with close connections.",
  },
  {
    icon: <BsTagFill/>,
    title: "Brand Promotion",
    subtitle: "Market yourself in least prices with Customized options.",
  },
];

const GradientIconBg = () => (
  <div className="bg-gradient-to-tr from-pink-600 to-cyan-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
    <div className="text-white w-7 h-7">
      {/* Icon passed inside component */}
    </div>
  </div>
);

const GenhapHelps: React.FC = () => {
  return (
    <section
    className="relative bg-black bg-opacity-90 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-20 overflow-hidden"
    style={{
      backgroundImage: `url(${bg2.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-black/50 z-0"></div>
    
    <div className="max-w-6xl mx-auto text-center mb-12 lg:mb-16 relative z-10">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold uppercase tracking-wide sm:tracking-widest mb-3 sm:mb-4">
        WHERE SavingSathi HELPS{" "}
        <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
          YOU?
        </span>
      </h2>
      <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold max-w-4xl mx-auto leading-snug sm:leading-normal mb-4">
        More than Just a App, It's a world of <br className="hidden sm:block" />
        connections and opportunities
      </h2>
      <p className="text-xs sm:text-sm lg:text-base max-w-2xl lg:max-w-3xl mx-auto font-bold leading-relaxed text-gray-200">
        SavingSathi is your go-to platform for everyday needs. Whether you're
        exploring fashion, travel, fitness, education, health, electronics, or
        more, we seamlessly connect you with the right partners at the right
        time to match your needs.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-400 max-w-7xl mx-auto relative z-10">
      {features.map(({ title, subtitle, icon }, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center justify-center border-x border-gray-400 py-6 sm:py-8 px-4 sm:px-6"
        >
          <div className="mb-3 sm:mb-4 bg-gradient-to-tr from-rose-600 to-cyan-700 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center shadow-lg text-2xl sm:text-3xl transition-transform duration-500 hover:rotate-360">
            {icon}
          </div>
          <h3 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl text-center mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed">
            {subtitle}
          </p>
        </div>
      ))}
    </div>

    <div className="absolute top-full sm:top-150 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 w-48 sm:w-64 lg:w-80 xl:w-96">
      {/* <Image
        src={help}
        alt="SavingSathi help illustration"
        className="rotate-[10deg] object-cover w-full"
        priority
      /> */}
    </div>
  </section>
  );
};

export default GenhapHelps;
