import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './components/App/App'
import Header from './components/Header/Header'

export default (
  <div>
    <Header />
    <Router history={hashHistory}>
      <Route path="/">
        <IndexRoute component={App} />
      </Route>
    </Router>
  </div>
)
