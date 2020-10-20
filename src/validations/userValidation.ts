import { User } from '@prisma/client';
import Joi from 'joi';

export default class UserValidationSchema {
  static createUserSchema = Joi.object<User>({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
}
