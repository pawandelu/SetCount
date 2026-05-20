import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import { CARD_DATA } from "../../utils/Hipper";
import Button from "../common/Button";

const Ceramic = () => {
  return (
    <section class=" lg:py-28 md:py-20 mb-11 px-4 py-28">
      <div class="max-w-285 w-full mx-auto flex justify-between xl:flex-row flex-col max-xl:items-center">
        <div class=" sm:max-w-121.25 w-full relative sm:h-157.75 max-sm:w-76.5 h-103.75">
          <img
            className="absolute top-0 right-0 z-10 max-sm:w-67.75"
            width={435}
            height={581}
            src="/assets/Fireplace.webp"
            alt=""
          />
          <div class="absolute left-0 bottom-0 sm:w-75 sm:h-99 w-53.75 h-73.75 bg-dark-red rounded-3xl"></div>
        </div>

        <div class="max-w-148 w-full min-h-150 max-xl:mt-10">
          <div>
            <Heading heading="How it works?" vari="pri" />
            <Para
              paragraph="Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. "
              vari="pri"
            />
            <div className="flex flex-col gap-4 mt-8">
              {CARD_DATA.map((item, index) => (
                <div key={index} className="flex gap-5 shadow-[0px_1px_28px_1px_#4747471A] p-4 rounded-[20px] ">

                  <div className="max-w-8 flex items-center justify-center  h-8">
                    <img  src="/assets/click.png" alt="" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Heading heading={item.heading} vari="sec" />
                    <Para paragraph={item.para} vari="sec" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-6 mt-9 flex-wrap max-sm:justify-center">
              <Button text="Get a Quote" vari="pri" />
              <Button text="View Tile Visualizer" vari="sec" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceramic;
