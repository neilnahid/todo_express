import { PrismaClient } from '@prisma/client';
import { Express } from 'express';
import makeUserController from '../api/controllers/user';
import UserService from '../services/userService';

export default (app: Express, prisma: PrismaClient) => {
  app.use('/users', makeUserController(new UserService(prisma)));
  console.log('controllers ✅');
};
