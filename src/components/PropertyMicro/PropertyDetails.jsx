import { faBan, faFan, faFireBurner, faFireFlameCurved, faKitchenSet, faPaw, faPersonShelter, faToilet, faTree, faTv, faUserGroup, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function PropertyDetails() {

    return (
        <div className='flex flex-col gap-5 lg:mt-28'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed itaque temporibus aut cumque iste esse sit quo fugiat sequi, qui vel! Reiciendis corrupti ullam maiores similique nisi labore fugiat beatae fuga, exercitationem veritatis, numquam excepturi repudiandae blanditiis distinctio. Illum quisquam itaque consequuntur similique veniam expedita, eaque a, laborum at vel assumenda minus! Veritatis tempore laudantium nobis eligendi ea vel. Temporibus sint nulla voluptates commodi nisi, magni veritatis corporis facilis nesciunt libero! Unde nisi sunt repellendus quisquam quia minus tenetur, error omnis modi pariatur cupiditate nulla explicabo nam ullam? Animi iusto magnam quibusdam debitis dignissimos laborum vitae? Omnis asperiores dolorem commodi quisquam perspiciatis odit incidunt nesciunt illum quaerat, id autem cumque placeat sit. Ratione aut adipisci perspiciatis consequatur esse unde incidunt neque! Fuga, magni? Consequatur laboriosam aliquam aperiam cumque maiores veniam sit distinctio sed iusto facere, dolor reprehenderit quaerat voluptatum assumenda praesentium voluptatibus porro quod ratione, aspernatur deserunt tempora? Accusantium debitis cumque nobis architecto officiis quos eaque voluptates ipsa non error culpa, laboriosam assumenda facilis suscipit quo perspiciatis dicta harum, dolorum tenetur sed est quas, nemo explicabo animi! Maiores velit quibusdam, tenetur cum praesentium quos similique beatae atque consectetur rerum fugiat numquam illo voluptas nemo minima, eveniet eaque aspernatur at.</p>
            <div className='[&_svg]:text-2xl sm:[&_div]:w-1/4 [&_div]:w-1/2  text-lg flex gap-4 justify-center flex-wrap'>
                <div className="tooltip" data-tip="Huéspedes">
                    <FontAwesomeIcon icon={faUserGroup} style={{ color: "#a6adbb", }} /> <span>4</span>
                </div>
                <div className="tooltip" data-tip="Ambientes">
                    <FontAwesomeIcon icon={faPersonShelter} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip" data-tip="Baños">
                    <FontAwesomeIcon icon={faToilet} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip" data-tip="Tv">
                    <FontAwesomeIcon icon={faTv} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip" data-tip="wifi">
                    <FontAwesomeIcon icon={faWifi} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip" data-tip="ventilador techo/pie">
                    <FontAwesomeIcon icon={faFan} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip" data-tip="Cocina">
                    <FontAwesomeIcon icon={faFireBurner} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip" data-tip="Vajilla completa">
                    <FontAwesomeIcon icon={faKitchenSet} style={{ color: "#a6adbb", }} /> <span>para 4</span>
                </div>
                <div className="tooltip" data-tip="Parrilla">
                    <FontAwesomeIcon icon={faFireFlameCurved} style={{ color: "#a6adbb", }} /> <span>Cubierta | Al aire libre</span>
                </div>
                <div className="tooltip" data-tip="Patio">
                    <FontAwesomeIcon icon={faTree} style={{ color: "#a6adbb", }} />
                </div>
                <div className="tooltip" data-tip="hello">
                    <FontAwesomeIcon icon={faKitchenSet} style={{ color: "#a6adbb", }} /> <span>1</span>
                </div>
                <div className="tooltip fa-layers" data-tip="Mascotas">
                    <FontAwesomeIcon icon={faBan} style={{ color: "#a6adbb", }} className='h-10'/>
                    <FontAwesomeIcon icon={faPaw} style={{ color: "#a6adbb", }} className='h-5' />
                </div>

            </div>
            <div className='text-base text-gray-600 drop-shadow-2xl'>
                <p> Detalle de los íconos si haces click o pasas el mouse por arriba de los mismos</p>
            </div>
        </div>
    )
}

export default PropertyDetails