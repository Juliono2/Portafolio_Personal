import React, {useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './SwiperSlider.css';
import { FreeMode, Pagination } from 'swiper/modules';

import Progra_melo from '../../assets/Progra_melo.jpg';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';

function SwiperSlider() {

  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (projectName) => {
    setSelectedProject(projectName);
  }

  const closeModal = () => {
    setSelectedProject(null);
  }

    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card 
              projectName="Proyecto 1"
              githubLink="https://github.com/Juliono2/EjercicioHemeroteca.git" 
              projectPhoto={Progra_melo} 
              openModal={() => openModal("Proyecto 1")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              projectName="Proyecto 2" 
              githubLink="https://github.com/Juliono2/EjercicioHemeroteca.git" 
              projectPhoto={Progra_melo}
              openModal={() => openModal("Proyecto 2")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              projectName="Proyecto 3"
              githubLink="https://github.com/Juliono2/EjercicioHemeroteca.git"
              projectPhoto={Progra_melo} 
              openModal={() => openModal("Proyecto 3")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              projectName="Proyecto 4" 
              githubLink="https://github.com/Juliono2/EjercicioHemeroteca.git" 
              projectPhoto={Progra_melo}
              openModal={() => openModal("Proyecto 4")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card 
              projectName="Proyecto 5" 
              githubLink="https://github.com/Juliono2/EjercicioHemeroteca.git" 
              projectPhoto={Progra_melo}
              openModal={() => openModal("Proyecto 5")}
            />
          </SwiperSlide>
        </Swiper>
        {selectedProject && (
          <Modal onClose={closeModal}>
            <h3>{selectedProject}</h3>
          </Modal>
        )}
      </>
    )
  }

export default SwiperSlider;