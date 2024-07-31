// fetchAPI.js
import instance from "./config.js";

export const getData = async () => {
  try {
    const response = await instance.get("/Product");
    return response.data.content;
  } catch (error) {
    console.error("There was an error fetching the data!", error);
    throw error;
  }
};
