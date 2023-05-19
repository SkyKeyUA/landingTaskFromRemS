/** @format */

import React from 'react';
import { Slider } from './Slider';

import styles from './Featured.module.scss';

export const Featured = () => {
  return (
    <section className={styles.root}>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.info}>Our Recommendation</div>
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};