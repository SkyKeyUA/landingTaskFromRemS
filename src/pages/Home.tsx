/** @format */

import React from 'react';
import { Header } from '../components/Header';
import { Place } from '../components/Place';
import { Link } from 'react-router-dom';

type InfoCard = {
  images: string[];
  title: string;
  text: string;
};

const Home: React.FC = () => {
  const infoCards: InfoCard[] = [
    {
      images: ['/img/users/1.png', '/img/users/2.png', '/img/users/3.png'],
      title: '1K+ People',
      text: 'Successfully Getting Home',
    },
    {
      images: ['/img/users/4.png'],
      title: '56 Houses',
      text: 'Sold Monthly',
    },
    {
      images: ['/img/users/5.png'],
      title: '4K+',
      text: 'People Looking for New Homes',
    },
  ];
  return (
    <div className="content">
      <Header />
      <div className="content__body">
        <div className="content__container">
          <Place />
          <div className="info">
            <div className="info__body">
              <div className="info__cards">
                {infoCards.map((obj, index) => (
                  <div key={index} className="info__card">
                    <div className="info__images">
                      {obj.images.map((image, i) => (
                        <div
                          key={i}
                          className={
                            obj.images.length > 1
                              ? 'info__image ' + `info__image_${i + 1}`
                              : 'info__image'
                          }>
                          <Link to="/">
                            <img src={image} alt="user" />
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="info__items">
                      <div className="info__title">
                        <Link to="/">{obj.title}</Link>
                      </div>
                      <div className="info__text">
                        <Link to="/">{obj.text}</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
