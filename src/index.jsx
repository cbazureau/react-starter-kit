import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import Router from './router'
import subscription from './reducers/subscription'
import './main.scss'

const store = createStore(combineReducers({
  subscription
}))

render(
  <Provider store={store}>
    {Router}
  </Provider>, document.getElementById('app'))
