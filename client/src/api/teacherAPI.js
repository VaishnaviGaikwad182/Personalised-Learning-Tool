import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

//////////////////////
// ✅ FA MODE
//////////////////////

export const createFAMode = (data) =>
  API.post("/fa/create", data);

export const getFAMode = () =>
  API.get("/fa");

//////////////////////
// ✅ MARKS
//////////////////////

export const uploadMarks = (data) =>
  API.post("/marks/upload", data);

//////////////////////
// ✅ QUERIES
//////////////////////

export const getClassQueries = () =>
  API.get("/queries/all");

export const resolveQuery = (id) =>
  API.put(`/queries/${id}/resolve`);

//////////////////////
// ✅ DASHBOARD STATS
//////////////////////

export const getClassStats = () =>
  API.get("/teacher/stats");
