import React from 'react';

import './SpringBudget.css'

export default function SpringBudget({changeIndex, index}) {
  const isActive = (current) =>current === index?'active':'';
  return (
    <div className="spring-budget">
        <div className={isActive(0)} onClick={()=>changeIndex(0)}></div>
        <div className={isActive(1)} onClick={()=>changeIndex(1)}></div>
        <div className={isActive(2)} onClick={()=>changeIndex(2)}></div>
        <div className={isActive(3)} onClick={()=>changeIndex(3)}></div>
    </div>
  );
}
