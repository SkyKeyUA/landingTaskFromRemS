/** @format */

import React from 'react';
import { FeaturedHouse } from './FeaturedHouse';

import styles from './Featured.module.scss';
import { PartnerRecommendations } from './PartnerRecommendations';

export const Featured = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.heading}>Our Recommendation</div>
          <FeaturedHouse />
        </div>
        <PartnerRecommendations />
      </div>
    </section>
  );
};
