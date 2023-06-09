/** @format */

import React from 'react';

import styles from './Place.module.scss';
import { Partnership } from './Partnership';
import { Link } from 'react-router-dom';
import { IconsEnum, SvgIcon } from '../../../SvgIcon';

export const Place: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.title}>
          <Link to="/landingTaskFromRemS/">
            find the place to live <span>your dreams</span> easily here
          </Link>
        </div>
        <div className={styles.text}>
          Everything you need about finding your place to live will be here, where it will be easier
          for you
        </div>
        <div className={styles.input}>
          <SvgIcon size={22} className={styles.svg} src={IconsEnum.location} />
          <input type="text" placeholder="Search for the location you want!" />
          <button className={styles.btn}>
            <span>Search</span>
            <SvgIcon size={24} src={IconsEnum.arrow} />
          </button>
        </div>
        <Partnership />
      </div>
    </div>
  );
};
