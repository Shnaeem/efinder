import React, { useState, useEffect } from "react";

import TrendingCards from '../TrendingCards';
import { useSelector, useDispatch } from 'react-redux';
import  FetchData from '../../../action/actions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  mainSectionCss: {
    margin: '24px 32px',
    background: 'white',
    padding: '16px',
  },
}));





function HomeHeader() {
  const classes = useStyles();
  const { mainSectionCss } = classes;
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state.reducer.data);
  // useEffect(() => {
  //   dispatch(fetchDataAction());
  // }, []);

  // console.log(data);

  const [output, setOutput] = useState([]);
  const getAllData = async () => {
    const dataHolder = await FetchData();
    setOutput(dataHolder.data._embedded.events);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <section className={mainSectionCss}>
      <h1>Trending in US:</h1>
      {output.map((apidata, id) => {
              const dataid = apidata.id;
              const img = apidata.images[2].url;
              const name = apidata.name;
              const date = apidata.dates.start.localDate;
              const time = apidata.dates.start.localTime;
              const buyticket = apidata.url;
              {/* const img = apidata.images[3].url */}
              const venue = apidata._embedded.venues[0].name;
              const venuecity = apidata._embedded.venues[0].city.name;
              {/* const venuestate = apidata._embedded.venues[0].state.name; */}
              const eventinfo = apidata.info;


        return (
          <div className ={dataid}>
            <TrendingCards 
              image = {img}
              title = {name}
              date = {date}
              time = {time}
              buyticket = {buyticket}
              venue = {venue}
              venuecity = {venuecity}
              // venuestate = {venuestate}
              info = {eventinfo}
            />
            
          </div>
				)
			})}
{/* 
          <Card/>
          <br/>
          <Card />
          <br/>
          <Card />

 */}

    </section>
  );
}

export default HomeHeader;
