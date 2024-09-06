import React, { Fragment } from "react";
import { IoBedSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import Ellipse7 from "../../images/Ellipse7.png";
import Rectangle17 from "../../images/Rectangle17.png";
import Rectangle18 from "../../images/Rectangle18.png";
import Rectangle19 from "../../images/Rectangle19.png";
import Rectangle20 from "../../images/Rectangle20.png";


const Ready = () => {
  return (
    <Fragment>   
      <section className="flex w-5/6 items-center min-h-screen relative justify-between mx-auto  max-[760px]:flex-col max-[760px]:gap-y-32 max-[761px]:mb-[200px] ">  
      <div className="bg-[#ffe5d1]  h-48 z-[-999]  absolute right-[-50px] top-52"   style={{ boxShadow: '0 0 200px 180px #ffe5d1' }}></div>
        <div className="flex-col  max-[473px]:w-5/6">
          <div className="flex  items-center " >
            <div className="bg-yellow-400 w-8 h-[1.5px] mr-2 max-[760px]:mb-3"> </div>
            <p className="font-medium text-[#F59E0B] max-[760px]:text-[18px] max-[760px]:mb-3 max-[481px]:text-2xl ">Ready to Sell!</p>
          </div>
          <div className="flex-col items-start  ">
            <h1 className="mb-2 text-5xl font-semibold max-[760px]:text-[30px] max-[760px]:mb-4 max-[481px]:text-4xl">
              Let’s tour and see our house!
            </h1>
            <p className="w-[313px] opacity-75 text-[#626687] text-xl font-normal mb-2 max-[760px]:mb-3 max-[760px]:text-xl max-[382px]:text-lg max-[371px]:w-[254px]">
              Houses recommended by our partners that have been curated to
              become the home of your dreams!
            </p>
          </div>
          <div className="flex-col items-start w-full ">
            <p className="opacity-75 font-semibold text-[#1B1C57] mb-2">
              House Detail
            </p>
            <div className=" flex-wrap items-start justify-between h-[124px]   ">
              <div className="flex-col items-center gap-16 w-[250px] max-[760px]:w-full  max-[473px]:w-5/6 ">
                <div className="flex justify-between w-full  mb-8">
                  <div className="flex items-center gap-2  ">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-bold text-xl">5 Bedrooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-bold text-xl">3 Bedrooms</p>
                  </div>
                </div>

                <div className="flex  justify-between">
                  <div className="flex items-center gap-2">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-bold text-xl">1 Bedrooms</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoBedSharp className="text-[#888B97]" />
                    <p className="font-bold text-xl">2 Bedrooms</p>
                  </div>
                </div>
                <div className=" flex  w-[250px] mt-8 mb-8 h-1  bg-[#888b978b] mx-auto"></div>
                <div className="flex items-center w-[440px] max-[760px]:justify-between max-[473px]:w-full max-[473px]:flex-col max-[473px]:gap-y-5">
                    <div className="flex items-center gap-3 mr-4 ">
                        <img src={Ellipse7}/>
                        <div className="flex-col">
                            <p className="text-black">Dianne Russell</p>
                            <p className="">Manager Director</p>
                        </div>

                    </div>
                    <button className="w-[109px] h-[48px]  flex items-center justify-center rounded-[32px] p-3 px-4 gap-5  bg-[#10B981]">
                      <FaPhoneAlt/>  Contact
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit h-fit  ">
            <div className=" relative ">

            <img src={Rectangle17} alt="Rectangle17"  className="w-[488px] h-fit max-[971px]:w-[388px]  max-[900px]:w-[300px] max-[760px]:w-full max-[585px]:w-[400px] max-[495px]:w-[350px] max-[495px]:w-[250px] " />
            <img src={Rectangle18} alt="Rectangle18"  className="absolute w-[296px] h-fit le left-[-40px] bottom-[-40px] rounded max-[900px]:w-[196px] max-[760px]:w-[320px] max-[608px]:w-[310px] max-[608px]:left-1/2 max-[608px]:right-1/2 max-[608px]:transform max-[608px]:-translate-x-1/2 max-[565px]:w-[280px] max-[495px]:w-[230px] max-[495px]:w-[150px]" />
            <img src={Rectangle19} alt="Rectangle19"  className="absolute w-[96px] h-fit bottom-[-40px] left-[280px] rounded max-[1093px]:hidden " />
            <img src={Rectangle20} alt="Rectangle20"  className="absolute w-[96px] h-fit bottom-[-40px] right-[0px] rounded max-[608px]:hidden" />
            </div>


            

        </div>
      </section>
    </Fragment>
  );
};

export default Ready;