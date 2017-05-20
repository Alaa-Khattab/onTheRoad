
import * as types from './types';
import store from '../store/store';

const NewRide = (data)=>{
  console.log('data: ',data);
  fetch('/newRide',{
    method: 'POST',
    body:JSON.stringify(data),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response)=>{
    console.log('response: ',response);
    return  response.json()
  }).then((response)=>{
      store.dispatch({type: types.CREATE_RIDE, payload: response})
  }).catch((error) => {
    store.dispatch({
      type: types.CREATE_RIDE_FAILURE
    })
  })
}

export default NewRide;
