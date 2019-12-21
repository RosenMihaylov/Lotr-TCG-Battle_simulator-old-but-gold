import axios from "axios";

export default () => {
  return axios.create({
    baseUrl: `https://localhost:8081`
  });
};
