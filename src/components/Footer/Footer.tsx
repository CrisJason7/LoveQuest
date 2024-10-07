import React from "react";
import colors from "../../constants/colors";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-white py-4"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="container mx-auto text-center">
        <p>&copy; 2024 LoveQuest. All rights reserved.</p>
        <p className="text-sm" style={{ color: colors.tertiary }}>
          Designed with Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
