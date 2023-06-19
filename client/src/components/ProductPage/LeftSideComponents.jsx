import React from 'react'
import { Link, useParams } from 'react-router-dom'

function LeftSideComponents() {
    let { name } = useParams()
    return (
        <>
            <div className='w-full h-full bg-white border-r border-slate-200 sm:block hidden'>
                <div className='w-full h-full pl-5 pt-10'>
                    <p className='text-xl mb-3'>Category</p>
                    <div className='mb-3 underline'>
                        <Link to={`/products/ALL`}>
                            All
                        </Link>
                    </div>
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
