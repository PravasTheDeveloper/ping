import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BiSearch , BiLike } from 'react-icons/bi';

export const popularProducts = [
    {
        id: 1,
        img: "/Product/t-shirt001.gif",
    },
    {
        id: 2,
        img: "/Product/hudi001.gif",
    },
    {
        id: 3,
        img: "/Product/polo001.gif",
    },
    {
        id: 4,
        img: "/Product/trakpant001.gif",
    },
    {
        id: 5,
        img: "/Product/sport_tshirt.gif",
    },
    {
        id: 6,
        img: "/Product/shirt001.gif",
    },
    {
        id: 7,
        img: "/Product/jies.gif",
    },
    {
        id: 8,
        img: "/Product/Full_Sleve001.gif",
    },
]

function PopularProduct() {
    return (
        <>
            <div className='w-full h-screen container mx-auto'>
            <div className='text-3xl mt-10'>Our Top Product</div>
                <div className='w-full h-full flex flex-wrap items-end'>
                
                    {
                        popularProducts.map((data, indx) => {
                            return (
                                <div className='w-3/12 h-[350px] flex items-center justify-center overflow-hidden' key={indx}>
                                    <div className='w-[90%] h-full bg-slate-200 relative group ' >
                                        <img src={data.img} alt="" />
                                        <div className='w-full h-full z-50 absolute top-0 left-0 productcolor group-hover:block'>

                                            <div className='w-full h-full hover:text-slate-600 duration-1000 flex text-2xl justify-center items-center'>

                                                <div className='w-12 h-12 bg-white duration-300 rounded-full flex justify-center items-center hover:bg-teal-700 hover:text-white'>
                                                    <RiShoppingCart2Line />
                                                </div>
                                                <div className='w-12 h-12 bg-white duration-300 rounded-full flex justify-center items-center mx-6 hover:bg-teal-700 hover:text-white' >
                                                    <BiSearch />
                                                </div>
                                                <div className='w-12 h-12 bg-white duration-300 rounded-full flex justify-center items-center hover:bg-teal-700 hover:text-white'>
                                                    <BiLike />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PopularProduct