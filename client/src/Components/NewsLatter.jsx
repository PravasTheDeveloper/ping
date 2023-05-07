import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function NewsLatter() {
  return (
    <>
        <div className='w-full h-[400px]'>
            <div className='w-full h-full pt-32 container mx-auto flex flex-col items-center'>
                <div className='text-6xl font-semibold'>
                    Newsletter
                </div>
                <div className='text-xl my-5'>
                    Get timely updates from you favorite products
                </div>
                <div className='w-[50%] h-[45px] flex'>
                    <input type="text" className='w-full h-full rounded-xl mr-5 border-2 pl-4 outline-none' placeholder='Write Your Email' />
                    <button className='w-[45px] h-[45px] bg-white rounded-full'>
                        <BsFillArrowRightCircleFill className='w-full h-full text-teal-700' />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewsLatter