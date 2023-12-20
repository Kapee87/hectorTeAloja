import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function ScrollToTopButton() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowScrollButton(scrollY > 100); // Muestra el botón cuando el scroll es mayor a 100px
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='fixed bottom-4 right-4 hover:[&_button]:bg-gray-700'>
            {showScrollButton && (
                <button
                    className='bg-gray-800 shadow-gray-600 shadow-inner text-white px-4 py-2 rounded-full text-xs transition-all'
                    onClick={handleScrollTop}
                >
                    <FontAwesomeIcon icon={faArrowUp} style={{ color: "#a6adbb" }} />
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton