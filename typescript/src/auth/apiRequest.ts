import axios from "axios";
import { AppDispatch } from "./store";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = axios.post("loginUser", user);
    dispatch(loginSuccess((await res).data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
  }
};
