// src/utils/api.ts
import axios from 'axios';
import config from '@/config/config';

const api = axios.create({
  baseURL: config.backendUrl, // 设置基础 URL
  timeout: 5000, // 可选，设置请求超时时间
});

export default api;