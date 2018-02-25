import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import siteListingAppReducers from './reducers';
import App from './components/App';
import '../scss/index.scss';

const store = createStore(
  siteListingAppReducers,
  applyMiddleware(thunk),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-mount'),
);
