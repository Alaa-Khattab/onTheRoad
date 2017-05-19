import * as types from '../actions/types';

function signupReducer(state = {}, action) {
  switch (action.type) {
  case types.REGISTER_USER:
    return action.payload;
  case types.REGISTER_USER_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  signupReducer
};
