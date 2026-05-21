import React, { useState } from "react";

const Setcount = () => {

  const [count, setCount] = useState(0);
  function useCount(){
    count === 15 ? setCount(0) : setCount(count +1)
  }
  
  const [name , setName] = useState(false)
    function changeName(){
      setName (!name)
    }
  
 
  return (
    <section className="px-4 pt-20 " id="Counter">
      <div className="max-w-285 mx-auto justify-center items-center flex md:flex-row flex-col gap-8">
        <div className="flex flex-col items-center gap-5 md:w-100 md:h-75 w-75 h-50 border border-blue-300 justify-center rounded-2xl">
          <h1 className="font-bold text-5xl leading-[100%] text-black">
            Counter: {count}
          </h1>
          <button
            onClick={useCount}
            className="py-5 px-12 rounded-2xl bg-blue-300 text-white hover:bg-white cursor-pointer hover:text-blue-300 hover:border-blue-300 hover:border text-2xl font-semibold transition-all duration-300  "
          >
            Add
          </button>
        </div>

        <div className="flex flex-col items-center gap-5 md:w-100 md:h-75 w-75 h-50 border border-blue-300 justify-center rounded-2xl">
          <h1 className="font-bold text-5xl leading-[100%] text-black">
           {name ? "PAWAN" : "DELU"}
          </h1>
          <button
            onClick={changeName}
            className="py-5 px-12 rounded-2xl bg-blue-300 text-white hover:bg-white cursor-pointer hover:text-blue-300 hover:border-blue-300 hover:border text-2xl font-semibold transition-all duration-300 "
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Setcount;
