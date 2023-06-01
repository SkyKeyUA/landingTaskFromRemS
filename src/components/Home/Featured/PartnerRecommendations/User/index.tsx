/** @format */

import React from 'react';
import styles from './User.module.scss';
import { IconsEnum, SvgIcon } from '../../../../SvgIcon';
import { Link } from 'react-router-dom';
export const User: React.FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.body}>
        <Link className={styles.image} to="/">
          <img src="/img/users/3.png" alt="user" />
        </Link>
        <div className={styles.items}>
          <div className={styles.fullName}>
            <Link to="/">Dianne Russell </Link>
          </div>
          <div className={styles.position}>
            <Link to="/">Manager Director</Link>
          </div>
        </div>
      </div>
      <button className={styles.btn}>
        <SvgIcon className={styles.svg} src={IconsEnum.call} />
        <span>Contact Now</span>
      </button>
    </div>
  );
};
