import React from 'react';
import './episodes.scss';
import Loader from '../../components/Loader/Loader';

const Episodes = ({ episodes }) => ((episodes && episodes.length > 0) ?
  <div className="episodes">
    <h2>Episodes</h2>
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <td>Title</td>
          <td>Season</td>
          <td>Number</td>
          <td>Airdate</td>
        </tr>
      </thead>
      <tbody>
        {episodes.map(episode => (
          <tr key={episode.id}>
            <td>{episode.image ? <img src={episode.image.medium} alt={episode.name} /> : ''}</td>
            <td>{episode.name}</td>
            <td>{episode.season}</td>
            <td>{episode.number}</td>
            <td>{episode.airdate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div> : (episodes ? <div /> : <Loader />)
);

Episodes.propTypes = {
  episodes: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    season: React.PropTypes.number.isRequired,
    number: React.PropTypes.number.isRequired,
    airdate: React.PropTypes.string.isRequired,
    image: React.PropTypes.shape({
      medium: React.PropTypes.string,
    }),
  })),
};

export default Episodes;
