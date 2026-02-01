import API from "../utils/api";

//////////////////////
// STUDENT
//////////////////////

export const getMyQueries = () =>
  API.get("/queries/my");

export const createQuery = (data) =>
  API.post("/queries/create", data);

//////////////////////
// TEACHER
//////////////////////

export const getAllQueries = () =>
  API.get("/queries/all");

// ✅ THIS WAS MISSING
export const submitQueryResponse = (id, reply) =>
  API.put(`/queries/resolve/${id}`, { reply });
