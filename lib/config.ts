import { cleanEnv, str, num } from 'envalid';

export const env = cleanEnv(process.env, {
  NEXT_PUBLIC_API_BASE_URL: str({ default: 'https://fakestoreapi.com' }),
  HOST_PORT: num({ default: 3000 }),
  PRODUCTS_REMOTE_PORT: num({ default: 3001 }),
  BASKET_REMOTE_PORT: num({ default: 3002 })
}); 