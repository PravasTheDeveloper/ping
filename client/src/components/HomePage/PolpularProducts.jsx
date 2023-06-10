import React from 'react'


import ProductPage from './PopularProductPage'

function PolpularProducts() {
    return (
        <>
            <div className='w-full h-full px-2 lg:px-0'>
                <div className='w-full h-full bg-white lg:container md:mx-auto mt-10 p-5 pt-10 rounded-lg'>
                    <ProductPage name="Popular Product" />
                </div>
            </div>

        </>
    )
}

export default PolpularProducts
