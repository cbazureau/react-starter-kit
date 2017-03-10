import subscription from '../../reducers/subscription'
import { GET_OFFERS, CHOOSE_OFFER, ERR_CONFIG } from '../../actions/subscription'

describe('todos subscription', () => {
  it('should return the initial state', () => {
    expect(
      subscription(undefined, {})
    ).toEqual({
      error: null,
      offers: [],
      selectOffer: null,
      step: 'HOME'
    })
  })
  it('should render error page', () => {
    expect(
      subscription(undefined, {
        type: ERR_CONFIG,
        message: 'plop'
      })
    ).toEqual({
      error: null,
      offers: [],
      selectOffer: null,
      step: 'HOME'
    })
  })
  it('should render offer page', () => {
    expect(
      subscription(undefined, {
        type: CHOOSE_OFFER,
        offer: {
          label: 'Offre 1',
          id: 'OFR123',
          desc: 'Lorem ipsum dolor'
        }
      })
    ).toEqual({
      error: null,
      offers: [],
      selectOffer: {
        label: 'Offre 1',
        id: 'OFR123',
        desc: 'Lorem ipsum dolor'
      },
      step: 'RECAP'
    })
  })
  it('should render offers page', () => {
    expect(
      subscription(undefined, {
        type: GET_OFFERS,
        offers: [{
          label: 'Offre 1',
          id: 'OFR123',
          desc: 'Lorem ipsum dolor'
        }, {
          label: 'Offre 2',
          id: 'OFR124',
          desc: 'Lorem ipsum dolor2'
        }]
      })
    ).toEqual({
      error: null,
      offers: [{
        label: 'Offre 1',
        id: 'OFR123',
        desc: 'Lorem ipsum dolor'
      }, {
        label: 'Offre 2',
        id: 'OFR124',
        desc: 'Lorem ipsum dolor2'
      }],
      selectOffer: null,
      step: 'CHOICE'
    })
  })
})
