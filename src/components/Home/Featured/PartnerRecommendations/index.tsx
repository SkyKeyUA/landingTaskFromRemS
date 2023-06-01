/** @format */

import React from 'react';

import styles from './PartnerRecommendations.module.scss';
import { HouseDetail } from './HouseDetail';
import { User } from './User';
import { Link } from 'react-router-dom';

export const PartnerRecommendations: React.FC = () => {
  const images = [
    {
      image: '/img/details/1.jpg',
    },
    {
      image: '/img/details/2.jpg',
    },
    {
      image: '/img/details/3.jpg',
    },
    {
      image: '/img/details/4.jpg',
    },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.info}>Ready to Sell!</div>
        <div className={styles.title}>Let’s tour and see our house!</div>
        <div className={styles.body}>
          <div className={styles.text}>
            Houses recommended by our partners that have been curated to become the home of your
            dreams!
          </div>
          <HouseDetail />
          <User />
        </div>
      </div>
      <div className={styles.images}>
        {images.map((obj, i) => (
          <Link key={i} to="/" className={`${styles.image} ${styles[`image_${i + 1}`]}`}>
            <img src={obj.image} alt="Image details" />
          </Link>
        ))}
      </div>
    </div>
  );
};
