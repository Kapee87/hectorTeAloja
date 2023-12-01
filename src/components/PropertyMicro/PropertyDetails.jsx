import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { faArrowAltCircleRight, faBan, faClock, faE, faFan, faFireBurner, faFireFlameCurved, faKitchenSet, faPaw, faPersonShelter, faRightFromBracket, faRightToBracket, faToilet, faTree, faTv, faUserGroup, faWater, faWifi } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PropertyDetails() {

    return (
        <div className='flex flex-col gap-5 lg:mt-[30vh]'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed itaque temporibus aut cumque iste esse sit quo fugiat sequi, qui vel! Reiciendis corrupti ullam maiores similique nisi labore fugiat beatae fuga, exercitationem veritatis, numquam excepturi repudiandae blanditiis distinctio. Illum quisquam itaque consequuntur similique veniam expedita, eaque a, laborum at vel assumenda minus! Veritatis tempore laudantium nobis eligendi ea vel. Temporibus sint nulla voluptates commodi nisi, magni veritatis corporis facilis nesciunt libero! Unde nisi sunt repellendus quisquam quia minus tenetur, error omnis modi pariatur cupiditate nulla explicabo nam ullam? Animi iusto magnam quibusdam debitis dignissimos laborum vitae? Omnis asperiores dolorem commodi quisquam perspiciatis odit incidunt nesciunt illum quaerat, id autem cumque placeat sit. Ratione aut adipisci perspiciatis consequatur esse unde incidunt neque! Fuga, magni? Consequatur laboriosam aliquam aperiam cumque maiores veniam sit distinctio sed iusto facere, dolor reprehenderit quaerat voluptatum assumenda praesentium voluptatibus porro quod ratione, aspernatur deserunt tempora? Accusantium debitis cumque nobis architecto officiis quos eaque voluptates ipsa non error culpa, laboriosam assumenda facilis suscipit quo perspiciatis dicta harum, dolorum tenetur sed est quas, nemo explicabo animi! Maiores velit quibusdam, tenetur cum praesentium quos similique beatae atque consectetur rerum fugiat numquam illo voluptas nemo minima, eveniet eaque aspernatur at.</p>
            <div className='[&_svg]:text-xl [&_div]:w-full sm:[&_div]:w-1/4   text-lg flex gap-5 justify-center flex-wrap'>
                {/* Habría que buscar la forma de hacer un componente para las iconos. por ahora queda hardcodeado */}
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Huéspedes">
                    <span className='me-5'>Huéspedes </span>
                    <FontAwesomeIcon icon={faUserGroup} style={{ color: "#a6adbb", }} />
                    <span> 4</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Ambientes">
                    <span className='me-5'>Ambientes</span>
                    <FontAwesomeIcon icon={faPersonShelter} style={{ color: "#a6adbb", }} />
                    <span> 1</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Baños">
                    <span className='me-5'>Baño</span>
                    <FontAwesomeIcon icon={faToilet} style={{ color: "#a6adbb", }} />
                    <span> 1</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Tv">
                    <span className='me-5'>Televisión</span>
                    <FontAwesomeIcon icon={faTv} style={{ color: "#a6adbb", }} />
                    <span> 1</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="wifi">
                    <span className='me-5'>Wifi</span>
                    <FontAwesomeIcon icon={faWifi} style={{ color: "#a6adbb", }} />
                    <span> 1</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="ventilador">
                    <span className='me-5'>Ventilador</span>
                    <FontAwesomeIcon icon={faFan} style={{ color: "#a6adbb", }} />
                    <span> 1</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Cocina">
                    <span className='me-5'>Cocina</span>
                    <FontAwesomeIcon icon={faFireBurner} style={{ color: "#a6adbb", }} />
                    <span> 1</span>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Vajilla completa">
                    <span className='me-5'>Vajilla completa</span>
                    <FontAwesomeIcon icon={faKitchenSet} style={{ color: "#a6adbb", }} />
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Parrilla">
                    <span className='me-5'>Parrilla</span>
                    <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#a6adbb", }} />
                </div>
                <div className="tooltip hover:[&>span]:opacity-80" data-tip="Patio/Jardín">
                    <span className='me-5'>Patio/Jardín</span>
                    <FontAwesomeIcon icon={faTree} style={{ color: "#a6adbb", }} />
                </div>
                <div className="tooltip hover:[&>span]:opacity-80 flex items-center" data-tip="Microondas">
                    <span className=''>Microondas</span>
                    <div className='fa-layers'>
                        <FontAwesomeIcon icon={faTv} style={{ color: "#a6adbb", }} className='h-8' />
                        <FontAwesomeIcon icon={faWater} style={{ color: "#a6adbb", }} className='h-5 pb-1 ' />
                    </div>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80 flex items-center" data-tip="Mascotas">
                    <span className=''>Mascotas</span>
                    <div className='fa-layers'>
                        <FontAwesomeIcon icon={faBan} style={{ color: "#a6adbb", }} className='h-10' />
                        <FontAwesomeIcon icon={faPaw} style={{ color: "#a6adbb", }} className='h-5' />
                    </div>
                </div>
                <div className="tooltip hover:[&>span]:opacity-80 flex items-center" data-tip="Escionamiento">
                    <span className=''>Estacionamiento </span>
                    <div className='fa-layers'>
                        <FontAwesomeIcon icon={faE} style={{ color: "#a6adbb", }} className='h-5 ps-2 ' />
                        <FontAwesomeIcon icon={faBan} style={{ color: "#a6adbb", }} className='h-10' />
                    </div>
                </div>


            </div>
            <div className='text-base text-gray-600 drop-shadow-2xl'>
                <p> Detalle de los íconos si haces click o pasas el mouse por arriba de los mismos</p>
            </div>
        </div>
    )
}

export default PropertyDetails