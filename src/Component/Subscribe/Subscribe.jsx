import React, { Fragment } from "react";
import Ellipse6 from "../../images/Ellipse6.png";
import Ellipse7 from "../../images/Ellipse7.png";
import Ellipse8 from "../../images/Ellipse8.png";
import Ellipse9 from "../../images/Ellipse9.png";
import Rectangle12 from "../../images/Rectangle12.png";
import Rectangle26 from "../../images/Rectangle26.png";
import Rectangle25 from "../../images/Rectangle25.png";
import Rectangle27 from "../../images/Rectangle27.png";



const Subscribe = () => {
  return (
    <Fragment>
      <div className="w-5/6 flex justify-center items-center mx-auto mb-44">
        <div className="bg-[url('/joe.png')] rounded-sm bg-cover w-[1200px] h-[312px] relative ">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center  justify-center w-[422px] mx-auto h-[96px] font-semibold text-4xl text-[#1B1C57;] max-[437px]:w-[300px]">
            <p className="max-[708px]:text-3xl max-[558px]:text-2xl max-[468px]:text-xl max-[395px]:w-72 max-[395px]:text-center"> Subscribe For More Info and update from Hounter</p>

            </div>
            <div className="flex justify-between items-center w-[496px] h-[56px] border-1 border-solid border-gray-500 rounded-[32px] p-1 pl-6 pr-6  gap-4 mb-3 mx-auto bg-white max-[708px]:w-[300px]  max-[395px]:w-[200px]">
              <input
                type="text"
                placeholder="Your email here"
                className=""
              />
              <button className="w-[109px] h-[48px]   flex items-center justify-center rounded-[32px] p-3 px-4 gap-1 bg-[#10B981] max-[708px]:w-[80px] max-[708px]:h-[40px] ">
                Search
              </button>
            </div>
          </div>
          <img src={Ellipse6} alt="Ellipse6" className="absolute top-[71px] left-[204px]   max-[1449px]:hidden" />
          <img src={Ellipse7} alt="Ellipse7" className="absolute top-[173px] left-[67px]  max-[1449px]:hidden" />
          <img src={Ellipse8} alt="Ellipse8" className="absolute top-[143px] left-[964px] max-[1449px]:hidden" />
          <img src={Ellipse9} alt="Ellipse9" className="absolute top-[107px] left-[1082px] max-[1449px]:hidden" />
          <img src={Rectangle12} alt="Rectangle12" className="absolute top-[38px] left-[44px] w-[81px] h-[81px]  max-[1449px]:hidden" />
          <img src={Rectangle26} alt="Rectangle26" className="absolute top-[44px]  left-[930px] max-[1449px]:hidden"  />
          <img src={Rectangle25} alt="Rectangle25" className="absolute top-[178PX]  left-[195PX] max-[1449px]:hidden" />
          <img src={Rectangle27} alt="Rectangle27" className="absolute top-[197px] left-[1072px] max-[1449px]:hidden" />


        </div>
      </div>
    </Fragment>
  );
};

export default Subscribe;