import React from "react";
import Divider from "./Divider";
import Image from "next/image";
import { Archivo_Black } from "next/font/google";
import { FaSoundcloud, FaYoutube } from "react-icons/fa";

const play = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Releases: React.FC = () => {
  return (
    <div className="text-center p-4">
      {/* Wrapper for centered content */}
      <div className="max-w-3xl mx-auto">
        {/* SoundCloud Iframe */}
        <h2 className={`${play.className} text-3xl mb-4`}>Featured Track of the month</h2>
        <div className="">
          <div
            className="relative overflow-hidden"
            style={{ paddingTop: "96.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1732888257&color=%235bff00&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            ></iframe>
          </div>
          <div
            style={{
              fontSize: "10px",
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif",
              fontWeight: 100,
            }}
          >
            <button className="bg-white text-black mt-4 py-2 px-4 text-xl font-mono hover:bg-gray-200 rounded-3xl">
              <a
                href="https://hypeddit.com/spracto/boom-extended"
                title="Boom"
                target="_blank"
              >
                Free Download
              </a>
            </button>
          </div>
        </div>
        {/* Divider */}

        {/* Album Art for Next Release */}
        <div className="mt-8">
          <h1 className={`${play.className} text-4xl mb-4`}>
            Upcoming Release
          </h1>
          <div
            className="relative overflow-hidden mx-auto rounded-lg p-4 sm:p-8"
            style={{ paddingTop: "96.25%" }}
          >
            <Image
              src="https://storage.googleapis.com/spracto-net-images/UpcomingRelease/top%20back.png"
              alt="Album Art for Next Release"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <p className={`${play.className} mt-5`}>
            Available for free download August 1st, 2024
          </p>
        </div>
        {/* New Header and Buttons */}
        <div className="mt-8">
          <h2 className={`${play.className} text-xl mb-4`}>
            Stream and Download My Tracks:
          </h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://soundcloud.com/spracto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              <FaSoundcloud className="mr-2" />
              SoundCloud
            </a>
            <a
              href="https://www.youtube.com/@spracto"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              <FaYoutube className="mr-2" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Releases;
