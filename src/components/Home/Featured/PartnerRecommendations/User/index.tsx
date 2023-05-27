/** @format */

import React from 'react';
import styles from './User.module.scss';
import { IconsEnum, SvgIcon } from '../../../../SvgIcon';
export const User: React.FC = () => {
  return (
    <div className={styles.inner}>
      <img className={styles.image} src="/img/users/3.png" alt="user" />
      <div className={styles.body}>
        <div className={styles.fullName}>Dianne Russell</div>
        <div className={styles.position}>Manager Director</div>
      </div>
      <button className={styles.btn}>
        <SvgIcon src={IconsEnum.call} />
        <span>Contact Now</span>
      </button>
    </div>
  );
};
