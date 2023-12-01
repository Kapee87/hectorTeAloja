import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'


function Layout() {
    return (
        <div>
            <Header />
            <div className='mt-40 sm:mt-16 md:m-0 min-h-[93vh] '>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout