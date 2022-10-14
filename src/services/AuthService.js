import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
const login=(data)=>{
  return http.post(endpoints.login,data);
}
const register=(data)=>{
  return http.post(endpoints.register);
}
const getAll = () => {
  return http.get("https://jsonplaceholder.typicode.com/todos");
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};

const create = data => {
  return http.post("/tutorials", data);
};

const update = (id, data) => {
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

const AuthService = {
 login,
 register,
 getAll
};

export default AuthService;