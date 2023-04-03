import axios from 'axios';

const auth = axios.create({
  baseURL: "https://accounts.spotify.com",
  headers: {
    Authorization: `Basic ${import.meta.env.VITE_CLIENT_AUTH}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


export { auth }