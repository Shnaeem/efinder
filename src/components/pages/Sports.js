import React, { Fragment, useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import SportsSection from '../common/sports/SportsSection';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainSectionCss: {
    margin: '24px',
    background: 'white',
    padding: '16px',
    minHeight: 'calc(100vh - 193px)',
  },
}));

function Sports({ sportsData }) {
  const classes = useStyles();
  const { mainSectionCss } = classes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Navbar />
      <section className={mainSectionCss}>
        <SportsSection sportsData={sportsData} />
      </section>
      <Footer />
    </Fragment>
  );
}

export default Sports;
