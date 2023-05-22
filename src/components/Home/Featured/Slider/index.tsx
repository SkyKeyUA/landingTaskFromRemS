/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/scss';
import styles from './Slider.module.scss';

import { Navigation } from 'swiper';

import { IconsEnum, SvgIcon } from '../../../SvgIcon';
import { FeaturedHouse } from './FeaturedHouse';
import { Categories } from './Categories';
import { useSelector } from 'react-redux';
import { selectFeaturedHouseData } from '../../../../redux/slices/featuredHouse/selectors';
import { useAppDispatch } from '../../../../redux/store';
import { fetchFeaturedHouse } from '../../../../redux/slices/featuredHouse/asyncActions';
import { Skeleton } from './FeaturedHouse/Skeleton';
import { selectFilter } from '../../../../redux/slices/filter/selectors';
import { setCategoryId } from '../../../../redux/slices/filter/slice';

export const Slider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { categoryId } = useSelector(selectFilter);
  const { items, status } = useSelector(selectFeaturedHouseData);

  const onClickCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);
  React.useEffect(() => {
    dispatch(fetchFeaturedHouse());
  }, [dispatch]);
  const skeletons = [...new Array(3)].map((_, index) => <Skeleton key={index} />);
  const itemsFilter = items.filter((obj) => {
    return obj.category === categoryId + 1;
  });
  return (
    <>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.title}>Featured House</div>
          <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
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
        {status === 'loading'
          ? skeletons
          : itemsFilter.map((obj: any) => (
              <SwiperSlide key={obj.id}>
                <FeaturedHouse {...obj} />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};
