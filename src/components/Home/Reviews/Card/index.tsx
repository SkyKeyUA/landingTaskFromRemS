/** @format */

import React from 'react';

import { User } from './User';

import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

type CardReviewsProps = {
  image: string;
  title: string;
  text: string;
  user: {
    userImage: string;
    fullName: string;
    position: string;
  };
  rating: number;
};

export const Card: React.FC<CardReviewsProps> = ({ image, title, text, rating, user }) => {
  const { userImage, fullName, position } = user;
  return (
    <div className={styles.root}>
      <Link to="/">
        <img className={styles.image} src={image} alt="House" />
      </Link>
      <div className={styles.body}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
        <User userImage={userImage} fullName={fullName} position={position} rating={rating} />
      </div>
    </div>
  );
};
