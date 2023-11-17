import React from 'react'
import { useParams } from 'react-router-dom';
import Carrousel from './Carrousel';


function Property() {
    const idProperty = useParams('id').id

    return (
        <section className='min-h-screen w-full -mt-1 md:m-0 pt-[12vh] sm:pt-[15vh] flex items-center '>
            <div className='min-h-screen w-1/2 flex flex-col '>
                <h2 className='text-4xl'>Aca van los detalles de la propiedad numero {idProperty}</h2>
                <Carrousel />
            </div>
            <div className='w-1/2'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam sed itaque temporibus aut cumque iste esse sit quo fugiat sequi, qui vel! Reiciendis corrupti ullam maiores similique nisi labore fugiat beatae fuga, exercitationem veritatis, numquam excepturi repudiandae blanditiis distinctio. Illum quisquam itaque consequuntur similique veniam expedita, eaque a, laborum at vel assumenda minus! Veritatis tempore laudantium nobis eligendi ea vel. Temporibus sint nulla voluptates commodi nisi, magni veritatis corporis facilis nesciunt libero! Unde nisi sunt repellendus quisquam quia minus tenetur, error omnis modi pariatur cupiditate nulla explicabo nam ullam? Animi iusto magnam quibusdam debitis dignissimos laborum vitae? Omnis asperiores dolorem commodi quisquam perspiciatis odit incidunt nesciunt illum quaerat, id autem cumque placeat sit. Ratione aut adipisci perspiciatis consequatur esse unde incidunt neque! Fuga, magni? Consequatur laboriosam aliquam aperiam cumque maiores veniam sit distinctio sed iusto facere, dolor reprehenderit quaerat voluptatum assumenda praesentium voluptatibus porro quod ratione, aspernatur deserunt tempora? Accusantium debitis cumque nobis architecto officiis quos eaque voluptates ipsa non error culpa, laboriosam assumenda facilis suscipit quo perspiciatis dicta harum, dolorum tenetur sed est quas, nemo explicabo animi! Maiores velit quibusdam, tenetur cum praesentium quos similique beatae atque consectetur rerum fugiat numquam illo voluptas nemo minima, eveniet eaque aspernatur at.</p>
            </div>
        </section>
    )
}

export default Property