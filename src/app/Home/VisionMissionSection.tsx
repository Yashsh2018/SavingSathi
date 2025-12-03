import Image from 'next/image';
import img from "@/assets/home/new-img-banner.png";

const VisionMissionSection: React.FC = () => {
  return (
    <section className="bg-[#111111] text-white px-8 py-20 md:py-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Our Vision */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
              Vision
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Our vision is to create a one-stop solution where people can seamlessly connect with like-minded individuals or those sharing similar needs and interests, across any category. We aim to organize this unstructured segment, enabling users to find partners effortlessly through a tech-friendly platform. By building India’s first connecting cum social media platform combined with alike-minded people network, we aspire to redefine connections and collaboration in a uniquely Indian way with win win win situation.
          </p>
        </div>

        <div className="md:w-1/3 text-center md:text-left">
            <Image
                src={img}
                alt="Vision and Mission"
                className="mx-auto"
            />
        </div>

        {/* Our Mission */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Our mission is to connect like-minded individuals and communities, bridging gaps to foster collaboration, problem-solving, and mutual growth. We aim to provide a platform where users can share ideas, access savings, offers, and exclusive benefits, and validate information through meaningful discussions. By creating opportunities for businesses to advertise at reasonable costs, we eliminate intermediaries, drive transparency, and deliver value for all. Our goal is to empower connections that inspire innovation, savings, and success under one unified platform.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
