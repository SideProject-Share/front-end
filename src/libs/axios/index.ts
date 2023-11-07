import instance from 'axios';

import Keys from '@/constatns/storage_keys';

const axios = instance.create({
  baseURL: 'http://localhost:3000',
});

axios.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json';

  if (typeof localStorage !== 'undefined') {
    const item = localStorage.getItem(Keys.ACCESS_TOKEN);

    const accessToken = item ? JSON.parse(item) : '';
    if (accessToken !== '') {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return config;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config: originalRequest, response } = error;
    if (response?.status === 500 && typeof window !== 'undefined') {
      console.log(error);
    }

    if (response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }
    return Promise.reject(error);
  },
);

export default axios;
