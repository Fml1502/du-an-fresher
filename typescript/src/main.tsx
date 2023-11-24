import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import SignIn from './components/SignIn/signIn.tsx';
import SignUp from './components/SignUp/signUp.tsx';
import ProductViews from './components/ProductView/productView.tsx'
import Cart from './components/Cart/cart.tsx'
import NewProduct from './components/ProductView/newProduct.tsx'
// import store from './auth/store.tsx'
// import { Provider } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>  <App />
//     </div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/Home' element={<App />}></Route>
          <Route path='/SignIn' element={<SignIn />}></Route>
          <Route path='/SignUp' element={<SignUp />}></Route>
          <Route path='/ProductView' element={<ProductViews />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          <Route path='/newProduct' element={<NewProduct />}></Route>


        </Routes>

      </QueryClientProvider>

    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
    {/* </Provider>, */}
  </React.StrictMode>
)
