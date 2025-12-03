// components/Principles.tsx
import { FC } from "react";

const principles = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4m0 0v4m-2-4h4m2 0h4a2 2 0 002-2v-2a2 2 0 00-2-2h-4m-4 4H4a2 2 0 00-2 2v2a2 2 0 002 2h4"
        />
      </svg>
    ),
    title: "Benefit All",
    gradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 9l3 3m0 0l-3 3m3-3H8m6 3v1a4 4 0 01-8 0v-1a4 4 0 018 0z"
        />
      </svg>
    ),
    title: "People First",
    gradient: "bg-gradient-to-r from-purple-700 via-indigo-500 to-purple-700",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Transparent and Honest",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-500",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.121 17.804A10.97 10.97 0 0112 15c2.47 0 4.75.82 6.515 2.196M15 12a3 3 0 11-6 0 3 3 0 016 0zM12 12v.01"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 20h-3a3 3 0 01-6 0H6a2 2 0 00-2 2v.5h12V22a2 2 0 00-2-2z"
        />
      </svg>
    ),
    title: "Help and Support",
    gradient: "bg-gradient-to-r from-yellow-400 via-pink-500 to-pink-600",
  },
];

const Principles: FC = () => {
  return (
    <section className="bg-black py-16 px-6 text-center border-t border-[#E5E2E2]">
      {/* Heading */}
      <h2 className="text-white text-4xl font-bold mb-6">
        <span>OUR </span>
        <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">PRINciples</span>
      </h2>

      {/* Underline with dot */}
      <div className="flex justify-center items-center mb-12">
        <div className="w-3 h-3 rounded-full bg-pink-600 mr-2"></div>
        <div className="w-32 h-[1px] bg-gradient-to-r from-pink-600 to-white/40"></div>
      </div>

      {/* Items Grid */}
      <div className="max-w-6xl mx-auto flex justify-between gap-8 flex-wrap">
        {principles.map(({ icon, title, gradient }, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 text-white max-w-xs mx-auto"
          >
            <div
              className={`${gradient} p-6 rounded-full flex items-center justify-center`}
            >
              {icon}
            </div>
            <p className="font-semibold text-lg">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Principles;
