import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import tvshows from './reducers/tvshows'

import Home from './components/Home/Home'
import About from './components/About/About'
import StepShows from './components/TvShows/StepShows/StepShows'
import StepShow from './components/TvShows/StepShow/StepShow'

import './main.scss'

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({
  tvshows,
  routing: routerReducer
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRoute component={Home} />
        <Route path="shows" component={StepShows} />
        <Route path="shows/:showId" component={StepShow} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app'))
