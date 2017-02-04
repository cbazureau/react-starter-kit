import { GET_OFFERS, CHOOSE_OFFER, STEP_BACK } from '../actions/subscription'

const defaultState = {
  step: 'HOME',
  offers: [],
  selectOffer: null,
  error: null
}

export default (state = defaultState, action) => {
  const nextState = Object.assign({}, state)
  console.info('Action', action.type)
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
    case STEP_BACK:
      if (state.step === 'RECAP') {
        nextState.step = 'CHOICE'
        nextState.selectOffer = null
      }
      if (state.step === 'CHOICE') {
        nextState.step = 'HOME'
        nextState.selectOffer = null
        nextState.offers = []
      }
      break
    default:
      break
  }
  console.log('nextState', nextState)
  return nextState
}
