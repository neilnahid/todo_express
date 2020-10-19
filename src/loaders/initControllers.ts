import { Express } from 'express';
import makeUserController from '../api/controllers/user';
import { IServices } from '../interfaces/IServices';

export default (app: Express, services: IServices) => {
  app.use('/users', makeUserController(services));
  console.log('controllers ✅');
};
