import React from "react";
import colors from "../../constants/colors";

interface GeneralButtonProps {
  width?: string;
  color?: keyof typeof colors;
  onClick?: () => void;
  children: React.ReactNode;
}

const GeneralButton: React.FC<GeneralButtonProps> = ({
  width = "w-40",
  color = "primary", // Mặc định là primary (xanh da trời nhạt)
  children,
  onClick
}) => {
  return (
    <button
      className={`relative text-white ${width} py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-opacity-50`}
      style={{ backgroundColor: colors[color] }}
      onClick={onClick}
    >
      <span className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-white bg-opacity-20 rounded-lg hover:opacity-100"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default GeneralButton;
