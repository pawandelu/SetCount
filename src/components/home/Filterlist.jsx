import React, { useState } from "react";
import { ALL_PRODUCT, FILTER_BTNS } from "../../utils/Hipper";

const Filterlist = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  function filterCategray() {
    return selectedCategory === "All"
      ? ALL_PRODUCT
      : ALL_PRODUCT.filter((p) => p.category === selectedCategory);
  }
  return (
    <div className="max-w-285 mx-auto flex justify-center px-6">
     
      <div className="w-150 h-auto flex justify-center items-center border rounded-2xl flex-col py-4 px-4">
         <h1 className="font-bold text-4xl py-3 text-center">FILTER CATEGORY</h1>
        <div className="flex flex-row justify-center w-full sm:gap-10 gap-5 max-sm:flex-wrap">
          {FILTER_BTNS.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(item)}
              className="py-5 px-8 bg-black text-white text-3xl rounded-2xl font-bold cursor-pointer gap-2"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full mt-3.5">
          {filterCategray().map((product, index) => (
            <div
              key={index}
              className="border border-black rounded-2xl flex items-center justify-between w-full px-4 py-4"
            >
              <span className="font-medium text-2xl">{product.id}</span>
              <h2 className="font-medium text-2xl">{product.name}</h2>
              <p className="font-medium text-2xl">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filterlist;
