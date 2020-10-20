import { PrismaClient, User } from '@prisma/client';
import { NextFunction } from 'express';
import { mockRequest, mockResponse } from '../../../utils/interceptors';
import { UserRequest } from './types';
import getUser from './getUser';
import getUsers from './getUsers';
import UserService from '../../../services/userService';

jest.mock('express', () => {});
describe('User Controller', () => {
  const result: User[] = [
    {
      id: 1,
      email: 'nahidnoriel@gmail.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      email: 'testuser@gmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  const userService = new UserService(
    new PrismaClient({ datasources: { db: { url: 'file:dev.db' } } })
  );
  describe('getUser', () => {
    const req = mockRequest<UserRequest>();
    const res = mockResponse();
    it('should get a user', () => {
      req.user = { ...result[0] };
      getUser(req, res);
      expect(res.json).toBeCalledTimes(1);
      expect(res.json).toBeCalledWith(req.user);
    });
  });
  describe('getAllUsers', () => {
    const req = mockRequest<UserRequest>();
    const res = mockResponse();
    jest
      .spyOn(userService, 'getAllUsers')
      .mockImplementation(async () => result);

    it('should get all users', async () => {
      const handler = getUsers(userService);
      await handler(req, res, {} as NextFunction);
      expect(res.json).toBeCalledTimes(1);
      expect(res.json).toBeCalledWith(result);
    });
  });
});
