import React from 'react'
import notFoundPic from '../assets/notFoundPic.png'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className="hero min-h-screen bg-base-200 "  >
            <div className='w-2/3 h-full md:w-full flex justify-center pt-36' style={{ background: `url(${notFoundPic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <NavLink to={'/'} className='btn btn-outline'>
                    Volver a inicio
                </NavLink>
            </div>

        </div>
    )
}

export default NotFound