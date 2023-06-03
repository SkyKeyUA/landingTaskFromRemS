/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { IconsEnum, SvgIcon } from '../../../../SvgIcon';

import styles from './User.module.scss';

type UserProps = {
  userImage: string;
  fullName: string;
  position: string;
  rating: number;
};

export const User: React.FC<UserProps> = ({ userImage, fullName, position, rating }) => {
  return (
    <div className={styles.root}>
      <div className={styles.body}>
        <Link className={styles.image} to="/">
          <img src={userImage} alt="user" />
        </Link>
        <div className={styles.items}>
          <div className={styles.fullName}>
            <Link to="/">{fullName}</Link>
          </div>
          <div className={styles.position}>
            <Link to="/">{position}</Link>
          </div>
        </div>
      </div>
      <div className={styles.rating}>
        <Link className={styles.svg} to="/">
          <SvgIcon src={IconsEnum.star} />
        </Link>
        <span>{rating}</span>
      </div>
    </div>
  );
};
