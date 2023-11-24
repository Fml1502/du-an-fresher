import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../components/SignIn/signIn";
import SignUp from "../components/SignUp/signUp";
import newProduct from "../components/ProductView/newProduct";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "SignIn", element: <SignIn /> },
            { path: "SignUp", element: <SignUp /> },
            { path: "", element: <SignIn /> },
            // { path: "newProduct", element: <newProduct /> },

        ]

    }
])