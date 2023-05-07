import React from 'react'

function Registration() {
    return (
        <>
            <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
                <div className='w-[50%] h-auto bg-white p-16 rounded-lg'>
                    <div className='text-2xl text-center'>
                        Registration
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[40%] h-10 my-8'>
                            <input type="text" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Name' />
                        </div>
                        <div className='w-[40%] h-10 '>
                            <input type="text" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Email' />
                        </div>
                        <div className='w-[40%] h-10 my-8'>
                            <input type="text" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Phone' />
                        </div>
                        <div className='w-[40%] h-10'>
                            <input type="Password" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Password' />
                        </div>
                        <div className='w-[40%] h-10 my-8'>
                            <input type="Password" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Confirm Password' />
                        </div>
                        <div className='w-[40%] h-10'>
                            <button className='w-full h-10 rounded-full bg-teal-600 text-white hover:bg-teal-700 duration-300'>
                                Sign Up
                            </button>
                        </div>
                        <div className='mt-5 cursor-pointer select-none'>
                            Already Have Account ? <span className='underline'>Log In</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration