import 'whatwg-fetch'

export const GET_CONFIG = 'GET_CONFIG'
export const GET_ALL_CONFIGS = 'GET_ALL_CONFIGS'
export const SAVE_CONFIG = 'SAVE_CONFIG'
export const UPDATE_CONFIG = 'UPDATE_CONFIG'
export const DELETE_CONFIG = 'DELETE_CONFIG'
export const ERROR_CONFIG = 'ERROR_CONFIG'
export const INVALID_PARAMS = 'INVALID_PARAMS'
export const CONFIG_SELECTED = 'CONFIG_SELECTED'
export const API_CONFIG = '/api/configurations'

function fetchSameOrigin(app, level = '', settings = {}) {
  const requestSettings = Object.assign(settings, { credentials: 'same-origin' })
  return fetch(`${API_CONFIG}/${app}/${level}`, requestSettings)
    .then((response) => {
      if (!response.ok) {
        return response.json().then((message) => { throw new Error(message) })
      }
      return response.json()
    })
}

export function getConfiguration(app, level, dispatch) {
  fetchSameOrigin(app, level).then(
    response => dispatch({
      type: GET_CONFIG,
      configuration: response
    }))
    .catch(error => dispatch({
      type: ERROR_CONFIG,
      message: error
    }))
}

export function getAllConfigurations(app, dispatch) {
  fetchSameOrigin(app)
    .then(
    data => dispatch({
      type: GET_ALL_CONFIGS,
      configuration: data
    }))
    .catch(error => dispatch({
      type: ERROR_CONFIG,
      message: error
    }))
}

export function updateConfiguration(app, config, dispatch) {
  const { level1, data } = config

  if (!level1.trim() || !Object.keys(data).length) {
    dispatch({
      type: INVALID_PARAMS,
      message: 'La config ne peut pas être vide'
    })
    return
  }

  const settings = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetchSameOrigin(app, level1, settings)
    .then((responseData) => {
      dispatch({
        type: UPDATE_CONFIG,
        configuration: responseData
      })
      getAllConfigurations(app, dispatch)
    })
    .catch(error => dispatch({
      type: ERROR_CONFIG,
      message: error
    }))
}

export function saveConfiguration(app, config, dispatch) {
  const { level1, data } = config

  if (!level1.trim() || !Object.keys(data).length) {
    dispatch({
      type: INVALID_PARAMS,
      message: 'Les données ET le nom de la configuration sont requis'
    })
    return
  }

  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetchSameOrigin(app, level1, settings)
    .then(responseData => dispatch({
      type: SAVE_CONFIG,
      configuration: responseData
    }))
    .catch(error => dispatch({
      type: ERROR_CONFIG,
      message: error.message
    }))
}

export function deleteConfiguration(app, config, dispatch) {
  fetchSameOrigin(app, config.level1, { method: 'DELETE' })
    .then(responseData => dispatch({
      type: DELETE_CONFIG,
      configurations: responseData
    }))
    .catch(error => dispatch({
      type: ERROR_CONFIG,
      message: error
    }))
}

export function dispatchErrorMessage(message, dispatch) {
  dispatch({
    type: ERROR_CONFIG,
    message
  })
}


export function selectConfiguration(selectedConfig, dispatch) {
  dispatch({
    type: CONFIG_SELECTED,
    configuration: selectedConfig
  })
}
