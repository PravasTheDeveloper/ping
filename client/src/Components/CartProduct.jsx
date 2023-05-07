import React from 'react'

import CartProductEach from './CartProductEach';

function CartProduct() {
    return (
        <>
            <div className='w-full h-auto'>
                <div className='w-full h-auto mt-10'>
                    <div className='w-full h-auto text-4xl text-center'>
                        Your Bag
                    </div>
                    <div className='w-full h-auto container mx-auto py-5 flex justify-between items-center text-lg'>
                        <div>
                            <button className='bg-teal-600 p-2 px-4 rounded-full text-white'>
                                Continue Shoping
                            </button>
                        </div>
                        <div className='flex'>
                            <div className='mr-5'>
                                Shoping Bag (2)
                            </div>
                            <div>
                                Your Wishlist (0)
                            </div>
                        </div>
                        <div>
                            <button className='bg-teal-600 p-2 px-4 rounded-full text-white'>
                                Check Out Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='w-full h-auto '>
                    <div className='w-full h-auto  container mx-auto flex'>
                        <div className='w-[70%] h-full'>
                            <CartProductEach />
                            <CartProductEach />
                            <CartProductEach />
                            <CartProductEach />
                        </div>
                        <div className='w-[30%] h-[500px] relative'>
                            <div className='bg-white p-10 rounded-xl border border-slate-300 ml-10 fixed'>
                                <div className='text-4xl font-light mb-16'>
                                    Order Summary
                                </div>
                                <div className='w-full h-auto flex justify-between text-xl mb-7'>
                                    <div>Sub Total</div>
                                    <div>80.0 $</div>
                                </div>

                                <div className='w-full h-auto flex justify-between text-xl mb-7'>
                                    <div>Estimated Shipping</div>
                                    <div>-5.0 $</div>
                                </div>

                                <div className='w-full h-auto flex justify-between text-xl mb-10'>
                                    <div>Shipping Discount</div>
                                    <div>5.0 $</div>
                                </div>
                                <div className='w-full h-auto flex justify-between text-4xl mb-10'>
                                    <div>Total</div>
                                    <div>80.0 $</div>
                                </div>
                                <div>
                                    <button className='bg-teal-600 p-2 px-4 rounded-full text-white'>
                                        Check Out Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CartProduct