import UserService from '../../../services/userService';
import { asyncHandler } from '../../../utils/asyncHandler';
import UserValidationSchema from '../../../validations/userValidation';
import { UserRequest } from './types';

export default (userService: UserService) =>
  asyncHandler(async (req: UserRequest, res, next) => {
    const { error, value } = UserValidationSchema.createUserSchema.validate(
      req.body
    );
    if (error) {
      next(error.details[0].message);
      return;
    }
    const user = await userService.createUser(value);
    res.json(user);
  });
