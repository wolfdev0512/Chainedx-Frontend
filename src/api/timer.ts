import http from "utils/http";

export const getTimer = async () => {
  const response = await http.get("/timer/project");
  return response.data;
};
