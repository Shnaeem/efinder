import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    width: '230px',
    height: '260px',
    position: 'relative',
    WebkitPerspective: '800px',
    MozPerspective: '800px',
    OPerspective: '800px',
    perspective: '800px',
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
    },
  },
  front: {
    background: 'red',
    position: 'relative',
  },
  back: {
    background: 'blue',
    WebkitTransform: 'rotateY( 180deg )',
    MozTransform: 'rotateY( 180deg )',
    OTransform: 'rotateY( 180deg )',
    transform: 'rotateY( 180deg )',
    '& p': {
      padding: '1px',
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
  },
  imgText: {
    position: 'absolute',
    bottom: '0',
    '& p': {
      position: 'relative',
      marginTop: '150px',
      marginLeft: '20px',
    },
  },
}));

function TrendingCards(props) {
  const classes = useStyles();
  const { container, card, front, back, flipped, imgCss, imgText } = classes;

  const [flip, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <section className={container}>
      <div className={flip ? `${card} ${flipped}` : card} onClick={cardFlip}>
      {/* Front of the card */}
        <div className={front}>
          <img
            className={imgCss}
            src={props.image}
            alt={props.title}
          />
          <div className={imgText}>
            <h1>{props.title}</h1>
            <h4>Date: {props.date}</h4>
          </div>
        </div>

      {/* Back of the card */}
        <div className={back}>
          <p>{props.title}</p>
          <p>Date: {props.date}</p>
          <p>Time: {props.time}</p>
          <p>Venue: {props.venue}</p>
          <p>City: {props.venuecity} {props.venuestate}</p>
          <a href= {props.buyticket}>Buy Tickets Here</a>
        </div>
      </div>
    </section>
  );
}

export default TrendingCards;
