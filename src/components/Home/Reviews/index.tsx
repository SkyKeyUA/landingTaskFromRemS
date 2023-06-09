/** @format */

import React from 'react';
import { Card } from './Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import styles from './Reviews.module.scss';
import 'swiper/scss';
import 'swiper/scss/pagination';

type CardReviewsProps = {
  image: string;
  title: string;
  text: string;
  user: {
    userImage: string;
    fullName: string;
    position: string;
  };
  rating: number;
};

export const Reviews: React.FC = () => {
  const CardReviews: CardReviewsProps[] = [
    {
      image: 'img/reviews/3.jpg',
      title: 'My house sold out fast!',
      text: 'I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!',
      user: {
        userImage: 'img/users/9.png',
        fullName: 'Courtney Henry',
        position: 'CEO Andarafish',
      },
      rating: 4.3,
    },
    {
      image: 'img/reviews/1.jpg',
      title: 'Best! I got the house I wanted through Hounter',
      text: 'Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.',
      user: {
        userImage: 'img/users/3.png',
        fullName: 'Dianne Russell',
        position: 'Manager Director',
      },
      rating: 4.6,
    },
    {
      image: 'img/reviews/2.jpg',
      title: 'Through the Hounter, I can get a house for my self',
      text: 'By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!',
      user: {
        userImage: 'img/users/1.png',
        fullName: 'Esther Howard',
        position: 'Head of Marketing',
      },
      rating: 4.6,
    },
  ];
  return (
    <section className={styles.root}>
      <div className={styles.containter}>
        <div className={`home__heading ${styles.heading}`}>See Our Review</div>
        <div className={`home__title ${styles.title}`}>What Our User Say About Us</div>
        <div className={styles.body}>
          <Swiper
            spaceBetween={56}
            slidesPerView={1}
            loop={true}
            pagination={true}
            initialSlide={1}
            className={styles.swiper}
            modules={[Pagination]}>
            {CardReviews.map((obj, i) => (
              <SwiperSlide key={i}>
                <Card {...obj} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
