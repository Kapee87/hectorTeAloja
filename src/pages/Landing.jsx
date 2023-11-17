// src/pages/Landing.js
import React from 'react';
import { units } from '../mockups/propsMockUp';
import { NavLink } from 'react-router-dom';


const Landing = () => {
  return (
    <div className="p-4 pt-[13vh] flex flex-wrap">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a Hector te Aloja</h1>
      <div className='flex flex-wrap gap-2 justify-center '>
        {
          units?.map((unit) => (
            < NavLink to={`/propiedad/${unit.id + 1}`} className="inline lg:mx-auto " key={unit.id} >

              <div className='border-2 rounded-lg inline-block'>
                <div className='overflow-hidden w-full border-b-2 h-40 max-h-80 bg-cover bg-no-repeat bg-center hover:bg-[length:25rem]'
                  style={{ backgroundImage: `url(${unit.picArray[unit.id]})` }}>
                  {/* <img src={unit.picArray[unit.id]} alt="Property 1" className="min-w-full  mb-2 lg:hover:scale-110 transition-transform duration-700" /> */}
                </div>
                <div className='p-1 lg:p-4'>
                  <p>Dirección: {unit.address} </p>
                  <p>Huéspedes: {unit.title} </p>
                </div>
              </div>
            </NavLink>
          ))
        }
      </div>

    </div >
  );
};

export default Landing;
