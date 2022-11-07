import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
import StorageService from './StorageService';

const getAllUsers = () => {
    return http.get(endpoints.user, {headers: {token: StorageService.getAccessToken()}});
    // return http.get("https://jsonplaceholder.typicode.com/todos");
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

const UserService = {
 getAllUsers
};

export default UserService;