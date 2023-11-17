import React, { useState } from 'react'
import { pics } from '../mockups/picsMockUp.json'

function Carrousel() {
    const [picArray, setPicArray] = useState(pics)
    const [galeryIndex, setGaleryIndex] = useState(0)

    const handleNext = () => {
        galeryIndex > 10 ? setGaleryIndex(prev => prev - 1) : setGaleryIndex(picArray.length - 1)
    }
    const handlePrev = () => {
        galeryIndex < picArray.length - 10 ? setGaleryIndex(prev => prev + 1) : setGaleryIndex(1)
    }

/*     const handleNext = () => {
        setGaleryIndex((prev) => (prev + 1) % picArray.length);
    };

    const handlePrev = () => {
        setGaleryIndex((prev) => (prev - 1 + picArray.length) % picArray.length);
    }; */

    return (
        <div className='container flex justify-center items-center flex-col p-4'>
            <div className="carousel h-[65vh] w-full">
                {picArray.map((pic, index) => (
                    <div id={index} className="carousel-item w-full"
                        key={index}>
                        <img src={pic} className="w-full" alt={`Imagen ${index}`} />
                    </div>
                ))}
            </div>

            <div className={`flex justify-center w-full py-2 gap-2 overflow-hidden relative  `}>
                <div className='flex' style={{ width: `${picArray.length * 96}px`, transform: `translateX(-${galeryIndex}%)` }} >
                    {
                        picArray.map((pic, index) => (
                            <a href={`#${index}`} className="btn btn-lg bg-cover" key={`index ${index}`} id={`index ${index}`}
                                style={{ backgroundImage: `url(${pic})` }} >
                                {/* <img src={pic} alt="Imagen pequeña para elegir y mostrar en la imagen grande" className='w-full h-full' /> */}
                            </a>
                        ))
                    }
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <button className="btn btn-xs btn-circle" onClick={handlePrev} >❮</button>
                    <button className="btn btn-xs btn-circle" onClick={handleNext} >❯</button>
                </div>
            </div>
        </div>
    )
}

export default Carrousel



{/* <div className='w-full h-[40vh] border-2 bg-cover bg-no-repeat bg-center rounded-md' style={{ backgroundImage: `url(${pics[currentImg]})` }}>
                </div> */}

{/*  <div className='rounded-lg w-full  overflow-hidden flex items-center relative'>
                <div className='flex h-28' style={{ width: `${picArray.length * 96}px` }}>
                    {picArray.map((pic, index) => (
                        <button
                            onClick={() => handleChangeImg(index)}
                            className='h-full w-96 flex items-center object-cover'
                            key={index}
                        >
                            <img src={pic} alt="Imagen pequeña para elegir y mostrar en la imagen grande" className='w-full h-full' />
                        </button>
                    ))}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button className="btn btn-circle">❮</button>
                        <button className="btn btn-circle">❯</button>
                    </div>
                </div>
            </div> */}