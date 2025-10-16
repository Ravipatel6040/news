// src/api/categoryApi.js
import axios from "axios";

const BASE = "http://localhost:5000/api/categories";

export const addDefaultCategoriesApi = (token) =>
  axios.post(`${BASE}/add-default`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addCategoryApi = (name, token) =>
  axios.post(`${BASE}/add`, { name }, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getAllCategoriesApi = () =>
  axios.get(`${BASE}/all`);

export const deleteCategoryApi = (id, token) =>
  axios.delete(`${BASE}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
