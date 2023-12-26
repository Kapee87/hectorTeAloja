import React, { useRef } from 'react'
import Swal from 'sweetalert2'

function MessageBtn({ property, style, children, formTrue }) {
    const today = new Date().toISOString().split('T')[0];
    const inputRefDates = {
        checkIn: useRef(),
        checkOut: useRef(),
    }
    const vars = {
        phoneNumber: '5491151349215',
        message: '',
        whatsappLink: ''
    }
    const formatToDDMMYYYY = (dateString) => {
        const [year, month, day] = dateString.split('-');
        return `${day}-${month}-${year}`;
    };

    const linkHandler = (e) => {
        e.preventDefault()
        if (!inputRefDates.checkIn.current.value || !inputRefDates.checkOut.current.value)
            return Swal.fire('No hay fechas', 'Seleccione fecha de ingreso/egreso, por favor', 'warning')
        if (inputRefDates.checkIn.current.value == inputRefDates.checkOut.current.value)
            return Swal.fire('La fecha es la misma', 'Seleccione días distintos para la consulta ', 'warning')
        if (inputRefDates.checkIn.current.value > inputRefDates.checkOut.current.value) {
            const [year, month, day] = inputRefDates.checkIn.current.value.split('-')

            inputRefDates.checkOut.current.value = year + month + (Number(day) + 1).toString
            return Swal.fire('Cuidado', 'Seleccione un día posterior al de egreso ', 'warning')
        }



        const checkInFormatted = formatToDDMMYYYY(inputRefDates.checkIn.current.value)
        const checkOutFormatted = formatToDDMMYYYY(inputRefDates.checkOut.current.value)
        console.log(checkInFormatted, checkOutFormatted);

        vars.message = `Hola,%20quería%20consultar%20por%20la%20propiedad%20${property?.name}%20de%20la%20calle%20${property?.address}.%20Sería%20para%20ingresar%20el%20${checkInFormatted}%20y%20salir%20el%20${checkOutFormatted}`;
        vars.whatsappLink = `https://api.whatsapp.com/send?phone=${vars.phoneNumber}&text=${vars.message}`;


        window.open(vars.whatsappLink, '_blank')
    }

    const handleDateChange = (ref) => {
        if (ref.current.value < today) {
            ref.current.value = today
        }
    }


    return (
        <div className="flex flex-col">
            {formTrue && <>
                Consultar por fechas disponibles:
                <form className='flex gap-3 justify-around p-3 flex-wrap [&_label]:flex [&_label]:items-center [&_label]:gap-5 [&_label>input]:p-2 [&_label>input]:rounded-md'>
                    <label htmlFor="">ingreso:
                        <input type="date" name="checkIn" ref={inputRefDates.checkIn} min={today} onChange={() => handleDateChange(inputRefDates.checkIn)} />
                    </label>
                    <label htmlFor="">
                        salida:
                        <input type="date" name="checkOut" ref={inputRefDates.checkOut} min={today} onChange={() => handleDateChange(inputRefDates.checkOut)} />
                    </label>

                </form>
            </>}
            <a className={style} href={vars.whatsappLink} target='_blank' rel='noopener noreferrer' onClick={linkHandler}>
                <h3>Consultar por la propiedad {property?.name} {children && children} </h3>
            </a>
        </div>
    )
}

export default MessageBtn