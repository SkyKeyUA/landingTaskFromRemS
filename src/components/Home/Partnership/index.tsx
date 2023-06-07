/** @format */

import React from 'react';

import styles from './Partnership.module.scss';
import { Card } from './Card';
import { InfoRecommendation } from './InfoRecommendation';

type CardProps = {
  image: string;
  userImage: string;
  fullName: string;
  title: string;
  time: string;
};

export const Partnership: React.FC = () => {
  const recommendation: CardProps[] = [
    {
      image: '/img/partner-recommendations/1.jpg',
      userImage: '/img/users/3.png',
      fullName: 'Dianne Russell',
      title: 'The things we need to check when we want to buy a house',
      time: '4 min read | 25 Apr 2021',
    },
    {
      image: '/img/partner-recommendations/2.jpg',
      userImage: '/img/users/10.png',
      fullName: 'Courtney Henry',
      title: '7 Ways to distinguish the quality of the house we want to buy',
      time: '6 min read | 24 Apr 2021',
    },
    {
      image: '/img/partner-recommendations/3.jpg',
      userImage: '/img/users/11.png',
      fullName: 'Darlene Robertson',
      title: 'The best way to know the quality of the house we want to buy',
      time: '2 min read | 24 Apr 2021',
    },
  ];
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={`home__heading ${styles.heading}`}>
            See tips and trick from our partnership
          </div>
          <div className={styles.title}>Find out more about selling and buying homes</div>
          <button className={styles.btn}>More Artikel</button>
        </div>
        <div className={styles.body}>
          <div className={styles.cards}>
            {recommendation.map((obj, i) => (
              <Card key={i} {...obj} />
            ))}
          </div>
          <InfoRecommendation />
        </div>
      </div>
    </section>
  );
};
