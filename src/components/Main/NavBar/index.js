import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
export default function Navbar() {
    return (
        <div className="container"><br />
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide> <img src="images/bn1.png " width="1100" alt="" /></SwiperSlide>
                <SwiperSlide><img src="images/bn.png" width="1100" /></SwiperSlide>

            </Swiper>


        </div>

    )
}