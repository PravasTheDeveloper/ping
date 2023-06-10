import React from 'react'
import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai'

function CartProducts() {
    return (
        <>
            
                <div className='h-[100px] flex items-center border my-5'>
                    <div className='h-full bg-slate-500 w-[100px] rounded-full flex justify-center items-center'>
                        <img src="/Categorys/Hudi-001.gif" className='h-[90%] rounded-full w-auto bg-white' alt="" />
                    </div>
                    <div className='ml-10'>
                        <div className='text-xl'>
                            White Hudi
                        </div>
                        <div className=''>
                            Price : 500 $
                        </div>
                        <div className=''>
                            Quantity : 1
                        </div>
                    </div>
                    <div className='ml-10 flex flex-col items-center'>
                        <div className='flex mb-5'>
                            <div>
                                <button className='w-4 h-4 bg-slate-700 rounded-full text-white'><AiOutlinePlus /></button>
                            </div>
                            <div className='w-10 flex justify-center'>1</div>
                            <div>
                                <button className='w-4 h-4 bg-slate-700 rounded-full text-white flex justify-center items-center text-xl'>-</button>
                            </div>
                        </div>
                        <div className='bg-rose-500 w-7 text-white flex justify-center items-center rounded-full text-xl h-7'>
                            <button><AiOutlineDelete /></button>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default CartProducts
