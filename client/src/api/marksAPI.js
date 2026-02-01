import API from "../utils/api";

export const getMyMarks = () => API.get("/marks/my");
export const uploadMarks = (data) =>
  API.post("/marks/upload", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
