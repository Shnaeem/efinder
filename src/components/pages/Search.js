import React, { Fragment, useEffect } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import SearchSection from '../common/search/SearchSection';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainSectionCss: {
    margin: '24px',
    background: 'white',
    padding: '16px',
    minHeight: 'calc(100vh - 193px)',
  },
}));

function Search({ searchData }) {
  const classes = useStyles();
  const { mainSectionCss } = classes;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <Navbar />
      <section className={mainSectionCss}>
        <SearchSection searchData={searchData} />
      </section>
      <Footer />
    </Fragment>
  );
}

export default Search;
