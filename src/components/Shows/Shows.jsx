import React from 'react'
import './shows.scss'
import Loader from '../../components/Loader/Loader'

const Shows = ({ shows, onClickShow }) => ((shows && shows.length > 0) ?
  <div className="shows">
    <For each="show" of={shows}>
      <span className="shows-item" key={show.id}>
        <a onClick={() => onClickShow(show.id)}><img src={show.image} alt={show.title} /></a>
      </span>
    </For>
  </div> : <Loader />
)

Shows.propTypes = {
  onClickShow: React.PropTypes.func.isRequired,
  shows: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
  }))
}

export default Shows
