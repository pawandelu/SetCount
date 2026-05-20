import React from "react";

const Para = ({ paragraph, vari }) => {
  const varient = {
    pri: "text-[18px] mt-[20px]",
    sec: "text-[16px]",
  };
  return (
    <p className={`font-normal text-black leading-[160%]  ${varient[vari]}`}>{paragraph}</p>
  );
};

export default Para;