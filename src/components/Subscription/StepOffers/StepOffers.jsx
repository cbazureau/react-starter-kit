import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { chooseOffer } from '../../../actions/subscription'
import Header from '../../../components/Header/Header'

class StepOffers extends React.Component {

  componentWillMount() {
    if (this.props.offers.length === 0) {
      this.props.router.push('/subscribe')
    }
  }

  onClickOffer(id) {
    console.log('[StepOffers] onClickOffer')
    chooseOffer(this.props.dispatch, this.props.offers.find(
      offer => offer.id === id
    ))
    this.props.router.push('/subscribe/confirm')
  }

  onBack() {
    return this.props.router.push('/subscribe')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <button className="button-back" onClick={() => this.onBack()}>Return</button>
          <h1>Choose your offer</h1>
          <For each="offer" of={this.props.offers}>
            <button
              key={offer.id}
              onClick={() => this.onClickOffer(offer.id)}
            >
              {offer.label}
            </button>
          </For>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    offers: state.subscription.offers || []
  }
}

StepOffers.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  offers: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  })),
  router: React.PropTypes.object.isRequired
}
export default withRouter(connect(mapStateToProps)(StepOffers))
