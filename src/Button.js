import React from "react";
import { FaRocket } from "react-icons/fa";

const Button = (props) => {
  return (
    <button className="button">
      <FaRocket />
      {props.children}
    </button>
  );
};

export default Button;
