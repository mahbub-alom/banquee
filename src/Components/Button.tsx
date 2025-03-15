import React from "react";

// Define Props Type
interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="btn btn-active bg-[#5bb5a2] text-white font-light">
      {title}
    </button>
  );
};

export default Button;

