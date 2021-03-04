import React, { Component } from 'react';
import Menu from '../components/Menu';
import BlueCar from './BlueCar';
import GridFeature from './GridFeature';

import './ModelS.css';
import Powertrain from './Powertrain';
import { SpringSlider } from './SpringSlider';
import WhiteCar from './WhiteCar';

export default class ModelS extends Component {
  render() {
    return (
      <div className="model-s">
        <div
          className="model-s__main container container-image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + '/img/model-s/ms-main-hero-desktop.jfif'
            }`,
          }}
        >
          <Menu isMenuFixed={this.props.isMenuFixed} />
          <div className="model-s__main-content">
            <div className="model-s__main-header">
              <h2>Model S</h2>
              <span>Plaid</span>
            </div>
            <ul>
              <li>
                <h3>390mi</h3>
                <span>Range(est.)</span>
              </li>
              <li>
                <h3>1.99s</h3>
                <span>0-60 mph*</span>
              </li>
              <li>
                <h3>200mph</h3>
                <span>Top Speed*</span>
              </li>
              <li>
                <h3>1,020hp</h3>
                <span>Peak Power</span>
              </li>
              <li>
                <a href="#">Order now</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="model-s__interior-title">
          <h2>All-New Interior</h2>
        </div>
        <div
          className="model-s__interior container container-image"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL +
              '/img/model-s/MS-Interior-Hero-Desktop.jfif'
            }`,
          }}
        ></div>
        <div className="mode-s__row-space"></div>
        <div className="model-s__slider-ac container">
          <SpringSlider />
        </div>
        <div className="model-s__grid-feature">
          <GridFeature />
        </div>
        <div className="model-s__blue-car container">
          <BlueCar />
        </div>
        <div className="model-s__powertrain">
          <Powertrain />
        </div>
        <div className="model-s__whitecar">
          <WhiteCar />
        </div>
        
      </div>
    );
  }
}
