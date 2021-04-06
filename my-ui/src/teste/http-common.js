import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3006/contacts",
  headers: {
    "Content-type": "application/json",
  },
});
