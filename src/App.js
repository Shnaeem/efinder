import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './components/pages/Home';
import Concerts from './components/pages/Concerts';
import Sports from './components/pages/Sports';
import './App.css';
import axios from 'axios';

// Concerts Header Data

const concertsData = [
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
  {
    images: [
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
      {
        url:
          'https://cdn.pixabay.com/photo/2014/05/03/01/02/concert-336695__340.jpg',
      },
    ],

    name: 'Concert Name',

    dates: { start: { localTime: 'time', localDate: 'date' } },

    _embedded: {
      venues: [{ name: 'venues name', city: { name: 'city name' } }],
    },
    url: 'https://google.come',
  },
];

function App() {
  const [output, setOutput] = useState([]);
  const getData = async () => {
    let url =
      'https://app.ticketmaster.com/discovery/v2/events?apikey=ZQnFUWNUnfJEvDniHy63e5J9OdVNGZcV&locale=en-us&preferredCountry=us';
    let res = await axios.get(url);
    setOutput(res.data._embedded.events);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(output);
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Home data={output} concertsData={concertsData} />}
        />
        <Route
          exact
          path="/concerts"
          render={() => <Concerts concertsData={output} />}
        />
        <Route
          exact
          path="/sports"
          render={() => <Sports sportsData={output} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
