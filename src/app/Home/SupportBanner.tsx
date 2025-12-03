import Image from 'next/image';
import ban from "@/assets/home/contact.png";

const SupportBanner: React.FC = () => {
  return (
    <section className="bg-[#1F2022] py-12 px-6">
      <div className="flex flex-col md:flex-row items-center rounded-xl bg-gradient-to-r from-rose-600 to-cyan-700 max-w-7xl mx-auto">
        {/* Text Side with Gradient Background */}
        <div className="flex-1 p-8 md:p-12 rounded-xl text-white max-w-7xl">
          <h3 className="font-semibold uppercase text-sm md:text-base mb-2 tracking-wide">
            NEED HELP? WE’RE HERE!
          </h3>

          <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
            Support That Cares SavingSathi
          </h2>

          <p className="text-gray-300 mb-6 max-w-lg text-sm md:text-base">
            Have questions? Need help? Our team is here to assist you anytime. Reach out through:
          </p>

          <ul className="flex gap-8 text-gray-300 font-semibold text-sm md:text-base">
            <li className="flex items-center gap-2 cursor-pointer hover:text-white transition">
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
            </li>

            <li className="flex items-center gap-2 cursor-pointer hover:text-white transition">
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
            </li>

            <li className="flex items-center gap-2 cursor-pointer hover:text-white transition">
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
            </li>
          </ul>
        </div>
        <div className="relative w-100 h-50 flex-shrink-0 flex-col">
            <Image
              src={ban} // Replace with the actual image path in public folder
              alt="banner"
              fill
              className="object-contain"
              sizes="100px"
              priority
            />
          </div>
      </div>
    </section>
  );
};

export default SupportBanner;
