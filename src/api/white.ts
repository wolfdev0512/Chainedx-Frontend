import http from "utils/http";

export const getWhite = async () => {
  const response = await http.get("/white/project");
  return response.data;
};
