import { useFormik } from 'formik';
import * as Yup from 'yup';
import trees from 'D:/work/Newfolder/typescript/src/assets/trees.jpg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../auth/apiRequest';
import { User } from '../../types/user.type'
import { addUser } from '../../api/user.api'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import http from '../../utils/http';


type FormStateType = Omit<User, 'id'>
const initialFormState: FormStateType = {
    nameUser: '',
    passWord: '',
    email: '',
    createdAt: '',
    updatedAt: ''
}

const Register = () => {
    const [formState, setFormState] = useState<FormStateType>(initialFormState)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const dispatch = useDispatch()
    // const navigate = useNavigate();


    // const [file, setFile] = useState();
    // const handleUpload = () => {
    //     const formdata = new FormData()
    //     formdata.append('file', file)
    //     console.log(file);

    //     axios.post('/postUser', formdata)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }
    const { mutate } = useMutation({
        mutationFn: (body: FormStateType) => {
            return addUser(body)
        }
    })


    const formik = useFormik({
        initialValues: {
            nameUser: "",
            passWord: "",
            email: "",
            confirmpassWord: ""
        },

        validationSchema: Yup.object({
            nameUser: Yup.string().required("Vui lòng không bỏ trống").min(4, "Vui lòng nhập nhiều ký tự hơn"),
            email: Yup.string().required("Vui lòng không bỏ trống").matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Vui lòng nhập đúng định dạng (xxxx@xxxx.xxx) "
            ),
            passWord: Yup.string().required("Vui lòng không bỏ trống").matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
                "Tối thiểu 8 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số"),
            confirmpassWord: Yup.string().required("Vui lòng không bỏ trống").oneOf([Yup.ref("passWord")], "Không đúng mật khẩu"),

        }),
        onSubmit: (values) => {
            console.log(values);
            // event.preventDefault()
            mutate(formState)
            console.log(formState);
            // const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
            //     e.preventDefault();
            const newUser = {
                nameUser: formState.nameUser,
                passWord: formState.passWord,
                email: formState.email
            };
            registerUser(newUser, dispatch, navigate);

            // }
        }
    });
    const handleChange = (name: keyof FormStateType) => (event: React.ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(event);
        setFormState((prev) => ({ ...prev, [name]: event.target.value }))
    }

    return (

        <>
            <section>

                <div className=' dark:bg-gray-900 w-full h-screen flex'>
                    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                        <div className=' w-full h-[550px] hidden md:block'>
                            <img className='w-full h-full' src={trees} alt="/" />
                        </div>
                        <div className='p-4 flex flex-col justify-around'>
                            <form
                                className="max-w-lg mx-auto  w-full h-full infoform"
                                onSubmit={formik.handleSubmit}
                            >
                                <h2 className='text-4xl font-bold text-center mb-8'>Sign Up</h2>

                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tài khoản
                                    </label>
                                    <input type="text"
                                        id="nameUser"
                                        name="nameUser"
                                        value={formik.values.nameUser}
                                        //value={formState.nameUser}
                                        // onChange={formik.handleChange}
                                        onChange={handleChange("nameUser")}
                                        onBlur={formik.handleBlur}
                                        placeholder="Username"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.touched.nameUser && formik.errors.nameUser && (
                                        <p className="errorMsg text-red-600">{formik.errors.nameUser}</p>
                                    )}

                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                    </label>
                                    <input type="text"
                                        id="email"
                                        name="email"
                                        value={formik.values.email}
                                        //valuew={formState.email}
                                        // onChange={formik.handleChange}
                                        onChange={handleChange("email")}
                                        onBlur={formik.handleBlur}
                                        placeholder="Email"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <p className="errorMsg text-red-600">{formik.errors.email}</p>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Mật khẩu
                                    </label>
                                    <input type="password"
                                        id="passWord"
                                        name="passWord"
                                        value={formik.values.passWord}
                                        //valuew={formState.passWord}
                                        onChange={handleChange("passWord")}
                                        // onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Password"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.touched.passWord && formik.errors.passWord && (
                                        <p className="errorMsg text-red-600">{formik.errors.passWord}</p>
                                    )}
                                </div>
                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Nhập lại Mật khẩu
                                    </label>
                                    <input type="password"
                                        id="confirmpassWord"
                                        name="confirmpassWord"
                                        value={formik.values.confirmpassWord}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="Confirm PassWord"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.touched.confirmpassWord && formik.errors.confirmpassWord && (
                                        <p className="errorMsg text-red-600">{formik.errors.confirmpassWord}</p>
                                    )}
                                </div>

                                {/* <Link to='/SignIn'> */}
                                <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'
                                    // onClick={handleUpload}

                                    type='submit'>Sign Up</button>
                                {/* </Link> */}



                            </form>
                            <p className='text-center'>Sign In</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Register