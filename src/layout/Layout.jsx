import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTopButton from '../components/LayoutMicro/ScrollToTopButton'


function Layout() {
    return (
        <div className='bg-base-200'>
            <Header />
            <div className='mt-36 sm:mt-16 md:my-0 min-h-[93vh] md:mx-20 '>
                <Outlet />
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>
    )
}

export default Layout