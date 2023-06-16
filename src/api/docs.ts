import http from "utils/http";

export const getDocs = async () => {
  const response = await http.get("/docs/project");
  return response.data;
};
