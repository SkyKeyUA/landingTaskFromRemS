/** @format */

import React from 'react';

import styles from './PartnerRecommendations.module.scss';
import { HouseDetail } from './HouseDetail';
import { User } from './User';

export const PartnerRecommendations: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.body}>
          <div className={styles.info}>Ready to Sell!</div>
          <div className={styles.title}>Let’s tour and see our house!</div>
          <div className={styles.text}>
            Houses recommended by our partners that have been curated to become the home of your
            dreams!
          </div>
          <HouseDetail />
        </div>
        <User />
      </div>
      <div className={styles.images}></div>
    </div>
  );
};
