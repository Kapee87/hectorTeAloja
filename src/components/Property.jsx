import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Carrousel from './PropertyMicro/Carrousel';
import PropertyDetails from './PropertyMicro/PropertyDetails';
import PropertyMap from './PropertyMicro/PropertyMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp, faArrowUp, faUpDown } from '@fortawesome/free-solid-svg-icons';




function Property() {
    const idProperty = useParams('id').id
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
        <section className='min-h-screen w-full -mt-1 md:m-0 pt-[12vh] sm:pt-[15vh] lg:pt-5 md:px-10
                            flex flex-col lg:flex-row items-center lg:flex-wrap'>
            <div className='w-full lg:w-1/2 flex flex-col items-center'>
                <h2 className='text-4xl'>Aca van los detalles de la propiedad numero {idProperty}</h2>
                <Carrousel />
            </div>
            <div className='lg:w-1/2 text-sm text-center sm:text-left px-2 sm:px-0 '>
                <PropertyDetails />
            </div>
            <div className='w-full p-1 mt-10 px-5'>
                <PropertyMap />
            </div>
            <div className='fixed bottom-4 right-4 hover:[&_button]:bg-gray-700'>
                {showScrollButton && (
                    <button
                        className='bg-gray-800 shadow-gray-600 shadow-inner text-white px-4 py-2 rounded-full text-xl transition-all '
                        onClick={handleScrollTop}
                    >
                        <FontAwesomeIcon icon={faArrowUp} style={{ color: "#a6adbb" }} />
                    </button>
                )}
            </div>
        </section>
    )
}

export default Property