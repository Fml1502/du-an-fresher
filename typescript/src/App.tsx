/* eslint-disable @typescript-eslint/no-explicit-any */
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { deleteProduct, getProducts } from './api/product.api';
import { Products as ProductsType } from './types/product.type';
// import SignUp from './components/signUp'

// const LIMIT = 10
import imgDroduct from './components/ProductView/product.jpg';
// import { useQueryString } from './utils/utils';
function App() {




  const queryClient = useQueryClient()
  // const queryString: { page?: string } = useQueryString()
  // const page = Number(queryString.page) || 1

  // const productsQuery = useQuery({
  //   queryKey: ['products', page],
  //   queryFn: () => getProducts(page, LIMIT),
  //   isLoading: true
  // })
  // const totalStudentsCount = Number(productsQuery.data?.headers['x-total-count'] || 0)
  // const totalPage = Math.ceil(totalStudentsCount / LIMIT)

  const [products, setProducts] = useState<ProductsType>([])
  const deleteStudentMutation = useMutation({
    mutationFn: (id: number | string) => deleteProduct(id),
    onSuccess: async (_, id) => {
      await queryClient.invalidateQueries({ queryKey: ['products'] })
      // queryClient.clear()
      toast.success(`Xóa thành công student với id là ${id}`)
      // queryClient.invalidateQueries({ queryKey: ['products'] })
      location.reload();
    }

  })
  const handleDelete = (id: number | string) => {
    deleteStudentMutation.mutate(id)
  }
  useEffect(() => {
    // componentDidMount()
    getProducts(1, 10).then((res) => {
      setProducts(res.data)
    })

    // setDataPr(this.data.dataPr)
  }, [])
  // console.log("dataPr", dataPr?.data);
  return <>

    {/* {dataPr?.data.map((e: any) => <div>{e.dataPr}</div>)} */}

    <header className='py-4 shadow-sm bg-white'>

      <div className='container flex items-center justify-between'>
        <Link to={'/Home'}><a href='#'>
          Logo
        </a></Link>

        {/* search bar */}
        <div className='w-full max-w-xl relative flex'>
          <span className='absolute left-4 top-3 text-lg text-gray-400 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </span>
          <input type='text' className='w-full border border-red-600 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='search' />
          <button className='bg-red-400 border-red-600 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-600 transition'>Search</button>
        </div>
        {/* wish list */}
        <div className='flex items-center space-x-4'>
          <a href='#' className='text-center text-gray-700 hover:text-red-600 transition relative'>
            <div className='text-2xl'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            <div className='text-xs leading-3'>Wish List</div>
            <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs'>0</span>
          </a>


          {/* cart */}
          <Link to='/Cart'>
            <a href='#' className='text-center text-gray-700 hover:text-red-600 transition relative'>
              <div className='text-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>

              <div className='text-xs leading-3'>Cart</div>
              <span className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs'>0</span>
            </a>
          </Link>

          {/* user */}
          <Link to='/signIn'>
            <a href='#' className='text-center text-gray-700 hover:text-red-600 transition relative'>
              <div className='text-2xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>

              <div className='text-xs leading-3'>User</div>

            </a>
          </Link>

        </div>

      </div>


    </header>


    {/* xuất dữ liệu  */}
    <Link to={"/newProduct"}>
      <a href='#' className='block  w-16 py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600'>Thêm</a>
    </Link>
    {/* {!productsQuery.isLoading && ( */}
    <div className='grid grid-cols-4 gap-6'>
      {/* Thêm dữ liệu */}

      {/* {dataPr?.data.map((e: any) => */}
      {products.map(product => (
        <body>
          <div>
            {/* single product */}
            <div className='bg-white shadow rounded overflow-hidden group'>
              {/* product img */}
              <div className='relative'>
                {/* <img src={product.imgPr} className='w-full' /> */}
                <img src={imgDroduct} className='w-full' />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
                  <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 trasition'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                  <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 trasition'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>

                  </a>
                </div>
              </div>

              {/* product content */}

              <div className=' pt-4 pb-3 px-4'>
                <a href='#'>
                  <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-600 transition'>{product.namePr}</h4>
                  {/* {dataPr} */}
                </a>

                <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                  <p className='text-xl text-red-600 font-semibold'>{product.pricePr} </p>
                  <p className='text-sm text-gray-400 line-through'>{product.pricePr + 100}</p>
                </div>
                {/* <div className='flex items-center'>
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
          <div className='text-xs text-gray-500 ml-3'>(150)</div>
        </div> */}
                <div>
                  <a href='#' className='block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600'>Add to cart</a>
                  <a href='#' className='block w-full py-1 text-center text-white bg-slate-500 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600'>Edit</a>
                  <a onClick={() => handleDelete(product.id)} href='#' className='block w-full py-1 text-center text-white bg-yellow-700 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600'>

                    Delete</a>
                </div>

              </div>
            </div>
          </div>


        </body>
      ))}



      {/* )
      } */}
    </div>
    {/* )} */}
  </>

  // return (
  //   <>
  //     <div>
  //       <header className='py-4 shadow-sm bg-white'>
  //         {/* <nav>
  //         <Link to='/SignUp'>SignUp</Link>
  //         <Link to='/SignIn'>SignIn</Link>
  //       </nav> */}
  //         <div className='container flex items-center justify-between'>
  //           <Link to={'/Home'}><a href='#'>
  //             Logo
  //           </a></Link>

  //           {/* search bar */}
  //           <div className='w-full max-w-xl relative flex'>
  //             <span className='absolute left-4 top-3 text-lg text-gray-400 '>
  //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  //               </svg>

  //             </span>
  //             <input type='text' className='w-full border border-red-600 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none' placeholder='search' />
  //             <button className='bg-red-400 border-red-600 text-white px-8 rounded-r-md hover:bg-transparent hover:text-red-600 transition'>Search</button>
  //           </div>
  //           {/* wish list */}
  //           <div className='flex items-center space-x-4'>
  //             <a href='#' className='text-center text-gray-700 hover:text-red-600 transition relative'>
  //               <div className='text-2xl'>
  //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  //                 </svg>
  //               </div>

  //               <div className='text-xs leading-3'>Wish List</div>
  //               <span className='absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs'>0</span>
  //             </a>


  //             {/* cart */}
  //             <Link to='/Cart'>
  //               <a href='#' className='text-center text-gray-700 hover:text-red-600 transition relative'>
  //                 <div className='text-2xl'>
  //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  //                   </svg>
  //                 </div>

  //                 <div className='text-xs leading-3'>Cart</div>
  //                 <span className='absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-red-600 text-white text-xs'>0</span>
  //               </a>
  //             </Link>

  //             {/* user */}
  //             <Link to='/signIn'>
  //               <a href='#' className='text-center text-gray-700 hover:text-red-600 transition relative'>
  //                 <div className='text-2xl'>
  //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  //                   </svg>
  //                 </div>

  //                 <div className='text-xs leading-3'>User</div>

  //               </a>
  //             </Link>

  //           </div>

  //         </div>


  //       </header>
  //       <body>
  //         <div className='grid grid-cols-4 gap-6'>
  //           {/* single product */}
  //           <div className='bg-white shadow rounded overflow-hidden group'>
  //             {/* product img */}
  //             <div className='relative'>
  //               <img src={imgProduct} className='w-full' />
  //               <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
  //                 <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 trasition'>
  //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  //                   </svg>
  //                 </a>
  //                 <a className='text-white text-lg w-9 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-gray-800 trasition'>
  //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                     <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  //                   </svg>

  //                 </a>
  //               </div>
  //             </div>

  //             {/* product content */}

  //             <div className=' pt-4 pb-3 px-4'>
  //               <a href='#'>
  //                 <h4 className='uppercase font-medium text-xl mb-2 text-gray-800 hover:text-red-600 transition'>abc </h4>
  //                 {/* {dataPr} */}
  //               </a>
  //               <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
  //                 <p className='text-xl text-red-600 font-semibold'>10k</p>
  //                 <p className='text-sm text-gray-400 line-through'>69k</p>
  //               </div>
  //               {/* <div className='flex items-center'>
  //               <div className='flex gap-1 text-sm text-yellow-400'>
  //                 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  //                 </svg>
  //                 </span>
  //                 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  //                 </svg>
  //                 </span>
  //                 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  //                 </svg>
  //                 </span>
  //                 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  //                 </svg>
  //                 </span>
  //                 <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  //                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  //                 </svg>
  //                 </span>
  //               </div>
  //               <div className='text-xs text-gray-500 ml-3'>(150)</div>
  //             </div> */}
  //               <a href='#' className='block w-full py-1 text-center text-white bg-red-600 border border-red-600 rounded-b hover:bg-transparent hover:text-red-600'>add to cart</a>

  //             </div>
  //           </div>
  //         </div>

  //       </body>
  //     </div>
  //   </>
  // )
}


export default App
