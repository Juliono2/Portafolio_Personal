import React from 'react';
import './Portafolio.css';

import SwiperSlider from '../SwiperSlider/SwiperSlider';

function Portafolio() {
    return (
    <div class="portfolio">
      <div class="portfolio-heading">
        <h2>Mi Portafolio</h2>
        <div class="divider"></div>
      </div>
      <div class="container">
        <SwiperSlider />
      </div>
    </div>)
    
}

export default Portafolio;