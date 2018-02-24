import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import '../scss/index.scss';


render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app-mount'),
);
