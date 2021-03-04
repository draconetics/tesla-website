import React from 'react';

import './Powertrain.css';

export default function Powertrain() {
  const [isHide, setIsHide] = React.useState(false);
  const [move, setMove] = React.useState('');

  return (
    <div className="powertrain">
      <div className="powertrain__container">
        <div className="powertrain__electric">
          <h2>Electric Powertrain</h2>
          <p>
            Long Range and Plaid platforms unite powertrain and battery
            technologies for unrivaled performance, range and efficiency. New
            module and pack thermal architecture allows faster charging and
            gives you more power and endurance in all conditions.
          </p>
        </div>
        <div
          className="powertrain__image-container fit-image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              '/img/model-s/powertrain/Model-S-Performance-Dual-Motor-Desktop.jfif'
            }`,
          }}
        >
          <img
            src="/img/model-s/powertrain/Model-S-Performance-Tri-Motor-Desktop.jfif"
            alt="Model-S-Performance-Tri-Motor-Desktop"
            className={
              move === ''
                ? 'powertrain__image powertrain__hide'
                : 'powertrain__image powertrain__show'
            }
          />
        </div>
        <div className="powertrain__features">
          <div className={'square1 ' + move} onClick={() => setMove('')}>
            <h2>Long Range</h2>
            <p>
              Dual Motor All-Wheel Drive platform allows for the longest range,
              and now delivers insane power and acceleration.
            </p>
            <div className="square-info">
              <div>
                <h4>3.1 s</h4>
                <p>0-60 mph</p>
              </div>
              <div>
                <h4>412 mi</h4>
                <p>range(est.)</p>
              </div>
              <div>
                <h4>670hp</h4>
                <p>peak-power</p>
              </div>
            </div>
          </div>
          <div className="square2" onClick={() => setMove('move')}>
            <h2>Plaid</h2>
            <p>
              Tri Motor All-Wheel Drive platform with torque vectoring features three
              independent motors, each with a carbo-sleeved rotor that maintains peak power
              ouput all the way to top speed.
            </p>
            <div className="square-info">
              <div>
                <h4>1.99 s*</h4>
                <p>0-60 mph</p>
              </div>
              <div>
                <h4>390 mi</h4>
                <p>range(est.)</p>
              </div>
              <div>
                <h4>1,020hp</h4>
                <p>peak-power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
