import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import Router from './router'
import subscription from './reducers/subscription'
import './main.scss'

/* eslint-disable no-underscore-dangle */
const store = createStore(combineReducers({
  subscription
}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* eslint-enable */

render(
  <Provider store={store}>
    {Router}
  </Provider>, document.getElementById('app'))
