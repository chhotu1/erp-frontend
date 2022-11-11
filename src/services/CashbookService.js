import http from "../utils/http-common";
import endpoints from "../utils/endpoints";
import StorageService from './StorageService';

const list = () => {
    return http.get(endpoints.cashbook, {headers: {token: StorageService.getAccessToken()}});
};

const get = id => {
  return http.get(`${endpoints.cashbook}/${id}`, {headers: {token: StorageService.getAccessToken()}});

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
 get
};

export default CashbookService;