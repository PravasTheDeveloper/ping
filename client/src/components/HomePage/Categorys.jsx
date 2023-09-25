import React from 'react'
import CategoryItems from './CategoryItems'

function Categorys() {
    return (
        <>
            <div className='w-full h-full px-5 md:mb-0 mb-10'>
                <div className='w-full h-auto container mx-auto bg-white mt-10 lg:p-20 p-5 py-10 rounded-lg'>
                    <div className='text-3xl border-b border-slate-300 pb-10'>Our Categorys</div>
                    <div className='w-full h-auto mt-10'>
                        <div className='md:w-full w-full h-full grid md:grid-cols-6 grid-cols-3 grid-rows-2 md:grid-rows-1 gap-y-11	'>
                                <CategoryItems name="Men Jacket" cataName="JACKET" product="240" img="Jacket-001.gif" />
                                <CategoryItems name="Hudi" cataName="HUDI" product="12" img="Hudi-001.gif" />
                                <CategoryItems name="Shoes" cataName="SHOE" product="10" img="Shoe-001.gif" />
                                <CategoryItems name="T-Shirt" cataName="TSHIRT" product="52" img="T-Shirt-001.gif" />
                                <CategoryItems name="Watch" cataName="WATCH" product="88" img="Watch-001.gif" />
                                <CategoryItems name="Pant" cataName="PANT" product="90" img="Pant-001.gif" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Categorys
