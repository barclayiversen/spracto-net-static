import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        playsInline
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="relative flex items-center justify-center h-full">
        <Image
          src="/logo-black.png"
          alt="My Logo"
          className="h-48 w-auto"
          height="300"
          width="300"
        />
      </div>
    </div>
  );
};

export default Hero;
