import React from 'react';
import SwiperAuto from "../SwiperAuto/SwiperAuto";
import './Certifications.css';



function Certifications() {
    const certificateImages = [];
    return (
        <div class="certifications">
            <h2 class="certifications__subtitle">Mis certificaciones</h2>
            <div class="divider"></div>
            <div class="certifications__data">
                <SwiperAuto images={certificateImages} slidesToShow={3} vertical={true} />
            </div>
        </div>
    );
}

export default Certifications;