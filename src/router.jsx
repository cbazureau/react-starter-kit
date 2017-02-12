import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home/Home'
import About from './components/About/About'
import StepHome from './components/Subscription/StepHome/StepHome'
import StepOffers from './components/Subscription/StepOffers/StepOffers'
import StepConfirm from './components/Subscription/StepConfirm/StepConfirm'

export default (
  <div>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route path="subscribe" component={StepHome} />
        <Route path="subscribe/offers" component={StepOffers} />
        <Route path="subscribe/confirm" component={StepConfirm} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </div>
)
