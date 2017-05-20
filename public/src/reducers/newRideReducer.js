import * as types from '../actions/types';

function newRideReducer(state = {}, action) {
  switch (action.type) {
  case types.CREATE_RIDE:
    return action.payload;
  case types.CREATE_RIDE_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  newRideReducer
};
