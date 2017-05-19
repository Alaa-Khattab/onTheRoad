import * as types from '../actions/types';

function getRidesReducer(state = [], action) {
  switch (action.type) {
  case types.FETCH_RIDES_SUCCESS:
    return action.payload;
  case types.FETCH_RIDES_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  getRidesReducer
};
