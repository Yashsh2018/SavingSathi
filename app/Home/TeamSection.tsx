import Image from 'next/image';
import an from "../../assets/home/an.jpg";
import am from "../../assets/home/am.jpg";

const TeamSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-6 mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-4">
        TEAM{' '}
        <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
          MEMBER
        </span>
      </h2>

      {/* Underline */}
      <div className="w-20 mx-auto border-b-2 border-pink-600 mb-8"></div>

      {/* Description */}
      <p className="text-center text-sm md:text-base text-gray-300 max-w-3xl mx-auto mb-16">
        We ensure quality &amp; support. People love us, and we love them. Our team is dedicated to delivering excellence, innovation, and unwavering support.
      </p>

      {/* Team Members Grid */}
      <div className="flex flex-col md:flex-row gap-16 md:gap-28 justify-center">

        {/* Founder & CEO */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-xl">
          <div className="relative w-40 h-58 rounded-tl-lg rounded-tr-4xl rounded-bl-4xl rounded-br-lg overflow-hidden flex-shrink-0">
            <Image
              src={an} // Replace with the actual image path in public folder
              alt="Ankit Jain"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Founder &amp; CEO</h3>
            <h4 className="font-semibold text-lg md:text-xl mb-3">Ankit Jain</h4>
            <p className="text-sm md:text-sm max-w-lg">
              Chartered Accountant with over 13 years of industry experience, including 8 years of core expertise in startups. Skilled in decision-making, process improvement, leadership, business analysis, and business development. With hands-on experience in two startups, I have navigated the complete journey from inception to scaling, tackling challenges, identifying solutions, and driving growth from 1 to 100.
            </p>
          </div>
        </div>

        {/* Co-Founder & CTO */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-xl">
          <div className="relative w-38 h-58 rounded-tl-lg rounded-tr-4xl rounded-bl-4xl rounded-br-lg overflow-hidden flex-shrink-0">
            <Image
              src={am} // Replace with the actual image path in public folder
              alt="Aman Agarwal"
              fill
              className="object-cover"
              sizes="160px"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Co-Founder &amp; CTO</h3>
            <h4 className="font-semibold text-lg md:text-xl mb-3">Aman Agarwal</h4>
            <p className="text-sm md:text-sm max-w-lg">
              Full-Stack Mobile Developer with 5+ years of experience in app development and product building. Specialized in Flutter and Firebase, with hands-on expertise in launching and scaling tech products across diverse domains like fintech, social media, and crypto. Led multiple startup projects from idea to execution, focusing on clean architecture, performance, and user-centric design. Passionate about using tech to solve real-world problems and drive community-led growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
