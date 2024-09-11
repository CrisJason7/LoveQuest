import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <p className="text-sm">Designed with Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
