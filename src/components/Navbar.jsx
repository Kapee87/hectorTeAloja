import React from 'react';
import { units } from '../mockups&utils/propsMockUp';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 text-white flex items-center ps-2 gap-4 flex-wrap xs:justify-center">
      <a href="/">Home</a>
      {
        units?.map(unit => (
          <NavLink to={`/propiedad/${unit.id + 1}`} key={unit.title}>{unit.title} </NavLink>
        ))
      }

    </nav>
  );
};

export default Navbar;
