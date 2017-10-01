import React from 'react';
import Header from '../../components/Header/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>React Starter Kit</h1>
        <p>Sed nibh est, imperdiet non viverra sed, mollis eget augue.
          Nam urna tortor, commodo at ullamcorper id, viverra in est.
          Donec tempor maximus lectus. Nam erat nisi, pulvinar et sem in,
          tristique molestie leo. Nulla tempor ultricies ante ut fermentum.
          Aliquam suscipit, velit non sollicitudin posuere, arcu justo auctor mi,
          in tempus orci orci non neque. Pellentesque gravida nisl et lectus sollicitudin,
          in porta quam egestas. Duis purus urna, fringilla sed leo id, accumsan accumsan sem.
          Integer eu ante eu sem dapibus volutpat. Quisque id odio tincidunt, pulvinar ipsum at,
          pretium libero.</p>
      </div>
    </div>
  );
}
