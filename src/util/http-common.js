import axios from "axios";

export default axios.create({
  baseURL: `${import.meta.env.API_BASE_URL}/api/v1`,
  headers: {
    "Content-type": "application/json"
  }
});
