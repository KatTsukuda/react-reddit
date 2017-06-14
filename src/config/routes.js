import React, {Component} from 'react';
import { Route } from 'react-router';
import App from '../App';
import Forum from '../containers/Forum'

export default (
  <Route path="/" component={App} >
    <Route path="/pancakes" component={Forum} /> // nest subreddit forum within '/'
  </Route>
);
