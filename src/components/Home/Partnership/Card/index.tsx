/** @format */

import React from 'react';

import styles from './Card.module.scss';
import { Link } from 'react-router-dom';
import { IconsEnum, SvgIcon } from '../../../SvgIcon';

type CardProps = {
  image: string;
  userImage: string;
  fullName: string;
  title: string;
  time: string;
};

export const Card: React.FC<CardProps> = ({ image, userImage, fullName, title, time }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Link to="/landingTaskFromRemS/">
          <img src={image} alt="house" />
        </Link>
      </div>
      <div className={styles.body}>
        <div
          className={styles.user ? `user__recommendation ${styles.user}` : 'user__recommendation'}>
          <Link to="/landingTaskFromRemS/">
            <img src={userImage} alt="user" />
          </Link>
          <Link to="/landingTaskFromRemS/">{fullName}</Link>
        </div>
        <div className={styles.title}>
          <Link to="/landingTaskFromRemS/">{title}</Link>
        </div>
        <div
          className={styles.time ? `time__recommendation ${styles.time}` : 'time__recommendation'}>
          <SvgIcon size={20} src={IconsEnum.clock} />
          {time}
        </div>
      </div>
    </div>
  );
};
