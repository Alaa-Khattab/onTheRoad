
import * as types from './types';
import store from '../store/store';

const getRides = () => {

  fetch('/rides', {
      method: 'GET',
      headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(res => res.json())
    .then((response) => {
      console.log('ridesResponse: ',response);
        store.dispatch({type: types.FETCH_RIDES_SUCCESS, payload: response});
    }).catch((error) => {
      store.dispatch({
        type: types.FETCH_RIDES_FAILURE
      })
    })

};

export default getRides;
