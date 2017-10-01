import React from 'react';
import { Link, IndexLink } from 'react-router';
import './header.scss';

const Header = () => (
  <header>
    <div className="logo" />
    <ul>
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/shows" activeClassName="active">Tv Shows</Link></li>
      <li><Link to="/about" activeClassName="active">About</Link></li>
    </ul>
    <div className="secure">
      <p><span className="icon-user" /> <span className="secure-text">Steve Jobs</span></p>
    </div>
  </header>
);

export default Header;
