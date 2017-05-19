import * as types from './types';
import store from '../store/store';

const register = (data) => {
  fetch('/passengerSignup', {
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
        type: types.REGISTER_USER,
        payload: response
      })
    }).catch((error) => {
      store.dispatch({
        type: types.REGISTER_USER_FAIL
      })
    })
}

export default register;
