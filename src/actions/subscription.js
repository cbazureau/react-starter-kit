import 'whatwg-fetch'

export const GET_OFFERS = 'GET_OFFERS'
export const CHOOSE_OFFER = 'CHOOSE_OFFER'
export const ERR_CONFIG = 'ERR_CONFIG'
export const STEP_BACK = 'STEP_BACK'

export const API_CONFIG = 'http://localhost:8080/fake-api'

export function getOffers(dispatch) {
  return fetch(`${API_CONFIG}/offers.json`, {
    method: 'GET'
  })
    .then(
      data => data.json().then(json => dispatch({
        type: GET_OFFERS,
        offers: json.data
      })))
    .catch(error => dispatch({
      type: ERR_CONFIG,
      message: error
    }))
}

export function chooseOffer(dispatch, offer) {
  dispatch({
    type: CHOOSE_OFFER,
    offer
  })
}

export function stepBack(dispatch) {
  dispatch({
    type: STEP_BACK
  })
}

