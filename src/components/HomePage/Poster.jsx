import React from 'react'

function Poster() {
  return (
    <>
        <div className='w-full h-full container mx-auto mt-10'>
            <div className='w-full md:h-[400px] bg-orange-100 flex flex-col md:flex-row justify-center items-center'>
                <div className='md:w-1/2 w-[80%] h-full'>
                    <div className='h-full text-2xl md:text-4xl font-semibold text-teal-700 md:pl-24 flex flex-col md:items-start items-center justify-center'>
                        <span className='text-3xl md:text-5xl'>Get 50% Off</span><br /> In Your Selected Product
                        <div className='w-full h-auto mt-5 flex justify-center items-center md:justify-start'>
                            <button className='bg-teal-700 text-white rounded-full text-base font-normal py-2 px-5'>
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full flex justify-end'>
                    <img src="/Posters/postrOne.png" className='w-auto h-full' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Poster
