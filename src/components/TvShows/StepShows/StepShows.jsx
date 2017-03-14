import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getShowList } from '../../../actions/tvshows'
import Header from '../../../components/Header/Header'
import Shows from '../../../components/Shows/Shows'

class StepShows extends React.Component {

  componentWillMount() {
    getShowList(this.props.dispatch)
  }

  onClickShow(id) {
    this.props.router.push(`/shows/${id}`)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="shows">
            <h1>Shows</h1>
            <Shows shows={this.props.shows} onClickShow={id => this.onClickShow(id)} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    shows: state.tvshows.shows
  }
}

StepShows.propTypes = {
  shows: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
  })),
  dispatch: React.PropTypes.func.isRequired,
  router: React.PropTypes.object.isRequired
}
export default withRouter(connect(mapStateToProps)(StepShows))
