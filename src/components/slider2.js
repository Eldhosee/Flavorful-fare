import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles/slider2.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useNavigate } from "react-router-dom";

export default function Silder2(params) {
    const navigate=useNavigate();
    const handleClick=(id)=>{
  
        navigate('/recipe/details',{state:id});
      }



    return (
        <>
            <Swiper


                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: "fraction",
                }}
                loop={true}
                rewind={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper3"
                breakpoints={{
                   100:{
                    slidesPerView: 3,
                   },
                   300:{
                    slidesPerView: 4,
                   },
                    1000: {
                      slidesPerView: 9,
                    },
                    500:{ slidesPerView: 7,},
                    
                  }}
            >
                <div className="similar-div">
                {params.data.map((datas)=>(<SwiperSlide key={datas.id}  className="my-swiper-slide">              <div onClick={() => handleClick(datas.id)} className="my-swiper-slide">
                <img
                  src={datas.thumbnail_url}
                  alt="similar images"
                  className="similar-images"
                />
              </div></SwiperSlide>))}
                </div>
                
            </Swiper>


        </>
    );
}
