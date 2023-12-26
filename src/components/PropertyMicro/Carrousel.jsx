import React, { useEffect, useState } from 'react'
import logoH from '../../assets/logoH.png'

function Carrousel({ property }) {
    const [picArray, setPicArray] = useState([])
    const [galeryIndex, setGaleryIndex] = useState(picArray.length)

    const handlePrev = () => {
        galeryIndex < picArray.length ? setGaleryIndex(prev => prev + 7) : setGaleryIndex(-(picArray.length))
    }
    const handleNext = () => {
        galeryIndex > -(picArray.length) ? setGaleryIndex(prev => prev - 10) : setGaleryIndex(picArray.length)
    }
    useEffect(() => {
        setPicArray(property?.gallery ? property.gallery : [])
    }, [property])


    return (
        <div className='container flex justify-center items-center flex-col p-4 relative'>
            <div className="carousel h-[65vh] w-full rounded-lg">
                {
                    picArray?.length > 0 ?
                        picArray.map((pic, index) => (
                            <div id={index} className="carousel-item w-full"
                                key={index}>
                                <img src={pic} className="w-full" alt={`Imagen ${index}`} />
                            </div>
                        ))
                        : <img src={logoH} alt="Logo para cuando no existe imagen" className='object-cover' />
                }
            </div>
            {

                picArray?.length > 0 ?

                    (
                        <>
                            <div className={`flex justify-center w-full py-2 gap-2 overflow-hidden`}>
                                <div className={`flex transition-transform duration-500`} style={{ width: `${picArray.length * 96}px`, transform: `translateX(${galeryIndex}%)` }} >
                                    {
                                        picArray.map((pic, index) => (
                                            <a href={`#${index}`} className="btn btn-lg bg-cover" key={`index ${index}`} id={`index ${index}`}
                                                style={{ backgroundImage: `url(${pic})` }} >
                                            </a>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                                <button className="btn btn-xs btn-circle" onClick={handlePrev} >❮</button>
                                <button className="btn btn-xs btn-circle" onClick={handleNext} >❯</button>
                            </div>
                        </>
                    )
                    : ''
            }
        </div>
    )
}

export default Carrousel