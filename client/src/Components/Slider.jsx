import React, { useEffect, useState } from 'react'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';


function Slider() {

    const [sliderPattern, setsliderPattern] = useState(0)

    const leftSideHandle = () => {
        if (sliderPattern >= 0) {
            setsliderPattern(-200)

        } else {
            setsliderPattern(sliderPattern + 100);
        }
    }

    const rightSideHandle = () => {
        if (sliderPattern <= -200) {
            setsliderPattern(0)
        } else {
            setsliderPattern(sliderPattern - 100);
        }

    }

    const sliderStyle = {
        width: "100vw",
        height: "100%",
        display: "flex",
        transform: `translateX(${sliderPattern}vw)`
    }

    return (
        <div className='w-full h-[800px] relative flex items-center overflow-hidden cursor-pointer'>
            <div className='w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center text-2xl absolute left-10 z-50' onClick={() => { leftSideHandle() }}>
                <button>
                    <MdOutlineArrowBackIos />
                </button>
            </div>
            <div style={sliderStyle} className='transition-all duration-300 select-none' >
                <div className='w-screen h-full bg-[#fbafb9] flex items-center'>
                    <div className='w-screen h-full flex'>
                        <div className='w-full h-full container mx-auto md:flex'>
                            <div className='md:h-[100%] h-[40%] w-full flex items-center'>
                                <div className='w-full h-full md:h-[70%] flex justify-center items-center md:block'>
                                    <img src="slider/summer__Sale.png" alt="" className='w-auto h-full' />
                                </div>
                            </div>
                            <div className='w-full md:h-full h-[60%] flex justify-center items-center md:items-start flex-col'>
                                <h1 className='md:text-[80px] text-[50px] font-semibold'>
                                    Summer Sale
                                </h1>
                                <p className='text-xl my-10 text-center'>DON'T COMPROMISE ON STYLE! GET FLAT 30%
                                    OFF FOR NEW ARRIVALS.
                                </p>
                                <div>
                                    <button className='text-xl bg-cyan-700 p-2 px-5 rounded-full cursor-pointer text-white'>
                                        Show Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-screen h-full bg-sky-300 flex items-center'>
                    <div className='w-screen h-full flex'>
                        <div className='w-full h-full container mx-auto flex'>
                            <div className='h-[100%] w-full flex items-center'>
                                <div className='w-full h-[70%]'>
                                    <img src="slider/winter_Sale.gif" alt="" className='w-auto h-full' />
                                </div>
                            </div>
                            <div className='w-full h-full flex justify-center flex-col'>
                                <h1 className='text-[80px] font-semibold'>
                                    Family Shop
                                </h1>
                                <p className='text-xl my-10'>DON'T COMPROMISE ON STYLE! GET FLAT 30%
                                    OFF FOR NEW ARRIVALS.
                                </p>
                                <div>
                                    <button className='text-xl bg-cyan-700 p-2 px-5 rounded-full cursor-pointer text-white'>
                                        Show Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='w-screen h-full bg-teal-300 flex items-center'>
                    <div className='w-screen h-full flex'>
                        <div className='w-full h-full container mx-auto flex'>
                            <div className='h-[100%] w-full flex items-center'>
                                <div className='w-full h-[70%]'>
                                    <img src="slider/Shop__more.gif" alt="" className='w-auto h-full' />
                                </div>
                            </div>
                            <div className='w-full h-full flex justify-center flex-col'>
                                <h1 className='text-[80px] font-semibold'>
                                    Supper Sale
                                </h1>
                                <p className='text-xl my-10'>DON'T COMPROMISE ON STYLE! GET FLAT 30%
                                    OFF FOR NEW ARRIVALS.
                                </p>
                                <div>
                                    <button className='text-xl bg-cyan-700 p-2 px-5 rounded-full cursor-pointer text-white'>
                                        Show Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='w-12 h-12 bg-slate-200 rounded-full flex justify-center items-center text-2xl absolute right-10 cursor-pointer' onClick={() => { rightSideHandle() }}>
                <button>
                    <MdOutlineArrowForwardIos />
                </button>

            </div>
        </div>
    )
}

export default Slider