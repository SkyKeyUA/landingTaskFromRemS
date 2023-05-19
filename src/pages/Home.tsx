/** @format */

import React from 'react';
import { Content } from '../components/Home/Content';
import { Featured } from '../components/Home/Featured';

const Home: React.FC = () => {
  return (
    <main className="page__home">
      <Content />
      <Featured />
    </main>
  );
};

export default Home;
