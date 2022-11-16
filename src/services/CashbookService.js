import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
import StorageService from './StorageService';

const list = () => {
    return http.get(endpoints.cashbook, {headers: {token: StorageService.getAccessToken()}});
};

const getCashbookByUserId = (user_id) => {
  return http.get(`getCashbookByUserId/${user_id}`, {headers: {token: StorageService.getAccessToken()}});
};

const dashboardData = () => {
  return http.get('dashboard', {headers: {token: StorageService.getAccessToken()}});
};

const getCashbookById = id => {
  return http.get(`${endpoints.cashbook}/${id}`, {headers: {token: StorageService.getAccessToken()}});
};

const cashbookUpdate = (id, data) => {
  return http.put(`${endpoints.cashbook}/${id}`, data, { headers: { token: StorageService.getAccessToken() } });
};

const create = data => {
  return http.post(endpoints.cashbook,data, {headers: {token: StorageService.getAccessToken()}});
};

const remove = id => {
  return http.delete(`${endpoints.cashbook}/${id}`, {headers: {token: StorageService.getAccessToken()}});
};

const CashbookService = {
 list,
 remove,
 create,
 dashboardData,
 cashbookUpdate,
 getCashbookById,
 getCashbookByUserId
};

export default CashbookService;