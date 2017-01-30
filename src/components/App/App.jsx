import React from 'react'
import { connect } from 'react-redux'
import { getAllConfigurations, selectConfiguration, updateConfiguration, deleteConfiguration, dispatchErrorMessage } from '../../actions/configurations'

class App extends React.Component {

  render() {
    return (
      <div>Test</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    configurations: state.configurations
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}
export default connect(mapStateToProps)(App)
