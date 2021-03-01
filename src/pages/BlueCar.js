import React from 'react';

import './BlueCar.css';

export default function BlueCar() {
  return (
    <>
      <div
        className="blue-car__image container-image"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL +
            '/img/model-s/blue-car/MS-Performance-Hero-Desktop.jfif'
          }`,
        }}
      >
        <ul>
          <li>
            <h2>1,020hp</h2>
            <p>Peak power</p>
          </li>
          <li>
            <h2>9.23s</h2>
            <p>@155 mph 1/4 mile</p>
          </li>
          <li>
            <h2>1.99s</h2>
            <p>0-60 mph*</p>
          </li>
        </ul>
      </div>
      <div className="blue-car__content">
          <div className="blue-car__title">
              <p>Plaid</p>
              <h2>Beyond Ludicrous</h2>
          </div>
          <div className="blue-car__description">
            With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.
          </div>
      </div>
    </>
  );
}
