import React from 'react';
import { makeStyles } from '@material-ui/core';
import { textColor, fontFamily, activeColor } from '../common/Scheme';

const useStyles = makeStyles((theme) => ({
  cardCss: {
    width: '150px',
    height: '150px',
    borderRadius: '8px',
    textAlign: 'center',
    paddingTop: '20px',
    cursor: 'pointer',
    '& img': {
      width: '100px',
      height: '80px',
      display: 'block',
      margin: 'auto',
    },
    '& p': {
      textAlign: 'center',
      fontFamily,
      color: textColor,
      fontSize: '16px',
    },
    '&:hover': {
      marginTop: '-4px',
      transition: '0.1s ease-in',
      borderRadius: '0',
    },
  },
}));

function GenreCard({ icon, text, color }) {
  const classes = useStyles();
  const { cardCss } = classes;

  return (
    <section className={cardCss} style={{ background: color }}>
      <img src={icon} alt="" />
      <p>{text}</p>
    </section>
  );
}

export default GenreCard;
