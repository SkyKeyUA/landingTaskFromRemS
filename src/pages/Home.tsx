/** @format */

import React from 'react';
import { Content } from '../components/Home/Content';
import { Featured } from '../components/Home/Featured';
import { Reviews } from '../components/Home/Reviews';
import { IconsEnum, SvgIcon } from '../components/SvgIcon';
import { Partnership } from '../components/Home/Partnership';

const Home: React.FC = () => {
  return (
    <main className="page__home">
      <Content />
      <Featured />
      <Reviews />
      <Partnership />
      <section className="subscribe__root">
        <div className="subscribe__container">
          <div className="subscribe__title home__title">
            Subscribe For More Info and update from Hounter
          </div>
          <form className="subscribe__form">
            <SvgIcon className="subscribe__svg" src={IconsEnum.mail} />
            <input className="subscribe__input" type="email" placeholder="Your email here" />
            <button className="subscribe__btn" type="submit">
              Subsribe Now
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
