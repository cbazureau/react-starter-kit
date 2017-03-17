import React from 'react'
import './loader.scss'

const Loader = () => (
  <div className="loader">
    <div className="bubblingG">
      <span id="bubblingG_1" />
      <span id="bubblingG_2" />
      <span id="bubblingG_3" />
    </div>
  </div>
)

Loader.propTypes = {
  message: React.PropTypes.string
}

export default Loader
