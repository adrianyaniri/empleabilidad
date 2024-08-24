import * as process from 'node:process';

export const envConfig = () => ({
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  database:{
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.DB_SYNC || true,
    dbLog : process.env.DB_LOG || true,
  },
});