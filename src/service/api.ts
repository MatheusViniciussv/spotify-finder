import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spotify.com/v1/search",
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`  
  }
});

export { api };
