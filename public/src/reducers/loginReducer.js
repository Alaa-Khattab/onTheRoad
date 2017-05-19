import * as types from '../actions/types';

function signinReducer(state = {}, action) {
  switch (action.type) {
  case types.POST_SIGNIN_DATA:
    return action.payload;
  case types.POST_SIGNIN_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  signinReducer
};
