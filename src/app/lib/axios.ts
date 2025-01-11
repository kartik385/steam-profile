import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 1000,
});
