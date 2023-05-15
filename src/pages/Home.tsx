/** @format */

import React from 'react';
import { Header } from '../components/Header';

const Home: React.FC = () => {
  return (
    <div className="content">
      <Header />
      <div className="content__body">
        <div className="content__container">
          <div className="place">
            <div className="place__body">
              <div className="place__title">
                find the place to live <span>your dreams</span> easily here
              </div>
              <div className="place__text">
                Everything you need about finding your place to live will be here, where it will be
                easier for you
              </div>
              <div className="place__input">
                <input type="text" placeholder="Search for the location you want!" />
              </div>
              <div className="place__partnership partnership">
                <div className="partnership__title">Our Partnership </div>
                <div className="partnership__images">
                  <div className="partnership__image">
                    <img src="../../img/partners/1.png" alt="partner" />
                  </div>
                  <div className="partnership__image">
                    <img src="../../img/partners/2.png" alt="partner" />
                  </div>
                  <div className="partnership__image">
                    <img src="../../img/partners/3.png" alt="partner" />
                  </div>
                  <div className="partnership__image">
                    <img src="../../img/partners/4.png" alt="partner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="info__body">
              <div className="info__cards">
                <div className="info__card">
                  <div className="info__images">
                    <div className="info__image">
                      <img src="/img/users/1.png" alt="user" />
                    </div>
                    <div className="info__image">
                      <img src="/img/users/2.png" alt="user" />
                    </div>
                    <div className="info__image">
                      <img src="/img/users/3.png" alt="user" />
                    </div>
                  </div>
                  <div className="info__items">
                    <div className="info__title">1K+ People</div>
                    <div className="info__text">Successfully Getting Home</div>
                  </div>
                </div>
                <div className="info__card">
                  <div className="info__images">
                    <div className="info__image">
                      <img src="/img/users/4.png" alt="user" />
                    </div>
                  </div>
                  <div className="info__items">
                    <div className="info__title">56 Houses</div>
                    <div className="info__text">Sold Monthly</div>
                  </div>
                </div>
                <div className="info__card">
                  <div className="info__images">
                    <div className="info__image">
                      <img src="/img/users/5.png" alt="user" />
                    </div>
                  </div>
                  <div className="info__items">
                    <div className="info__title">4K+</div>
                    <div className="info__text">People Looking for New Homes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
