/** @format */

import React from 'react';
import styles from './User.module.scss';
import { Link } from 'react-router-dom';
import { IconsEnum, SvgIcon } from '../../../../../SvgIcon';
export const User: React.FC = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.body}>
        <Link className={styles.image} to="/landingTaskFromRemS/">
          <img src="img/users/3.png" alt="user" />
        </Link>
        <div className={styles.items}>
          <div className={styles.fullName}>
            <Link to="/landingTaskFromRemS/">Dianne Russell </Link>
          </div>
          <div className={styles.position}>
            <Link to="/landingTaskFromRemS/">Manager Director</Link>
          </div>
        </div>
      </div>
      <Link to="tel:+1234567890" className={styles.btn}>
        <SvgIcon size={20} className={styles.svg} src={IconsEnum.call} />
        <span>Contact Now</span>
      </Link>
    </div>
  );
};
