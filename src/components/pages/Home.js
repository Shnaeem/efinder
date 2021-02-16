import React, { Fragment } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import HomeHeader from '../common/home/HomeHeader';
import ConcertsHeader from '../common/home/ConcertsHeader';
import SportsHeader from '../common/home/SportsHeader';
import GenreHeader from '../common/home/GenreHeader';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainSectionCss: {
    margin: '24px',
    background: 'white',
    padding: '16px 16px 32px 16px',
    minHeight: 'calc(100vh - 193px)',
  },
}));

function Home({ data, concertsData, sportsData }) {
  const classes = useStyles();
  const { mainSectionCss } = classes;
  return (
    <Fragment>
      <Navbar />
      <section className={mainSectionCss}>
        <HomeHeader data={data} />
        <GenreHeader />
        <ConcertsHeader data={concertsData} />
        <SportsHeader data={sportsData} />
      </section>
      <Footer />
    </Fragment>
  );
}

export default Home;
