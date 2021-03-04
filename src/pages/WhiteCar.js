import React from 'react';

import './WhiteCar.css';

export default function WhiteCar() {
  return (
    <div className="whitecar">
      <div
        className="whitecar__car"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            '/img/model-s/white-car/MS-Order-Hero-Desktop.jfif'
          }`,
        }}
      ></div>
      <div className="whitecar__buttons">
        <h2>Model S</h2>
        <div>
          <button type="button">Order now</button>
          <button type="button">Compare</button>
        </div>
      </div>
      <div className="whitecar__footer">
        <ul>
          <li>Tesla 2021</li>
          <li>Privacy & Legal</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Get Newsletter</li>
          <li>News</li>
          <li>Forums</li>
          <li>Locations</li>
        </ul>
      </div>
    </div>
  );
}
