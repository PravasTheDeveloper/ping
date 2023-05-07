import React from 'react'
import { RiShoppingCart2Line } from 'react-icons/ri';
import { BiSearch , BiLike } from 'react-icons/bi';

export const popularProducts = [
    {
        id: 1,
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png",
    },
    {
        id: 2,
        img: "/Product/product2.gif",
    },
    {
        id: 3,
        img: "https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png",
    },
    {
        id: 4,
        img: "/Product/product4.gif",
    },
    {
        id: 5,
        img: "https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png",
    },
    {
        id: 6,
        img: "https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png",
    },
    {
        id: 7,
        img: "/Product/product7.gif",
    },
    {
        id: 8,
        img: "https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png",
    },
]

function PopularProduct() {
    return (
        <>
            <div className='w-full h-screen container mx-auto'>
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