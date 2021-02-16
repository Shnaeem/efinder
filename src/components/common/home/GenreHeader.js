import React from 'react';
import { makeStyles } from '@material-ui/core';
import GenreCarousel from '../GenreCarousel';
import { fontFamily, flexBetween } from '../../common/Scheme';

const useStyles = makeStyles((theme) => ({
  headigCss: {
    margin: '20px auto',
    paddingTop: '0',
    fontFamily,
  },
  infoWrapperCss: {
    width: 'auto',
    ...flexBetween,
  },
}));


function GenreHeader() {
  const classes = useStyles();
  const { headigCss } = classes;

  return (
    <section>
      <h1 className={headigCss}>Events By Genre</h1>
      <GenreCarousel />
    </section>
  );
}

export default GenreHeader;
