import React, { useContext, useEffect, useRef, useState } from 'react'
import { iconArray } from '../mockups&utils/iconArray'
import IconSpecs from '../components/PropertyMicro/IconSpecs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePropHandler } from '../hooks/usePropHandler'
import { UserContext } from '../context/UserContextB'
import { uploadFile } from '../firebase/config'
import { v4 } from 'uuid'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function NewProperty() {
    const navigate = useNavigate()
    const { token } = useContext(UserContext)
    const [tempGallery, setTempGallery] = useState([])
    const [sendGallery, setSendGallery] = useState([])
    const { createProp } = usePropHandler()
    const iconArrayNotBoolean = iconArray.slice(0, 3)
    const iconArrayBoolean = iconArray.slice(5)
    const check = iconArray.filter(icon => icon.name == 'checkIn' || icon.name == 'checkOut')
    const inputRef = {
        name: useRef(),
        address: useRef(),
        servicesNotBoolean: {},
        servicesBoolean: {},
    }
    iconArrayBoolean.forEach(key => { inputRef.servicesBoolean[key.name] = useRef() })
    iconArrayNotBoolean.forEach(key => { inputRef.servicesNotBoolean[key.name] = useRef() })

    const handleCreateProp = async (e) => {
        e.preventDefault()
        const newProperty = {
            name: inputRef.name.current.value,
            address: inputRef.address.current.value,
            servicesNotBoolean: {},
            servicesBoolean: [],
            gallery: []
        }
        Object.keys(inputRef.servicesNotBoolean).forEach(key => {
            newProperty.servicesNotBoolean[key] = inputRef.servicesNotBoolean[key].current.value
        })
        Object.keys(inputRef.servicesBoolean).forEach(key => {
            inputRef.servicesBoolean[key].current.checked
                ? newProperty.servicesBoolean.push(inputRef.servicesBoolean[key].current.name)
                : ''
        })
        for (const image of sendGallery) {
            console.log(image);
            try {
                const result = await uploadFile(image)
                newProperty.gallery.push(result)
            } catch (error) {
                console.log(error);
            }
        }
        console.log(newProperty);
        createProp(newProperty, token)
        navigate('/')

    }

    const handleOnChange = async (e) => {
        e.preventDefault()
        console.log(e.target.files);

        Array.from(e.target.files).forEach((inputFile) => {
            const file = inputFile
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setTempGallery(prev => [...prev, event.target.result])
                }
                reader.readAsDataURL(file)
            }
            setSendGallery(prev => [...prev, inputFile])
        })
    }

    const handleDeletePic = (e, pic) => {
        e.preventDefault()
        const tempPics = tempGallery.filter(image => image !== pic)
        setTempGallery(tempPics)
    }

    useEffect(() => {
        // console.log(tempGallery);
        // console.log(sendGallery);
    }, [tempGallery, sendGallery])
    return (
        <div className="hero min-h-screen bg-base-200 flex flex-col">
            <form action="" className='mt-[20vh] flex flex-wrap md:flex-col gap-8 p-4 md:p-10 rounded-lg md:w-3/4 mb-10 border-2
            [&_textarea]:rounded-lg [&_input]:rounded-lg [&_input]:px-4 [&_input]:py-1  [&_input]:text-black dark:[&_input]:text-white ' onSubmit={handleCreateProp}>
                <div className='flex flex-wrap gap-5 [&_label]:flex [&_label]:flex-col [&_label]:md:flex-row [&_label]:md:gap-3 [&_label]:items-center '>
                    <label htmlFor="">
                        Imagen:
                        <input type="file" onChange={handleOnChange} className="file-input file-input-bordered file-input-xs w-full max-w-xs" multiple />
                    </label>
                    <div className="flex flex-wrap">
                        {tempGallery?.length > 0 ? tempGallery.map(pic => (
                            <div key={v4()} className='h-36 overflow-hidden flex object-cover items-center relative'>
                                <img src={pic} alt={`Imagen desde ${pic}`} className='w-full h-full rounded-md m-2' />
                                <button className='absolute top-0 left-4' onClick={(e) => handleDeletePic(e, pic)}>
                                    <FontAwesomeIcon icon={faX} color='red' />
                                </button>
                            </div>
                        ))
                            : ''
                        }
                    </div>
                </div>
                <hr />
                <div className='flex flex-wrap gap-5 [&_label]:flex [&_label]:flex-col [&_label]:md:flex-row [&_label]:md:gap-3 [&_label]:items-center '>
                    <label htmlFor="name">Nombre : <input type="text" name='name' minLength={4} ref={inputRef.name} /></label>
                    <label htmlFor="address">Dirección : <input type="text" name='address' minLength={4} ref={inputRef.address} /></label>
                    <label htmlFor="description" className='flex items-center w-full'>Descripción : <textarea className='md:w-96 h-24' name='description' minLength={4} /></label>

                </div>
                <hr />
                <div className='flex flex-wrap gap-5 [&_label]:flex [&_label]:flex-col [&_label]:md:flex-row [&_label]:md:gap-3 [&_label]:items-center'>
                    {
                        check.map(icon => (
                            <label htmlFor={icon} key={icon.name}>  <IconSpecs icon={icon.icon} name={icon.name} />  :
                                <input type="time" name={icon.name} minLength={4} ref={inputRef.servicesNotBoolean[icon.name]} />
                            </label>
                        ))
                    }
                    {
                        iconArrayNotBoolean.map(icon => (
                            <label htmlFor={icon.name} key={icon.name} className='flex items-center gap-5' >
                                <IconSpecs name={icon.name} icon={icon.icon} />
                                <input type="number" name={icon.name} ref={inputRef.servicesNotBoolean[icon.name]} required />
                            </label>
                        ))
                    }
                </div>
                <hr />
                <div className='flex flex-col md:flex-row flex-wrap gap-5 md:w-3/4 justify-center items-center'>
                    {
                        iconArrayBoolean.map(icon => (
                            <label htmlFor={icon.name} key={icon.name} className='flex gap-4 items-center' >
                                <IconSpecs name={icon.name} icon={icon.icon} />
                                <input
                                    type="checkbox"
                                    name={icon.name}
                                    className='checkbox checkbox-accent'
                                    ref={inputRef.servicesBoolean[icon.name]} />
                            </label>
                        ))
                    }
                </div>
                <button type='submit' className='btn btn-ghost bg-gray-600 w-3/4 p-2 rounded-md my-auto self-center '>Crear Propiedad</button>
            </form>
        </div>
    )
}

export default NewProperty