import React, { useState } from "react";
import { NAVBAR_LIST } from "../../utils/Hipper";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-382.5 w-full mx-auto '>
      <header className="px-4 bg-rich-black py-5.75 fixed top-0 left-0 w-full z-50">
        <nav className="max-w-382.5 w-full  mx-auto flex flex-row items-center justify-between">
          <div>
            <img className="w-12.5 h-12" src="/assets/chiz.webp" alt="" />
          </div>
          <input
            type="checkbox"
            hidden
            id="menu-checkbox"
            className="menu-checkbox relative z-10"
          />
          <label
            for="menu-checkbox"
            className="flex flex-col items-center justify-center gap-1 relative cursor-pointer z-60 lg:hidden"
          ></label>

          <div className="nav flex max-lg:flex-col transition-all duration-300 gap-7.5 items-center">
            <ul
              className={`nav-menu flex items-center gap-15 lg:flex-row flex-col max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-screen max-lg:bg-black max-lg:flex max-lg:items-center max-lg:justify-center transition-all duration-300 z-20 ${nav ? "max-lg:left-0" : "max-lg:left-full "} `}
            >
              {NAVBAR_LIST.map((item, index)  => (
                <a href={item.link} key={index} onClick={() => setNav(false)}>
                  <li className="font-normal hover:font-bold text-[20px] leading-[130%] hover:underline hover:decoration-[3px] hover:underline-offset-4 text-white  hover:text-mdnight-blue transition-all duration-300">
                    {item.title}
                  </li>
                </a>
              ))}
              <button className="py-1.75 px-5.75 font-semibold text-[18px] leading-[180%] text-white bg-bibrand-orange rounded-[23.5px] cursor-pointer hover:bg-white hover:text-bibrand-orange transition-all duration-300">
                Connect Wallet
              </button>
            </ul>
          </div>
          <button
            onClick={() => setNav(!nav)}
            className="lg:hidden flex flex-col gap-1 z-50 cursor-pointer overflow-y-hidden"
          >
            <span className="w-6 h-1 bg-white rounded"></span>
            <span className="w-6 h-1 bg-white rounded"></span>
            <span className="w-6 h-1 bg-white rounded"></span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
