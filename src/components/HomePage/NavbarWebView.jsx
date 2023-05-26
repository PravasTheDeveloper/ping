import React from 'react'
import { useState } from 'react'
import { AiOutlineDown, BiCart, BiSearch, MdOutlineAccountCircle, RxCross2 } from "react-icons/all.js"

function NavbarWebView() {

    const [SearchBar, setSearchBar] = useState(false)

    return (
        <>
            <div className='w-full h-[60px] bg-white shadow-xl sm:flex hidden'>
                <div className='w-full h-full flex justify-between container mx-auto items-center' >
                    <div className='xl:w-1/4 w-2/12 h-[50px] flex items-center'>
                        LOGO
                    </div>
                    <div className='xl:w-2/4 w-8/12 h-[50px]  flex justify-center items-center'>
                        <div className='w-full h-full'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='h-full flex items-center'>
                                    <div>Category</div>
                                    <div><AiOutlineDown /></div>
                                </div>
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
                        <div className='mr-5'>
                            <BiCart />
                        </div>
                        <div>
                            <MdOutlineAccountCircle />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarWebView
