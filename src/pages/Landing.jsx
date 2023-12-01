// src/pages/Landing.js
import React from 'react';
import { units } from '../mockups&utils/propsMockUp';
import { NavLink } from 'react-router-dom';
import { useFirstLoad } from '../hooks/useFirstLoad';


const Landing = () => {
  const { token, userData } = useFirstLoad()
  console.log(token, userData);
  const handleDelete = () => {
    alert("sin mover el url guacheeen")
  }
  return (
    <div className="p-4 pt-[13vh] flex md:flex-col flex-wrap">
      <h1 className="text-2xl font-bold mb-4">Bienvenido a Hector te Aloja</h1>
      <div className='flex flex-wrap gap-2 justify-center '>
        {
          units?.map((unit) => (
            < NavLink to={`/propiedad/${unit.id + 1}`} className="inline lg:mx-auto " key={unit.id} >

              <div className='border-2 rounded-lg inline-block'>
                <div className='overflow-hidden w-full border-b-2 h-40 max-h-80 bg-cover bg-no-repeat bg-center hover:bg-[length:25rem] relative'
                  style={{ backgroundImage: `url(${unit.picArray[unit.id]})` }}>

                  {/*  falta implementar la lógica para eliminar una propiedad(con endpoint api para tal fin)  */}                  {userData && <button className='block absolute right-1 top-1 text-xl bg-slate-700 p-1 bg-opacity-60 rounded-xl' onClick={(e) => {
                    e.preventDefault();//evita que el link(navlink) navegue hacia otra sección
                    handleDelete();
                  }}>
                    ❌
                  </button>}
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
