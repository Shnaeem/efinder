import React, { Fragment } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import HomeHeader from '../common/home/HomeHeader';

function Home() {
  return (
    <Fragment>
      <Navbar />
      <HomeHeader />
      <Footer />
    </Fragment>
  );
}

export default Home;
