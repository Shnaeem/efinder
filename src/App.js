import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/pages/Home';
import Concerts from './components/pages/Concerts';
import Sports from './components/pages/Sports';
import AboutUs from './components/pages/AboutUs'

import './App.css';
import axios from 'axios';

// Concerts Header Data

const masterUrl = "https://app.ticketmaster.com/discovery/v2";

function App() {
  const [output, setOutput] = useState([]);
  const [concertoutput, setConcertOutput] = useState([]);
  const [sportoutput, setSportOutput] = useState([]);
  const getData = async () => {
    // let url1 =`${masterUrl}/events?apikey=ZQnFUWNUnfJEvDniHy63e5J9OdVNGZcV&locale=en-us`;
    let url1 =`${masterUrl}/events?apikey=ZQnFUWNUnfJEvDniHy63e5J9OdVNGZcV&locale=en-us&stateCode=ny&preferredCountry=us`;
    
    let res1 = await axios.get(url1);
    setOutput(res1.data._embedded.events);
  };

  const getData2 = async () => {
    let url2 =`${masterUrl}/events?apikey=ZQnFUWNUnfJEvDniHy63e5J9OdVNGZcV&locale=en-us&sort=date,asc&classificationName=concert&preferredCountry=us`;
    let res2 = await axios.get(url2);
    setConcertOutput(res2.data._embedded.events);
  };

  const getData3 = async () => {
    let url3 =`${masterUrl}/events?apikey=ZQnFUWNUnfJEvDniHy63e5J9OdVNGZcV&locale=en-us&sort=date,asc&classificationName=sports&preferredCountry=us`;
    let res3 = await axios.get(url3);
    setSportOutput(res3.data._embedded.events);
  };

  useEffect(() => {
    getData();
    getData2();
    getData3();
  }, []);


  console.log(output);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home data={output} concertsData={concertoutput} sportsData={sportoutput}/>}
        />
        <Route
          exact
          path="/concerts"
          render={() => <Concerts concertsData={concertoutput} />}
        />
        <Route
          exact
          path="/sports"
          render={() => <Sports sportsData={sportoutput} />}
        />

        {/* <Route
          exact
          path="/genre/:query"
          render={() => <Sports sportsData={sportoutput} />}
        /> */}

        <Route
          exact
          path="/aboutus"
          render={() => <AboutUs />}
        />

      </Switch>
    </BrowserRouter>
  );
}

export default App;