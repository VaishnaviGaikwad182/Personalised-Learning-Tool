import API from "../utils/api";

// Get student marks
export const getMyMarks = () => API.get("/marks/my");

// Get student queries
export const getMyQueries = () => API.get("/queries/my");

// Create new query
export const createQuery = (data) => API.post("/queries", data);

// Get FA mode status
export const getFAMode = () => API.get("/fa/my");

// Submit assignment/file
export const submitWork = (data) => API.post("/submissions", data);
