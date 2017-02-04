import React from 'react'
import { connect } from 'react-redux'
import { getOffers, chooseOffer, stepBack } from '../../actions/subscription'

class Home extends React.Component {

  onClickSubscription() {
    return getOffers(this.props.dispatch)
  }

  onClickOffer(id) {
    return chooseOffer(this.props.dispatch, this.props.offers.find(
      offer => offer.id === id
    ))
  }

  onBack() {
    return stepBack(this.props.dispatch)
  }

  render() {
    return (
      <div className="container">
        <If condition={this.props.step !== 'HOME'}>
          <button className="button-back" onClick={() => this.onBack()}>Return</button>
        </If>
        <Choose>
          <When condition={this.props.step === 'CHOICE'}>
            <h1>Choose your offer</h1>
            <For each="offer" of={this.props.offers}>
              <button key={offer.id} onClick={() => this.onClickOffer(offer.id)}>{offer.label}</button>
            </For>
          </When>
          <When condition={this.props.step === 'RECAP' && this.props.selectOffer}>
            <h1>Summary</h1>
            <div><h2>{this.props.selectOffer.label}</h2><p>{this.props.selectOffer.desc}</p></div>
          </When>
          <Otherwise>
            <h1>Discover our offers</h1>
            <button onClick={() => this.onClickSubscription()}>View Offers</button>
          </Otherwise>
        </Choose>
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
  selectOffer: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired
  }),
  offers: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  }))
}
export default connect(mapStateToProps)(Home)
