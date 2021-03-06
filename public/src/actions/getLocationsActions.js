/* eslint-disable */

import * as types from './types';
import store from '../store/store';

const getLocations = () => {
  fetch('/locations', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then((response) => {
      console.log('locationsssssssssss: ',response);
      store.dispatch({
        type: types.FETCH_LOCATIONS_SUCCESS,
        payload: response
      });
    }).catch((error) => {
      store.dispatch({
        type: types.FETCH_LOCATIONS_FAILURE
      })
    })

};

export default getLocations;
