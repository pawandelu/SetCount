import React, { useState } from "react";
import Ceramic from "../home/Ceramic";
import Filterlist from "../home/Filterlist";
import Setcount from "../common/Setcount"

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Count");

  return (
    <section className="px-4  py-8 mt-30 ">
      <div className="max-w-285 mx-auto flex flex-row justify-center gap-4 flex-wrap">
        <button
          onClick={() => setActiveTab("Count")}
          className={`px-5 py-2 rounded-2xl  text-2xl font-bold ${ activeTab === "Count" ? "bg-blue-300 text-white" : "text-blue-300 bg-white border  border-blue-300" }  cursor-pointer  transition-all duration-300`}
        >
          Counter
        </button>

        <button
          onClick={() => setActiveTab("Filter")}
          className={`px-5 py-2 rounded-2xl  text-2xl font-bold ${ activeTab === "Filter" ? "bg-blue-300 text-white" : "text-blue-300 bg-white border border-blue-300" }  cursor-pointer  transition-all duration-300`}
        >
          Filter List
        </button>

        <button
          onClick={() => setActiveTab("Cermic")}
          className={`px-5 py-2 rounded-2xl  text-2xl font-bold ${ activeTab === "Cermic" ? "bg-blue-300 text-white" : "text-blue-300 bg-white border border-blue-300" }  cursor-pointer  transition-all duration-300`}
        >
          Ceramic
        </button>
      </div>

      {/* content  */}

      <div>
                {
                    activeTab === "Count" 
                    ? ( <Setcount />)

                    : activeTab === "Filter"
                    ? ( <Filterlist />)

                    : ( <Ceramic />)
                }
   
      </div>
    </section>
  );
};

export default Tab;
