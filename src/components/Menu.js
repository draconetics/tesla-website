import React from 'react';

import './Menu.css';

export default function Menu({isMenuFixed}) {
  const staticMenu = isMenuFixed?'':' static';
  return (
    <>
        <div className={'menu-component'+staticMenu}>
            <div className="menu__logo">
                <img src="/img/tesla.svg" alt="tesla-logo" />
            </div>
            <ul className="menu__main">
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
                <li>Model Y</li>
                <li>Solar roof</li>
                <li>Solar panels</li>
            </ul>
            <ul className="menu__right">
                <li>shop</li>
                <li>tesla account</li>
                <li><img src="/img/menu/menu-icon.png" width="20px" height="20px" alt="menu-icon" /></li>
            </ul>
        </div>
    </>
  );
}
