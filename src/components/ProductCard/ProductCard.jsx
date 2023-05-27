import React from 'react'
import { AiFillStar } from 'react-icons/all.js'

function ProductCard() {
    return (
        <>
            <div className='bg-slate-100 h-[430px] w-[300px] rounded-xl shadow-xl mx-auto mb-10' >
                <div className='w-[300px] h-[300px] bg-slate-200 rounded-md'>
                    <img src='/Categorys/Hudi-001.gif' alt="" />
                </div>
                <div className='w-full h-auto px-2'>
                    <div className='flex justify-between font-semibold'>
                        <div>NEW HUDI</div>
                        <div className='text-xl'>80 $</div>
                    </div>
                    <div className='text-sm text-slate-500'>
                        Organic Kpaor Fapor
                    </div>
                    <div className='text-teal-600 flex items-center my-1'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <div className='text-black ml-2'>
                            (125)
                        </div>
                    </div>
                    <div>
                        <button className='border border-teal-600 py-2 px-4 text-[12px] rounded-full hover:bg-teal-600 hover:text-white duration-300'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
