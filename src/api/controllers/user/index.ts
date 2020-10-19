import { Router } from 'express';
import { IServices } from '../../../interfaces/IServices';
import { asyncHandler, asyncParamHandler } from '../../../utils/asyncHandler';
import { UserRequest } from './types';
import UserValidationSchema from './validations';

export default function makeUserController({ userService }: IServices) {
  const router = Router();
  router.param(
    'user_id',
    asyncParamHandler(async (req: UserRequest, res, next, id: string) => {
      req.user = await userService?.getUser(parseInt(id, 10));
      if (!req.user) {
        next(new Error('user not found'));
        return;
      }
      next();
    })
  );
  router.route('/:user_id').get((req: UserRequest, res) => {
    if (req.user) res.json(req.user);
  });

  router
    .route('/')
    .get(
      asyncHandler(async (req, res) => {
        res.json(await userService.getAllUsers());
      })
    )
    .post(
      asyncHandler(async (req: UserRequest, res, next) => {
        const { error, value } = UserValidationSchema.createUserSchema.validate(
          req.body
        );
        if (error) {
          next(error.details[0].message);
          return;
        }
        const user = await userService.createUser(value).catch((err) => {
          next(new Error(err));
        });
        res.json(user);
      })
    )
    .put(
      asyncHandler(async () => {
        await userService.test();
      })
    );
  return router;
}
