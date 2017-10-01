import React from 'react';
import './Show.scss';
import Loader from '../../components/Loader/Loader';

const Show = ({ show }) => (show ?
  <div className="Show">
    <h1 className="Show__name">{show.name}</h1>
    <div className="Show__img">
      <img src={show.image.medium} alt={`Poster ${show.name}`} />
    </div>
    <div className="Show__desc">
      <p>{show.summary.replace(/(<([^>]+)>)/ig, '')}</p>
    </div>
  </div> : <Loader />
);

Show.propTypes = {
  show: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    summary: React.PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      medium: React.PropTypes.string.isRequired,
    }),
  }),
};

export default Show;
