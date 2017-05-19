/* eslint-disable */
import * as types from './types';
import store from '../store/store';

const Login = (data)=>{
  console.log('data: ',data);
  fetch('/login',{
    method: 'POST',
    body:JSON.stringify(data),
    credentials: 'include'
  })
  .then((response)=>{
    console.log('response: ',response);
    return  response.json()
  }).then((response)=>{
      store.dispatch({type: types.POST_SIGNIN_DATA, payload: response})
  }).catch((error) => {
    store.dispatch({
      type: types.POST_SIGNIN_FAIL
    })
  })
}

export default Login;
