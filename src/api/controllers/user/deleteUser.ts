import { User } from '@prisma/client';
import { Response } from 'express';
import UserService from '../../../services/userService';
import { UserRequest } from './types';

export default (userService: UserService) => async (
  req: UserRequest,
  res: Response
) => {
  const user = req.user as User;
  userService.deleteUser(user.id);
  res.status(200).send('OK');
};
