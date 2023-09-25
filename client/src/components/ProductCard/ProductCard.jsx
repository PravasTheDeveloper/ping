import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/all.js'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../redux/cartRedux';
import { Link } from 'react-router-dom';

function ProductCard({ name, image, brand, price, sell, productCode }) {

    const position = useSelector((state) => state.product.position)

    return (
        <>
            {position === "grid" ?
                <div className='bg-slate-100 h-auto w-full rounded-xl shadow-xl mx-auto relative z-[0] group cursor-pointer' >
                    <Link to={`/product/${productCode}`}>
                        <div className='w-full aspect-square bg-slate-200 rounded-md p-5 group-hover:p-0 duration-300 overflow-hidden'>
                            <img src={`/Products/${image}`} alt="" className='duration-700 group-hover:rotate-12' />
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
                    </Link>
                </div>

                :

                <div className='bg-slate-100 h-auto w-full rounded-xl shadow-xl mx-auto relative z-[0] group cursor-pointer' >
                    <Link to={`/product/${productCode}`} className='flex'>
                        <div className='w-full bg-slate-200 rounded-md p-5 group-hover:p-0 duration-300 overflow-hidden'>
                            <img src={`/Products/${image}`} alt="" className='duration-700 group-hover:rotate-12 max-h-40 ' />
                        </div>
                        <div className='w-full h-auto flex flex-col justify-center'>
                            <div className='flex justify-between font-semibold h-6 w-full overflow-hidden pl-5'>
                                <div className='w-[200px]'>{name}</div>

                            </div>
                            <div className='my-2 pl-5'>
                                <div className='text-xl'>{price} ৳</div>
                            </div>
                            <div className='text-sm text-slate-500 mb-5 pl-5'>
                                {brand}
                            </div>
                            <div className='w-full h-auto px-5'>
                                <button className='border border-teal-600 py-2 px-4 text-[12px] rounded-xl hover:bg-teal-600 hover:text-white duration-300 w-full h-full'>
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </>
    )
}

export default ProductCard
