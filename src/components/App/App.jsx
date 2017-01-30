import React from 'react'
import { connect } from 'react-redux'
import { getOffers } from '../../actions/subscription'

class App extends React.Component {

  onClickSubscription() {
    return getOffers(this.props.dispatch)
  }

  render() {
    return (
      <button onClick={() => this.onClickSubscription()}>Subscribe</button>
    )
  }
}

function mapStateToProps(state) {
  return {
    subscription: state.subscription
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}
export default connect(mapStateToProps)(App)
