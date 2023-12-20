import React, { useContext, useEffect } from 'react';
import { units } from '../mockups&utils/propsMockUp';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContextB';
import { usePropHandler } from '../hooks/usePropHandler';

const Navbar = () => {
  const { properties, setProperties } = useContext(UserContext)
  const { getProps } = usePropHandler()

  useEffect(() => {
    getProps(setProperties)
  }, [])

  return (
    <nav className="bg-gray-800 flex items-center ps-2 gap-4 flex-wrap xs:justify-center">
      <a href="/" className='btn btn-ghost'>Home</a>

      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn btn-ghost m-1">Propiedades 🔻</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          {properties?.map(unit => (
            <li key={unit._id}>
              <NavLink to={`/propiedad/${unit._id}`} className='dropdown-open' >{unit.name} </NavLink>
            </li>
          ))
          }
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
