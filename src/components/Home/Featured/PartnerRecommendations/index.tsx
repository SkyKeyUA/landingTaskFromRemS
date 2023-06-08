/** @format */

import React from 'react';

import { Card } from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper';

import styles from './PartnerRecommendations.module.scss';

export const PartnerRecommendations: React.FC = () => {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={80}
      loop={true}
      noSwiping={true}
      noSwipingClass={styles.swiper}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
      <SwiperSlide>
        <Card />
      </SwiperSlide>
    </Swiper>
  );
};
