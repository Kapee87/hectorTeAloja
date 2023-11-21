import React from 'react'
import { useParams } from 'react-router-dom';
import Carrousel from './PropertyMicro/Carrousel';
import PropertyDetails from './PropertyMicro/PropertyDetails';
import PropertyMap from './PropertyMicro/PropertyMap';



function Property() {
    const idProperty = useParams('id').id

    return (
        <section className='min-h-screen w-full -mt-1 md:m-0 pt-[12vh] sm:pt-[15vh] md:px-10
                            flex flex-col lg:flex-row items-center flex-wrap '>
            <div className='min-h-screen w-full sm:2/3 lg:w-1/2 flex flex-col items-center'>
                <h2 className='text-4xl'>Aca van los detalles de la propiedad numero {idProperty}</h2>
                <Carrousel />
            </div>
            <div className='md:w-1/2 text-sm p-1 text-center'>
                <PropertyDetails />
            </div>
            <div className='md:w-full p-1'>
                <PropertyMap />
            </div>
        </section>
    )
}

export default Property