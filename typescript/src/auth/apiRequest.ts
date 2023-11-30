import axios from "axios";
// import { AppDispatch } from "./store";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerStart,
  registerSuccess,
  registerFailed,
} from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("http://localhost:3333/loginUser", user);
    dispatch(loginSuccess(res.data));
    navigate("/Home");
  } catch (err) {
    dispatch(loginFailed());
  }
};

// export const registerUser = async (user, dispatch, navigate) => {
//   dispatch(registerStart());
//   try {
//     await axios.post("http://localhost:3333/postUser", user);
//     dispatch(registerSuccess());
//     navigate("/signIn");
//   } catch (err) {
//     dispatch(registerFailed());
//   }
// };
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = axios.post("http://localhost:3333/postUser", user);
    dispatch(registerSuccess((await res).data));
    navigate("/signIn");
  } catch (err) {
    dispatch(registerFailed());
  }
};
