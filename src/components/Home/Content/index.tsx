/** @format */

import React from 'react';
import { Info } from './Info';

import styles from './Content.module.scss';
import { Place } from './Place';

export const Content: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.body}>
        <div className={styles.container}>
          <Place />
          <Info />
        </div>
      </div>
    </section>
  );
};
