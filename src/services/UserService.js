import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
import StorageService from './StorageService';

const getAllUsers = () => {
  return http.get(endpoints.user, { headers: { token: StorageService.getAccessToken() } });
};

const getUserById = id => {
  return http.get(`${endpoints.user}/${id}`, { headers: { token: StorageService.getAccessToken() } });
};
const userUpdate = (id, data) => {
  return http.put(`${endpoints.user}/${id}`, data, { headers: { token: StorageService.getAccessToken() } });
};

const remove = id => {
  return http.delete(`${endpoints.user}/${id}`, { headers: { token: StorageService.getAccessToken() } });
};

const UserService = {
  getAllUsers,
  remove,
  getUserById,
  userUpdate
};

export default UserService;