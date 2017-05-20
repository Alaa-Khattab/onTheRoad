
import * as types from './types';
import store from '../store/store';

const getLadyRides = () => {

  fetch('/ladyRides', {
      method: 'GET',
      headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then((response) => {
      console.log('LadyRidesResponse: ',response);
        store.dispatch({type: types.FETCH_LADY_RIDES, payload: response});
    }).catch((error) => {
      store.dispatch({
        type: types.FETCH_LADY_RIDES_FAILURE
      })
    })

};

export default getLadyRides;
