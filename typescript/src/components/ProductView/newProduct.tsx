// import { ChangeEvent, useState, FormEvent } from "react";

// import { useState } from "react";
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { addProduct } from '../../api/product.api'
import { useMutation } from '@tanstack/react-query'
import { Product } from '../../types/product.type'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from "@hookform/error-message";
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { useFormik } from 'formik';
import axios from 'axios'



type FormStateType = Omit<Product, 'id'>
const initialFormState: FormStateType = {
  namePr: '',
  pricePr: '',
  imgPr: '',
  detail: ''
  // createdAt: '',
  // updatedAt: ''
}

function NewProduct() {

  // const [file, setFile] = useState();
  // const handleUpload = () => {
  //   const formdata = new FormData()
  //   formdata.append('file', file)
  //   console.log(formdata);

  //   axios.post('http://localhost:3333/postProduct', formdata)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }
  // const schema = yup
  //   .object().shape({
  //     title: yup.string().required('Vui lòng không để trống'),
  //   });
  // const form = useForm({
  //   defaultValues: {
  //     title: '',
  //   },
  //   resolver: yupResolver(schema),
  // });


  const [formState, setFormState] = useState<FormStateType>(initialFormState)

  // const params = useParams()
  // console.log(params);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // })
  // const onSubmit = (data) => console.log(data)




  const { mutate } = useMutation({
    mutationFn: (body: FormStateType) => {
      return addProduct(body)
    }
  })
  const handleChange = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
    console.log(event.target.value);
    // const selectedFile = event.target.files?.[0];

    // if (selectedFile) {
    //   // Lưu tên tệp tin vào trạng thái
    //   setFormState((prev) => ({ ...prev, [name]: selectedFile.name }));
    //   console.log(selectedFile.name);
    // }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutate(formState)
    console.log(formState);


  }
  return (
    <>

      <div className=" dark:bg-gray-900  w-full h-full   ">
        <form className="max-w-lg mx-auto  w-full h-full"
          onSubmit={handleSubmit}>
          {/* <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
            <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Base input</label>
            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div> */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tên sản phẩm
            </label>
            <input type="text"
              id="small-input"
              value={formState.namePr}
              onChange={handleChange('namePr')}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Giá sản phẩm
            </label>
            <input type="number" id="small-input"
              value={formState.pricePr}
              onChange={handleChange('pricePr')}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <form action='http://localhost:3333/postProduct' method='POST' encType='multipart/from-data' className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >
              Ảnh sản phẩm
            </label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="user_avatar_help"
              value={formState.imgPr}
              accept='image/png, image/jpeg, image/jpg'
              name='myFile'
              onChange={handleChange('imgPr')}
              id="product_avatar"
              type="file" />
            {/* <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div> */}

          </form>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Thông tin sản phẩm
            </label>
            <textarea id="message"
              value={formState.detail}
              onChange={event => setFormState(prev => ({ ...prev, detail: event.target.value }))}

              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit"
            value="upload"
            // onClick={handleUpload}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Thêm sản phẩm
          </button>

        </form>
      </div >

    </>
  );
}

export default NewProduct;
