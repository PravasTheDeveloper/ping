import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductPage({ name }) {

    // const history = useHistory();
    const [Products, setProducts] = useState([])

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
            const topSellingProducts = data.sort((a, b) => b.sell - a.sell).slice(0, 10);
            
            
            setProducts(topSellingProducts);

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


    return (
        <>
            <div className='text-3xl border-b border-slate-300 pb-10 pl-5 md:pl-0'>{name}</div>
            <div className='w-full h-full flex justify-center '>
                <div className='w-full h-auto grid md:grid-cols-5 grid-cols-2 mt-10 gap-4 md:gap-10'>
                    {
                        Products.map((data , inx) =>{
                            if(data)
                            return <ProductCard name={data.name} image={data.imageUrl} brand={data.brand} price={data.price} sell={data.sell}  />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ProductPage
