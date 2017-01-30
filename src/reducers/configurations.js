import { GET_CONFIG, UPDATE_CONFIG, SAVE_CONFIG, ERROR_CONFIG, DELETE_CONFIG, GET_ALL_CONFIGS, CONFIG_SELECTED, INVALID_PARAMS } from '../actions/configurations'

const defaultState = {
  current: {
    level1: '',
    data: {}
  },
  list: [],
  error: null
}

export default (state = defaultState, action) => {
  const nextState = Object.assign({}, state, { error: null })

  switch (action.type) {
    case GET_ALL_CONFIGS:
      if (action.configuration) {
        nextState.list = action.configuration
        nextState.error = null
        return nextState
      }
      return state
    case GET_CONFIG:
      action.configuration.json().then((configuration) => {
        nextState.current = configuration
        nextState.error = null
        return nextState
      })
      break
    case UPDATE_CONFIG:
      nextState.current = action.configuration
      return nextState
    case SAVE_CONFIG:
      nextState.current = {}
      nextState.list.push(action.configuration)
      return nextState
    case DELETE_CONFIG:
      nextState.current = defaultState.current
      nextState.list = action.configurations
      return nextState
    case ERROR_CONFIG:
      nextState.current = defaultState.current
      nextState.error = action.message
      return nextState
    case INVALID_PARAMS:
      nextState.error = action.message
      return nextState
    case CONFIG_SELECTED:
      nextState.current = action.configuration
      return nextState
    default:
      return state
  }
}
