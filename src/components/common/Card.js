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
      padding: '16px',
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

function Card() {
  const classes = useStyles();
  const { container, card, front, back, flipped, imgCss, imgText } = classes;

  const [flip, setFlip] = useState(false);

  const cardFlip = () => {
    setFlip(!flip);
  };

  return (
    <section className={container}>
      <div className={flip ? `${card} ${flipped}` : card} onClick={cardFlip}>
        <div className={front}>
          <img
            className={imgCss}
            src="https://cdn.pixabay.com/photo/2020/12/14/15/48/light-bulb-5831252_960_720.jpg"
            alt=""
          />
          <div className={imgText}>
            <p>Text will go here</p>
          </div>
        </div>
        <div className={back}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            eligendi quam debitis tenetur repellat quidem at quis esse atque,
            laboriosam doloribus unde voluptate dolores, ipsum animi. Aliquam id
            eum saepe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
