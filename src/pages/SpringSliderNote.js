import React from 'react';

import './SpringSliderNote.css';

export default function SpringSliderNote({item}) {
  return (
    <div className="spring-slider-note">
        <h2>{item.title}</h2>
        <div>{item.description}</div>
    </div>
  );
}
