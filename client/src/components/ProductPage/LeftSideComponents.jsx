import React from 'react'
import { Link, useParams } from 'react-router-dom'

function LeftSideComponents() {
    let { name } = useParams()
    return (
        <>
            <div className='w-full h-full bg-white border-r border-slate-200 sm:block hidden'>
                <div className='w-full h-full pl-5 pt-10'>
                    <p className='text-xl mb-3'>Category</p>
                    <div className={name=="ALL"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/ALL`}>
                            All
                        </Link>
                    </div>
                    <div className={name=="JACKET"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/JACKET`}>
                            Men Jacket
                        </Link>
                    </div>
                    <div className={name=="HUDI"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/HUDI`}>
                            Hudi
                        </Link>
                    </div>
                    <div className={name=="SHOE"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/SHOE`}>
                            Shoes
                        </Link>
                    </div>
                    <div className={name=="TSHIRT"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/TSHIRT`}>
                            T-Shirt
                        </Link>
                    </div>
                    <div className={name=="WATCH"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/WATCH`}>
                            Watch
                        </Link>
                    </div>
                    <div className={name=="PANT"?'mb-3 underline':'mb-3'}>
                        <Link to={`/products/PANT`}>
                            Pant
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftSideComponents
