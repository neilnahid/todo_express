import { Router } from 'express';
import UserService from '../../../services/userService';
import deleteUser from './deleteUser';
import getUser from './getUser';
import getUsers from './getUsers';
import handleUserIDParam from './handleUserIdParam';
import postUser from './postUser';
import putUser from './putUser';

export default function makeUserController(userService: UserService) {
  const router = Router();
  router.param('user_id', handleUserIDParam(userService));
  router
    .route('/:user_id')
    .get(getUser)
    .put(putUser(userService))
    .delete(deleteUser(userService));

  router.route('/').get(getUsers(userService)).post(postUser(userService));
  return router;
}
