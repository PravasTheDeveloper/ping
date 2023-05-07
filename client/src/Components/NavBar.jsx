import React, { useState } from 'react'
import { BsPinAngle, BsSearch, BsFillPersonPlusFill, BsFillPersonFill } from 'react-icons/bs';
import { RiShoppingCart2Line } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineLanguage } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
function NavBar() {

    const [searchBarMobile, setsearchBarMobile] = useState(true)

    return (
        <>
            <div className='w-full h-[60px] px-10 justify-center items-center hidden md:flex'>
                <div className='w-full h-full flex justify-between items-center' >

                    {/* Left Section */}
                    <div className='flex items-center justify-between w-1/6 '>
                        <div className='w-auto h-full flex justify-start items-center cursor-pointer'>
                            <div className='text-2xl mr-2'>
                                <BsPinAngle />
                            </div>
                            <div className='text-xl'>
                                PING
                            </div>
                        </div>
                        <div className='mr-5 cursor-pointer'>
                            EN
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className='w-4/6 h-9 relative'>
                        <input className='NavBarSearchBar' type="text" />
                        <div className='absolute top-0 right-3 h-full flex items-center'>
                            <BsSearch />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center justify-end w-1/6'>
                        <div className='cursor-pointer'>Register</div>
                        <div className='mx-5 cursor-pointer'>Sign In</div>
                        <div className='text-2xl relative cursor-pointer'>
                            <RiShoppingCart2Line />
                            <div className='absolute top-[-10px] right-[-10px] bg-cyan-900 w-5 h-5 text-base flex justify-center items-center text-white rounded-full'>
                                2
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full h-auto p-2 md:hidden'>
                <div className='flex items-center justify-between w-full h-12'>
                    <div className='w-auto h-full flex justify-start items-center cursor-pointer'>
                        <div className='text-2xl mr-2'>
                            <BsPinAngle />
                        </div>
                        <div className='text-xl'>
                            PING
                        </div>
                    </div>
                    <div className={searchBarMobile === false ? 'cursor-pointer w-10 h-10 flex justify-center items-center bg-teal-700 rounded-full' : 'cursor-pointer w-10 h-10 flex justify-center items-center bg-rose-500 rounded-full'} onClick={() => { setsearchBarMobile(!searchBarMobile) }}>
                        <button className='text-white '>
                            {searchBarMobile === false ? <BsSearch className='duration-300' /> : <RxCross2 />}
                        </button>
                    </div>
                </div>
                {searchBarMobile === true ?
                    <div className='w-full h-full relative mb-5'>
                        <input className='h-10 w-full px-5 border rounded-full' type="text" />
                        <div className='cursor-pointer w-10 h-10 flex justify-center items-center bg-teal-700 rounded-full absolute top-0 right-0'>
                            <button className='text-white'>
                                <BsSearch />
                            </button>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className='h-12 w-full absolute bottom-0 left-0 md:hidden flex px-5 text-3xl text-white justify-between items-center z-50' >
                <div className='h-12 w-full bg-teal-700 fixed bottom-0 left-0 md:hidden flex px-5 text-3xl text-white justify-between items-center z-50'>
                    <div className='h-12 w-12 rounded-full flex justify-center mb-8 items-center bg-teal-700'><AiFillHome /></div>
                    <div ><BsFillPersonPlusFill /></div>
                    <div ><BsFillPersonFill /></div>
                    <div ><RiShoppingCart2Line /></div>
                    <div ><MdOutlineLanguage /></div>
                </div>
            </div>
        </>
    )
}

export default NavBar