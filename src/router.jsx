import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home/Home'
import About from './components/About/About'
import StepShows from './components/TvShows/StepShows/StepShows'
import StepShow from './components/TvShows/StepShow/StepShow'

export default (
  <div>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route path="shows" component={StepShows} />
        <Route path="shows/:showId" component={StepShow} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </div>
)
