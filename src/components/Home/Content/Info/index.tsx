/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Info.module.scss';

type InfoCard = {
  images: string[];
  title: string;
  text: string;
};

export const Info: React.FC = () => {
  const infoCards: InfoCard[] = [
    {
      images: ['/img/users/1.png', '/img/users/2.png', '/img/users/3.png'],
      title: '1K+ People',
      text: 'Successfully Getting Home',
    },
    {
      images: ['/img/users/4.png'],
      title: '56 Houses',
      text: 'Sold Monthly',
    },
    {
      images: ['/img/users/5.png'],
      title: '4K+',
      text: 'People Looking for New Homes',
    },
  ];
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.cards}>
          {infoCards.map((obj, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.images}>
                {obj.images.map((image, i) => (
                  <div
                    key={i}
                    className={
                      obj.images.length > 1
                        ? `${styles.image} ${styles[`image_${i + 1}`]}`
                        : styles.image
                    }>
                    <Link to="/">
                      <img src={image} alt="user" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className={styles.items}>
                <div className={styles.title}>
                  <Link to="/">{obj.title}</Link>
                </div>
                <div className={styles.text}>
                  <Link to="/">{obj.text}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
