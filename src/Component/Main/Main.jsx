import React, { Fragment } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import logo2 from "../../images/traveloka_logo2.png";
import logo3 from "../../images/traveloka_logo3.png";
import logo4 from "../../images/traveloka_logo4.png";
import logo5 from "../../images/traveloka_logo5.png";
import Ellipse4 from "../../images/Ellipse4.png";
import Ellipse5 from "../../images/Ellipse5.png";
import Ellipse6 from "../../images/Ellipse6.png";
import Rectangle12 from "../../images/Rectangle12.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
const Main = () => {
  
  return (
    <Fragment>
      <div className="bg-[#d2fef2] w-48 h-48 z-[-999]  absolute"   style={{ boxShadow: '0 0 200px 180px #d2fef2' }}></div>
      <main className="flex w-full items-center mx-auto">
        <div className="flex-col ml-32 max-[583px]:ml-5 max-[1302px]:absolute z-[1000]">
          <div className="flex-col">
            <h1
              className="max-w-[320px] z-[100] h-[150px] text-[#1B1C57] font-extrabold text-5xl"
              style={{ lineHeight: "50px"}}
            >
              Find The Place To Live <span className="text-transparent " style={{ WebkitTextStroke: '1px #1B1C57' }}>Your Dreams </span>Easily Here
            </h1>
            <p
              className="min-w-[200px] max-w-[420px] h-[56px] opacity-75 text-black font-bold text-lg mt-3"
              style={{ lineHeight: "28px" }}
            >
              Everything you need about finding your place to live will be here,
              where it will be easier for you.
            </p>
          </div>
          <div className="flex max-[512px]:w-[440px] max-[368px]:w-[300px] max-[454px]:w-[350px] justify-between max-w-[496px] h-[56px] border border-solid border-gray-500 rounded-[32px] p-1 pl-6 pr-6 gap-4 mb-3">
            <input
              type="text"
              placeholder="Search for the location you want!"
              className="flex-grow bg-transparent placeholder:text-black"
            />
            <button className="w-[109px] h-[48px] flex items-center justify-center rounded-[32px] p-3 px-4 gap-1 bg-[#10B981]">
              Search
              <FaGreaterThan />
            </button>
          </div>
          <div className="flex-col gap-y-3">
            <p className="w-[120px] text-black font-bold">
              Our Partnership
            </p>
            <div className="flex gap-x-8 flex-wrap justify-center">
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
            </div>
          </div>
        </div>
        <div
          className="bg-[url('/image6.png')] bg-cover max-[443px]:w-screen w-[720px] h-[720px] relative"
          style={{ marginLeft: "auto" }}
        >
          <span className="absolute w-1 h-[66px] top-[141.5px] left-32 z-10 bg-[#EF4444]" />
          <span className="absolute w-[50px] h-1 top-[141.5px] left-32 z-10 bg-[#EF4444]" />
          <span className="absolute max-[726px]:hidden w-[50px] h-1 top-[204.5px] right-48 z-10 bg-[#F59E0B]" />
          <span className="absolute max-[726px]:hidden  w-1 h-[66px] top-[204.5px] right-48 z-10 bg-[#F59E0B]" />
          <span className="absolute  max-[726px]:hidden w-[50px] h-1 top-[409.5px] right-48 z-10 bg-[#3B82F6]" />
          <span className="absolute  max-[726px]:hidden w-1 h-[66px] top-[409.5px] right-48 z-10 bg-[#3B82F6]" />


          
    <div className="absolute top-[568px]   w-[100%] overflow-hidden">
    <Swiper
              spaceBetween={0}
              slidesPerView={2.5}
              className="swiper"
              breakpoints={{
                312: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                484: {
                  slidesPerView: 1.5,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 0,
                },
              }}
              autoplay={{ delay: 2000 }} 
              modules={[Pagination, Autoplay]} 
            >
              <SwiperSlide className="swiper-slide ml-10 flex justify-center items-center">
                <div className="min-w-[330px] h-[104px] rounded-[32px] p-6 bg-white relative">
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[14px] border-3 border-white"
                    src={Ellipse4}
                    alt="Ellipse4"
                  />
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[42px] border-3 border-white"
                    src={Ellipse5}
                    alt="Ellipse5"
                  />
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[70px] border-3 border-white"
                    src={Ellipse6}
                    alt="Ellipse6"
                  />
                  <div className="absolute top-[25px] left-[150px]">
                    <p className="w-[152px] h-[24px] font-lexend font-semibold text-[16px] leading-[24px] text-[#1B1C57]">
                      1K+ People
                    </p>
                    <p className="w-[172px] h-[20px] font-lexend font-normal text-[12px] leading-[20px] text-[#68799F]">
                      Successfully Getting Home
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center items-center">
                <div className="w-[201px] h-[104px] rounded-[32px] p-6 bg-white flex items-center">
                  <img src={Rectangle12} alt="Rectangle12" className="w-[65px] h-[65px]" />
                  <div className="ml-4">
                    <p className="font-lexend font-semibold text-[16px]">
                      56 Houses
                    </p>
                    <p className="font-lexend text-[12px] text-[#68799F]">
                      Sold Monthly
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide ml-10 flex justify-center items-center">
                <div className="min-w-[330px] h-[104px] rounded-[32px] p-6 bg-white relative">
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[14px] border-3 border-white"
                    src={Ellipse4}
                    alt="Ellipse4"
                  />
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[42px] border-3 border-white"
                    src={Ellipse5}
                    alt="Ellipse5"
                  />
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[70px] border-3 border-white"
                    src={Ellipse6}
                    alt="Ellipse6"
                  />
                  <div className="absolute top-[25px] left-[150px]">
                    <p className="w-[152px] h-[24px] font-lexend font-semibold text-[16px] leading-[24px] text-[#1B1C57]">
                      1K+ People
                    </p>
                    <p className="w-[172px] h-[20px] font-lexend font-normal text-[12px] leading-[20px] text-[#68799F]">
                      Successfully Getting Home
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide flex justify-center items-center">
                <div className="w-[201px] h-[104px] rounded-[32px] p-6 bg-white flex items-center">
                  <img src={Rectangle12} alt="Rectangle12" className="w-[65px] h-[65px]" />
                  <div className="ml-4">
                    <p className="font-lexend font-semibold text-[16px]">
                      56 Houses
                    </p>
                    <p className="font-lexend text-[12px] text-[#68799F]">
                      Sold Monthly
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide ml-10 flex justify-center items-center">
                <div className="min-w-[330px] h-[104px] rounded-[32px] p-6 bg-white relative">
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[14px] border-3 border-white"
                    src={Ellipse4}
                    alt="Ellipse4"
                  />
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[42px] border-3 border-white"
                    src={Ellipse5}
                    alt="Ellipse5"
                  />
                  <img
                    className="absolute w-[95px] h-[95px] top-[9px] left-[70px] border-3 border-white"
                    src={Ellipse6}
                    alt="Ellipse6"
                  />
                  <div className="absolute top-[25px] left-[150px]">
                    <p className="w-[152px] h-[24px] font-lexend font-semibold text-[16px] leading-[24px] text-[#1B1C57]">
                      1K+ People
                    </p>
                    <p className="w-[172px] h-[20px] font-lexend font-normal text-[12px] leading-[20px] text-[#68799F]">
                      Successfully Getting Home
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              
            </Swiper>
    </div>

      
         
        </div>
      </main>
    </Fragment>
  );
};

export default Main;
