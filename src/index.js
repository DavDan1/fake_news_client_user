import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import configureStore from './state/store/configureStore';

axios.defaults.baseURL = 'https://fake-newzzzz.herokuapp.com/api';
const store = configureStore();
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

reportWebVitals();
