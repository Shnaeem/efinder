import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import Carousel from '../Carousel';
import { fontFamily, flexBetween } from '../../common/Scheme';
import { Link } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
  linkCss: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
  },
  btnCss: {
    textTransform: 'capitalize',
    fontFamily,
    color: 'black',
  },
}));

function ConcertsHeader({ data }) {
  const classes = useStyles();
  const { headigCss, infoWrapperCss, linkCss, btnCss } = classes;

  return (
    <section>
      <div className={infoWrapperCss}>
        <div>
          <h1 className={headigCss}>Concerts</h1>
        </div>
        <div>
          <Button className={btnCss}>
            <Link to="/concerts" className={linkCss}>
              View All
            </Link>
            <KeyboardArrowRightIcon />
          </Button>
        </div>
      </div>
      <Carousel data={data} />
    </section>
  );
}

export default ConcertsHeader;
