import React from 'react'
import { BsPinAngle } from 'react-icons/bs';
function Login() {
  return (
    <>
        <div className='w-full h-screen bg-slate-400 flex justify-center items-center'>
            <div className='w-[700px] h-[500px] bg-white rounded-lg p-10 flex'>
                <div className='w-[50%] h-full flex flex-col justify-center items-center'>
                    <div className='text-2xl'>
                        Login
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-[90%] h-10 my-5'>
                            <input type="text" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Email or Phone' />
                        </div>
                        <div className='w-[90%] h-10'>
                            <input type="Password" className='w-full h-10 rounded-full border border-slate-400 pl-4 outline-slate-500' placeholder='Password' />
                        </div>
                        <div className='w-[90%] h-10 my-5'>
                            <button className='w-full h-10 rounded-full bg-teal-600 text-white hover:bg-teal-700 duration-300'>
                                Log In
                            </button>
                        </div>
                        <div className='underline cursor-pointer select-none'>
                            Forget Password
                        </div>
                        <div className='mt-5 cursor-pointer select-none'>
                            Don't Have Account ? <span className='underline'>Sign Up</span> 
                        </div>
                    </div>
                </div>
                <div className='w-[50%] h-full bg-teal-600 flex flex-col items-center justify-center text-white'>
                    <div className='text-8xl'>
                        <BsPinAngle />
                    </div>
                    <div className='text-5xl my-7'>
                        PING
                    </div>
                    <div className='text-lg'>
                        Shop Your Drem
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login