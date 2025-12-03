import Image from "next/image";
// import React from "react";
import mob1 from "@/assets/home/how-works/‫img-2.jpg";
import mob2 from "@/assets/home/how-works/img-12.jpg";
import bg1 from "@/assets/home/bg-1.jpg";
import Link from "next/link";

const Main: React.FC = () => {
  return (
    <section 
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-20 py-8 sm:py-12 text-white z-0"
      style={{
        backgroundImage: `url(${bg1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
       
      {/* Left Side Text Content */}
      <div className="lg:w-1/2 max-w-xl text-center lg:text-left mb-8 lg:mb-0 z-10 px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 font-rounded uppercase leading-tight pt-12 md:pt-0">
          THANK YOU FOR BEING PART
          OF{" "}
          <span className="inline-block">
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
              SavingSathi!
            </span>
          </span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-200 mb-6 lg:mb-8 leading-relaxed sm:leading-loose">
          You downloaded SavingSathi, and we appreciate you! SavingSathi is here to{" "}
          <strong className="font-semibold">
            connect, share, and save together. Whether it's finding the best offers 
            and deals, sharing thoughts and experiences, Knowledge sharing and earning 
            or supporting each other, this app is designed to make life simpler and smarter.
          </strong>
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
          {/* <button className="bg-gradient-to-r from-rose-600 to-cyan-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Learn More
          </button> */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.genhap.global"
            className="border border-white text-white font-semibold py-3 px-6 sm:px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 text-center text-sm sm:text-base"
          >
            Download Now
          </Link>
        </div>
      </div>

      {/* Right Side Mobile Mockup */}
      <div className="lg:w-1/2 flex justify-center items-center gap-4 lg:gap-6 relative z-10 mt-4 lg:mt-0">
        {/* Mobile phone 1 */}
        <div className="relative w-44 sm:w-52 lg:w-60 h-[380px] sm:h-[460px] lg:h-[520px] bg-gray-900 rounded-3xl lg:rounded-4xl border-6 lg:border-8 border-neutral-500 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
          <Image 
            src={mob1}
            alt="SavingSathi app screenshot 1" 
            className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
            priority
          />
        </div>

        {/* Mobile phone 2 */}
        <div className="relative w-44 sm:w-52 lg:w-60 h-[380px] sm:h-[460px] lg:h-[520px] bg-gray-900 rounded-3xl lg:rounded-4xl border-6 lg:border-8 border-neutral-500 shadow-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 mt-8 lg:mt-0">
          <Image 
            src={mob2}
            alt="SavingSathi app screenshot 2" 
            className="h-full w-full object-cover rounded-2xl lg:rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Main;