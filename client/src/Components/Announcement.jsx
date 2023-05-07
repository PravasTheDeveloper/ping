import React from 'react'
import { FiMail } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';

function Announcement() {
    return (
        <>
            <div className='w-full md:h-[30px] h-auto bg-teal-700 md:flex items-center text-white px-10 py-5 md:py-0 text-sm lg:text-base'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <div className='mr-2'>
                        <FiMail />
                    </div>
                    <div>
                        support.ping@gmail.com
                    </div>
                    <div className='mx-3'>
                        |
                    </div>
                </div>
                <div className='flex items-center mb-4 md:mb-0'>
                    <div className='mr-2'>
                        <IoCallOutline />
                    </div>
                    <div>
                        +008 01998027752
                    </div>
                    <div className='mx-3'>
                        |
                    </div>
                </div>
                <div className=''>
                    Super Deal ! Free Shipping on Order over 50$
                </div>
            </div>
        </>
    )
}

export default Announcement