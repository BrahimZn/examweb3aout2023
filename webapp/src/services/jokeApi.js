import axios from "axios";

const baseUrl = "http://localhost:3001";
const getAllJokes = () => {
  return axios.get(`${baseUrl}/jokes`).then((response) => response.data);
};


export  { getAllJokes };
