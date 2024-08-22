import * as process from 'node:process';

export const envConfig = () => ({
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'DEVELOPMENT',
  database:{},
});