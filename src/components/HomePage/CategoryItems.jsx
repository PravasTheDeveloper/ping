import React from 'react'

function CategoryItems({name , product ,img}) {
    return (
        <>
            <div className='bg-slate-200 h-[110px] xl:w-[500px] sm:w-[90%] w-full mb-5 flex items-center px-2 rounded-md'>
                <div className='w-[90px] h-[90px] bg-white rounded-md flex justify-center items-center overflow-hidden'>
                    <img src={`/Categorys/${img}`} alt="" />
                </div>
                <div className='ml-5'>
                    <div className='text-md font-semibold'>
                        {name}
                    </div>
                    <div className='text-sm text-slate-600'>
                        {product} Items Available
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryItems
