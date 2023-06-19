import React from 'react';
import { BiCart, BiHomeAlt, BiSearch, MdOutlineAccountCircle } from 'react-icons/all.js'
import { Link } from 'react-router-dom';

function NavbarMobileViewLower() {
    return (
        <>
            <div className='w-full h-[60px] flex fixed bottom-3 px-3 items-center sm:hidden'>
                <div className='w-full h-full justify-around bg-white rounded-full items-center flex text-2xl shadow-xl'>
                    <div className='w-8 h-8 bg-slate-900 flex justify-center items-center text-white rounded-md z-50'>
                        <BiHomeAlt />
                    </div>
                    <div>
                        <Link to="/cart">
                            <BiCart />
                        </Link>
                    </div>
                    <div>
                        <MdOutlineAccountCircle />
                    </div>
                    <div className=''><i className="fa-regular fa-heart"></i></div>
                </div>
            </div>
        </>
    )
}

export default NavbarMobileViewLower
