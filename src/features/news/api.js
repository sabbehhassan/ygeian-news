// src/features/news/api.js
import { YGEIAN_NEWS } from "../../HTTP/config";

export const fetchAllNews = async () => {
  const response = await YGEIAN_NEWS.get("/news"); // Adjust endpoint if needed
  return response.data;
};
