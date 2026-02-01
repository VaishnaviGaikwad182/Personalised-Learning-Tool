import API from "../utils/api";

export const setFAMode = (data) => API.post("/fa/set", data);
export const getMyFA = () => API.get("/fa/my");
