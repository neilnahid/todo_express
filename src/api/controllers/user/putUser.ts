import UserService from '../../../services/userService';
import { asyncHandler } from '../../../utils/asyncHandler';

export default (userService: UserService) =>
  asyncHandler(async () => {
    if (userService) throw new Error('NOT IMPLEMENTED ERROR');
  });
