import axios, { AxiosInstance } from "axios";

const url = "http://localhost:3333";
// class HttpUser {
//   instance: AxiosInstance;
//   constructor() {
//     this.instance = axios.create({
//       baseURL: url,
//       timeout: 5000,
//       headers: {
//         "Content-Type": "application/json",
//         // "token":`Bearer ${accessToken}`
//       },
//     });
//   }
// }
class HttpProduct {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: url,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        // "token":`Bearer ${accessToken}`
      },
    });
  }
}

// const httpUser = new HttpUser().instance;
const httpProduct = new HttpProduct().instance;

// export default httpUser;
export default httpProduct;
