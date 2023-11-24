import axios from 'axios'
import { useEffect } from 'react'
import imgProduct from './product.jpg'



function ProductView() {


    const componentDidMount = async () => {
        const data = await axios.get("http://localhost:3333/product")
        console.log(">>> data: ", data)
    }

    useEffect(() => {
        componentDidMount()
    }, [])

    return (
        <>

            <div className='container grid grid-cols-2 gap-6'>
                {/* Product View */}
                <div>
                    <img src={imgProduct} className='w-full' />
                    <div className='grid grid-cols-5 gap-4 mt-4'>
                        <img src={imgProduct} className='w-full cursor-pointer border border-red-500' />
                        <img src={imgProduct} className='w-full cursor-pointer border' />
                        <img src={imgProduct} className='w-full cursor-pointer border' />
                        <img src={imgProduct} className='w-full cursor-pointer border' />
                        <img src={imgProduct} className='w-full cursor-pointer border' />
                    </div>
                </div>

                {/* product content  */}
                <div>
                    <h2 className='text-3xl font-medium uppercase mb-2'> Name</h2>
                    <div className='flex items-center mb-4'>
                        <div className='flex gap-1 text-sm text-yellow-400'>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                            </svg>
                            </span>
                        </div>
                        <div className='text-xs text-gray-500 ml-3'>(150 reviews)</div>
                    </div>
                    <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                        <p className='text-xl text-red-600 font-semibold'>10k</p>
                        <p className='text-sm text-gray-400 line-through'>69k</p>
                    </div>
                    <p className='mt-4 text-gray-600'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque exercitationem officia laudantium praesentium, sunt fugit harum aliquam mollitia! Quis iste cumque eligendi quam doloribus repellat labore fugiat, recusandae expedita vitae.
                    </p>
                    <div className='flex gap-3 border-b border-gray-200 pb-5 mt-6'>
                        <a href='#' className='bg-red-600 border border-red-500 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-red-500 transition'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                            Add to cart
                        </a>
                        <a href='#' className='border border-gray-300 text-gray-600 text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2  hover:text-red-500 transition'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                            Wishlist
                        </a>
                    </div>
                </div>

            </div>


            {/* product detail */}
            <div className='container pb-16'>
                <h3 className='border-b border-gray-200 text-gray-800 pb-3 font-medium'>Product details</h3>
                <div className='w-3/5 pt-6'>
                    <div className='text-gray-600 space-y-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit repudiandae unde rerum saepe atque. Perferendis neque consequuntur adipisci id ipsa nulla sit itaque sed. Vitae, animi. Iste ea ipsa aut?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit repudiandae unde rerum saepe atque. Perferendis neque consequuntur adipisci id ipsa nulla sit itaque sed. Vitae, animi. Iste ea ipsa aut?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit repudiandae unde rerum saepe atque. Perferendis neque consequuntur adipisci id ipsa nulla sit itaque sed. Vitae, animi. Iste ea ipsa aut?
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default ProductView