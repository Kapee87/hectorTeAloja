import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <footer className="footer sm:place-items-end sm:pe-20 p-4 text-base-content bottom-0 relative -z-10">
            <aside>
                <p>Made with <FontAwesomeIcon icon={faHeart} /> by
                    <a href="https://www.kapeehdev.com.ar" className='hover:drop-shadow-dkMode'> Kapeeh | Dev</a>
                </p>
            </aside>
        </footer>
    )
}

export default Footer