import React from "react";

const Button = ({title}) => {
  return (
    <button className="btn btn-active bg-[#5bb5a2] text-white font-light">
      {title}
    </button>
  );
};

export default Button;
