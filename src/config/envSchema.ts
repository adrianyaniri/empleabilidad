import * as Joi from 'joi';

export const envSchema = Joi.object({
  PORT: Joi.number().required().default(3000),
  ENVIRONMENT: Joi
    .string()
    .valid('development', 'production', 'test')
    .required()
    .default('development'),
});