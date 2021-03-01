import React from 'react';

import './Powertrain.css'

export default function Powertrain() {
  const [isHide, setIsHide] = React.useState(false);
  return (
    <div className="powertrain">
      <h2>Electric Powertrain</h2>
      <p>
        Long Range and Plaid platforms unite powertrain and battery technologies
        for unrivaled performance, range and efficiency. New module and pack
        thermal architecture allows faster charging and gives you more power and
        endurance in all conditions.
      </p>
      <button type="button" onclick={()=>setIsHide(false)}>show</button>
      <button type="button" onClick={()=>setIsHide(true)}>hide</button>
      <div className="powertrain__image-container">
          <img 
            src="/img/model-s/powertrain/Model-S-Performance-Dual-Motor-Desktop.jfif" 
            alt="image" 
            className={isHide?'powertrain__image powertrain__hide':'powertrain__image powertrain__show'}
          />
      </div>
      
    </div>
  );
}
