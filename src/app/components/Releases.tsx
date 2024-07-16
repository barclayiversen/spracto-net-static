"use client";
import React, { useEffect } from "react";
import Divider from "./Divider";
import { Archivo_Black } from "next/font/google";
import { FaSoundcloud, FaYoutube } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const play = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Releases: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.9, // Adjust this value for more scrolling
  });

  const hypeControls = useAnimation();
  const [hypeRef, hypeInView] = useInView({
    triggerOnce: false,
    threshold: 0.9, // Adjust this value for more scrolling
  });

  const droppingControls = useAnimation();
  const [droppingRef, droppingInView] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (hypeInView) {
      hypeControls.start("visible");
    } else {
      hypeControls.start("hidden");
    }
  }, [hypeControls, hypeInView]);

  useEffect(() => {
    if (droppingInView) {
      droppingControls.start("visible");
    } else {
      droppingControls.start("hidden");
    }
  }, [droppingControls, droppingInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }, // Animation for exiting
  };

  const hypeVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const droppingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-center pt-4" id="outer-div">
      {/* Wrapper for centered content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
        {/* New Music Text */}
        <div
          className="relative flex items-center justify-center h-96"
          id="new-music-div"
          ref={ref}
        >
          <div
            id="new-music-inner-div"
            className="absolute top-0 left-0 w-full h-full bg-black bg-transparent bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/top-back.png)",
              opacity: "0.25",
              zIndex: "-1",
            }}
          ></div>
          <motion.h2
            className={`${play.className} text-3xl text-white`}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            exit="exit"
            transition={{ duration: 3 }}
          >
            New Music Every Month
          </motion.h2>
        </div>

        {/* SoundCloud Iframe */}
        <div
          className="relative flex items-center justify-center h-96"
          id="soundcloud-div"
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url(/images/spracto-double-1015.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              opacity: "0.15",
              zIndex: "-1",
            }}
          ></div>
          <h2 className={`${play.className} text-3xl text-white`}>
            Listen on{" "}
            <a
              href="https://soundcloud.com/spracto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              <FaSoundcloud className="mr-2" />
              SoundCloud
            </a>
          </h2>
        </div>

        {/* Money Image Box */}
        <div
          className="relative flex items-center justify-center h-96 order-1 lg:order-2"
          id="money-image-div"
          ref={droppingRef}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: "url(/images/money.png)",
              backgroundSize: "contain",
              backgroundPosition: "center",
              opacity: "0.5",
              zIndex: "-1",
            }}
          ></div>
          <motion.h1
            className={`${play.className} text-4xl text-white`}
            variants={droppingVariants}
            initial="hidden"
            animate={droppingControls}
            transition={{ duration: 1 }}
          >
            Dropping Next Month!
          </motion.h1>
        </div>

        {/* Email Subscription Box */}
        <div
          className="relative flex flex-col items-center justify-center h-96 bg-black order-2 lg:order-1"
          id="email-subscription-div"
          ref={hypeRef}
        >
          <motion.h1
            className={`${play.className} text-4xl mb-4 text-white`}
            variants={hypeVariants}
            initial="hidden"
            animate={hypeControls}
            transition={{ duration: 1 }}
          >
            Hyped for my next release? Get it before everyone else
          </motion.h1>
          <form className="flex flex-col items-center">
            {/* <input
              disabled
              type="email"
              placeholder="Early Access Email list coming soon!"
              className="py-2 px-4 rounded-lg mb-2 text-black"
            />
            <button
              disabled
              type="submit"
              className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Subscribe
            </button> */}
            <p className={`${play.className}  mb-4 text-white`}>
              Early Access Email list coming soon!
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Releases;
