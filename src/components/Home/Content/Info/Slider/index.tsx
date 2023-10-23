/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import styles from './InfoSlider.module.scss';

import { Autoplay } from 'swiper';
import { InfoCard } from './Card';

type InfoCardProps = {
  images: string[];
  title: string;
  text: string;
};

export const InfoSlider: React.FC = () => {
  const infoCards: InfoCardProps[] = [
    {
      images: ['img/users/1.png', 'img/users/2.png', 'img/users/3.png'],
      title: '1K+ People',
      text: 'Successfully Getting Home',
    },
    {
      images: ['img/users/4.png'],
      title: '56 Houses',
      text: 'Sold Monthly',
    },
    {
      images: ['img/users/5.png'],
      title: '4K+',
      text: 'People Looking for New Homes',
    },
    {
      images: ['img/users/1.png', 'img/users/2.png', 'img/users/3.png'],
      title: '1K+ People',
      text: 'Successfully Getting Home',
    },
    {
      images: ['img/users/4.png'],
      title: '56 Houses',
      text: 'Sold Monthly',
    },
    {
      images: ['img/users/5.png'],
      title: '4K+',
      text: 'People Looking for New Homes',
    },
  ];
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={16}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      slidesPerView={2.782}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {infoCards.map((obj: any, index: number) => (
        <SwiperSlide className={styles.slide} key={index}>
          <InfoCard {...obj} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
