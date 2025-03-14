import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './Slider.css';


const SliderTech = () => {
    const techWords = ['Front-End', 'Back-End', 'System Design', 'AI/ML','SEO', 'SaaS'];
  
    return (
      <div className="slider-wrapper">
        <div className="slider-tech-container">
          <Swiper
            direction="vertical"
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={1000}
          >
            {techWords.map((word, index) => (
              <SwiperSlide key={index}>
                <span>{word}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  };

export default SliderTech;
