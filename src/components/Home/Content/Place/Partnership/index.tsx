/** @format */

import React from 'react';

import styles from './Partnership.module.scss';

export const Partnership: React.FC = () => {
  const partnership: string[] = [
    '/img/partners/1.png',
    '/img/partners/2.png',
    '/img/partners/3.png',
    '/img/partners/4.png',
  ];
  return (
    <div className={styles.root}>
      <div className={styles.title}>Our Partnership </div>
      <div className={styles.images}>
        {partnership.map((obj, index) => (
          <div key={index} className={styles.image}>
            <img src={obj} alt="partner" />
          </div>
        ))}
      </div>
    </div>
  );
};
