import React from 'react'
import NewProductPage from './NewProductPage'

function NewProduct() {
    return (
        <>
            <div className='w-full h-full px-5 lg:px-0 z-0'>
                <div className='w-full h-full bg-white lg:container md:mx-auto mt-10 p-5 pt-10 rounded-lg'>
                    <NewProductPage name="New Product" />
                </div>
            </div>
        </>
    )
}

export default NewProduct
