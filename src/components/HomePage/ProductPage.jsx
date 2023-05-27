import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductPage({name}) {
    return (
        <>
            <div className='text-3xl border-b border-slate-300 pb-10 pl-5 md:pl-0'>{name}</div>
            <div className='w-full h-full flex justify-center '>
                <div className='w-full h-auto flex flex-wrap mt-10'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductPage
