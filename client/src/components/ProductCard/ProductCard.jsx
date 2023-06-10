import React from 'react'
import { AiFillStar } from 'react-icons/all.js'

function ProductCard({ name, image, brand, price, sell }) {
    return (
        <>
            <div className='bg-slate-100 h-auto w-full rounded-xl shadow-xl mx-auto relative z-[0]' >
                <div className='w-full aspect-square bg-slate-200 rounded-md'>
                    <img src={`/Products/${image}`} alt="" />
                </div>
                <div className='w-full h-auto '>
                    <div className='flex justify-between font-semibold h-6 w-full overflow-hidden pl-5'>
                        <div className='w-[200px]'>{name}</div>

                    </div>
                    <div className='my-2 pl-5'>
                        <div className='text-xl'>{price} ৳</div>
                    </div>
                    <div className='text-sm text-slate-500 mb-5 pl-5'>
                        {brand}
                    </div>
                    <div className='w-full h-auto pl-0'>
                        <button className='border border-teal-600 py-2 px-4 text-[12px] rounded-xl hover:bg-teal-600 hover:text-white duration-300 w-full h-full'>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard
