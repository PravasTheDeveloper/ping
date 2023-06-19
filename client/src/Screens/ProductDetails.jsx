import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavbarWebView from '../components/HomePage/NavbarWebView';
import Announcement from '../components/HomePage/Announcement';
import NavbarMobileViewLower from '../components/HomePage/NavbarMobileViewLower'
import NavbarMobileView from '../components/HomePage/NavbarMobileView'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { FiPackage } from 'react-icons/fi';

function ProductDetails() {

    const param = useParams().pcode;

    const [Products, setProducts] = useState([])
    const [Sizes, setSizes] = useState([])
    const [Colors, setColors] = useState([])

    const callAboutPage = async (e) => {

        try {
            const res = await fetch(`/api/product/${param}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();

            setProducts(data);
            setSizes(data.sizes)
            setColors(data.color)

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            // history.push("/login");
        }
    }

    useEffect(() => {

        callAboutPage();

    }, []);
    console.log(Products)
    const cartIncrement = () => {
        let quantity = 1;
        // setproducttotalprice(product.price * quantity);
        // setproduct({ ...product, quantity })
        // dispatch(updateProduct({ ...product, quantity }))
    }

    const cartDecrement = () => {
        let quantity = 1;
        // quantity > 1 ? quantity = quantity - 1 : quantity = 1;
        // setproducttotalprice(product.price * quantity);
        // setproduct({ ...product, quantity })
        // dispatch(updateProduct({ ...product, quantity }))
    }
    return (
        <>
            <Announcement />
            <NavbarWebView />
            <NavbarMobileView />
            <div className='lg:container lg:mx-auto bg-white w-full md:h-[80vh] mt-10 md:p-20 p-10 md:pb-20 pb-24'>
                <div className='w-full h-full grid md:grid-cols-2 grid-cols-1'>
                    <div className='w-full h-full  flex justify-center items-center'>
                        <div className='xl:h-[500px] xl:w-[500px] h-[400px] w-[400px] bg-slate-100 flex justify-center items-center'>
                            <img src={`/Products/${Products.imageUrl}`} className='w-[90%] lg:h-[90%] h-auto' alt="" />
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-center items-center md:ml-5 mt-10 md:mt-0'>
                        <div className='h-[500px] w-[500px] flex flex-col justify-between'>
                            <div className='text-2xl font-semibold'>
                                {Products.name}
                            </div>
                            <div className='text-slate-500 text-sm overflow-hidden h-16'>
                                {Products.description}
                            </div>
                            <div className='text-xl font-semibold'>
                                {Products.price} ৳
                            </div>
                            <div className='flex'>
                                {
                                    Colors.map((dt) => {
                                        return (<div className={`w-10 h-10 rounded-full p-1 bg-slate-300 mr-3`}>
                                            <div className={`w-full h-full rounded-full`} style={{ backgroundColor: `${dt}` }}>

                                            </div>
                                        </div>)
                                    })
                                }
                            </div>
                            <div className='flex'>
                                {Sizes.map((dt) => {
                                    return <div className='w-[50px] h-[30px] border flex justify-center items-center mr-4 hover:bg-slate-700 hover:text-white cursor-pointer duration-300'>{dt}</div>
                                })}
                            </div>

                            <div className='w-full flex items-center text-white select-none'>
                                <div className='h-full flex items-center'>
                                    <div className='bg-slate-700 h-[30px] w-[30px] flex justify-center items-center cursor-pointer' onClick={cartDecrement} >
                                        <AiOutlineMinus />
                                    </div>
                                    <div className='w-[50px] h-[30px] border flex justify-center items-center text-slate-950'>
                                        {1}
                                    </div>
                                    <div className='bg-slate-700 h-[30px] w-[30px] flex justify-center items-center cursor-pointer' onClick={cartIncrement} >
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                                <div className='ml-10'>
                                    {Products.stock}
                                </div>
                            </div>

                            <div>
                                <button class="border border-slate-700 bg-slate-700 hover:text-slate-700 hover:bg-transparent duration-200 text-white  py-2 px-4 rounded-sm mr-5 sm:w-32 w-28 sm:text-lg text-sm">
                                    Add to cart
                                </button>
                                <button class="border border-slate-700 hover:bg-slate-700 text-slate-700 hover:text-white duration-200 py-2 px-4 rounded-sm mr-5 sm:w-32 w-28 sm:text-lg text-sm">
                                    Buy Now
                                </button>
                            </div>
                            <div>
                                <div>
                                    <div className='flex items-center'>
                                        <TbTruckDelivery />
                                        <div className='font-semibold ml-3'>Free Delivery</div>
                                    </div>
                                    <div className='text-sm'>
                                        Enter your postal code to get delivery ability
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <div className='flex items-center'>
                                        <FiPackage />
                                        <div className='font-semibold ml-3'>Return Delivery</div>
                                    </div>
                                    <div className='text-sm'>
                                        Enter your postal code to get delivery ability
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <NavbarMobileViewLower />
        </>
    )
}

export default ProductDetails
