import { User, UserUpdateInput } from '@prisma/client';
import { Request } from 'express';

export interface UserRequest extends Request {
  user?: UserUpdateInput | User | null;
}
