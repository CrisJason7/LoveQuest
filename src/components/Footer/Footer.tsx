import React from "react";
import colors from "../../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram
// } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">
          Kết nối trái tim với LoveQuest
        </h2>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-300"
          >
            {/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-300"
          >
            {/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-all duration-300"
          >
            {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
          </a>
        </div>

        <p>&copy; 2024 LoveQuest. All rights reserved.</p>
        <p className="text-sm" style={{ color: colors.tertiary }}>
          Love is all around us. Connect now!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
