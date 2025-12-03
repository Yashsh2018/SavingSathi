import { useState, useEffect } from "react";
import bg2 from "@/assets/home/bg-2.jpg";
import img2 from "@/assets/home/how-works/‫img-2.jpg";
import img3 from "@/assets/home/how-works/img-3.jpg"; 
import img4 from "@/assets/home/how-works/img-13.jpg"; 
import img5 from "@/assets/home/how-works/img-9.jpg"; 
// import img6 from "@/assets/home/how-works/img-6.jpg"; 
// import img7 from "@/assets/home/how-works/img-7.jpg"; 

const screenshots = [
  {
    id: 1,
    alt: "User Profile Aman",
    src: img2.src,
  },
  {
    id: 2,
    alt: "Search and Post",
    src: img3.src,
  },
  {
    id: 3,
    alt: "User Profile Ankit",
    src: img4.src,
  },
  {
    id: 4,
    alt: "GenMap Splash Screen",
    src: img5.src,
  },
];

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side and window width
  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  // Don't render carousel on server-side
  if (!isClient) {
    return (
      <section 
        className="relative py-8 md:py-16 px-4 sm:px-6 bg-gray-900 bg-cover bg-center text-center text-white min-h-[400px] md:min-h-[600px]"
        style={{
          backgroundImage:`url(${bg2.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Loading state */}
        <div className="flex justify-center items-center h-64">
          <div className="text-white">Loading...</div>
        </div>
      </section>
    );
  }

  // Calculate translate values based on window width
  const getTranslateX = (wrappedPos: number) => {
    if (windowWidth < 640) return wrappedPos * 20; // mobile
    if (windowWidth < 768) return wrappedPos * 30; // sm
    return wrappedPos * 40; // md and above
  };

  return (
    <section 
      className="relative py-8 md:py-16 px-4 sm:px-6 bg-gray-900 bg-cover bg-center text-center text-white min-h-[400px] md:min-h-[600px]"
      style={{
        backgroundImage:`url(${bg2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Title */}
      <h2 className="mb-2 text-2xl sm:text-3xl font-bold tracking-wide select-none">
        <span className="text-3xl sm:text-4xl">APP </span>
        <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase text-3xl sm:text-4xl">Screenshot</span>
      </h2>

      {/* Small underline with dot */}
      <div className="flex justify-center items-center mb-4 sm:mb-6 space-x-2">
        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-rose-600 shadow-[0_0_10px_#f43f5e]"></div>
        <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-pink-500 to-white/40"></div>
      </div>

      {/* Subtitle */}
      <p className="max-w-xl mx-auto mb-8 sm:mb-12 font-light text-xs sm:text-sm whitespace-normal px-4">
        We ensure quality & support. People love us & we love them.
      </p>

      {/* Carousel container */}
      <div className="relative flex justify-center items-center gap-4 sm:gap-8 max-w-7xl mx-auto">
        {/* Left arrow */}
        <button
          aria-label="Previous"
          onClick={goPrev}
          className="absolute left-2 sm:left-4 md:left-10 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 transition z-30"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Screenshots */}
        <div className="flex overflow-hidden max-w-[90vw] sm:max-w-[80vw] justify-center items-center space-x-2 sm:space-x-4 md:space-x-6">
          {screenshots.map((shot, idx) => {
            // Calculate position relative to active for effect
            const pos = idx - active;
            // Wrap around indexes for infinite effect
            const wrappedPos =
              pos < -Math.floor(screenshots.length / 2)
                ? pos + screenshots.length
                : pos > Math.floor(screenshots.length / 2)
                ? pos - screenshots.length
                : pos;

            // Responsive styling per position
            const baseStyle =
              "rounded-2xl sm:rounded-3xl md:rounded-4xl shadow-xl sm:shadow-2xl shadow-black transition-all duration-500 ease-in-out cursor-pointer select-none border-4 border-neutral-500";

            // Responsive image sizes
            const imageSizes = "max-w-[120px] max-h-[260px] sm:max-w-[180px] sm:max-h-[400px] md:max-w-[220px] md:max-h-[500px] lg:max-w-[260px] lg:max-h-[570px]";

            if (wrappedPos === 0) {
              return (
                <img
                  key={shot.id}
                  src={shot.src}
                  alt={shot.alt}
                  className={`${baseStyle} ${imageSizes} z-30 scale-105 opacity-100 object-cover`}
                  onClick={() => setActive(idx)}
                  draggable={false}
                  style={{ aspectRatio: "9 / 19" }}
                />
              );
            } else if (Math.abs(wrappedPos) === 1) {
              return (
                <img
                  key={shot.id}
                  src={shot.src}
                  alt={shot.alt}
                  className={`${baseStyle} ${imageSizes} z-20 scale-90 opacity-60 hover:opacity-80 object-cover`}
                  onClick={() => setActive(idx)}
                  draggable={false}
                  style={{
                    aspectRatio: "9 / 19",
                    transform: `translateX(${getTranslateX(wrappedPos)}px)`,
                  }}
                />
              );
            } else {
              return (
                <img
                  key={shot.id}
                  src={shot.src}
                  alt={shot.alt}
                  className={`${baseStyle} ${imageSizes} z-10 scale-75 opacity-30 object-cover pointer-events-none hidden sm:block`}
                  draggable={false}
                  style={{ aspectRatio: "9 / 19" }}
                />
              );
            }
          })}
        </div>

        {/* Right arrow */}
        <button
          aria-label="Next"
          onClick={goNext}
          className="absolute right-2 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 transition z-30"
        >
          <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-3 sm:gap-5 mt-8 sm:mt-12">
        {screenshots.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to screenshot ${idx + 1}`}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
              idx === active
                ? "bg-cyan-700 shadow-[0_0_8px_rgba(14,165,233,0.8)]"
                : "bg-white/40 hover:bg-white/70"
            }`}
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </section>
  );
}