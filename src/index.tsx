import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import {DonateStore} from './store/donate/store';
import 'bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider store={DonateStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
