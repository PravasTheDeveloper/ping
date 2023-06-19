import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, BsFillGridFill } from 'react-icons/all.js'
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';

function RightSideComponents() {
    const [Products, setProducts] = useState([])
    const { name } = useParams();
    const [paramSet, setparamSet] = useState()


    const callAboutPage = async () => {
        try {
            const res = await fetch("/api/product", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // const topSellingProducts = data.sort((a, b) => b.sell - a.sell).slice(0, 10);
            setProducts(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            // history.push("/login");
        }
    }

    console.log(paramSet)

    useEffect(() => {
        setparamSet(name)
        callAboutPage();

    }, []);
    return (
        <>
            <div className='w-full h-full bg-white right_side_product_grid sm:pl-10 p-2 sm:p-5'>
                <div className='sm:pt-10 p-0 flex justify-between items-center'>
                    <div className='flex'>
                        <div className='bg-slate-900 text-white w-7 h-7 flex justify-center items-center'><BsFillGridFill /></div>
                        <div className='ml-5 bg-slate-200 text-slate-900 w-7 h-7 flex justify-center items-center'><AiOutlineMenu /></div>
                    </div>
                    <div className='sm:text-base text-sm'>
                        12 Item Availabile here
                    </div>
                    <div>
                        <select name="sotingway" id="sotingway" className='text-sm border'>
                            <option value="lth">Low to High Price</option>
                            <option value="htl">Hight to Low Price</option>
                        </select>
                    </div>
                </div>
                <div className='bg-white'>

                    <div className='w-full h-full flex justify-center '>
                        <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-5 sm:mt-10 gap-4 md:gap-10 mb-20 sm:mb-5 max-h-44'>
                            {
                                Products.map((data, inx) => {
                                    if (data.category == paramSet) {
                                        return <ProductCard name={data.name} image={data.imageUrl} brand={data.brand} price={data.price} sell={data.sell} />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RightSideComponents
