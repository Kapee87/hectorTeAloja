// src/components/LoginModal.js
import React, { useContext, useRef, useState } from 'react';
import { useUserHandler } from '../hooks/useUserHandler';
import { useFirstLoad } from '../hooks/useFirstLoad';
import { UserContext } from '../context/UserContextB';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const userImage = 'https://this-person-does-not-exist.com/img/avatar-gen1189e13c348e0f980314f3898ca27342.jpg'

const LoginModal = () => {
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const { token } = useFirstLoad()
  const { login, logout } = useUserHandler()
  const { userData } = useContext(UserContext)

  const inputRef = {
    userRef: useRef(' '),
    passwordRef: useRef(' '),
  }

  const handleLogout = (e) => {

    logout()
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()

    const email = inputRef.userRef.current.value
    const password = inputRef.passwordRef.current.value
    const signInSuccess = await login(email, password)

    signInSuccess?.success
      ? Swal.fire({
        title: 'Bienvenid@',
        text: 'Sesión iniciada correctamente, redirigiendo al inicio...',
        icon: 'success'
      }).then(() => {
        setShowModal(false)
        navigate('/', { replace: true })
      })
      : Swal.fire('Error', Array.isArray(signInSuccess) ? signInSuccess.join(', ') : signInSuccess, 'error')
  }

  return (
    <div className='flex justify-center items-center'>
      <button onClick={() => setShowModal(true)}>{token ? '🔓' : '🔒'} </button>
      {showModal && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center'>
          <div className="bg-gray-200 p-8 md:p-16 flex flex-col  md:w-1/2 items-center relative rounded-xl gap-3">
            <button onClick={() => setShowModal(false)} className='absolute top-4 right-8'>
              ✖️
            </button>
            {token ? (
              <>
                <img src={userData.profileImage} alt="Admin" className="h-36 md:h-56  object-cover rounded-full mb-4" />
                <h3 className='text-emerald-950 font-bold'>Bienvenid@ {userData.name} </h3>
                <button className='bg-gray-600 p-2 rounded-md my-auto' onClick={handleLogout}>
                  Cerrar sesión
                </button>
              </>
            ) : (
              <form action="" className='flex flex-col gap-4 [&_label]:text-black [&_input]:rounded-lg [&_input]:px-4 [&_input]:py-1 [&_input]:text-white' onSubmit={handleSubmit}>
                <label htmlFor="">Usuario: <input type="email" name='email' minLength={4} ref={inputRef.userRef} /></label>
                <label htmlFor="">Contraseña: <input type="password" name='password' minLength={6} ref={inputRef.passwordRef} /></label>
                <button type='submit' className='bg-gray-600 w-3/4 p-2 rounded-md my-auto '>Iniciar sesión</button>

              </form>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
