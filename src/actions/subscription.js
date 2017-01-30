import 'whatwg-fetch'

export const GET_OFFERS = 'GET_OFFERS'
export const CHOOSE_OFFER = 'CHOOSE_OFFER'
export const ERR_CONFIG = 'ERR_CONFIG'

export const API_CONFIG = 'http://localhost:3003'

export function getOffers(dispatch) {
  fetch(`${API_CONFIG}/v1/RECO/offers/next`, {
    method: 'POST'
  })
    .then(
      data => dispatch({
        type: GET_OFFERS,
        offers: data.json()
      }))
    .catch(error => dispatch({
      type: ERR_CONFIG,
      message: error
    }))
}

export function chooseOffer(dispatch, offerId) {
  dispatch({
    type: CHOOSE_OFFER,
    offerId
  })
}
