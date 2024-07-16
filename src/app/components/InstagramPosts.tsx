"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Archivo_Black } from "next/font/google";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const play = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: string;
  thumbnail_url?: string;
  permalink: string;
  like_count?: number;
  comments_count?: number;
}

interface InstagramPostsProps {
  posts: InstagramPost[];
}

const InstagramPosts: React.FC<InstagramPostsProps> = ({ posts }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      {
        threshold: 0.9, // Adjust as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 355, behavior: "smooth" });
      setShowLeftArrow(true);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -355, behavior: "smooth" });
      if (scrollRef.current.scrollLeft === 0) {
        setShowLeftArrow(false);
      }
    }
  };

  return (
    <div className="relative bg-black text-white p-8" ref={ref}>
      <motion.h2
        className={`${play.className} text-3xl text-white mb-4 text-center mx-auto`}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: -20 },
        }}
        transition={{ duration: 0.5 }}
        style={{ width: "fit-content" }}
      >
        Follow Me on Instagram
      </motion.h2>
      <div className="overflow-x-auto overflow-y-hidden" ref={scrollRef}>
        <div className="flex space-x-4">
          {posts.map((post) => (
            <div key={post.id} className="flex flex-col space-y-4">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block group"
                style={{
                  height: "calc(50vh - 2rem)", // Half of the viewport height minus padding
                  width: "calc(50vh - 2rem)", // Keep the aspect ratio
                }}
              >
                <img
                  src={
                    post.media_type === "VIDEO"
                      ? post.thumbnail_url
                      : post.media_url
                  }
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <div className="flex items-center space-x-2">
                    <p className="text-white">{post.like_count}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2"></div>
                  <p className="text-white text-center mt-4">{post.caption}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <button
        // className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
        onClick={scrollRight}
      >
        <FaArrowRight className="text-white " />
      </button>
      {showLeftArrow && (
        <button
          // className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white rounded-full"
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white"
          onClick={scrollLeft}
        >
          <FaArrowLeft className="text-white " />
        </button>
      )}
    </div>
  );
};

export default InstagramPosts;
