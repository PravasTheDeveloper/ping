import React from 'react'

function LeftSideComponents() {
    return (
        <>
            <div className='w-full h-full bg-white border-r border-slate-200 sm:block hidden'>
                <div className='w-full h-full pl-5 pt-10'>
                    <p className='text-xl mb-3'>Category</p>
                    <div className='mb-3 underline'>All</div>
                    <div className='mb-3'>Men Jacket</div>
                    <div className='mb-3'>Hudi</div>
                    <div className='mb-3'>Shoes</div>
                    <div className='mb-3'>T-Shirt</div>
                    <div className='mb-3'>Watch</div>
                    <div className='mb-3'>Pant</div>
                </div>
            </div>
        </>
    )
}

export default LeftSideComponents
