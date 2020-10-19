import { PrismaClient } from '@prisma/client';
import { Express } from 'express';
import initServices from './initServices';
import initControllers from './initControllers';

// controllers
export default (app: Express) => {
  const prisma = new PrismaClient();
  const services = initServices(prisma);
  initControllers(app, services);
  return app;
};
