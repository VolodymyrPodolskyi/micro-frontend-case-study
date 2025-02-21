'use client'

import React, { createContext, useContext } from 'react';
import { AxiosApiClient } from './axiosClient';
import { ApiClient } from './types';
import { config } from '@/config/environment';

export interface ApiService {
  client: ApiClient;
}

export const ApiContext = createContext<ApiService | null>(null);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const client = new AxiosApiClient(config.api.baseUrl);
  
  return (
    <ApiContext.Provider value={{ client }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within ApiProvider');
  }
  return context;
}; 