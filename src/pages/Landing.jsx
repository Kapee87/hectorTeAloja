// src/pages/Landing.js
import React, { useContext, useEffect, useState } from 'react';
import { units } from '../mockups&utils/propsMockUp';
import { NavLink, useNavigate } from 'react-router-dom';
import { useFirstLoad } from '../hooks/useFirstLoad';
import { usePropHandler } from '../hooks/usePropHandler';
import { UserContext } from '../context/UserContextB';

const Landing = () => {
  const { token } = useFirstLoad()
  const { getProps, deleteProp } = usePropHandler()
  const { properties, setProperties } = useContext(UserContext)

  const handleDelete = (e, id) => {
    e.preventDefault()
    deleteProp(id, token)

  }

  useEffect(() => {
    try {
      getProps(setProperties)
    } catch (error) {
      console.log(error);
    }
  }, [])

  // useEffect(() => {
  //   console.log(properties);
  // }, [properties])




  return (
    <div className="p-4 pt-[13vh] flex md:flex-col flex-wrap">
      <h1 className="text-2xl font-bold mb-4">Alquiler de Duplex en Las Toninas</h1>
      <div className='flex flex-wrap gap-4 justify-center '>
        {
          properties.length > 0 ? properties?.map((prop) => (
            < NavLink to={`/propiedad/${prop._id}`} className="w-fit" key={prop._id} >

              <div className='border-2 rounded-lg inline-block'>
                <div className='overflow-hidden w-64 border-b-2 h-72 max-h-96 bg-cover bg-no-repeat bg-center hover:bg-[length:150%] relative'
                  style={{ backgroundImage: `url(${prop.gallery[0]})` }}>

                  {token && <button className='block absolute right-1 top-1 text-xl bg-slate-700 p-1 bg-opacity-60 rounded-xl' onClick={(e) => handleDelete(e, prop._id)}>
                    ❌
                  </button>}
                </div>
                <div className='p-1 lg:p-4'>
                  <p>Dirección: {prop.address} </p>
                  <p>Huéspedes: {prop.servicesNotBoolean.huespedes} </p>
                </div>
              </div>
            </NavLink>
          ))
            : <h4>No hay propiedades cargadas</h4>
        }
      </div>
    </div >
  );
};

export default Landing;
