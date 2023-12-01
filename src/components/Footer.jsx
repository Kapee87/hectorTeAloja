import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
    return (
        <footer className="footer place-items-end pe-10 p-4 text-base-content bottom-0 relative ">
            <aside>
                <p>Made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://www.kapeehdev.com.ar">Kapeeh | Dev</a></p>
            </aside>
        </footer>
    )
}

export default Footer