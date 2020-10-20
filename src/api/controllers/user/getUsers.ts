import UserService from '../../../services/userService';
import { asyncHandler } from '../../../utils/asyncHandler';

export default (userService: UserService) =>
  asyncHandler(async (req, res) => {
    res.json(await userService.getAllUsers());
  });
