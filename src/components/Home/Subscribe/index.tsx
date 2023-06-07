/** @format */

import React from 'react';
import { IconsEnum, SvgIcon } from '../../SvgIcon';

import styles from './Subscribe.module.scss';
import { Link } from 'react-router-dom';

export const Subscribe: React.FC = () => {
  const houseImage = ['/img/info/1.jpg', '/img/info/2.jpg', '/img/info/3.jpg', '/img/info/4.jpg'];
  const userImage = [
    '/img/users/3.png',
    '/img/users/7.png',
    '/img/users/10.png',
    '/img/users/13.png',
  ];
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        {houseImage.map((image, i) => (
          <Link className={`${styles.image} ${styles[`image_${i + 1}`]}`} key={i} to="/">
            <img src={image} alt="info" />
          </Link>
        ))}
        {userImage.map((image, i) => (
          <Link className={`${styles.user} ${styles[`user_${i + 1}`]}`} key={i} to="/">
            <img src={image} alt="user" />
          </Link>
        ))}
        <div className={`${styles.title} home__title`}>
          Subscribe For More Info and update from Hounter
        </div>
        <form className={styles.form}>
          <SvgIcon size={20} className={styles.svg} src={IconsEnum.mail} />
          <input className={styles.input} type="email" placeholder="Your email here" />
          <button className={styles.btn} type="submit">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};
