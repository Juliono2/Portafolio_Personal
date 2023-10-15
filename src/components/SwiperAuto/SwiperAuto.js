import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperAuto.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function SwiperAuto({ images }) {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiperAuto"
        loop={true}
      >
        {images.map((image, index) => (
            <SwiperSlide key={index} className='swiper-slide-auto'>
                <img src={image} alt={`Skill ${index + 1}`} />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperAuto;