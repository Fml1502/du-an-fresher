import axios, { AxiosInstance } from "axios";

const url = "http://localhost:3333/";
class Http {
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

const http = new Http().instance;

export default http;
