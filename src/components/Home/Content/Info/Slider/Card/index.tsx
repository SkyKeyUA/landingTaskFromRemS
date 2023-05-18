/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './InfoCard.module.scss';

type InfoCardProps = {
  images: string[];
  title: string;
  text: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({ images, title, text }) => {
  return (
    <div className={styles.body}>
      <div className={styles.images}>
        {images.map((image, i) => (
          <div
            key={i}
            className={
              images.length > 1 ? `${styles.image} ${styles[`image_${i + 1}`]}` : styles.image
            }>
            <Link to="/">
              <img src={image} alt="user" />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.items}>
        <div className={styles.title}>
          <Link to="/">{title}</Link>
        </div>
        <div className={styles.text}>
          <Link to="/">{text}</Link>
        </div>
      </div>
    </div>
  );
};
