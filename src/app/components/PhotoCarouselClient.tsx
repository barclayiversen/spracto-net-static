// components/PhotoCarouselClient.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  alt: string;
}

interface PhotoCarouselClientProps {
  images: ImageData[];
}

const PhotoCarouselClient: React.FC<PhotoCarouselClientProps> = ({
  images,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative w-full h-64 sm:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
      >
        Next
      </button>
    </div>
  );
};

export default PhotoCarouselClient;
