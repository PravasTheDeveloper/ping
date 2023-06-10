import React from 'react'
import { BiCart, BiHomeAlt, BiSearch, MdOutlineAccountCircle } from 'react-icons/all.js'

function NavbarMobileView() {
    return (
        <>
            <div className='w-full h-full sm:hidden z-[100]'>
                
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
