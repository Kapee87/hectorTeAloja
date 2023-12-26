import React, { useContext, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContextB';
import { usePropHandler } from '../hooks/usePropHandler';



const Navbar = () => {
  const { properties, setProperties, token } = useContext(UserContext)
  const { getProps, getPropById } = usePropHandler()
  const { id } = useParams()

  useEffect(() => {
    getProps(setProperties)
  }, [])

  const handleScrollBottom = () => {
    const footerElement = document.getElementById('footer'); // Reemplaza 'footer' con el id de tu elemento de pie de página
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-800 flex items-center ps-2 md:gap-4 flex-wrap justify-center">
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
      {
        !token && <button to='#footer' className={'btn btn-ghost'} onClick={handleScrollBottom}>Contacto</button>
      }
      {
        token && <NavLink to='/nuevapropiedad' className='btn btn-ghost'>Crear Propiedad</NavLink>
      }

    </nav >
  );
};

export default Navbar;
