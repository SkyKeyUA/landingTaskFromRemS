/** @format */

import React from 'react';

import styles from './Content.module.scss';
import { Place } from './Place';
import { Info } from './Info';

export const Content: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <Place />
        <Info />
      </div>
    </section>
  );
};
