
import * as types from './types';
import store from '../store/store';

const getRides = () => {

  fetch('/rides', {
      method: 'GET',
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
