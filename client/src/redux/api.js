import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5600" });

export const SignIn = (formData) => API.post("/user/signin", formData);
export const SignUP = (formData) => API.post("/user/signup", formData);
export const createTourApi = (tourData) =>
  API.post("/api/tour/createtour", tourData);
export const getAllTour = (tourData) => API.get("/api/tour", tourData);
