import React from 'react'
import { BiCart, BiHomeAlt, BiSearch, MdOutlineAccountCircle } from 'react-icons/all.js'

function NavbarMobileView() {
    return (
        <>
            <div className='w-full h-full  sm:hidden'>
                <div className='w-full h-[60px] flex fixed bottom-3 px-3 items-center '>
                    <div className='w-full h-full justify-around bg-white rounded-full items-center flex text-2xl shadow-xl'>
                        <div className='w-8 h-8 bg-slate-900 flex justify-center items-center text-white rounded-md'>
                            <BiHomeAlt />
                        </div>
                        <div>
                            <BiCart />
                        </div>
                        <div>
                            <MdOutlineAccountCircle />
                        </div>
                        <div className=''><i className="fa-regular fa-heart"></i></div>
                    </div>
                </div>
                <div className='bg-white w-full h-14 shadow-lg p-5 flex items-center justify-between'>
                    <div>
                        Logo
                    </div>
                    <div>
                    <input className='h-[30px] w-[200px] rounded-full text-sm outline-none px-5 mx-5 bg-slate-200' placeholder='Search Porduct' onFocus={() => { console.log("focus") }} onBlur={() => { console.log("blure") }} />
                    </div>
                    <div className='flex items-center'>
                        <div className='bg-slate-600 text-white rounded-full w-7 h-7 flex justify-center items-center'>
                            <BiSearch />
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default NavbarMobileView
