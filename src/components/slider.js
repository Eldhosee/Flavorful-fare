import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles/slider.css";


import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper

                spaceBetween={10}

                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={props.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        controls

                        src={props.videos}
                        type="video/mp4"
                    />
                </SwiperSlide>

            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={props.img} />
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        muted

                        src={props.videos}
                        type="video/mp4"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
