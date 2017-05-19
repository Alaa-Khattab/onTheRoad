import * as types from '../actions/types';

function LadyRidesReducer(state = {}, action) {
  switch (action.type) {
  case types.FETCH_LADY_RIDES:
    return action.payload;
  case types.FETCH_LADY_RIDES_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  LadyRidesReducer
};
