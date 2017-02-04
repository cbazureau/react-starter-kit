import React from 'react'
import { connect } from 'react-redux'
import { getOffers, chooseOffer } from '../../actions/subscription'

class Home extends React.Component {

  onClickSubscription() {
    return getOffers(this.props.dispatch)
  }

  onClickOffer(offerCode) {
    return chooseOffer(this.props.dispatch, this.props.offers.find(
      offer => offer.offerCode === offerCode
    ))
  }

  render() {
    const offers = this.props.offers.map(offer => (
      <li key={offer.offerCode}><a href="#" onClick={() => this.onClickOffer(offer.offerCode)}>{offer.label}</a></li>
    ))

    const showOfferButton = this.props.step === 'HOME' && <button onClick={() => this.onClickSubscription()}>View Offers</button>

    const offersList = this.props.step === 'CHOICE' && <ul>{offers}</ul>

    const offer = (this.props.step === 'RECAP' && this.props.selectOffer) && <p>{this.props.selectOffer.label}</p>

    return (
      <div className="container">
        <h1>Discover our offers</h1>
        {showOfferButton}
        {offersList}
        {offer}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    offers: state.subscription.offers || [],
    step: state.subscription.step || '',
    selectOffer: state.subscription.selectOffer || null
  }
}

Home.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  step: React.PropTypes.string.isRequired,
  selectOffer: React.PropTypes.objectOf(React.PropTypes.shape({
    offerCode: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  })),
  offers: React.PropTypes.arrayOf(React.PropTypes.shape({
    offerCode: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }))
}
export default connect(mapStateToProps)(Home)
