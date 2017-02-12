import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getOffers } from '../../../actions/subscription'
import Header from '../../../components/Header/Header'

class StepHome extends React.Component {

  onClickViewOffers() {
    console.log('[StepHome] onClickViewOffers')
    return getOffers(this.props.dispatch).then(() => {
      console.log('[StepHome] onClickViewOffers then')
      this.props.router.push('/subscribe/offers')
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Discover our offers</h1>
          <button onClick={() => this.onClickViewOffers()}>View Offers</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    offers: state.subscription.offers
  }
}

StepHome.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  router: React.PropTypes.object.isRequired
}
export default withRouter(connect(mapStateToProps)(StepHome))
