import * as types from '../actions/types';

function geLocationsReducer(state = [], action) {
  switch (action.type) {
  case types.FETCH_LOCATIONS_SUCCESS:
    return action.payload;
  case types.FETCH_LOCATIONS_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  geLocationsReducer
};
