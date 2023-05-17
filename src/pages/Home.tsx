/** @format */

import React from 'react';
import { IconsEnum, SvgIcon } from '../components/SvgIcon';
import { Content } from '../components/Home/Content';
import { Slider } from '../components/Home/Featured/Slider';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main className="page__home">
      <Content />
      <section className="featured">
        <div className="featured__container">
          <div className="featured__inner">
            <div className="featured__info">Our Recommendation</div>
            <div className="featured__body">
              <div className="featured__title">Featured House</div>
              <div className="featured__categories">
                <ul className="featured__items">
                  <li className="featured__item">
                    <Link to="/">
                      <SvgIcon className="featured__svg" size={18} src={IconsEnum.house} />
                      <span>House</span>
                    </Link>
                  </li>
                  <li className="featured__item">
                    <Link to="/">
                      <SvgIcon className="featured__svg" size={18} src={IconsEnum.villa} />
                      <span>Villa</span>
                    </Link>
                  </li>
                  <li className="featured__item">
                    <Link to="/">
                      <SvgIcon className="featured__svg" size={18} src={IconsEnum.apartment} />
                      <span>Apartment</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Slider />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
