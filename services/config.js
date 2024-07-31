// config.js
const instance = axios.create({
  baseURL: "https://shop.cyberlearn.vn/api",
  timeout: 30000,
});

export default instance;
