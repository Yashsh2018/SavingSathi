// components/AwesomeFeatures.tsx

import { FC } from "react";
import Image from "next/image";
import img9 from "@/assets/home/img-9.png";

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
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          <span className="text-white">AWESOME </span>
          <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">FEATures</span>
        </h2>
        <p className="max-w-xl mx-auto text-white text-sm mb-8 font-semibold">
          Discover the power of innovation with our cutting-edge app! Designed
          to deliver seamless performance, unmatched efficiency, and a
          user-friendly experience, our app is packed with features that make
          your workflow smarter and faster.
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col gap-20 m-auto">
              {features.slice(0, 2).map(({ icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-black rounded-lg p-6 shadow-md max-w-xs"
                >
                  {icon}
                  <p className="font-semibold text-xl text-start">{text}</p>
                </div>
              ))}
            </div>

            <div className="m-auto">
              <div className="relative w-[320px] h-[550px] rounded-3xl">
                <Image
                  src={img9} // Place your phone screenshot image in the public folder
                  alt="Phone Screenshot"
                  fill
                  className="object-contain absolute bottom-50"
                  priority
                />
              </div>
            </div>

            <div className="flex flex-col gap-20 m-auto">
              {features.slice(2, 4).map(({ icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-black rounded-lg p-6 shadow-md max-w-xs"
                >
                  {icon}
                  <p className="font-semibold text-xl text-start">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwesomeFeatures;
