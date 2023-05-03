import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Navigation.module.css';

export default function Navigation() {
  return (
    <header className={style.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul className={style.navItems}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          |
          <li>
            <NavLink to="/calculator">Calculator</NavLink>
          </li>
          |
          <li>
            <NavLink to="/quote">Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
