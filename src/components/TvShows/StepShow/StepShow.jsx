import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { chooseShow, getepisodes, resetShow } from '../../../actions/tvshows'
import Header from '../../../components/Header/Header'
import Show from '../../../components/Show/Show'
import Episodes from '../../../components/Episodes/Episodes'

class StepShow extends React.Component {

  componentWillMount() {
    resetShow(this.props.dispatch)
    chooseShow(this.props.dispatch, this.props.params.showId)
    getepisodes(this.props.dispatch, this.props.params.showId)
  }

  onBack() {
    return this.props.router.push('/shows')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <button className="button-back" onClick={() => this.onBack()}>Return</button>
          <Show show={this.props.showInfos} />
          <Episodes episodes={this.props.episodes} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showInfos: state.tvshows.showInfos,
    episodes: state.tvshows.episodes
  }
}

StepShow.propTypes = {
  showInfos: React.PropTypes.object,
  episodes: React.PropTypes.arrayOf(React.PropTypes.object),
  params: React.PropTypes.shape({
    showId: React.PropTypes.string.isRequired
  }),
  dispatch: React.PropTypes.func.isRequired,
  router: React.PropTypes.object.isRequired
}
export default withRouter(connect(mapStateToProps)(StepShow))
