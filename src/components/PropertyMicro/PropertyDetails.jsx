import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleRight, faBan, faClock, faE, faFan, faFireBurner, faFireFlameCurved, faKitchenSet, faPaw, faPersonShelter, faRightFromBracket, faRightToBracket, faToilet, faTree, faTv, faUserGroup, faWater, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { iconArray } from '../../mockups&utils/iconArray'
import IconSpecs from './IconSpecs'
import axios from 'axios'

function PropertyDetails() {
    // console.log(iconArray.map(i => i))
    const url = 'https://alojateapi.onrender.com/api/'
    const [property, setProperty] = useState(null)
    const propertyId = '656b601b1f03151140bd6292'


    useEffect(() => {
        axios.get(`${url}/propiedades/${propertyId}`)
            .then(res => {
                const booleanToRender = res.data.property.servicesBoolean.map(s => iconArray.filter(i => i.name == s))
                const notBooleanToRender = []
                console.log(res.data.property);
                for (const clave in res.data.property.servicesNotBoolean) {
                    const value = res.data.property.servicesNotBoolean[clave]
                    // console.log(clave, value);
                    notBooleanToRender.push({ ...iconArray.filter(i => i.name == clave), value })
                }
                setProperty({ ...res.data.property, booleanToRender, notBooleanToRender })
            })
    }, [])

    return (
        <div className='flex flex-col gap-5'>
            <p className=''>{property?.description || property?.name} </p>
            <div className='[&_svg]:text-xl [&_div]:w-full sm:[&_div]:w-1/4   text-lg flex gap-5 justify-center flex-wrap'>
                {
                    property && property.booleanToRender?.map(service => {
                        return <IconSpecs name={service[0].name} icon={service[0].icon} key={service[0].name} />
                    })
                }
                <hr className='w-full' />
                {
                    property && property.notBooleanToRender?.map(service => {
                        console.log(service);
                        return <IconSpecs name={service[0].name} icon={service[0].icon} key={service[0].name} value={service.value} />
                    })
                }

                <hr className='w-full' />

                {/* ANALIZAR SERIAMENTE SI SE AGREGA LA OPCIÓN DE MICROONDAS */}
                {/*  <div className="hover:[&>span]:opacity-80 flex items-center justify-center gap-5" data-tip="Microondas">
                    <span className='w-fit'>Microondas</span>
                    <div className='fa-layers'>
                        <FontAwesomeIcon icon={faTv} style={{ color: "#a6adbb", }} className='h-8' />
                        <FontAwesomeIcon icon={faWater} style={{ color: "#a6adbb", }} className='h-5 pb-1 ' />
                    </div>
                </div> */}

            </div>
            <div className='text-base text-gray-600 drop-shadow-2xl'>
                <p> Detalle de los íconos si haces click o pasas el mouse por arriba de los mismos</p>
            </div>
            <button onClick={() => console.log(property)}>prueba</button>
        </div>
    )
}

export default PropertyDetails