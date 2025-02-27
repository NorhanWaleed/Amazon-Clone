import React, { useState } from 'react';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['/src/assets/hero-1.png', '/src/assets/hero-2.jpg'];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative w-full h-screen mx-auto">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-fill"
      />

      {/* Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2  text-[rgba(33, 33, 33, 1)] p-2 h-[300px] w-[88px] z-10 "
      >
        <svg
          xmlns="/src/assets/arrow-1.svg"
          className="h-[55.38px] w-[80px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2  text-[rgba(33, 33, 33, 1)] rounded-full p-2 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[55.38px] w-[80px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hero;
