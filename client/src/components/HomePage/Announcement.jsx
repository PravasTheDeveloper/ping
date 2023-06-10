import React from 'react'
import { FiPhone, AiOutlineDown } from 'react-icons/all.js';


function Announcement() {
    return (
        <>
            <div className="w-full h-[40px] bg-slate-700 hidden md:block">
                <div className='w-full h-full container mx-auto'>
                    <div className='w-full h-full flex'>
                        <div className='w-1/4 h-full flex items-center text-white'>
                            <div className='mr-5'>
                                <FiPhone />
                            </div>
                            <div>
                                +88 01998027752
                            </div>
                        </div>
                        <div className='w-2/4 h-full flex justify-center items-center'>
                            <div className='text-white'>
                                Get 50% on Selected Items | Shop Now
                            </div>
                        </div>
                        <div className='w-1/4 h-full flex items-center justify-end text-white'>
                            <div className='flex items-center justify-center'>
                                <div>Eng </div>
                                <div><AiOutlineDown /></div>
                            </div>
                            <div className='flex items-center justify-center ml-5'>
                                <div>Location </div>
                                <div><AiOutlineDown /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Announcement
