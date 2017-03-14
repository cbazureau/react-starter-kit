import 'whatwg-fetch'

export const GET_SHOW_LIST = 'GET_SHOW_LIST'
export const GET_SHOW_INFOS = 'GET_SHOW_INFOS'
export const GET_SHOW_EPISODES = 'GET_SHOW_EPISODES'
export const TECHNICAL_ERROR = 'TECHNICAL_ERROR'
export const STEP_BACK = 'STEP_BACK'

const FAKE_API = 'http://localhost:8080/fake-api'
const TV_MAZE_API = 'http://api.tvmaze.com'


export function getShowList(dispatch) {
  return fetch(`${FAKE_API}/shows.json`, {
    method: 'GET'
  })
    .then(
      data => data.json().then(json => dispatch({
        type: GET_SHOW_LIST,
        shows: json.shows
      })))
    .catch(error => dispatch({
      type: TECHNICAL_ERROR,
      message: error
    }))
}


export function chooseShow(dispatch, showId) {
  return fetch(`${TV_MAZE_API}/shows/${showId}`, {
    method: 'GET'
  })
    .then(
      data => data.json().then(json => dispatch({
        type: GET_SHOW_INFOS,
        showInfos: json
      })))
    .catch(error => dispatch({
      type: TECHNICAL_ERROR,
      message: error
    }))
}

export function getepisodes(dispatch, showId) {
  return fetch(`${TV_MAZE_API}/shows/${showId}/episodes`, {
    method: 'GET'
  })
    .then(
      data => data.json().then(json => dispatch({
        type: GET_SHOW_EPISODES,
        episodes: json
      })))
    .catch(error => dispatch({
      type: TECHNICAL_ERROR,
      message: error
    }))
}
