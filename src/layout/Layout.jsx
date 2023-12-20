import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/LayoutMicro/ScrollToTopButton'


function Layout() {
    return (
        <div>
            <Header />
            <div className='mt-40 sm:mt-16 md:m-0 min-h-[93vh] '>
                <Outlet />
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}

export default Layout