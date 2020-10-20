import { Express } from 'express';
import initControllers from './controllers';
import prismaLoader from './prisma';
import loadExpress from './express';
// controllers
export default (app: Express) => {
  const prisma = prismaLoader();
  loadExpress(app);
  initControllers(app, prisma);
};
