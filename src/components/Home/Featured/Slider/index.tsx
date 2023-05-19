/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import styles from './Slider.module.scss';

import { Navigation } from 'swiper';

import { IconsEnum, SvgIcon } from '../../../SvgIcon';
import { FeaturedHouse } from './FeaturedHouse';
import { Link } from 'react-router-dom';

type categoriesProps = {
  icon: IconsEnum;
  category: string;
};

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
  const categories: categoriesProps[] = [
    {
      icon: IconsEnum.house,
      category: 'House',
    },
    {
      icon: IconsEnum.villa,
      category: 'Villa',
    },
    {
      icon: IconsEnum.apartment,
      category: 'Apartment',
    },
  ];
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
    <>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.title}>Featured House</div>
          <div className={styles.categories}>
            <ul className={styles.items}>
              {categories.map((obj, index) => (
                <li key={index} className={styles.item}>
                  <Link to="/">
                    <SvgIcon className={styles.svg} size={18} src={obj.icon} />
                    <span>{obj.category}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.prev}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
          <div className={styles.next}>
            <SvgIcon size={28} src={IconsEnum.arrow} />
          </div>
        </div>
      </div>
      <Swiper
        className={styles.swiper}
        spaceBetween={40}
        // slidesPerGroup={3}
        slidesPerView={3.16}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
          disabledClass: 'swiper-button-disabled',
        }}
        loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3.16,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {featuredHouses.map((obj: any, index: number) => (
          <SwiperSlide key={index}>
            <FeaturedHouse {...obj} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
