import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer place-items-center sm:place-items-end sm:pe-20 p-4 text-base-content bottom-0 relative" id='footer'>
            <aside className='flex items-center pe-10 md:pe-0'>
                <div className="border-r-2">
                    <a href="https://api.whatsapp.com/send?phone=5491151349215" target='_blank' className='flex flex-wrap justify-center  hover:drop-shadow-dkMode pe-2 rounded-lg p-1'> <FontAwesomeIcon icon={faWhatsapp} size='lg' /> contacto </a>
                </div>

                <a href="https://www.kapeehdev.com.ar" target='_blank' className='hover:drop-shadow-dkMode flex flex-wrap justify-center'>Made with <FontAwesomeIcon icon={faHeart} /> by
                    Kapeeh | Dev
                </a>
            </aside>
        </footer >
    )
}

export default Footer