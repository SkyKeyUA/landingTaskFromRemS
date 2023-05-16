/** @format */

import React from 'react';
import { IconsEnum, SvgIcon } from '../SvgIcon';

import styles from './Place.module.scss';
import { Partnership } from './Partnership';
import { Link } from 'react-router-dom';

export const Place: React.FC = () => {
  const partnership: string[] = [
    '../../../img/partners/1.png',
    '../../../img/partners/2.png',
    '../../../img/partners/3.png',
    '../../../img/partners/4.png',
  ];
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <div className={styles.title}>
          <Link to="/">
            find the place to live <span>your dreams</span> easily here
          </Link>
        </div>
        <div className={styles.text}>
          Everything you need about finding your place to live will be here, where it will be easier
          for you
        </div>
        <div className={styles.input}>
          <SvgIcon className={styles.svg} src={IconsEnum.location} />
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
