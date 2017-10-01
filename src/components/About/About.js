import React from 'react';
import Header from '../../components/Header/Header';
import Timer from '../../components/Timer/Timer';

export default function About() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>About this project</h1>
        <Timer />
      </div>
    </div>
  );
}
