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
  color = "primary",
  children,
  onClick
}) => {
  return (
    <button
      className={`text-white ${width} py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2`}
      style={{ backgroundColor: colors[color] }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GeneralButton;
