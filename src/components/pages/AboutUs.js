import React, { Fragment } from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainSectionCss: {
    margin: '2',
    background: 'white',
    padding: '16px',
    minHeight: 'calc(100vh - 193px)',
    '& p': {
        padding: '1.5em',
        color: "black",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 'calc(1em + 0.5vw)',
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: '15px',
      },
},

}));


function AboutUs({ concertsData }) {
  const classes = useStyles();
  const { mainSectionCss } = classes;
  return (
    <Fragment>
      <Navbar />
      <section className={mainSectionCss}>
        <p >
        <strong>eFinder </strong> is an application that allows users to find concerts and sporting events. Instead of barraging users with endless search results that get seemingly less and less relevant as they go on, eFinder simply displays the top most relevant results, giving users a less overwhelming amount of search results.<br/><br/>
        We believe live music and sporting events brings people together through unique communal experiences. eFinder is a fans’ most trusted source of concert and sports discovery. It was designed and developed by Front End Developers Naeem Shafi & Katherine Fernandez and will include many new features and updates very soon.
        </p>
      </section>
      <Footer />
    </Fragment>
  );
}

export default AboutUs;
