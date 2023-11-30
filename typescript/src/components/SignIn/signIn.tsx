// import './App.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/login.jpg";
import { loginUser } from "../../auth/apiRequest";
const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            nameUser: "",
            passWord: "",
        },
        validationSchema: Yup.object({
            nameUser: Yup.string().required("Vui lòng không bỏ trống").min(4, "Vui lòng nhập nhiều ký tự hơn"),
            passWord: Yup.string().required("Vui lòng không bỏ trống").min(4,
                "Mật khẩu không chính xác"),

        }),
        onSubmit: (values) => {
            console.log(values);
            const newUser = {
                nameUser: username,
                passWord: password,
            };
            loginUser(newUser, dispatch, navigate);


        }
    });




    return (
        <>
            <section className="login-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                    <div className="hidden sm:block">
                        <img className="w-full h-full object-cover" src={loginImg} alt="" />
                    </div>

                    <div className="bg-gray-100 flex flex-col justify-center">
                        <form className="max-w-[400px] w-full mx-auto bg-white p-4"
                            // onSubmit={handleLogin}
                            onSubmit={formik.handleSubmit}

                        >
                            <h2 className="text-4xl font-bold text-center py-6">Sign In</h2>
                            <div className="flex flex-col py-2">
                                <label>Username</label>
                                <input
                                    id="nameUser"
                                    name="nameUser"
                                    value={formik.values.nameUser}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setUsername(e.target.value);
                                    }}
                                    onBlur={formik.handleBlur}
                                    // value={username}
                                    // onChange={(e) => setUsername(e.target.value)}
                                    className="border p-2"
                                    type="text"
                                    placeholder="Enter your Username" />
                                {formik.touched.nameUser && formik.errors.nameUser && (
                                    <p className="errorMsg text-red-600">{formik.errors.nameUser}</p>
                                )}
                            </div>
                            <div className="flex flex-col py-2">
                                <label>Password</label>
                                <input
                                    id="passWord"
                                    name="passWord"
                                    value={formik.values.passWord}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setPassword(e.target.value);
                                    }}
                                    onBlur={formik.handleBlur}
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                    className="border p-2"
                                    type="password"
                                    placeholder='Enter your Password' />
                                {formik.touched.passWord && formik.errors.passWord && (
                                    <p className="errorMsg text-red-600">{formik.errors.passWord}</p>
                                )}
                            </div>
                            {/* <Link to='/Home'> */}
                            <button type="submit" className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
                            >
                                Sign In
                            </button>
                            {/* </Link> */}
                            <div className="flex justify-between">
                                <p className="flex items-center">
                                    <input className="mr-2" type="checkbox" placeholder='.' /> Remember Me
                                </p>
                                <Link to='/SignUp'>
                                    <a >Create an account</a>
                                </Link>

                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Login