import React from 'react';

import './GridFeature.css';

const gridList = [
  {
    img: '/img/model-s/grid/MS-Interior-Grid-A-Desktop.jfif',
    title: 'Game from Anywhere',
    content:
      'Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.',
  },
  {
    img: '/img/model-s/grid/MS-Interior-Grid-B-Desktop.jfif',
    title: 'Stay Connected',
    content:
      'Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop.',
  },
  {
    img: '/img/model-s/grid/MS-Interior-Grid-C-Desktop.jfif',
    title: 'Your Best Audio System',
    content:
      'A 22-speaker, 960-watt audio system with active noise canceling offers the best listening experience at home or on the road.',
  },
  {
    img: '/img/model-s/grid/MS-Interior-Grid-D-Desktop.jfif',
    title: 'Real Storage',
    content:
      'With front and rear trunks and fold-flat seats, Model S is a luxury car where you can fit your bike without taking the wheel off, and your luggage too.',
  },
];

export default function GridFeature() {
  const orderGrid = (item, index) => {
    if (index % 2 === 0) {
      return (
        <>
          <img src={item.img} alt={item.title} />
          <div className="grid-feature__content-right">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="grid-feature__content-left">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
          <img src={item.img} alt={item.title} />
        </>
      );
    }
  };
  return (
    <div className="grid-feature">
      <ul>
        {gridList &&
          gridList.map((item, index) => {
            return (
              <li key={item.title.replace(/\s+/, '') + index}>
                {orderGrid(item, index)}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
