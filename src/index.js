import 'babel-polyfill';
import React from 'react';
import configureStore from './store/configureStore';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import actions from './actions/mainActions';


let store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
,document.getElementById('app'));





