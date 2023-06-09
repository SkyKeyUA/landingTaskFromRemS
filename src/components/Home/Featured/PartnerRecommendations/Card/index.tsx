/** @format */

import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import { HouseDetail } from './HouseDetail';
import { User } from './User';

export const Card: React.FC = () => {
  const images = [
    {
      image: 'img/details/1.jpg',
    },
    {
      image: 'img/details/2.jpg',
    },
    {
      image: 'img/details/3.jpg',
    },
    {
      image: 'img/details/4.jpg',
    },
  ];
  return (
    <div className={styles.inner}>
      <div className={styles.info}>
        <div className={`home__heading ${styles.heading}`}>Ready to Sell!</div>
        <div className={`home__title ${styles.title}`}>Let’s tour and see our house!</div>
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
          <Link
            key={i}
            to="/landingTaskFromRemS/"
            className={`${styles.image} ${styles[`image_${i + 1}`]}`}>
            <img src={obj.image} alt="Image details" />
          </Link>
        ))}
      </div>
    </div>
  );
};
