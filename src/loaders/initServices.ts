import { PrismaClient } from '@prisma/client';
import { IServices } from '../interfaces/IServices';
import UserService from '../services/useService';

export default (prisma: PrismaClient): IServices => {
  return { userService: new UserService(prisma) };
};
