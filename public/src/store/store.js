import {createStore,combineReducers} from  'redux';
import {signinReducer} from '../reducers/loginReducer.js';
import {getRidesReducer} from '../reducers/getRidesReducer.js';
import {signupReducer} from '../reducers/signupReducer.js';
import {newRideReducer} from '../reducers/newRideReducer.js';

const reducers = combineReducers({
  signin: signinReducer,
  rides: getRidesReducer,
  signup: signupReducer,
  createRide: newRideReducer
});

var store = createStore(
  reducers,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
