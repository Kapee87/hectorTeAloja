import React from 'react'
import IconSpecs from './IconSpecs'


function PropertyDetails({ property }) {

    return (
        <div className='flex flex-col gap-5'>
            <p className=''>{property?.description || property?.name} </p>
            <div className='[&_svg]:text-xl [&_div]:w-full sm:[&_div]:w-1/4 text-lg flex gap-5 justify-center flex-wrap'>
                {
                    property && property.booleanToRender?.map(service => {
                        return <IconSpecs name={service[0].name} icon={service[0].icon} key={service[0].name} />
                    })
                }
                <hr className='w-full' />
                {
                    property && property.notBooleanToRender?.map(service => {
                        return <IconSpecs name={service[0].name} icon={service[0].icon} key={service[0].name} value={service.value} />
                    })
                }

                <hr className='w-full' />

            </div>
            <div className='text-base text-gray-600 drop-shadow-2xl'>
                <p> Detalle de los íconos si haces click o pasas el mouse por arriba de los mismos</p>
            </div>
            {/* <button onClick={() => console.log(property)}>prueba</button> */}
        </div>
    )
}

export default PropertyDetails