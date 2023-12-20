import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Carrousel from './PropertyMicro/Carrousel';
import PropertyDetails from './PropertyMicro/PropertyDetails';
import { usePropHandler } from '../hooks/usePropHandler';

function Property() {
    const idProperty = useParams('id').id
    const { getPropById } = usePropHandler()
    const [property, setProperty] = useState(null)

    useEffect(() => {
        getPropById(setProperty, idProperty)
    }, [idProperty])

    return (
        <section className='min-h-screen w-full -mt-1 md:m-0 pt-[12vh] sm:pt-[15vh] lg:pt-[15vh] md:px-10
                            flex flex-col lg:flex-row items-center lg:flex-wrap px-8'>
            <h2 className='text-4xl w-full'>Aca van los detalles de la propiedad {property?.name}</h2>
            <div className='w-full lg:w-1/2 flex flex-col items-center'>
                <Carrousel />
            </div>
            <div className='lg:w-1/2 text-sm text-center sm:text-left px-2 sm:px-0 '>
                <PropertyDetails property={property} />
            </div>
        </section>
    )
}

export default Property