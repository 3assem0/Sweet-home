import React, { useState } from "react";
import PropertySlider from "./PropertySlider";

import { FaHouse } from "react-icons/fa6";
import { MdVilla } from "react-icons/md";
import { MdOutlineApartment } from "react-icons/md";



const Property = () => {
  const [selectedType, setSelectedType] = useState("House");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <div className="relative max-sm:mb-24 min-h-screen flex flex-col justify-center">
        <div className="flex max-sm:flex-col max-sm:gap-4  items-center justify-between w-full p-4">
          <div>
          <div className="flex items-center max-sm:mt-16 max-sm:justify-center">
          <div className="bg-yellow-400 w-8 h-[1.5px] mr-2 "> </div>
          <p className="font-medium text-[#F59E0B]">Ready to Sell!</p>
          </div>
          <h1 className="flex-1 text-4xl font-bold text-left">Featured House</h1>
          </div>
          <div className="flex gap-4">
          <button
              onClick={() => setSelectedType("House")}
              className={`${
                selectedType === "House" ? "bg-green-300 text-white" : "bg-gray-200 text-black"
              } px-4 py-2 rounded-full flex items-center max-[435px]:text-xs max-[643px]:px-2 max-[357px]:text-xs max-[357px]:px-1`}
            >
              <FaHouse className={'inline-block mr-1 ${selectedType === "House" ? "text-white" : "text-black"}'} />
              House
            </button>
            <button
              onClick={() => setSelectedType("Villa")}
              className={`${
                selectedType === "Villa" ? "bg-green-300 text-white" : "bg-gray-200 text-black"
              } px-4 py-2 rounded-full flex items-center  max-[435px]:text-sm max-[643px]:px-2 max-[357px]:text-xs max-[357px]:px-1 `}
            >
              <MdVilla className={'inline-block mr-1 ${selectedType === "Villa" ? "text-white" : "text-black"}'} />
              Villa
            </button>
            <button
              onClick={() => setSelectedType("Apartment")}
              className={`${
                selectedType === "Apartment" ? "bg-green-300 text-white" : "bg-gray-200 text-black"
              } px-4 py-2 rounded-full flex items-center   max-[435px]:text-sm max-[643px]:px-2  max-[357px]:text-xs max-[357px]:px-1`}
            >
              <MdOutlineApartment className={'inline-block mr-1 ${selectedType === "Apartment" ? "text-white" : "text-black"}'} />
              Apartment
            </button>
          </div>
          <div className="flex gap-2 ">
            <button
              onClick={handlePrevClick}
              className=" bg-[#E0E3EB] text-[#3C4563] py-2 px-6 rounded-full text-3xl"
            >
              &lt;
            </button>
            <button
              onClick={handleNextClick}
              className="bg-[#10B981] text-white  py-2 px-6 rounded-full text-3xl"
            >
              &gt;
            </button>
          </div>
        </div>

        <PropertySlider
          selectedType={selectedType}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </div>
    </div>
  );
};

export default Property;