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
    <section className="px-4 pt-20 " id="Filter">
      <div className="max-w-285 mx-auto flex justify-center px-6">
        <div className="w-150 h-auto flex justify-center items-center border-blue-300 border rounded-2xl flex-col p-6">
          <h1 className="font-bold text-4xl py-3 text-center">
            FILTER CATEGORY
          </h1>
          <div className="flex flex-row justify-center sm:gap-10 gap-5 max-sm:flex-wrap">
            {FILTER_BTNS.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(item)}
                className="py-5 px-8 bg-blue-300  hover:text-blue-300 hover:bg-white border border-transparent hover:border hover:border-blue-300 transition-all duration-300 text-white text-3xl rounded-2xl font-bold cursor-pointer gap-2"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 w-full mt-3.5">
            {filterCategray().map((product, index) => (
              <div
                key={index}
                className="hover:text-blue-300 hover:bg-white border border-transparent hover:border hover:border-blue-300 transition-all duration-300 rounded-2xl flex items-center justify-between w-full px-4 py-4"
              >
                <span className="font-medium text-2xl">{product.id}</span>
                <h2 className="font-medium text-2xl">{product.name}</h2>
                <p className="font-medium text-2xl">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filterlist;
