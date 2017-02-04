import { GET_OFFERS, CHOOSE_OFFER } from '../actions/subscription'

const defaultState = {
  step: 'HOME',
  offers: [],
  selectOffer: null,
  error: null
}

export default (state = defaultState, action) => {
  const nextState = Object.assign({}, state)
  console.info('Action :' + action.type)
  console.info(action)
  switch (action.type) {
    case GET_OFFERS:
      if (action.offers) {
        nextState.offers = action.offers
        nextState.step = 'CHOICE'
      }
      break
    case CHOOSE_OFFER:
      if (action.offer) {
        nextState.selectOffer = action.offer
        nextState.step = 'RECAP'
      }
      break
    default:
      break
  }
  console.log(nextState)
  return nextState
}
