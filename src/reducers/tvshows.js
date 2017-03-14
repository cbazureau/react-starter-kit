import { GET_SHOW_LIST, GET_SHOW_INFOS, GET_SHOW_EPISODES } from '../actions/tvshows'

const initialState = {
  episodes: [],
  shows: [],
  showInfos: null,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOW_LIST:
      if (action.shows) {
        return {
          ...state,
          shows: action.shows
        }
      }
      return {
        ...initialState,
        error: 'ERR_NO_SHOWS'
      }
    case GET_SHOW_INFOS:
      if (action.showInfos) {
        return {
          ...state,
          showInfos: action.showInfos
        }
      }
      return {
        ...initialState,
        error: 'ERR_NO_SHOW'
      }
    case GET_SHOW_EPISODES:
      if (action.episodes) {
        return {
          ...state,
          episodes: action.episodes
        }
      }
      return {
        ...initialState,
        error: 'ERR_NO_SHOW'
      }
    default:
      return state
  }
}
