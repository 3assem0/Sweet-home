import React, { Fragment, useEffect, useState } from "react";
import Rectangle21 from "../../images/Rectangl21.png";
import Ellipse6 from "../../images/Ellipse6.png";
import { LiaStarSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



const slidesData = [
  {
    id: 1,
    image: Rectangle21,
    testimonial: {
      title: "Best! I got the house I wanted through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "John Doe",
      position: "CEO of Hounter",
      rating: 4.6,
    },
    avatar: Ellipse6,
  },

  {
    id: 2,
    image: Rectangle21,
    testimonial: {
      title: "Best! I got the house I wanted through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "John Doe",
      position: "CEO of Hounter",
      rating: 4.6,
    },
    avatar: Ellipse6,
  },
  {
    id: 3,
    image: Rectangle21,
    testimonial: {
      title: "Best! I got the house I wanted through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "John Doe",
      position: "CEO of Hounter",
      rating: 4.6,
    },
    avatar: Ellipse6,
  },
  {
    id: 4,
    image: Rectangle21,
    testimonial: {
      title: "Best! I got the house I wanted through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "John Doe",
      position: "CEO of Hounter",
      rating: 4.6,
    },
    avatar: Ellipse6,
  },
  {
    id: 5,
    image: Rectangle21,
    testimonial: {
      title: "Best! I got the house I wanted through Hounter",
      description:
        "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
      name: "John Doe",
      position: "CEO of Hounter",
      rating: 4.6,
    },
    avatar: Ellipse6,
  },
];

const About = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [paginationEnabled, setPaginationEnabled] = useState(true);


  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1440) {
        setSlidesPerView(1.7);
      } else if (window.innerWidth > 1158) {
        setSlidesPerView(1.5);
      } else if (window.innerWidth > 850) {
        setSlidesPerView(1.5);
      } else {
        setSlidesPerView(1); 
      }
      if (window.innerWidth < 560) {
        setPaginationEnabled(false);
      } else {
        setPaginationEnabled(true);
      }
      
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);

  console.log(slidesPerView);
  return (
    <Fragment>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={0}
        loop={true}
        pagination={paginationEnabled ? { dynamicBullets: true } : false}
        autoplay={{
          delay: 152500,
          disableOnInteraction: false,
        }}
        // autoplay={{ delay: 2000 }} 
        modules={[Pagination, Autoplay]} 
        className="mySwiper"

      >
        <div className="flex" id="about">
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative mb-12">
                <div className="flex-col items-center justify-between mx-auto gap-y-5 ">
                  <div className="flex items-center justify-between mx-auto w-fit">
                    <div className="w-[740px] h-fit object-cover relative max-[1450px]:w-[600px] max-[1158px]:w-[500px] max-[558px]:w-[350px] max-[460px]:w-[300px]">
                      <img
                        src={slide.image}
                        alt={'slide ${slide.id}'}
                        className="w-[740px] object-cover  max-[1450px]:w-[600px] max-[1158px]:w-[500px] max-[558px]:w-[350px] max-[460px]:w-[300px] "
                      />
                    </div>
                    <div className="absolute left-1/2 top-[256px]  transform -translate-x-1/2 mb-4 max-[1450px]:top-[220px] max-[1158px]:top-[150px] max-[558px]:top-[50px] max-[460px]:top-0">
                      <div className="flex-col w-[612px] rounded-2xl p-8 gap-6 bg-white max-[1450px]:w-[500px] max-[1158px]:w-[400px]  max-[558px]:w-[250px]  max-[460px]:w-[200px]">
                        <div className="w-fit">
                          <p className="text-[#1B1C57] text-xl font-semibold mb-4 w-fit max-[460px]:text-lg">
                            {slide.testimonial.title}
                          </p>
                          <p className="text-[#626687] opacity-75 text-sm mb-4 max-[1450px]:w-[400px] max-[1158px]:w-[300px]  max-[558px]:w-[200px] max-[460px]:w-[150px]">
                            {slide.testimonial.description}
                          </p>
                        </div>
                        <div className="flex justify-between items-center w-[548px] max-[1450px]:w-[450px] max-[1158px]:w-[350px] max-[558px]:w-[200px] max-[460px]:w-[160px]">
                          <div className="flex justify-between items-center w-full">
                            <div className="flex">
                              <img
                                src={slide.avatar}
                                alt="avatar"
                                className="w-16 h-16"
                              />
                              <div className="flex-col">
                                <p className="text-[#1B1C57] text-lg font-semibold">
                                  {slide.testimonial.name}
                                </p>
                                <p className="text-[#626687] opacity-75 text-sm">
                                  {slide.testimonial.position}
                                </p>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <LiaStarSolid className="text-[#F59E0B] text-3xl" />
                              <p className="text-[#3C4563] text-xl font-semibold">
                                {slide.testimonial.rating}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </Fragment>
  );
};

export default About;