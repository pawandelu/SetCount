import React, { useState } from "react";

const Button = ({ text, vari }) => {
  const varints = {
    pri: "text-white bg-dark-red ",
    sec: "text-dark-red bg-white border border-dark-red",
  };
  return (
    <button
      className={`font-bold text-[18px] px-8 py-5 leading-[100%] rounded-[56px] cursor-pointer  ${varints[vari]}`}>{text}</button>
  );
};

export default Button;
