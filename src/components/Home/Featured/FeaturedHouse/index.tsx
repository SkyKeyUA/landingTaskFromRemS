/** @format */

import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/scss';
import styles from './FeaturedHouse.module.scss';

import { Navigation } from 'swiper';

import { Card } from './Card';
import { Categories } from './Categories';
import { useSelector } from 'react-redux';
import { selectFeaturedHouseData } from '../../../../redux/slices/featuredHouse/selectors';
import { useAppDispatch } from '../../../../redux/store';
import { fetchFeaturedHouse } from '../../../../redux/slices/featuredHouse/asyncActions';
import { Skeleton } from './Card/Skeleton';
import { selectFilter } from '../../../../redux/slices/filter/selectors';
import { setCategoryId } from '../../../../redux/slices/filter/slice';
import { IconsEnum, SvgIcon } from '../../../SvgIcon';

export const FeaturedHouse: React.FC = () => {
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
          <div className={`home__title ${styles.title}`}>Featured House</div>
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
      {status === 'loading' ? (
        skeletons
      ) : (
        <Swiper
          className={styles.swiper}
          spaceBetween={40}
          // slidesPerGroup={3}
          noSwiping={true}
          noSwipingClass={styles.swiper}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.next}`,
            prevEl: `.${styles.prev}`,
            disabledClass: 'swiper-button-disabled',
          }}
          loop={true}
          breakpoints={{
            399.98: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            539.98: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            659.98: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            767.98: {
              slidesPerView: 2.16,
            },
            991.98: {
              slidesPerView: 2.5,
            },
            1099.98: {
              slidesPerView: 3,
            },
            1199.98: {
              slidesPerView: 3.16,
              spaceBetween: 40,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {itemsFilter.map((obj: any) => (
            <SwiperSlide key={obj.id}>
              <Card {...obj} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
