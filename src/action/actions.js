import { FETCH_DATA } from './types';
import axios from 'axios';

export const fetchDataAction = () => (dispatch) => {
  axios
    .get(
      'https://app.ticketmaster.com/discovery/v2/events.json?apikey=Znmb6FQXSSodmuAG9TwlL70LEMjIB5AS'
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
