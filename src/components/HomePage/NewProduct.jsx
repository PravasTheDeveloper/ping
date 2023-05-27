import React from 'react'
import ProductPage from './ProductPage'

function NewProduct() {
    return (
        <>
            <div className='w-full h-full px-5'>
                <div className='w-full h-full bg-white container mx-auto mt-10 md:p-20 pt-10 rounded-lg'>
                    <ProductPage name="New Product" />
                </div>
            </div>
        </>
    )
}

export default NewProduct
