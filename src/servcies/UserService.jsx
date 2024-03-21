import axios from "./customize-axios";
const posts = (id, title, description, tags) => {
  return axios.post("/posts", { id, title, description, tags });
};

const loginApi = (username) => {
  return axios.post("/auth/login", { username });
};
export { posts, loginApi };
