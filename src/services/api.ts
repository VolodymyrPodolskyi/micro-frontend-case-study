import axios from 'axios';
import { config } from '../config/environment';

export const api = axios.create({
  baseURL: config.api.baseUrl,
  timeout: config.api.timeout,
});

export const apiService = {
  get: async (url: string) => {
    try {
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      logger.error('API Error:', error);
      throw error;
    }
  },
  // ... other methods
}; 