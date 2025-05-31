// api.js (modificado temporalmente)
import axios from "axios";

const api = axios.create({
  baseURL: "https://ae42-190-121-129-147.ngrok-free.app/"
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log("TOKEN:", token); // Validar que el token existe y se loguea
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("HEADERS:", config.headers); // Verifica que Authorization se agregue
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
