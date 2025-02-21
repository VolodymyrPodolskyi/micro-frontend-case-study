export interface ApiClient {
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  delete(url: string): Promise<void>;
}

export abstract class BaseApiClient implements ApiClient {
  constructor(protected baseURL: string) {}
  
  abstract get<T>(url: string): Promise<T>;
  abstract post<T>(url: string, data: any): Promise<T>;
  abstract put<T>(url: string, data: any): Promise<T>;
  abstract delete(url: string): Promise<void>;
} 