import axios from "axios";

const API_BASE_URL = "http://localhost:8001"; // centralize the base url

export const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // required for Better Auth session cookies
});

export default api;
