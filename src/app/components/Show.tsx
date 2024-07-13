import React from "react";
import Image from "next/image";

const Show: React.FC = () => {
  return (
    <div className="text-center p-8 ">
      <Image
        src="https://storage.googleapis.com/spracto-net-images/UpcomingShow/juush.JPG"
        alt="Upcoming Show!"
        className="mx-auto mb-4 rounded-3xl max-w-full sm:max-w-xxl"
        height="300"
        width="300"
        // layout="fill"
        // objectFit="contain"
      />
      <a>
        <button
          // onClick={handleButtonClick}
          className="bg-gray-500 text-white py-2 px-4 rounded-full"
        >
          RSVP for free entry before 1030
        </button>
      </a>
    </div>
  );
};

export default Show;
