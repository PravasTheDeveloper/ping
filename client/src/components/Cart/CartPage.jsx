import React from 'react'
import CartProducts from './CartProducts'

function CartPage() {
    return (
        <>
            <div className='container mx-auto bg-white min-h-[80vh] w-full mt-10 p-14'>
                <div className='w-full h-auto'>
                    <div className='text-2xl border-b'>
                        Review Product and Shipping
                    </div>
                    <div className='w-full h-full flex'>
                        <div className='w-full h-full mr-10 pt-5'>
                            <CartProducts />
                            <CartProducts />
                        </div>
                        <div className='border w-[500px] h-full p-10'>
                            <div className='border-b text-xl pb-5'>
                                Order Summary
                            </div>
                            <div className='w-full h-[40px] relative mt-5'>
                                <input type="text" className='w-full h-full bg-slate-200 rounded-full outline-none border-0 px-3 pr-36 ' placeholder='Apply Your Cupon' />
                                <div className='w-full h-full '>
                                    <button className='bg-slate-600 h-full text-white px-4 rounded-full absolute top-0 right-0'>Apply Cupon</button>
                                </div>
                            </div>
                            <div className='mt-5 '>
                                <div className='text-xl border-b pb-5'>
                                    Payment Details
                                </div>
                                <div className='mt-5'>
                                    <div class="flex items-center mb-4">
                                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 ">Cash On Delivery</label>
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 ">Credit or Debit Card</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input checked id="default-radio-3" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="default-radio-3" class="ml-2 text-sm font-medium text-gray-900 ">Online Payment</label>
                                    </div>

                                </div>
                                <div className='mt-5'>
                                    <div className='text-xl border-b pb-5'>
                                        Total Payment
                                    </div>
                                    <div className='mt-5 font-semibold'>
                                        <div className='flex justify-between'>
                                            <div>Sub Total</div>
                                            <div>500 $</div>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div>Tax(10%)</div>
                                            <div>50 %</div>
                                        </div>
                                        <div className='flex justify-between border-b pb-5'>
                                            <div>Cupon Discount</div>
                                            <div>- 50 $</div>
                                        </div>
                                        <div className='flex justify-between mt-5'>
                                            <div>Total</div>
                                            <div>500 $</div>
                                        </div>
                                        <div className='h-auto w-full'>
                                            <button className='bg-slate-600 w-full py-2 rounded-full mt-5 text-white'>Pay 500 $</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
