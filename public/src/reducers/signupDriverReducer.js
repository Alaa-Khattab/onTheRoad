import * as types from '../actions/types';

function signupDriverReducer(state = {}, action) {
  switch (action.type) {
  case types.REGISTER_DRIVER:
    return action.payload;
  case types.REGISTER_DRIVER_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  signupDriverReducer
};
