import React, { useEffect, useState } from 'react'
import { AiOutlineMenu, BsFillGridFill } from 'react-icons/all.js'
import ProductCard from '../ProductCard/ProductCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changePosition, fetchProduct } from '../../redux/porductRedux';

function RightSideComponents() {
    const dispatch = useDispatch();

    const [Products, setProducts] = useState([])
    const name = useParams().name.toUpperCase();
    const [paramSet, setparamSet] = useState()

    const ProductsShow = useSelector((state) => state.product)

    useEffect(() => {
        setparamSet(name)
        dispatch(fetchProduct(name))
    }, [name]);

    return (
        <>
            <div className='w-full h-full bg-white right_side_product_grid sm:pl-10 p-2 sm:p-5'>
                <div className='sm:pt-10 p-0 flex justify-between items-center w-full h-full'>
                    <div className='flex'>
                        <div className={ProductsShow.position === "grid" ? 'bg-slate-900 text-white w-7 h-7 flex justify-center items-center' : 'bg-slate-200 text-slate-900 w-7 h-7 flex justify-center items-center'} onClick={()=> {dispatch(changePosition("grid"))}}><BsFillGridFill /></div>
                        <div className={ProductsShow.position === "row" ? 'ml-5 bg-slate-900 text-white w-7 h-7 flex justify-center items-center' : 'ml-5 bg-slate-200 text-slate-900 w-7 h-7 flex justify-center items-center'} onClick={()=> {dispatch(changePosition("row"))}} ><AiOutlineMenu /></div>
                    </div>
                    <div className='sm:text-base text-sm'>
                        {ProductsShow.totalproduct} Item Availabile here
                    </div>
                    <div>
                        <select name="sotingway" id="sotingway" className='text-sm border'>
                            <option value="lth">Low to High Price</option>
                            <option value="htl">Hight to Low Price</option>
                        </select>
                    </div>
                </div>
                <div className='bg-white h-full'>

                    <div className='w-full h-auto flex justify-center bg-white'>
                        <div className={ProductsShow.position === "grid" ? 'w-full h-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-5 sm:mt-10 gap-4 md:gap-10 mb-20 sm:mb-5' : 'w-full h-auto grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 mt-5 sm:mt-10 gap-4 md:gap-10 mb-20 sm:mb-5' }>
                        
                            {
                                ProductsShow.product.map((data, inx) => {
                                    return <ProductCard key={inx} name={data.name} image={data.imageUrl} brand={data.brand} price={data.price} sell={data.sell} productCode={data.productCode} />
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