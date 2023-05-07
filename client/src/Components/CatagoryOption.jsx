import React from 'react'
import { IoMdPerson } from 'react-icons/io';

const CategoryData = [
    {
        "name": "All New Men Collections",
        "chategory": "Men Fashion",
        "customers": 450,
        "img": 1
    },
    {
        "name": "All New Clind Collections",
        "chategory": "Child Fashion",
        "customers": 980,
        "img": 2
    },
    {
        "name": "All New Women Collections",
        "chategory": "Women Fashion",
        "customers": 670,
        "img": 3

    }
]

function CatagoryOption() {
    return (
        <>
            <div className='w-full h-auto mt-20'>
                <div className='w-full h-auto container mx-auto'>
                    <div className='text-4xl mb-5'>
                        Chategory for all
                    </div>
                    <div className=' w-full h-auto'>
                        <div className='w-full h-full flex justify-between p-24 bg-slate-100 rounded-lg'>


                            {
                                CategoryData.map((data, inx) => {
                                    return(
                                    <div className='w-[370px] h-[450px] shadow-lg' key={inx}>
                                        <div className='w-full h-[70%] bg-slate-200 rounded-t-xl flex items-end justify-center'>
                                            <img src={`chategory/chategory${data.img}.gif`} alt="" className='h-[120%]' />
                                        </div>
                                        <div className='w-full h-[30%] bg-white flex flex-col justify-center pl-8 rounded-b-xl'>
                                            <div className='text-slate-500'>
                                            {data.chategory}
                                            </div>
                                            <div className='text-xl font-semibold my-2'>
                                            {data.name}
                                            </div>
                                            <div className='text-slate-500 flex items-center'>
                                                <div className='mr-4'>
                                                    <IoMdPerson />
                                                </div>
                                                <div>
                                                    {data.customers} + customers
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CatagoryOption