import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { makeStyles } from '@material-ui/core';
import TrendingCard from './TrendingCard';

const useStyles = makeStyles((theme) => ({
  slideContainer: {
    width: '95%',
    borderRadius: '10px',
    background: 'white',
    marginLeft: '2%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
      display: 'block',
      margin: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: '250px',
      display: 'block',
      margin: 'auto',
    },
  },
}));


function Carousel({ data }) {
  const classes = useStyles();
  const { slideContainer } = classes;
  const [slides, setSlides] = useState(null);
  const [infinite, setInfinit] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1280) {
      setSlides(2);
      setInfinit(true);
    } else {
      setSlides(4);
      setInfinit(false);
    }
    const resizeListener = () => {
      if (window.innerWidth < 1280) {
        setSlides(2);
        setInfinit(true);
      } else if (window.innerWidth > 1800) {
        setSlides(6);
      } else {
        setSlides(4);
        setInfinit(false);
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: infinite,
    speed: 500,
    slidesToShow: slides ? slides : 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
        {data.map((apidata, index) => {
          return (
            <TrendingCard
              key={index}
              image={apidata.images[2].url}
              title={apidata.name}
              info={apidata.info}
              date={apidata.dates.start.localDate}
              time={apidata.dates.start.localTime}
              venue={apidata._embedded.venues[0].name}
              venuecity={apidata._embedded.venues[0].city.name}
              buyticket={apidata.url}
            />
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
