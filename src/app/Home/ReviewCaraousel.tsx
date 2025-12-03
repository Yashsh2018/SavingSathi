// components/CustomerCarousel.tsx
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  text: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I am used of it. I get a lot of people like me and find this a very helpful platform.",
    name: "Aditya Verma",
  },
  {
    id: 2,
    text: "Game Changer. Very Helpful and cost effective. Reliable and live data. Recommendable.",
    name: "Nilisha Khuteta",
  },
  // Add more testimonials here if needed
  {
    id: 3,
    text: "Excellent service and support. Would definitely recommend to others.",
    name: "John Doe",
  },
  {
    id: 4,
    text: "Outstanding platform with great features. Very satisfied!",
    name: "Jane Smith",
  },
];

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [testimonialsPerView, setTestimonialsPerView] = useState(1);
  const [isClient, setIsClient] = useState(false);

  // Calculate how many testimonials to show based on screen size
  useEffect(() => {
    setIsClient(true);
    
    const getTestimonialsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) return 1; // mobile
      if (width < 1024) return 1; // tablet
      return 2; // desktop
    };

    setTestimonialsPerView(getTestimonialsPerView());

    const handleResize = () => {
      setTestimonialsPerView(getTestimonialsPerView());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move to previous item
  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - testimonialsPerView : current - 1);
  };

  // Move to next item
  const nextTestimonial = () => {
    const maxCurrent = testimonials.length - testimonialsPerView;
    setCurrent(current >= maxCurrent ? 0 : current + 1);
  };

  // Auto-advance carousel (optional)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextTestimonial();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [current]);

  // Don't render carousel content until client-side
  if (!isClient) {
    return (
      <section className="bg-black text-white py-8 md:py-16 px-9">
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4">
          OUR{" "}
          <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">
            Happy CUSTOMers
          </span>
        </h2>
        
        {/* Underline */}
        <div className="flex justify-center items-center mb-8 md:mb-12">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-rose-600 mr-2"></div>
          <div className="w-16 md:w-24 h-[1px] bg-gray-400"></div>
        </div>
        
        {/* Loading state */}
        <div className="flex justify-center items-center h-32">
          <div className="text-white">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black text-white py-8 md:py-16 px-9">
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-4">
        OUR{" "}
        <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">
          Happy CUSTOMers
        </span>
      </h2>
      
      {/* Underline */}
      <div className="flex justify-center items-center mb-8 md:mb-12">
        <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-rose-600 mr-2"></div>
        <div className="w-16 md:w-24 h-[1px] bg-gray-400"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons - Hidden on mobile, visible on tablet and up */}
        <button
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-6 text-2xl md:text-3xl font-bold text-rose-600 hover:text-cyan-700 transition-colors z-10 bg-black/50 rounded-full w-10 h-10 md:w-12 md:h-12 items-center justify-center"
        >
          &#10094;
        </button>

        <button
          onClick={nextTestimonial}
          aria-label="Next testimonial"
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-6 text-2xl md:text-3xl font-bold text-rose-600 hover:text-cyan-700 transition-colors z-10 bg-black/50 rounded-full w-10 h-10 md:w-12 md:h-12 items-center justify-center"
        >
          &#10095;
        </button>

        {/* Carousel Content */}
        <div className="flex justify-center items-center space-x-4 md:space-x-6 overflow-hidden">
          {/* Mobile: Single card */}
          <div className="sm:hidden w-full max-w-sm">
            <div
              key={testimonials[current].id}
              className="bg-[#1F2022] rounded-2xl p-6 flex flex-col space-y-4 mx-auto"
            >
              {/* Quotation icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gradient mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="url(#gradient)"
                strokeWidth={1.5}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.17 7h.01M7.17 7c-.046 1.667-.642 4.788-3.136 6.32a.75.75 0 01-1.07-1.05c1.296-1.229 1.999-3.27 2.132-5.26M16.17 7h.01M16.17 7c-.046 1.667-.642 4.788-3.136 6.32a.75.75 0 01-1.07-1.05c1.296-1.229 1.999-3.27 2.132-5.26"
                />
              </svg>

              {/* Stars */}
              <div className="flex space-x-1 text-yellow-400">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.98a1 1 0 00.95.69h4.185c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.98c.3.92-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.785.57-1.838-.197-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.04 9.407c-.783-.57-.38-1.81.588-1.81h4.186a1 1 0 00.951-.69l1.285-3.98z" />
                    </svg>
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-base leading-relaxed">{testimonials[current].text}</p>

              {/* Author */}
              <p className="text-rose-600 font-semibold italic mt-auto text-base">
                - {testimonials[current].name}
              </p>
            </div>
          </div>

          {/* Tablet and Desktop: Multiple cards */}
          <div className="hidden sm:flex justify-center items-center space-x-4 md:space-x-6">
            {testimonials
              .slice(current, current + testimonialsPerView)
              .map(({ id, text, name }) => (
                <div
                  key={id}
                  className="bg-[#1F2022] rounded-2xl p-6 md:p-8 flex flex-col space-y-4 min-w-[280px] md:min-w-[320px] lg:min-w-[380px] flex-1 max-w-md"
                >
                  {/* Quotation icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8 text-gradient mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="url(#gradient)"
                    strokeWidth={1.5}
                  >
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                    </defs>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.17 7h.01M7.17 7c-.046 1.667-.642 4.788-3.136 6.32a.75.75 0 01-1.07-1.05c1.296-1.229 1.999-3.27 2.132-5.26M16.17 7h.01M16.17 7c-.046 1.667-.642 4.788-3.136 6.32a.75.75 0 01-1.07-1.05c1.296-1.229 1.999-3.27 2.132-5.26"
                    />
                  </svg>

                  {/* Stars */}
                  <div className="flex space-x-1 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 md:h-5 md:w-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.98a1 1 0 00.95.69h4.185c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.98c.3.92-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.785.57-1.838-.197-1.539-1.118l1.287-3.98a1 1 0 00-.364-1.118L2.04 9.407c-.783-.57-.38-1.81.588-1.81h4.186a1 1 0 00.951-.69l1.285-3.98z" />
                        </svg>
                      ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white text-base md:text-lg leading-relaxed">{text}</p>

                  {/* Author */}
                  <p className="text-rose-600 font-semibold italic mt-auto text-base md:text-lg">
                    - {name}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6 sm:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-rose-600" : "bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Tablet+ Desktop Navigation Dots */}
        <div className="hidden sm:flex justify-center items-center space-x-2 mt-8">
          {Array.from({ length: testimonials.length - testimonialsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-rose-600" : "bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;