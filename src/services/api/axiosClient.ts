'use client'

import axios, { AxiosInstance } from 'axios';
import { BaseApiClient } from './types';
import { config } from '@/config/environment';
import { logger } from '@/services/logger';

export class AxiosApiClient extends BaseApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    super(baseURL);
    this.client = axios.create({
      baseURL,
      timeout: config.api.timeout
    });
  }

  async get<T>(url: string): Promise<T> {
    try {
      const response = await this.client.get<T>(url);
      return response.data;
    } catch (error) {
      logger.error(`API GET Error for ${url}:`, error);
      throw error;
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.client.post<T>(url, data);
      return response.data;
    } catch (error) {
      logger.error(`API POST Error for ${url}:`, error);
      throw error;
    }
  }

  async put<T>(url: string, data: any): Promise<T> {
    try {
      const response = await this.client.put<T>(url, data);
      return response.data;
    } catch (error) {
      logger.error(`API PUT Error for ${url}:`, error);
      throw error;
    }
  }

  async delete(url: string): Promise<void> {
    try {
      await this.client.delete(url);
    } catch (error) {
      logger.error(`API DELETE Error for ${url}:`, error);
      throw error;
    }
  }
} 