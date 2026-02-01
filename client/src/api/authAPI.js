import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// LOGIN
export const loginUser = (data) =>
  API.post("/auth/login", data);

// REGISTER (Student/Teacher — role decides)
export const registerUser = (data) =>
  API.post("/auth/register", data);
