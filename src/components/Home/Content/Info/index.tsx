/** @format */

import React from 'react';

import styles from './Info.module.scss';
import { InfoSlider } from './Slider';

export const Info: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.cards}>
          <InfoSlider />
        </div>
      </div>
    </div>
  );
};
