import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/core';
import GenreCard from './GenreCard';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';


const cardData = [
  {
    title: 'Hip Hop Rap',
    color: '#df0000',
    imgUrl: icon1,
  },
  {
    title: 'Rock',
    color: '#7f5afd',
    imgUrl: icon2,
  },
  {
    title: 'Country',
    color: '#ff9052',
    imgUrl: icon3,
  },
  {
    title: 'Alternation',
    color: '#00c029',
    imgUrl: icon4,
  },
  {
    title: 'Punk',
    color: '#0058f7',
    imgUrl: icon5,
  },
  {
    title: 'Latin',
    color: 'tan',
    imgUrl: icon6,
  },
  {
    title: 'Hip Hop Rap',
    color: '#de00c9',
    imgUrl: icon1,
  },
  {
    title: 'Rock',
    color: 'blue',
    imgUrl: icon2,
  },
  {
    title: 'Latin',
    color: 'salmon',
    imgUrl: icon3,
  },
];

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    width: '95%',
    borderRadius: '10px',
    background: 'white',
    marginLeft: '3%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
      display: 'block',
      margin: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '160px',
      display: 'block',
      margin: 'auto',
    },
  },
}));

function GenreCarousel() {
  const classes = useStyles();
  const { slideContainer } = classes;
  const [slides, setSlides] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setSlides(2);
    } else {
      setSlides(5);
    }
    const resizeListener = () => {
      if (window.innerWidth < 1280 && window.innerWidth) {
        setSlides(3);
      } else if (window.innerWidth > 1800) {
        setSlides(6);
      } else {
        setSlides(5);
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slides ? slides : 5,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={slideContainer}>
      <Slider {...settings}>
        {cardData.map((genre, index) => {
          return (
            <GenreCard
              key={index}
              icon={genre.imgUrl}
              text={genre.title}
              color={genre.color}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default GenreCarousel;
