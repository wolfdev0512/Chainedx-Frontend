import http from "utils/http";

export const getVideo = async () => {
  const response = await http.get("/video/project");
  return response.data;
};
