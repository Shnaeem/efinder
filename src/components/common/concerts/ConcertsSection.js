import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import TrendingCard from '../TrendingCard';
import { fontFamily } from '../../common/Scheme';

const useStyles = makeStyles((theme) => ({
  concertsSectionCss: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  headingCss: {
    fontFamily,
    marginTop: '2px',
    marginBottom: '10px',
    paddingTop: '0',
  },
}));


function ConcertsSection({ concertsData }) {
  const classes = useStyles();
  const { concertsSectionCss, headingCss } = classes;

  return (
    <Fragment>
      <h1 className={headingCss}>Concerts</h1>
      <section className={concertsSectionCss}>
        {concertsData.map((apidata, index) => {
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
      </section>
    </Fragment>
  );
}

export default ConcertsSection;
