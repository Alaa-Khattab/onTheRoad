import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import App from './components/app';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  , document.getElementById('app'));
