import axios from 'axios';

const auth = axios.create({
  baseURL: "https://accounts.spotify.com",
  headers: {
    Authorization: `Basic ${btoa(
      `${import.meta.env.VITE_CLIENT}:${import.meta.env.VITE_CLIENT_SECRET}`
    )}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
});


export { auth }