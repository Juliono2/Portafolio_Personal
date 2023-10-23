import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css';
import './Certifications.css';

function Certifications() {
    return (
        <div class="certifications">
            <h2 class="certifications__subtitle">Mis certificaciones</h2>
            <div class="divider"></div>
            <div class="certifications__data">
                <>
                    <Swiper
                        direction={'vertical'}
                        slidesPerView={2}
                        spaceBetween={20}
                        className="SwiperVertical"
                    >
                        <SwiperSlide className="Swiper-slide-vertical">Certificado 1</SwiperSlide>
                        <SwiperSlide className="Swiper-slide-vertical">Certificado 2</SwiperSlide>
                        <SwiperSlide className="Swiper-slide-vertical">Certificado 3</SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
}

export default Certifications;