import * as types from '../actions/types';

function joinRideReducer(state = {}, action) {
  switch (action.type) {
  case types.JOIN_RIDE_SUCCESS:
    return action.payload;
  case types.JOIN_RIDE_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  joinRideReducer
};
