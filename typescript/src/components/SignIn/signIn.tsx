// import './App.css'
import { Link } from "react-router-dom";
import loginImg from "D:/work/Newfolder/typescript/src/assets/login.jpg";
import { useState } from "react";
function SignIn() {

    const [nameUser, setnameUser] = useState("")
    const [passwordUser, setPasswordUser] = useState("")

    // const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const newUser = {
    //         nameUser: nameUser,
    //         passWord: passwordUser,
    //     };

    // }



    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="hidden sm:block">
                    <img className="w-full h-full object-cover" src={loginImg} alt="" />
                </div>

                <div className="bg-gray-100 flex flex-col justify-center">
                    <form className="max-w-[400px] w-full mx-auto bg-white p-4"
                    >
                        <h2 className="text-4xl font-bold text-center py-6">Sign In</h2>
                        <div className="flex flex-col py-2">
                            <label>Username</label>
                            <input
                                value={nameUser}
                                onChange={(e) => setnameUser(e.target.value)}
                                className="border p-2"
                                type="text"
                                placeholder="Enter your Username" />
                        </div>
                        <div className="flex flex-col py-2">
                            <label>Password</label>
                            <input
                                value={passwordUser}
                                onChange={(e) => setPasswordUser(e.target.value)}
                                className="border p-2"
                                type="password"
                                placeholder='Enter your Password' />
                        </div>
                        <Link to='/Home'>
                            <button type="submit" className="border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white"
                            >
                                Sign In
                            </button>
                        </Link>
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
        </>
    )
}
export default SignIn