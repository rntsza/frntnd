import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://bcknd-9adb.onrender.com",
});

export default api;
