import React from "react";

const Heading = ({ heading, vari }) => {
  const varient = {
    pri: "text-[56px] leading-[127%]",
    sec: "text-[20px] leading-[160%]",
  };
  return (
    <h2 className={`font-semibold text-black   ${varient[vari]}`}>{heading}</h2>
  );
};

export default Heading;
