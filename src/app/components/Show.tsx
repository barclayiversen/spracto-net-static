import React from "react";

const Show: React.FC<{
  src: string;
  alt: string;
  buttonText: string;
}> = ({ src, alt, buttonText }) => {
  return (
    <div className="text-center p-8 ">
      <img
        src={src}
        alt={alt}
        className="mx-auto mb-4 rounded-3xl max-w-full sm:max-w-xxl"
      />
      <a>
        <button
          // onClick={handleButtonClick}
          className="bg-gray-500 text-white py-2 px-4 rounded-full"
        >
          {buttonText}
        </button>
      </a>
    </div>
  );
};

export default Show;
