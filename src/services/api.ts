import axios from "axios";

export const api = axios.create({
  // baseURL: "http://localhost:45000",
  baseURL: "http://100.107.127.78:45000",
});