/** @format */

import React from 'react';
import { Header } from '../components/Header';
import { Place } from '../components/Place';
import { Link } from 'react-router-dom';
import { Info } from '../components/Info';
import { IconsEnum, SvgIcon } from '../components/SvgIcon';

const Home: React.FC = () => {
  return (
    <>
      <section className="content">
        <Header />
        <div className="content__body">
          <div className="content__container">
            <Place />
            <Info />
          </div>
        </div>
      </section>
      <section className="featured">
        <div className="featured__container">
          <div className="featured__info">Our Recommendation</div>
          <div className="featured__body">
            <div className="featured__title">Featured House</div>
            <div className="featured__categories">
              <ul className="featured__items">
                <li className="featured__item">
                  <SvgIcon size={18} src={IconsEnum.house} />
                  <span>House</span>
                </li>
                <li className="featured__item">
                  <SvgIcon size={18} src={IconsEnum.villa} />
                  <span>Villa</span>
                </li>
                <li className="featured__item">
                  <SvgIcon size={18} src={IconsEnum.apartment} />
                  <span>Apartment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
