import UserService from '../../../services/userService';
import { asyncParamHandler } from '../../../utils/asyncHandler';
import { UserRequest } from './types';

export default function handleUserIDParam(userService: UserService) {
  return asyncParamHandler(async (req: UserRequest, res, next, id: string) => {
    console.log('Hello World');
    req.user = await userService.getUser(parseInt(id, 10));
    if (!req.user) {
      next(new Error('user not found'));
      return;
    }
    next();
  });
}
