/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';

import { IconsEnum } from '../../../SvgIcon';
import { FeaturedHouse } from './FeaturedHouse';

import { Autoplay } from 'swiper';

type FeaturedHouseProps = {
  image: string;
  icon: IconsEnum;
  sort: string;
  title: string;
  text: string;
  user: string;
  fullname: string;
  location: string;
};

export const Slider = () => {
  const featuredHouses: FeaturedHouseProps[] = [
    {
      image: '/img/recommendation/1.jpg',
      icon: IconsEnum.popular,
      sort: 'Popular',
      title: 'Roselands House',
      text: '$ 35.000.000',
      user: '/img/users/3.png',
      fullname: 'Dianne Russell',
      location: 'Manchester, Kentucky',
    },
    {
      image: '/img/recommendation/2.jpg',
      icon: IconsEnum.house,
      sort: 'New house',
      title: 'Woodlandside',
      text: '$ 20.000.000',
      user: '/img/users/6.png',
      fullname: 'Robert Fox',
      location: 'Dr. San Jose, South Dakota',
    },
    {
      image: '/img/recommendation/3.jpg',
      icon: IconsEnum.bestDeals,
      sort: 'Best Deals',
      title: 'The Old Lighthouse',
      text: '$ 44.000.000',
      user: '/img/users/7.png',
      fullname: 'Ronald Richards',
      location: 'Santa Ana, Illinois',
    },
    {
      image: '/img/recommendation/4.jpg',
      icon: IconsEnum.popular,
      sort: 'Popular',
      title: "Cosmo's House",
      text: '$ 22.000.000',
      user: '/img/users/8.png',
      fullname: 'Jenny Wilson',
      location: 'Preston Rd. Inglewood, Maine 98380',
    },
    {
      image: '/img/recommendation/1.jpg',
      icon: IconsEnum.popular,
      sort: 'Popular',
      title: 'Roselands House',
      text: '$ 35.000.000',
      user: '/img/users/3.png',
      fullname: 'Dianne Russell',
      location: 'Manchester, Kentucky',
    },
    {
      image: '/img/recommendation/2.jpg',
      icon: IconsEnum.house,
      sort: 'New house',
      title: 'Woodlandside',
      text: '$ 20.000.000',
      user: '/img/users/6.png',
      fullname: 'Robert Fox',
      location: 'Dr. San Jose, South Dakota',
    },
    {
      image: '/img/recommendation/3.jpg',
      icon: IconsEnum.bestDeals,
      sort: 'Best Deals',
      title: 'The Old Lighthouse',
      text: '$ 44.000.000',
      user: '/img/users/7.png',
      fullname: 'Ronald Richards',
      location: 'Santa Ana, Illinois',
    },
    {
      image: '/img/recommendation/4.jpg',
      icon: IconsEnum.popular,
      sort: 'Popular',
      title: "Cosmo's House",
      text: '$ 22.000.000',
      user: '/img/users/8.png',
      fullname: 'Jenny Wilson',
      location: 'Preston Rd. Inglewood, Maine 98380',
    },
  ];
  return (
    <Swiper
      className="featuredHouse__swiper"
      spaceBetween={40}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      slidesPerView={3.16}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      {featuredHouses.map((obj: any, index: number) => (
        <SwiperSlide key={index}>
          <FeaturedHouse {...obj} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
