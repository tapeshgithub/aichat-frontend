import axios from "axios";

const api = axios.create({
baseURL: "https://chat-production-92e7.up.railway.app",
withCredentials: true,
});

export default api;
