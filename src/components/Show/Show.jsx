import React from 'react'
import './show.scss'

const Show = ({ show }) => (show ?
  <div className="show">
    <h1 className="show-name">{show.name}</h1>
    <div className="show-img">
      <img src={show.image.medium} alt={`Poster ${show.name}`} />
    </div>
    <div className="show-desc" dangerouslySetInnerHTML={{ __html: show.summary }} />
  </div> : <div />
)

Show.propTypes = {
  show: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      medium: React.PropTypes.string.isRequired
    })
  })
}

export default Show
