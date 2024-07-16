"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Archivo_Black } from "next/font/google";

const play = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const InstagramPosts = ({ posts }) => {
  const controls = useAnimation();
  const ref = useRef(null);

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

  posts = posts["props"]["posts"];

  return (
    <div className="bg-black text-white p-8" ref={ref}>
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
      <div className="overflow-x-auto overflow-y-hidden">
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
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 15l7-7 7 7"
                      />
                    </svg> */}
                    <p className="text-white">{post.like_count}</p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h6"
                      />
                    </svg> */}
                    {/* <p className="text-white">{post.comments_count}</p> */}
                  </div>
                  <p className="text-white text-center mt-4">{post.caption}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramPosts;
