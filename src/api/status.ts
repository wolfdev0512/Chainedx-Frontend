import http from "utils/http";

export const getStatus = async () => {
  const response = await http.get("/status/project");
  return response.data;
};
