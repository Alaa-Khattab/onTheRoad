import * as types from '../actions/types';

function MyRidesReducer(state = {}, action) {
  switch (action.type) {
  case types.FETCH_MYRIDES_SUCCESS:
    return action.payload;
  case types.FETCH_MYRIDES_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  MyRidesReducer
};
