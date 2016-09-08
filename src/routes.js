import React from 'react';
import {Route, IndexRoute} from 'react-router';
import CreatePage from './containers/CreatePage/CreatePage';
import App from './App';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={CreatePage}/>
  </Route>
);



