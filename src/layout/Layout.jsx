import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'


function Layout() {
    return (
        <>
            <Header />
            <div className='mt-40 sm:mt-16 md:m-0'>
                <Outlet />
            </div>
        </>
    )
}

export default Layout