/** @format */

import React from 'react';
import { Content } from '../components/Home/Content';
import { Featured } from '../components/Home/Featured';
import { Reviews } from '../components/Home/Reviews';
import { Partnership } from '../components/Home/Partnership';
import { Subscribe } from '../components/Home/Subscribe';

const Home: React.FC = () => {
  return (
    <main className="page__home">
      <Content />
      <Featured />
      <Reviews />
      <Partnership />
      <Subscribe />
    </main>
  );
};

export default Home;
