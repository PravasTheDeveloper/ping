import React from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';

function CartProductEach() {
    return (
        <>
            <div className='bg-white border-b border-slate-300'>
                <div className='h-[200px] w-full flex'>
                    <div className='h-full w-[20%]'>
                        <img src="Product/product10.gif" className='w-full h-full' alt="" />
                    </div>
                    <div className='h-full w-[60%]'>
                        <div className='w-full h-full text-xl flex flex-col justify-between p-3 pl-7'>
                            <div>Product Name : Jesse Tunder Shoes</div>
                            <div>Product ID : XD98990</div>
                            <div>Quantity : In Stock</div>
                            <div>Size : 30$</div>
                            <div>Brand : No Brand</div>
                        </div>
                    </div>
                    <div className='bg-white h-full w-[20%] flex flex-col justify-around'>
                        <div className='flex'>
                            <div className='w-8 h-8'>
                                <AiFillMinusCircle className='w-full h-full' />
                            </div>
                            <div className='text-3xl mx-5'>
                                2
                            </div>
                            <div className='w-7 h-7 '>
                                <BsFillPlusCircleFill className='w-full h-full' />
                            </div>
                        </div>
                        <div className='text-3xl ml-2'>
                            $30
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartProductEach