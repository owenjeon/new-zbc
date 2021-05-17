import axios from "axios";

export const fetchItemDetail = (id: string) => {
  return axios.get(`https://apis.zigbang.com/v2/items/${id}`);
};

export const fetchAgent = (id: string) => {
  return axios.get(`https://apis.zigbang.com/v2/agents/${id}`);
};
