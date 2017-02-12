import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../../components/Header/Header'

class StepConfirm extends React.Component {

  componentWillMount() {
    if (this.props.selectOffer === null) {
      this.props.router.push('/subscribe')
    }
  }

  onBack() {
    this.props.router.push('/subscribe/offers')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <button className="button-back" onClick={() => this.onBack()}>Return</button>
          <h1>Summary</h1>
          <div><h2>{this.props.selectOffer.label}</h2><p>{this.props.selectOffer.desc}</p></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    offers: state.subscription.offers || [],
    selectOffer: state.subscription.selectOffer || null
  }
}

StepConfirm.propTypes = {
  selectOffer: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired
  }),
  router: React.PropTypes.object.isRequired
}
export default withRouter(connect(mapStateToProps)(StepConfirm))
