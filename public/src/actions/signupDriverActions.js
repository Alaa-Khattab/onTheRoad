import * as types from './types';
import store from '../store/store';

const registerDriver = (data) => {
  fetch('/driverSignup', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      store.dispatch({
        type: types.REGISTER_DRIVER,
        payload: response
      })
    }).catch((error) => {
      store.dispatch({
        type: types.REGISTER_DRIVER_FAIL
      })
    })
}

export default registerDriver;
