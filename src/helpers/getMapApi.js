import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const instance = axios.create({
  baseURL: "https://api.maptiler.com",
  params: {
    key: API_KEY,
  },
});

export const getMapApi = async (query, page = 1) => {
  const response = await instance.get("maps/toner-v2/style.json");

  return response;
};
