import React from 'react';

import './Section01.css';

export default function Section01({model, buttonLeft, buttonRight}) {

  const section01Down = () => {
    if(buttonRight && buttonLeft){
      return (
        <div className="section01__down">
          <a href="#" className="section01__order">{buttonLeft}</a>
          <a href="#" className="section01__inv">{buttonRight}</a>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <div className="section01">
        <div className="section01__top">
          <h2>{model}</h2>
          <p>Order Online for <span>Touchless Delivery</span></p>
        </div>
        {section01Down()}
      </div>
    </>
  );
}
