import React from 'react'


import ProductPage from './ProductPage'

function PolpularProducts() {
    return (
        <>
            <div className='w-full h-full px-5'>
                <div className='w-full h-full bg-white container md:mx-auto mt-10 md:p-20 pt-10 rounded-lg'>
                    <ProductPage name="Popular Product" />
                </div>
            </div>

        </>
    )
}

export default PolpularProducts
