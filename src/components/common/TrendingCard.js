import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { textColor, fontFamily, activeColor } from '../common/Scheme';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '240px',
    height: '240px',
    position: 'relative',
    WebkitPerspective: '800px',
    MozPerspective: '800px',
    OPerspective: '800px',
    perspective: '800px',
    margin: '10px',
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    cursor: 'pointer',
    WebkitTransition: '-webkit-transform 1s',
    MozTransition: '-moz-transform 1s',
    OTransition: '-o-transform 1s',
    transition: 'transform 1s',
    WebkitTransformStyle: 'preserve-3d',
    MozTransformStyle: 'preserve-3d',
    OTransformStyle: 'preserve-3d',
    transformStyle: 'preserve-3d',
    WebkitTransformOrigin: '50% 50%',
    '& div': {
      display: 'block',
      height: '100%',
      width: '100%',
      color: 'white',
      position: 'absolute',
      WebkitBackfaceVisibility: 'hidden',
      MozBackfaceVisibility: 'hidden',
      OBackfaceVisibility: 'hidden',
      backfaceVisibility: 'hidden',
      borderRadius: '10px',
    },
  },
  front: {
    background: activeColor,
    position: 'relative',
    zIndex: '1',
  },
  back: {
    zIndex: '2',
    background: '#161719',
    WebkitTransform: 'rotateY( 180deg )',
    MozTransform: 'rotateY( 180deg )',
    OTransform: 'rotateY( 180deg )',
    transform: 'rotateY( 180deg )',
    '& div': {
      marginTop: '2px',
      lineHeight: '1em',
    },
    '& p': {
      padding: '5px 24px',
      margin: '3px',
      color: textColor,
      fontFamily,
      fontSize: '15px',
    },
    '& a': {
      padding: '5px 24px',
      color: activeColor,
      fontFamily,
      fontSize: '15px',
      margin: '5px 0 0 0',
      display: 'block',
    },
  },
  flipped: {
    WebkitTransform: 'rotateY( 180deg )',
    MozTransform: 'rotateY( 180deg )',
    OTransform: 'rotateY( 180deg )',
    transform: 'rotateY( 180deg )',
  },
  imgCss: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  },
  imgTextCss: {
    position: 'absolute',
    bottom: '0',
    '& p': {
      marginLeft: '20px',
      marginBottom: '5px',
    },
    '& h5': {
      marginLeft: '20px',
      marginTop: '5px',
    },
  },
  bottomSectionCss: {
    background: 'rgba(0,0,0,0.4)',
    borderRadius: '0px 0px 10px 10px',
    width: '99%',
    padding: '1px',
    position: 'absolute',
    bottom: '0',
  },
}));

function Card({ image, title, date, time, venue, venuecity, buyticket }) {
  const classes = useStyles();
  const {
    container,
    card,
    front,
    back,
    flipped,
    imgCss,
    imgTextCss,
    bottomSectionCss,
  } = classes;

  const [flip, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <section className={container}>
      <div className={flip ? `${card} ${flipped}` : card} onClick={cardFlip}>
        <div className={front}>
          <img className={imgCss} src={image} alt="" />
          <div className={imgTextCss}>
            <section className={bottomSectionCss}>
              <p>{title}</p>
              <h5>Date: {date}</h5>
            </section>
          </div>
        </div>
        <div className={back}>
          <p>{title}</p>
          <p>Date: {date}</p>
          <p>Time: {time}</p>
          <p>Venue: {venue}</p>
          <p>City: {venuecity}</p>
          <a href={buyticket} target="_blank">
            {' '}
            Buy Tickets Here{' '}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Card;
