import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

export default (
  <div>
    <Header />
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </div>
)
