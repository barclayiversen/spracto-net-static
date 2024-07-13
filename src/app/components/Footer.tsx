import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-black p-20 md:flex md:justify-center md:items-center text-center">
      <div className="flex-1 md:border-r md:border-gray-400 md:order-1 font-bold">
        <p>
          Connect with Spracto on Instagram:
          <a
            href="https://www.instagram.com/spracto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            @spracto
          </a>
        </p>
      </div>
      <div className="flex-1 mt-4 md:mt-0 md:order-2">
        <p>© {currentYear} Spracto</p>
      </div>
    </footer>
  );
};

export default Footer;
