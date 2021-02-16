import React from 'react';
import { makeStyles } from '@material-ui/core';
import Carousel from '../Carousel';
import { fontFamily } from '../../common/Scheme';

const useStyles = makeStyles((theme) => ({
  headigCss: {
    marginTop: '0',
    paddingTop: '0',
    fontFamily,
    fontWeight: 'bold',
  },
}));


function HomeHeader({ data }) {
  const classes = useStyles();
  const { headigCss } = classes;

  return (
    <section>
      <h1 className={headigCss}>Trending in US</h1>
      <Carousel data={data} />
    </section>
  );
}

export default HomeHeader;
