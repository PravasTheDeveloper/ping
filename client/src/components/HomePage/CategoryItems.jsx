import React from 'react'

function CategoryItems({ name, product, img }) {
    return (
        <>
            <div className='flex justify-center items-center overflow-hidden rounded-md hover:bg-slate-100 md:hover:bg-white'>
                <div className='2xl:bg-slate-200 w-auto 2xl:w-[200px] flex flex-col justify-center items-center p-0 2xl:p-5'>
                    <div className='lg:w-[90px] mt-2 lg:h-[90px] h-[60px] w-[60px] 2xl:bg-white bg-slate-300 rounded-full flex justify-center items-center overflow-hidden '>
                        <img src={`/Categorys/${img}`} alt="" />
                    </div>
                    <div className='flex 2xl:flex-col justify-center items-center'>
                        <div className='md:text-md text-base font-semibold my-3'>
                            {name}
                        </div>
                        <div className='text-sm text-slate-600 2xl:block hidden'>
                            {product} Items Available
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryItems
