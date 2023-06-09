/** @format */

import React from 'react';

import styles from './InfoRecommendation.module.scss';
import { IconsEnum, SvgIcon } from '../../../SvgIcon';
import { Link } from 'react-router-dom';

export const InfoRecommendation: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Link to="/landingTaskFromRemS/">
          <img src="img/partner-recommendations/4.jpg" alt="house" />
        </Link>
      </div>
      <div className={styles.user ? `user__recommendation ${styles.user}` : 'user__recommendation'}>
        <Link to="/landingTaskFromRemS/">
          <img src="img/users/12.png" alt="user" />
        </Link>
        <Link to="/landingTaskFromRemS/">Cameron Williamson</Link>
      </div>
      <div className={styles.title}>
        <Link to="/landingTaskFromRemS/">12 Things to know before buying a house</Link>
      </div>
      <div className={styles.text}>
        Want to buy a house but are unsure about what we should know, here I will try to explain
        what we should know and check when we want to buy a house
      </div>
      <div className={styles.time ? `time__recommendation ${styles.time}` : 'time__recommendation'}>
        <SvgIcon size={20} src={IconsEnum.clock} />8 min read | 25 Apr 2021
      </div>
    </div>
  );
};
