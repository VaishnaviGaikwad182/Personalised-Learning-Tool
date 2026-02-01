import API from "../utils/api";

export const getSubmissions = (filters) =>
  API.post("/submissions/filter", filters);
