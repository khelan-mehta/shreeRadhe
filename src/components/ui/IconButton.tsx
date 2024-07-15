import React from "react";

interface IconButtonProps {
  icon: React.ElementType;
  text: string;
  onClick?: () => void; // Optional onClick handler
  variant?: string; // Optional variant for background color
  width?: string; // Optional width
  height?: string; // Optional height
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  text,
  onClick,
  variant = "primary",
  width = "14.4375rem",
  height,
}) => {
  return (
    <button
      className={`flex justify-center items-center px-5 py-3 rounded-2xl bg-${variant}`}
      onClick={onClick}
      style={{ width, height }}
    >
      <div className="flex items-center w-full">
        <Icon className="text-foreground" />
        <div className="text-foreground self-center text-right ml-[9.17px] text-[1.0625rem] leading-[normal] capitalize">
          {text}
        </div>
      </div>
    </button>
  );
};

export default IconButton;
