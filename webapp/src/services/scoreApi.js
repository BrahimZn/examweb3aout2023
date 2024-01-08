import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAllScores = () => {
  return axios.get(`${baseUrl}/scores`).then((response) => response.data);
};

const addScore = (score) => {
  return axios
    .post(`${baseUrl}/scores`, score)
    .then((response) => response.data);
}; 

export { getAllScores , addScore };
