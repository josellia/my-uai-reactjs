import http from "../http-common";

const getAll = () => {
  return http.get("/contacts");
};

const get = (id) => {
  return http.get(`/contacts/${id}`);
};

export default {
  getAll,
  get,
};
