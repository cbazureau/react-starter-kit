import { GET_OFFERS, CHOOSE_OFFER } from '../actions/subscription'

const defaultState = {
  step: null,
  offers: {},
  offerId: null,
  error: null
}

export default (state = defaultState, action) => {
  const nextState = Object.assign({}, state)

  switch (action.type) {
    case GET_OFFERS:
      if (action.offers) {
        nextState.offers = action.offers
        nextState.step = 'RECAP'
      }
      return state
    case CHOOSE_OFFER:
      if (action.offerId) {
        nextState.offerId = action.offerId
        nextState.step = 'CONFIRM'
      }
      break
    default:
      break
  }
  return nextState
}
