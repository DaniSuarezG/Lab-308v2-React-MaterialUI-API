import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod',
  params: {
    api_key: 'DEMO_KEY'
  }
})