import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, BiCart, BiSearch, MdOutlineAccountCircle, RxCross2 } from "react-icons/all.js"
import { Link } from 'react-router-dom'

function NavbarWebView() {

    const [SearchBar, setSearchBar] = useState(false)
    const [PersonPanel, setPersonPanel] = useState(false)

    return (
        <>
            <div className='w-full h-[60px] bg-white shadow-xl sm:flex hidden z-50 px-4'>
                <div className='w-full h-full flex justify-between container mx-auto items-center' >
                    <Link to="/" className='xl:w-1/4 w-2/12 h-[50px] flex items-center'>
                        <div >
                            LOGO
                        </div>
                    </Link>
                    <div className='xl:w-2/4 w-8/12 h-[50px]  flex justify-center items-center'>
                        <div className='w-full h-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                
                                <div className='flex items-center'>
                                    <div className={SearchBar == true ? "hidden duration-200" : "flex items-center"}>
                                        <div className='ml-5'>
                                            Deals
                                        </div>
                                        <div className='ml-5'>
                                            What's New
                                        </div>
                                        <div className='ml-5'>
                                            Delivery
                                        </div>
                                        <div className='ml-5 hidden lg:block'>
                                            <input className='h-[30px] w-[200px] rounded-full text-sm outline-none px-5 bg-slate-200' placeholder='Search Porduct' onFocus={() => { console.log("focus") }} onBlur={() => { console.log("blure") }} />
                                        </div>
                                    </div>

                                    <div className={SearchBar == false ? "ml-5 lg:hidden" : "hidden"}>
                                        <div className='bg-slate-600 text-white rounded-full w-7 h-7 flex justify-center items-center' onClick={() => { setSearchBar(true) }}>
                                            <BiSearch />
                                        </div>
                                    </div>
                                    <div className={SearchBar === true ? "flex" : "hidden"}>
                                        <input className='h-[30px] w-[200px] rounded-full text-sm outline-none px-5 mx-5 bg-slate-200' placeholder='Search Porduct' onFocus={() => { console.log("focus") }} onBlur={() => { console.log("blure") }} />
                                        <div className='bg-rose-600 rounded-full w-7 h-7 flex justify-center items-center ' onClick={() => { setSearchBar(false) }}>
                                            <RxCross2 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-1/4 w-2/12 h-[50px] flex justify-end items-center text-2xl'>
                        <Link to="/cart">
                            <div className='mr-5 relative'>
                                <BiCart />
                                <div className='bg-slate-700 flex justify-center items-center absolute w-5 h-5 rounded-full text-sm text-white top-[-8px] right-[-10px]'>
                                    2
                                </div>
                            </div>
                        </Link>
                        <div className='relative group cursor-pointer '>
                            <MdOutlineAccountCircle />
                            <div className='bg-white w-[150px] absolute shadow-xl border translate-y-[-1000px] group-hover:translate-y-0 cursor-pointer right-0 z-10 top-10'>
                                <div className='text-sm text-center border-b py-2 hover:bg-slate-300'>
                                    Pravas Chandra
                                </div>
                                <Link to="/signup">
                                    <div className='text-sm text-center border-b py-2 hover:bg-slate-300'>
                                        Sign Up
                                    </div>
                                </Link>
                                <Link to="/login">
                                    <div className='text-sm text-center py-2 hover:bg-slate-300'>
                                        Login
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarWebView
