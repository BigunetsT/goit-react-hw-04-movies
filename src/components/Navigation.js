import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';
import '../index.scss';

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        exact
        to={routes.home}
      >
        Home
      </NavLink>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        to={routes.movies}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
