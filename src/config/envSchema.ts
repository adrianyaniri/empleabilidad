import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.number().required().default(3000),
  NODE_ENV: Joi
    .string()
    .valid('development', 'production', 'test')
    .required()
    .default('development'),
  DB_HOST: Joi
    .string()
    .required()
    .default('localhost'),
  DB_PORT: Joi
    .number()
    .required()
    .default(5432),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  DB_LOG: Joi.boolean().default(true),
});