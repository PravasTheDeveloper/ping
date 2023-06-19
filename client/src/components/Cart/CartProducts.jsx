import React, { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { updateProduct } from '../../redux/cartRedux';


function CartProducts({ name, productprice, image, productcode, quantity }) {

    const [product, setproduct] = useState({
        "name": "",
        "image": "",
        "price": null,
        "productcode": "",
        "quantity": null,
    })

    const [producttotalprice, setproducttotalprice] = useState()

    useEffect(() => {
        setproduct({ name, image, price: productprice, productcode, quantity });
        setproducttotalprice(productprice);
    }, [])

    const dispatch = useDispatch();

    const cartIncrement = () => {
        let quantity = product.quantity + 1;
        setproducttotalprice(product.price * quantity);
        setproduct({ ...product, quantity })
        dispatch(updateProduct({ ...product, quantity }))
    }

    const cartDecrement = () => {
        let quantity = product.quantity;
        quantity > 1 ? quantity = quantity - 1 : quantity = 1;
        setproducttotalprice(product.price * quantity);
        setproduct({ ...product, quantity })
        dispatch(updateProduct({ ...product, quantity }))
    }

    return (
        <>

            <div className='h-[100px] w-full border my-5 cart_grid_options' >
                <div className='h-full w-[100px] flex justify-center items-center'>
                    <img src={`/Products/${image}`} className='h-[90%] rounded-md w-auto bg-slate-100' alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='text-md font-semibold h-6 overflow-hidden'>
                        {name}
                    </div>
                    <div className='text-sm text-slate-600'>
                        Product Code : {productcode}
                    </div>
                    <div className='text-sm text-slate-600'>
                        Quantity : {product.quantity}
                    </div>
                </div>
                <div className='w-full h-full flex items-center text-white select-none'>
                    <div className='h-full w-full flex items-center'>
                        <div className='bg-slate-700 h-[30px] w-[30px] flex justify-center items-center cursor-pointer' onClick={cartDecrement} >
                            <AiOutlineMinus />
                        </div>
                        <div className='w-[50px] h-[30px] border flex justify-center items-center text-slate-950'>
                            {product.quantity}
                        </div>
                        <div className='bg-slate-700 h-[30px] w-[30px] flex justify-center items-center cursor-pointer' onClick={cartIncrement} >
                            <AiOutlinePlus />
                        </div>
                    </div>
                </div>
                <div className='w-[200px]  flex justify-around items-center'>
                    <div className='text-2xl'>
                        <div className='text-[12px] text-slate-400 font-semibold'>
                            {productprice} X {quantity}
                        </div>
                        {producttotalprice} ৳
                    </div>
                    <div className='w-[30px] h-[30px] bg-rose-600 flex justify-center items-center text-xl text-white rounded-md'>
                        <AiOutlineDelete />
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartProducts
