import { useFormik } from 'formik';
import * as Yup from 'yup';
import trees from 'D:/work/Newfolder/typescript/src/assets/trees.jpg';

function SignUp() {
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
        }
    });
    // console.log(formik.errors.email);




    // useEffect(() => {
    //     if (nameUser.length < 1) {
    //         console.log("Vui lòng nhập tài khoản");

    //     }
    // })

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
                                onSubmit={formik.handleSubmit}>
                                <h2 className='text-4xl font-bold text-center mb-8'>Sign Up</h2>

                                <div className="mb-5">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Tài khoản
                                    </label>
                                    <input type="text"
                                        id="nameUser"
                                        name="nameUser"
                                        value={formik.values.nameUser}
                                        onChange={formik.handleChange}
                                        placeholder="Username"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.errors.nameUser && (
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
                                        onChange={formik.handleChange}
                                        placeholder="Email"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.errors.email && (
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
                                        onChange={formik.handleChange}
                                        placeholder="Password"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.errors.passWord && (
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
                                        placeholder="Confirm PassWord"
                                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    {formik.errors.confirmpassWord && (
                                        <p className="errorMsg text-red-600">{formik.errors.confirmpassWord}</p>
                                    )}
                                </div>

                                {/* <Link to='/SignIn'> */}
                                <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'
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
export default SignUp