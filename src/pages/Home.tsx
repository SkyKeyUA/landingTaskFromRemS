/** @format */

import React from 'react';
import { Content } from '../components/Home/Content';
import { Featured } from '../components/Home/Featured';
import { Reviews } from '../components/Home/Reviews';
import { IconsEnum, SvgIcon } from '../components/SvgIcon';

const Home: React.FC = () => {
  return (
    <main className="page__home">
      <Content />
      <Featured />
      <Reviews />
      <div className="partnership__root">
        <div className="partnership__container">
          <div className="partnership__inner">
            <div className="partnership__heading">See tips and trick from our partnership</div>
            <div className="partnership__title">Find out more about selling and buying homes</div>
            <button className="partnership__btn">More Artikel</button>
          </div>
          <div className="recommendation__root">
            <div className="recommendation__left">
              <div className="recommendation__info">
                <div className="recommendation__image">
                  <img src="/img/partner-recommendations/1.jpg" alt="house" />
                </div>
                <div className="recommendation__body">
                  <div className="recommendation__user">
                    <img src="/img/users/3.png" alt="user" />
                    <span>Dianne Russell</span>
                  </div>
                  <div className="recommendation__title">
                    The things we need to check when we want to buy a house
                  </div>
                  <div className="recommendation__time">
                    <SvgIcon src={IconsEnum.clock} />
                    <span>4 min read | 25 Apr 2021</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="infoRecommendation__root">
              <div className="infoRecommendation__image">
                <img src="/img/partner-recommendations/4.jpg" alt="house" />
              </div>
              <div className="infoRecommendation__user">
                <img src="/img/users/12.png" alt="user" />
                <span>Cameron Williamson</span>
              </div>
              <div className="infoRecommendation__title">
                12 Things to know before buying a house
              </div>
              <div className="infoRecommendation__text">
                Want to buy a house but are unsure about what we should know, here I will try to
                explain what we should know and check when we want to buy a house
              </div>
              <div className="infoRecommendation__time">
                <SvgIcon src={IconsEnum.clock} />
                <span>8 min read | 25 Apr 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
