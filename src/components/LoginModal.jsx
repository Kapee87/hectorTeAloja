// src/components/LoginModal.js
import React, { useState } from 'react';
const userImage = 'https://this-person-does-not-exist.com/img/avatar-gen1189e13c348e0f980314f3898ca27342.jpg'

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true)

  const handleLogin = () => {
    // Implementar la lógica de login falso aquí
    // onLogin();
    setIsAdmin(prev => !prev)
    setShowModal(false);
  };

  const handleLogout = (e) => {
    setIsAdmin(prev => !prev)
    // Implementar la lógica de logout aquí
    setShowModal(false);

  };

  return (
    <div className='flex justify-center items-center'>
      <button onClick={() => setShowModal(true)}>🔒</button>
      {showModal && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center'>
          <div className="bg-white p-4 flex flex-col h-44 w-1/2 items-center relative">
            <button onClick={() => setShowModal(false)} className='absolute top-4 right-8'>
              ✖️
            </button>
            {isAdmin ? (
              <>
                <img src={userImage} alt="Admin" className="w-12 h-12 rounded-full mb-4" />

                <button className='bg-gray-600 p-2 rounded-md my-auto' onClick={handleLogout}>
                  Cerrar sesión
                </button>


              </>
            ) : (
              <button onClick={handleLogin} className='bg-gray-600 w-3/4 p-2 rounded-md my-auto '>Iniciar sesión</button>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
