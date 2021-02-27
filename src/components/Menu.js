import React from 'react';
import './Menu.css';

export default function Menu() {
  return (
    <>
        <div className="menu-component">
            <div className="menu__logo">
                <img src="/img/tesla.svg" alt="tesla-logo" />
            </div>
            <ul className="menu__main">
                <li>Model S</li>
                <li>Model 3</li>
                <li>Model X</li>
            </ul>
            <ul className="menu__right">
                <li>shop</li>
                <li>tesla account</li>
                <li>icon</li>
            </ul>
        </div>
    </>
  );
}
